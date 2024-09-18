import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

// components
import HyperDatepicker from "../../../components/Datepicker";
import Statistics from "./Statistics";
import RentCollectionProgress from "./RentCollectionProgress";
import OccupancyTrends from "./OccupancyTrends";
import TopTenants from "./TopTenants";
import RecentTransactions from "./RecentTransactions";
import MaintenanceOverview from "./MaintenanceOverview";
import LeaseExpiryTimeline from "./LeaseExpiryTimeline";

// data
import { topTenants, recentTransactions } from "./data";

const LandlordDashboard = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const onDateChange = (date: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <div className="page-title-box">
            <div className="page-title-right">
              <form className="d-flex align-items-center mb-3">
                <div className="input-group input-group-sm">
                  <HyperDatepicker
                    value={selectedDate}
                    inputClass="border"
                    onChange={(date) => {
                      onDateChange(date);
                    }}
                  />
                </div>
                <button className="btn btn-blue btn-sm ms-2">
                  <i className="mdi mdi-autorenew"></i>
                </button>
                <button className="btn btn-blue btn-sm ms-1">
                  <i className="mdi mdi-filter-variant"></i>
                </button>
              </form>
            </div>
            <h4 className="page-title">Landlord Dashboard</h4>
          </div>
        </Col>
      </Row>

      <Statistics />

      <Row>
        <Col lg={4}>
          <RentCollectionProgress />
        </Col>
        <Col lg={8}>
          <OccupancyTrends />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <TopTenants tenants={topTenants} />
        </Col>
        <Col xl={6}>
          <RecentTransactions transactions={recentTransactions} />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <MaintenanceOverview />
        </Col>
        <Col xl={6}>
          <LeaseExpiryTimeline />
        </Col>
      </Row>
    </>
  );
};

export default LandlordDashboard;
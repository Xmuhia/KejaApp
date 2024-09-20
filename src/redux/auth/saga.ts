import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

// apicore
import { APICore, setAuthorization } from '../../helpers/api/apiCore';

// helpers
import {
  login as loginApi,
  logout as logoutApi,
  signup as signupApi,
  forgotPassword as forgotPasswordApi,
  activateUser as activateUserApi,
} from '../../helpers/';

// actions
import { authApiResponseSuccess, authApiResponseError } from './actions';

// constants
import { AuthActionTypes } from './constants';

interface UserData {
  payload: {
    name?: string;
    password?: string;
    fullname?: string;
    email?: string;
    token?: string;
  };
  type: string;
}

const api = new APICore();

function* login({ payload: { email = '', password = '' } }: UserData): SagaIterator {
  try {
    
    if (!email || !password) throw new Error('Email and password are required');
    const response = yield call(() => loginApi({ email, password }));
    const user = response?.data;
    if(user['result'])
    {
    api.setLoggedInUser(user);
    setAuthorization(user['token']);
    yield put(authApiResponseSuccess(AuthActionTypes.LOGIN_USER, user));
    }
    else{
   yield put(authApiResponseError(AuthActionTypes.LOGIN_USER, user['message']));
    api.setLoggedInUser(null);
    setAuthorization(null);
    }
  } catch (error: any) {
    yield put(authApiResponseError(AuthActionTypes.LOGIN_USER, error.message || 'Login Failed'));
    api.setLoggedInUser(null);
    setAuthorization(null);
  }
}

function* logout(): SagaIterator {
  try {
    yield call(logoutApi);
    api.setLoggedInUser(null);
    setAuthorization(null);
    yield put(authApiResponseSuccess(AuthActionTypes.LOGOUT_USER, {}));
  } catch (error: any) {
    yield put(authApiResponseError(AuthActionTypes.LOGOUT_USER, error.message || 'Logout Failed'));
  }
}

function* signup({ payload: { name = '', email = '', password = '' } }: UserData): SagaIterator {
  try {
    if (!name || !email || !password) throw new Error('Fullname, email, and password are required');
    const response = yield call(() => signupApi({ name, email, password }));
    const user = response.data;
    console.log(user)
    yield put(authApiResponseSuccess(AuthActionTypes.SIGNUP_USER, user));
  } catch (error: any) {
    console.log(error)
    yield put(authApiResponseError(AuthActionTypes.SIGNUP_USER, error.message || 'Signup Failed'));
  }
}

function* forgotPassword({ payload: { name = '' } }: UserData): SagaIterator {
  try {
    if (!name) throw new Error('Username is required');
    const response = yield call(() => forgotPasswordApi({ name }));
    yield put(authApiResponseSuccess(AuthActionTypes.FORGOT_PASSWORD, response.data));
  } catch (error: any) {
    yield put(authApiResponseError(AuthActionTypes.FORGOT_PASSWORD, error.message || 'Password Reset Failed'));
  }
}

function* activateUser({ payload: { token = '' } }: UserData): SagaIterator {
  try {
    if (!token) throw new Error('Activation token is required');
    const response = yield call(() => activateUserApi({ token }));
    yield put(authApiResponseSuccess(AuthActionTypes.ACTIVATE_USER, response.data));
  } catch (error: any) {
    yield put(authApiResponseError(AuthActionTypes.ACTIVATE_USER, error.message || 'Account Activation Failed'));
  }
}

// Watcher functions
export function* watchLoginUser(): SagaIterator {
  yield takeEvery(AuthActionTypes.LOGIN_USER, login);
}

export function* watchLogout(): SagaIterator {
  yield takeEvery(AuthActionTypes.LOGOUT_USER, logout);
}

export function* watchSignup(): SagaIterator {
  yield takeEvery(AuthActionTypes.SIGNUP_USER, signup);
}

export function* watchForgotPassword(): SagaIterator {
  yield takeEvery(AuthActionTypes.FORGOT_PASSWORD, forgotPassword);
}

export function* watchActivateUser(): SagaIterator {
  yield takeEvery(AuthActionTypes.ACTIVATE_USER, activateUser);
}

// Root saga
function* authSaga(): SagaIterator {
  yield all([
    fork(watchLoginUser),
    fork(watchLogout),
    fork(watchSignup),
    fork(watchForgotPassword),
    fork(watchActivateUser),
  ]);
}

export default authSaga;

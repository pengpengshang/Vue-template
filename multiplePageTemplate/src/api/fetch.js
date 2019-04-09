import axios from 'axios';

import appApi from '../../src/lib/appWebView'

/**
 * 从APP端获取用户信息
 * @param userInfo
 */
function getUserInfoCall(info) {
  var userInfo = JSON.parse(info);
  localStorage.setItem('userId', userInfo.userId);
  localStorage.setItem('token', userInfo.token);
  localStorage.setItem('nickName', userInfo.nickName);
}

appApi.getUserInfo(getUserInfoCall);


// const baseurl = 'http://192.168.1.254:8071';
const debug = process.env.NODE_ENV === 'production' ? false : true;

axios.interceptors.request.use(function (config) {
  var userId = localStorage.getItem('userId');
  var token = localStorage.getItem('token');
  config.headers['data-Type'] = 'json';
  if(!!userId){
    config.headers['id'] = userId;
  }
  // config.headers['id'] = 1279;
  config.headers['token'] = token;
  config.headers['Content-Type'] = 'application/json';
  if (debug) {
    console.log("=======config info====>>>>");
    console.log(config);
  }
  return config;
}, function (error) {
  if (debug) {
    console.log("======error info=======>>>>");
    console.log(error);
  }
  return Promise.reject(error);
});

/**
 * 封装请求错误信息，形如{code, msg}
 *
 * @param code
 * @param msg
 */
function wrapErrorMsg(code, msg) {
  return {
    code,
    msg
  };
}

axios.interceptors.response.use(function (response) {
  if (debug) {
    console.log("======response info=======>>>>");
    console.log(response);
  }
  if (response.status >= 200 && response.status < 300) {
    let data = response.data;
    if (data.retCode == 0) {
      return Promise.resolve(data.data);
    }else {
      return Promise.reject(wrapErrorMsg(data.retCode, data.retMsg));
    }
  } else {
    return Promise.reject(wrapErrorMsg(null, '连接到服务器失败'));
  }
}, function (error) {
  if (debug) {
    console.log("======response error=====>>>>>");
    console.log(error);
  }
  return Promise.reject(wrapErrorMsg(null, '连接到服务器失败'));
})

//设置base url
// axios.defaults.baseURL = baseurl;
//设置超时时间
axios.defaults.timeout = 30000;

function get(url, config) {
  return axios.get(url, config);
}

function post(url, data, config) {
  return axios.post(url, data, config)
}

export default {
  axios,
  get,
  post
}

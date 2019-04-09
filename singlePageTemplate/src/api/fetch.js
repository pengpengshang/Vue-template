import axios from 'axios';

const debug = process.env.NODE_ENV === 'production' ? false : true;

axios.interceptors.request.use(function (config) {

  /*设置请求头信息*/
  config.headers['data-Type'] = 'json';
  config.headers['userId'] = id;
  config.headers['accessToken'] = accessToken;
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
  if (response.status == 200 ) {

    let data = response.data;

    if (data.success) {
      return Promise.resolve(data.data);
    } else {
      return Promise.reject(wrapErrorMsg(data.code, data.message));
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

function del(url,config) {
  return axios.delete(url,config);
}

export default {
  axios,
  get,
  post,
  del,
}

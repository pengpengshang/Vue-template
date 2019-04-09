import Vue from 'vue'
import appApi from "../lib/appWebView";
import 'vant/lib/vant-css/index.css'

import Toast from 'vant/lib/toast'

Vue.use(Toast)


/*********获取UserAgent***********/
var UA = navigator.userAgent;
var android = UA.indexOf('HMAndroidWebView') > -1; //判断是Android设备
var iosUI = UA.indexOf('HMiOSUIWebView') > -1; //判断是ios的webuiwebview
var iosWK = UA.indexOf('HMiOSWKWebView') > -1; //判断是ios的wkwebview


/**
 * 链接分享
 *
 * @param {String} title        标题
 * @param {String} desc          描述
 * @param {String} linkurl        链接
 * @param {String} channels        分享的渠道：save-保存图片，weixin-微信，wxcircle-朋友圈，weibo-微博，qq-QQ，sms-短信，按顺序多个渠道用逗号","分隔，例如：save,weixin,qq，则弹出的分享面板依次为“保存、微信、QQ”
 */
function shareLink(title, desc, linkurl, channels) {
  appApi.shareLink(title, desc, linkurl, channels);
}

/**
 * app 的toast弹窗
 * @param msg
 */
function toast(msg) {
  if (iosUI || iosWK || android) {
    appApi.toast(msg);
  } else {
    Toast(msg);
  }
}


/**
 * 校验手机号
 * @param phone
 * @returns {boolean}
 */
function testPhone(phone) {
  let testPhone = /^1\d{10}$/;
  if(testPhone.test(phone)){
    return true;
  }else {
    return false;
  }
}


export default {
  shareLink,
  toast,
  testPhone
}

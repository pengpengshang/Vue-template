// const imgTopLink='http://iou-test.oss-cn-shanghai.aliyuncs.com/';
const imgTopLink = 'http://iou-steward.oss-cn-hangzhou.aliyuncs.com/';
let hrefUrl = '';
// let hrefUrl = 'https://h5.54jietiao.com/apph5/appPage/';

// let hrefUrl = 'http://re.54jietiao.com/apph5/appPage/';
//
let windowHref = window.location.href;
if (windowHref.indexOf('re.54jietiao') > -1) {
  hrefUrl = 'http://re.54jietiao.com/apph5/appPage/'
} else if (windowHref.indexOf('h5.54jietiao') > -1) {
  hrefUrl = 'https://h5.54jietiao.com/apph5/appPage/'
} else {
  hrefUrl = 'http://192.168.1.217/apph5/appPage/'
}


export default {
  name: "config",
  imgTopLink,//图片拼接地址
  hrefUrl,      //链接地址
}

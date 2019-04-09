/**
 * 获取连接上携带的参数信息
 *
 * @param paras
 * @returns {*}
 */
function getQuery(paras) {
  var url = location.href;
  var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
  var paraObj = {};
  var i, j = 0;
  for (i = 0; j = paraString[i]; i++) {
    paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
  }
  var returnValue = paraObj[paras.toLowerCase()];
  if (typeof returnValue == "undefined") {
    return "";
  } else {
    return decodeURI(returnValue);
  }
}


/**
 * 检测是否是自己的APP打开界面
 * @returns {boolean}
 */
function checkApp() {
  var UA = navigator.userAgent;
  var android = UA.indexOf('HMAndroidWebView') > -1; //判断是Android设备
  var iosUI = UA.indexOf('HMiOSUIWebView') > -1; //判断是ios的webuiwebview
  var iosWK = UA.indexOf('HMiOSWKWebView') > -1; //判断是ios的wkwebview
  if (android || iosUI || iosWK) {
    return true;
  } else {
    return false;
  }
}


/**
 * 检测是否是苹果
 * @returns {boolean}
 */
function checkIos() {
  var UA = navigator.userAgent;
  var iosUI = UA.indexOf('HMiOSUIWebView') > -1; //判断是ios的webuiwebview
  var iosWK = UA.indexOf('HMiOSWKWebView') > -1; //判断是ios的wkwebview
  if (iosUI || iosWK) {
    return true;
  } else {
    return false;
  }
}


/**
 * 检测iOS是否是iPhone X
 * @returns {boolean}
 */
function checkIOSType() {
  var UA = navigator.userAgent;
  if(UA.indexOf('iphoneType:2') > -1){
    return true;
  }else {
    return false;
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



/**
 * 将内容拷贝到剪切板中
 *
 * @param copyText                  需要拷贝的内容
 */
function copyContent(copyText) {
  var Url2 = copyText;
  var oInput = document.createElement('input');
  oInput.value = Url2;
  document.body.appendChild(oInput);
  oInput.select(); // 选择对象
  document.execCommand("Copy"); // 执行浏览器复制命令
  oInput.className = 'oInput';
  oInput.style.display = 'none';
}





/**
 * 将数字转换成每三个数字增加逗号分隔
 *
 * @param {Number}   num    传递的num数值
 */
function formatNum(num) {
  var newStr = "";
  var count = 0;
  var str = num.toString();
  // 当数字是整数
  if(str.indexOf(".") == -1) {
    for(var i = str.length - 1; i >= 0; i--) {
      if(count % 3 == 0 && count != 0) {
        newStr = str.charAt(i) + "," + newStr;
      } else {
        newStr = str.charAt(i) + newStr;
      }
      count++;
    }
    //      str = newStr + ".00"; //自动补小数点后两位
    str = newStr
    return str;
  }
  // 当数字带有小数
  else {
    for(var i = str.indexOf(".") - 1; i >= 0; i--) {
      if(count % 3 == 0 && count != 0) {
        newStr = str.charAt(i) + "," + newStr;
      } else {
        newStr = str.charAt(i) + newStr; //逐个字符相接起来
      }
      count++;
    }
    str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
    return str;
  }
}


export default {
  getQuery,
  checkApp,
  checkIOSType,
  checkIos,
  testPhone,
  copyContent,
  formatNum
}

/**
 * 检测一个数组中是否含有某一个执行的元素
 * @param arr           数组
 * @param val           指定元素
 * @returns {number}    返回值（如果包含指定元素，则返回元素的索引值，否则返回-1）
 */
function testArray(arr ,val) {
  for (var i = 0; i<arr.length; i++){
    if(arr[i] == val){
      return i;
      break ;
    }
  }
  return -1;
}


/**
 * 删除指定数组中的指定元素
 * @param arr             指定的数组
 * @param val             指定的元素
 * @returns {*}           返回值（直接将处理后的数组返回）
 */
function delArr(arr, val) {
  var index = testArray(arr, val);
  if(index > -1){
    arr.splice(index, 1);
  }
  return arr;
}


/**
 * 版本号的比较
 * @param curV
 * @param reqV
 * @returns {boolean}
 * @constructor
 */
function Version(curV, reqV) {

  var arr1 = curV.toString().split('.');
  var arr2 = reqV.toString().split('.');
  //将两个版本号拆成数字
  var minL = Math.min(arr1.length, arr2.length);
  var pos = 0; //当前比较位
  var diff = 0; //当前为位比较是否相等
  var flag = false;

  //逐个比较如果当前位相等则继续比较下一位
  while(pos < minL) {
    diff = parseInt(arr1[pos]) - parseInt(arr2[pos]);
    if(diff == 0) {
      pos++;
      continue;
    }else if(diff > 0){
      flag = true;
      break;
    }else{
      flag = false;
      break;
    }
  }
  return flag;
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
 * 获取链接上携带的参数信息
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
  delArr,
  Version,
  testPhone,
  getQuery,
  copyContent,
  formatNum
}

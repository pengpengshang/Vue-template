import axios from "axios/index";

/*********获取UserAgent***********/
var UA = navigator.userAgent;
var android = UA.indexOf('HMAndroidWebView') > -1; //判断是Android设备
var iosUI = UA.indexOf('HMiOSUIWebView') > -1; //判断是ios的webuiwebview
var iosWK = UA.indexOf('HMiOSWKWebView') > -1; //判断是ios的wkwebview

/****************webview方法定义*****************/

var WKWebView = '';
if (iosWK) {
  WKWebView = window.webkit.messageHandlers
}

/**
 * 判断用户是否登录
 *
 * @param {Function} callback      callback(boolean:flag)  flag: true为已经登录，false为未登录）
 */
function checkLogin(callback) {
  var app = window.HMApplication;
  if (android) {
    var loginFlag = app.checkLogin();
    callback(loginFlag);
  } else {
    if (iosUI) {
      var loginFlag = app.checkLogin();
      callback(loginFlag);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': '',
          'function': callback.name
        })
        WKWebView.checkLogin.postMessage(params);
      }
    }
  }
}


/**
 * 获取app端的请求头信息
 *
 * @param {Function} callback
 * callback的返回值(json字符串)
 *    appChannel      string    当前app的渠道名
 *    appVer      string    当前app的版本号
 *    deviceId    string    设备唯一id
 *    deviceType    string    设备型号
 *    operKind    string    CUSTOMER
 *    osType      string    系统类型，Android或者iOS
 *    osVer      string    手机操作系统版本号
 *    rptGpsX      string    经纬度
 *    rptGpsY      string    经纬度
 *    rptTime      string
 *
 *
 */
function getHeaders(callback) {
  var app = window.HMApplication;
  if (android) {
    var userHeaders = app.getHeaders();
    callback(userHeaders);
  } else {
    if (iosUI) {
      var userHeaders = app.getHeaders();
      callback(userHeaders);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': '',
          'function': callback.name
        })
        WKWebView.getHeaders.postMessage(params);
      }
    }
  }
}


/**
 *
 * 获取用户信息
 *
 * @param {Function} callback         回调方法
 * callback返回值(json字符串)
 *    userId        string  用户id
 *    token        string  登录后的token
 *    showId        string  用户显示id
 *    nickName      string  昵称
 *    avatarUrl      string  头像
 *    mobile        string  手机号
 *    type        int  用户类型：CSub(1), CPlus(2), BSub(3), BPlus(4), ASub(5), APlus(6)
 *    sex          int  性别：0-女,1-男,3-未知
 *    name        string  姓名
 *    mailAddr      string  邮箱地址
 *    idCardNum      string  身份证号
 *    location      string  城市
 *    mainIncome      int  主收入：None(1, "无"), Wages(2, "工资"), Business(3, "生意"), Investment(4, "投资"), Parents(5, "父母资助"), Else(6, "其他")
 *    secondIncome    int  次收入
 *
 */
function getUserInfo(callback) {
  var app = window.HMApplication;
  if (android) {
    var userInfo = app.getUserInfo();
    callback(userInfo);
  } else {
    if (iosUI) {
      var userInfo = app.getUserInfo();
      callback(userInfo);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': '',
          'function': callback.name
        })
        WKWebView.getUserInfo.postMessage(params);
      }
    }
  }
}


/**
 * 关闭当前webview
 */
function closeWebView() {
  var app = window.HMApplication;
  if (android) {
    app.closeWebView();
  } else {
    if (iosUI) {
      app.closeWebView();
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': '',
          'function': ''
        })
        WKWebView.closeWebView.postMessage(params);
      }
    }
  }
}


/**
 *
 * 拨打电话
 *
 * @param {String} phone        电话号码
 */
function callPhone(phone) {
  var app = window.HMApplication;
  if (android) {
    app.callPhone(phone);
  } else {
    if (iosUI) {
      app.callPhone(phone);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          "param": {
            'phone': phone
          },
          'function': ''
        });
        WKWebView.callPhone.postMessage(params);
      }
    }
  }
}


/**
 * 用原生的方法存储键值对
 *
 * @param {String} keyname        键值对的key
 * @param {String} value        键值对的value
 */
function setStorage(keyname, value) {
  var app = window.HMApplication;
  if (android) {
    app.setStorage(keyname, value);
  } else {
    if (iosUI) {
      app.setStorage(keyname, value);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': {
            'key': keyname,
            'value': value
          },
          'function': ''
        });
        WKWebView.setStorage.postMessage(params);
      }
    }
  }
}


/**
 * 从缓存读取数据
 *
 * @param {String} keyname        key的name
 * @param {Function} callback      callback(value)由APP端回传给H5获取到的值
 */
function getStorage(keyname, callback) {
  var app = window.HMApplication;
  if (android) {
    var value = app.getStorage(keyname);
    callback(value);
  } else {
    if (iosUI) {
      var value = app.getStorage(keyname);
      callback(value);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': {
            'key': keyname
          },
          'function': callback.name
        });
        WKWebView.getStorage.postMessage(params);
      }
    }
  }
}


/**
 * 通过外部浏览器打开url链接
 *
 * @param {String} linkUrl 网址url
 */
function openUrlThroughBrowser(linkUrl) {
  var app = window.HMApplication;
  if (android) {
    app.openUrlThroughBrowser(linkUrl);
  } else {
    if (iosUI) {
      app.openUrlThroughBrowser(linkUrl);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': {
            'url': linkUrl
          },
          'function': ''
        });
        WKWebView.openUrlThroughBrowser.postMessage(params);
      }
    }
  }
}


/**
 * 通过一个新的webview打开url
 *
 * @param {String} linkUrl      网页地址
 */
function openUrlThroughWebView(linkUrl) {
  var app = window.HMApplication;

  if (android) {
    app.openUrlThroughWebView(linkUrl);
  } else {
    if (iosUI) {
      app.openUrlThroughWebView(linkUrl);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': {
            'url': linkUrl
          },
          'function': ''
        });
        WKWebView.openUrlThroughWebView.postMessage(params);
      }
    }
  }
}


/**
 * 通过路由来进行原生页面跳转
 *
 * @param {String} linkUrl        分享的链接
 */
function navigateByRouter(linkUrl) {
  var app = window.HMApplication;
  if (android) {
    app.navigateByRouter(linkUrl);
  } else {
    if (iosUI) {
      app.navigateByRouter(linkUrl);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': {
            'routerUrl': linkUrl
          },
          'function': ''
        });
        WKWebView.navigateByRouter.postMessage(params);
      }
    }
  }
}


/**
 * 拍照或者从相册选择图片
 *
 * @param {String} selectType        camera-打开相机，album-打开相册，cameraAndAlbum-弹出选择打开相机和相册的对话框
 * @param {Int8Array} width          图片进行裁切的宽度，如果不需要裁切则传0
 * @param {Int8Array} height        图片进行裁切的高度，如果不需要裁切则传0
 * @param {String} callbackName        图片获取成功之后的回调方法名，APP端需要把图片路径当做参数传递过去：callback(path)
 */
function selectPicture(selectType, width, height, callbackName) {
  var app = window.HMApplication;
  if (android) {
    app.selectPicture(selectType, width, height, callbackName);
  } else {
    if (iosUI) {
      app.selectPicture(selectType, width, height, callbackName);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': {
            'selectType': selectType,
            'width': width,
            'height': height,
            'callbackName': callbackName
          },
          'function': ''
        });
        WKWebView.selectPicture.postMessage(params);
      }
    }
  }
}


/**
 * 设置导航栏右边按钮及功能
 *
 * @param {String} btnText        按钮显示名称
 * @param {String} functionName      点击按钮后，APP调用H5的方法名称
 * @param {String} params        传递的参数
 */
function setNavigationBarRightMenu(btnText, functionName, params) {
  var app = window.HMApplication;
  if (android) {
    app.setNavigationBarRightMenu(btnText, functionName, params);
  } else {
    if (iosUI) {
      app.setNavigationBarRightMenu(btnText, functionName, params);
    } else {
      var params = JSON.stringify({
        'param': {
          'btnText': btnText,
          'functionName': functionName,
          'params': params
        },
        'function': ''
      });
      WKWebView.setNavigationBarRightMenu.postMessage(params);
    }
  }
}


/**
 * 保存图片到本地
 *
 * @param {String} imgUrl      图片地址url
 *
 */
function savePicture(imgUrl) {
  var app = window.HMApplication;
  if (android) {
    app.savePicture(imgUrl);
  } else {
    if (iosUI) {
      app.savePicture(imgUrl);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': {
            'imgUrl': imgUrl
          },
          'function': ''
        });
        WKWebView.savePicture.postMessage(params);
      }
    }
  }
}


/**
 * 图片分享
 *
 * @param {String} imgUrl    要分享的图片地址url
 * @param {String} channels    分享的渠道：save-保存图片，weixin-微信，wxcircle-朋友圈，weibo-微博，qq-QQ，sms-短信，按顺序多个渠道用逗号","分隔，例如：save,weixin,qq，则弹出的分享面板依次为“保存、微信、QQ”
 *
 */
function shareImage(imgUrl, channels) {
  var app = window.HMApplication;
  if (android) {
    app.shareImage(imgUrl, channels);
  } else {
    if (iosUI) {
      app.shareImage(imgUrl, channels);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': {
            'imgUrl': imgUrl,
            'channels': channels
          },
          'function': ''
        });
        WKWebView.shareImage.postMessage(params);
      }
    }
  }
}


/**
 * 链接分享
 *
 * @param {String} title        标题
 * @param {String} desc          描述
 * @param {String} linkurl        链接
 * @param {String} channels        分享的渠道：save-保存图片，weixin-微信，wxcircle-朋友圈，weibo-微博，qq-QQ，sms-短信，按顺序多个渠道用逗号","分隔，例如：save,weixin,qq，则弹出的分享面板依次为“保存、微信、QQ”
 */
function shareLink(title, desc, linkurl, channels) {
  var app = window.HMApplication;
  if (android) {
    app.shareLink(title, desc, linkurl, channels);
  } else {
    if (iosUI) {
      app.shareLink(title, desc, linkurl, channels);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': {
            'title': title,
            'desc': desc,
            'url': linkurl,
            'channels': channels
          },
          'function': ''
        });
        WKWebView.shareLink.postMessage(params);
      }
    }
  }
}


/**
 *
 * 纯文本分享
 *
 * @param {String} sharetext      要分享的文本内容
 * @param {String} channels        分享的渠道：save-保存图片，weixin-微信，wxcircle-朋友圈，weibo-微博，qq-QQ，sms-短信，按顺序多个渠道用逗号","分隔，例如：save,weixin,qq，则弹出的分享面板依次为“保存、微信、QQ”
 */
function shareText(sharetext, channels) {
  var app = window.HMApplication;
  if (android) {
    app.shareText(sharetext, channels);
  } else {
    if (iosUI) {
      app.shareText(sharetext, channels);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': {
            'text': sharetext,
            'channels': channels
          },
          'function': ''
        });
        WKWebView.shareText.postMessage(params);
      }
    }
  }
}


/**
 * 调起APP端用户登录窗口
 */
function toUserLoginPage() {
  var app = window.HMApplication;
  if (android) {
    app.toUserLoginPage();
  } else {
    if (iosUI) {
      app.toUserLoginPage();
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': '',
          'function': ''
        });
        WKWebView.toUserLoginPage.postMessage(params);
      }
    }
  }
}


/**
 * 用户退出登录
 *
 */
function userLogout() {
  var app = window.HMApplication;
  if (android) {
    app.userLogout();
  } else {
    if (iosUI) {
      app.userLogout();
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': '',
          'function': ''
        });
        WKWebView.userLogout.postMessage(params);
      }
    }
  }
}


/**
 * 设置导航栏标题
 *
 * @param {String} title    标题
 */
function setWebViewTitle(title) {
  var app = window.HMApplication;
  if (android) {
    app.setWebViewTitle(title);
  } else {
    if (iosUI) {
      app.setWebViewTitle(title);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': {
            'title': title
          },
          'function': ''
        });
        WKWebView.setWebViewTitle.postMessage(params);
      }
    }
  }
}


/**
 * 查看网页图片进行缩放
 *
 * @param {String} images    网页里的图片url地址，多个用","分开
 * @param {Int8Array} index  要显示数组里的图片索引值，从0开始
 */
function viewLargeImage(images, index) {
  var app = window.HMApplication;
  if (android) {
    app.viewLargeImage(images, index);
  } else {
    if (iosUI) {
      app.viewLargeImage(images, index);
    } else {
      var params = JSON.stringify({
        'param': {
          'images': images,
          'index': index
        },
        'function': ''
      });
      WKWebView.viewLargeImage.postMessage(params);
    }
  }
}


/**
 * toast弹窗
 *
 * @param {String} msg    toast的信息
 */
function toast(msg) {
  var app = window.HMApplication;
  if (android) {
    app.toast(msg);
  } else {
    if (iosUI) {
      app.toast(msg);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': {
            'images': msg
          },
          'function': ''
        });
        WKWebView.toast.postMessage(params);
      }
    }
  }
}


/**
 * 显示alert弹窗
 *
 * @param {String} parm
 */
function showAlertDialog(parm) {
  var app = window.HMApplication;
  if (android) {
    app.showAlertDialog(parm);
  } else {
    if (iosUI) {
      app.showAlertDialog(parm);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': {
            'params': parm
          },
          'function': ''
        });
        WKWebView.showAlertDialog.postMessage(params);
      }
    }
  }
}


/**
 *
 * 调用app端城市选择器并返回城市值
 *
 * @param {String} functionName
 */
function selectCity(functionName) {
  var app = window.HMApplication;
  if (android) {
    app.selectCity(functionName);
  } else {
    if (iosUI) {
      app.selectCity(functionName);
    } else {
      if (iosWK) {
        var params = JSON.stringify({
          'param': {
            'params': ''
          },
          'function': functionName
        });
        WKWebView.selectCity.postMessage(params);
      }
    }
  }
}


/**
 * iOS跳转到首页
 */
/**
 * iOS跳转到首页
 */
function toAppHomePage(linkUrl) {
  var app = window.HMApplication;
  if(android) {
    app.navigateByRouter(linkUrl);
  } else {
    if(iosUI) {
      app.toHomePage();
    } else {
      if(iosWK) {
        var params = JSON.stringify({
          'param': {
            'params': ''
          },
          'function': functionName
        });
        WKWebView.toHomePage.postMessage(params);
      }
    }
  }
}


/**
 * 获取title高度
 * @returns {*}
 */
function getTileHeight() {
  var app = window.HMApplication;
  if (android) {
    return app.getStatusBarHeight();
  }else if(iosUI){
    return app.getStatusBarHeight();
  }else if (iosWK){
    return WKWebView.getStatusBarHeight.postMessage();
  } else {
    return 0;
  }
}


/**
 * 分享base64图片
 * @param {String} img
 * @param {String} channels	分享的渠道：save-保存图片，weixin-微信，wxcircle-朋友圈，weibo-微博，qq-QQ，sms-短信，按顺序多个渠道用逗号","分隔，例如：save,weixin,qq，则弹出的分享面板依次为“保存、微信、QQ”
 */
function shareImageByBase64(img, channels){
  var app = window.HMApplication;
  if(android) {
    app.shareImageByBase64(img, channels);
  } else {
    if(iosUI) {
      app.shareImageByBase64(img, channels);
    } else {
      if(iosWK) {
        var params = JSON.stringify({
          'param': {
            'imgBase64Str': img,
            'channels': channels
          },
          'function': ''
        });
        WKWebView.shareImageByBase64.postMessage(params);
      }
    }
  }
}


/**
 * 跳转到APP端首页方法  0=首页 1=资讯 2=推荐 3=个人中心
 * @param {Object} index
 */
function toHomePage(index){
  var app = window.HMApplication;
  app.toHomePage(index);
}


/**
 * APP端保存base64图片
 * @param baseUrl
 */
function saveImageBase64(baseUrl) {
  var app = window.HMApplication;
  if (android){
    app.saveImageWithBase64(baseUrl);
  } else if(iosUI){
    app.saveImageWithBase64(baseUrl);
  }else if (iosWK) {
    var params = JSON.stringify({
      'param': {
        'imgBase64Str': baseUrl,
      },
      'function': ''
    });
    WKWebView.saveImageWithBase64.postMessage(params);
  }
}



export default {
  shareLink,
  getUserInfo,
  toast,
  navigateByRouter,
  closeWebView,
  savePicture,
  shareImage,
  toAppHomePage,
  getTileHeight,
  checkLogin,
  toUserLoginPage,
  shareImageByBase64,
  toHomePage,
  setNavigationBarRightMenu,
  openUrlThroughWebView,
  selectCity,
  getHeaders,
  saveImageBase64
}

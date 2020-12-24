;
(function (ROOT, Ment, callback) {
    "use strict";
    /**
     * author: Gang Yang
     * Tel: 18811016656
     * E-Mail: aspencilu@gmail.com
     * information: 本组件忽略 IE8 <= 浏览器；如有什么问题请与开发者联系。
     */
    (Function.prototype.Aspen || (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) < 9)) && (typeof callback === 'function' && callback())
    // new Function
    var Aspen = new Function();

    function hasObject(opts) {
        return opts && JSON.stringify(opts) != '{}' && /Object/.test(Object.prototype.toString.call(opts));
    }
    /* is forEach */
    !Array.prototype.forEach && (Array.prototype.forEach = function (fn, arg) {
        if (this.length > 0 && typeof fn === "function") {
            var keys = 0,
                opt = Object(this);
            while (keys < opt.length) {
                var kVal;
                if (keys in opt) {
                    kVal = opt[keys];
                    fn.call(arg, kVal, keys, opt);
                }
                keys++;
            }
        }
    });
    /* DOM selector Is jQuery method */
    !ROOT.$ && (ROOT.$ = function (name) {
        if (!!name) {
            name = name.replace(/(^\s*)|(\s*$)/g, "");
            if (/^\#/.test(name) && !/\s/g.test(name)) {
                return Ment.getElementById(name.replace(/\#/g, ''));
            } else {
                if (!!Ment.querySelectorAll(name)) {
                    if (Ment.querySelectorAll(name).length > 1) {
                        return Ment.querySelectorAll(name);
                    } else {
                        return Ment.querySelector(name);
                    }
                }
            }
        }
    });
    /* Node method css */
    Node.prototype.css = function (opt) {
        if (hasObject(opt)) {
            for (var key in opt) {
                opt[key] && (this.style[key] = opt[key]);
            }
        }
        return this;
    };
    /* Node method getTop */
    Node.prototype.getTop = function () {
        var top = this.offsetTop,
            parent = this.offsetParent;
        while (parent) {
            top += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return top;
    };
    /* Node method getLeft */
    Node.prototype.getLeft = function () {
        var left = this.offsetLeft,
            parent = this.offsetParent;
        while (parent) {
            left += parent.offsetLeft;
            parent = parent.offsetParent;
        }
        return left;
    };
    /* Node method on */
    Node.prototype.on = function (type, fn, tns) {
        type && typeof fn === 'function' && ROOT.addEventListener ? this.addEventListener(type, fn, (tns == 1 ? true : false)) : this.attachEvent('on' + type, fn);
    };
    Node.prototype.parents = function (cname) {
        if (cname.replace(/\s/g, '').length > 0) {
            (/^\.|\#/.test(cname)) && (cname = cname.replace(/^\.|\#/g, ''));
            if (this.nodeName.toLowerCase() === cname || this.id.match(new RegExp(cname, "i")) || this.className.match(new RegExp(cname, "i"))) return this;
            var sParent = this.parentNode;
            while (sParent) {
                if (sParent.nodeName.toLowerCase().indexOf('body') != -1) return false;
                if (sParent.nodeName.toLowerCase() === cname || sParent.id.match(new RegExp(cname, "i")) || sParent.className.match(new RegExp(cname, "i"))) {
                    return sParent;
                }
                sParent = sParent.parentNode;
            }
        }
    };
    Node.prototype.addHtml = function (html, insetPage) {
        if (!!html) {
            if (!!Ment.createDocumentFragment) {
                var fragment = Ment.createDocumentFragment();
                fragment.textContent = html;
                this.insertAdjacentHTML(insetPage ? insetPage : 'beforeEnd', fragment.textContent);
            } else {
                this.innerHTML += html;
            }
        }
    };
    /* Aspen prototype */
    Aspen.fn = Aspen.prototype = {
        constructor: Aspen,
        getBody: $("body"),
        getHead: $("head"),
        newPop: function (opts) {
            if (hasObject(opts) && !$('#h5PopMainEle')) {
                var isEvent = true,
                    popHtml = '<div class="h5pop-main clearfix" id="h5PopMainEle">';
                // load content
                opts['isHideClose'] && (popHtml += '<a href="javascript:;" class="h5pop-close">×</a>');
                opts['title'] && (popHtml += '<h3 class="h5tips-title">' + opts["title"] + '</h3>');
                opts['tipTxt'] && (popHtml += '<div class="h5pop-content clearfix">' + opts["tipTxt"] + '</div>');
                popHtml += '<div class="h5pop-footer">';
                // load button
                opts['cancelBtn'] && (popHtml += '<a type="button" class="h5pop-cancel" href="javascript:;">' + opts["cancelBtn"] + '</a>');
                opts['confirmBtn'] && (popHtml += '<a type="button" class="h5pop-confirm" href="javascript:;">' + opts["confirmBtn"] + '</a>');
                popHtml += '</div>';
                aspenLib.getBody.addHtml('<div class="h5pop-mask" id="h5PopMasks"></div>' + popHtml + '</div>');
                $('#h5PopMainEle').on('click', function (event) {
                    if (!isEvent) return;
                    var targetType = event.target.className || event.target.id;

                    function popEventState() {
                        event.preventDefault();
                        aspenLib.removePop();
                        isEvent = false;
                    };
                    targetType === "h5pop-close" && popEventState();
                    targetType === "h5pop-cancel" && (typeof opts["cancelBtnRun"] === "function" && opts["cancelBtnRun"](), popEventState());
                    targetType === "h5pop-confirm" && (typeof opts["confirmBtnRun"] === "function" && opts["confirmBtnRun"](), popEventState());
                });
            }
        },
        removePop: function () {
            var getMasks = $("#h5PopMasks"),
                getPopMains = $("#h5PopMainEle");
            if (getMasks.parentNode && getPopMains.parentNode) {
                getMasks.parentNode.removeChild(getMasks);
                getPopMains.parentNode.removeChild(getPopMains);
            }
        },
        iOSInputBlur: function () {
            /phone-ios/.test(aspenLib.getUA()) && setTimeout(function () {
                var scrollHeight = Ment.MentElement.scrollTop || Ment.body.scrollTop || 0;
                ROOT.scrollTo(0, Math.max(scrollHeight - 1, 0));
            }, 200);
        },
        getUrlValue: function (name, insertUrl) {
            var getUrl = insertUrl ? insertUrl : location.href,
                urlVal = '';
            if (getUrl.indexOf(name) != -1) {
                /\&/.test(getUrl) != -1 ? getUrl.split('?')[1].split('&').forEach(function (ele, eq) {
                    ele.indexOf(name) != -1 && (urlVal = ele.split(name + '=')[1]);
                }) : urlVal = getUrl.split(name + '=')[1];
            } else {
                urlVal = null;
            }
            return urlVal;
        },
        getUA: function () {
            /*
            让客户端同学在 webview userAgent 后面增加 iOS/APP || Android/APP 方便前端区分终端；桔子数科App内均有增加。
            */
            var UA = navigator.userAgent,
                UAType = null;
            (/(iOS\/APP)$/i.test(UA) && (UAType = "phone-ios") || /(Android\/APP)$/i.test(UA) && (UAType = "phone-android") || /Android|HTC|Adr/i.test(UA) && (UAType = "web-android") || /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(UA) && (UAType = "web-ios") || (UAType = 'pc'));
            return UAType;
        },
        callAppMethod(opts) {
            if (/phone/i.test(this.getUA())) {
                var gamn = opts.name.replace(/\s/, '');
                if (opts.appFn && typeof opts.appFn === 'function') {
                    var methodPages = {
                        'getUserInfo': 'callbackToken',
                        'getImage': 'getImageCallback',
                        'isH5ControlBackKey': 'appBackActionCallback'
                    };
                    for (var key in methodPages) {
                        gamn === key && (ROOT[methodPages[key]] = function (data) {
                            data ? opts.appFn(data) : opts.appFn(null);
                            delete ROOT[methodPages[key]];
                        });
                    }
                }
                var setOpts = null;
                // 兼容跳客户端跳转详情页方法，接收字符串并非json
                gamn === 'goProductDetail' ? (setOpts = opts.setData) : (setOpts = (opts.setData ? JSON.stringify(opts.setData) : null));
                try {
                    ROOT.webkit.messageHandlers[gamn]['postMessage'](setOpts);
                } catch (error) {
                    !setOpts ? androidTools[gamn]() : androidTools[gamn](setOpts);
                }
            } else {
                typeof opts.webFn === 'function' && opts.webFn();
            }
        },
        ajax: function (opts) {
            var defaults = {
                type: "GET",
                url: "",
                data: "",
                dataType: "json",
                async: true,
                cache: true,
                // contentType: "application/json;charset=UTF-8",
                contentType: "application/x-www-form-urlencoded;charset=utf-8",
                param: "",
                success: function () {},
                error: function () {}
            };
            for (var key in opts) {
                defaults[key] = opts[key];
            }
            if (hasObject(defaults["data"])) {
                var str = "";
                for (var key in defaults["data"]) {
                    str += key + "=" + defaults["data"][key] + "&";
                }
                defaults["data"] = str.substring(0, str.length - 1);
            }
            defaults["type"] = defaults["type"].toUpperCase();
            defaults["cache"] = defaults["cache"] ? "" : "&" + new Date().getTime();
            if (defaults["type"] === "GET" && (JSON.stringify(defaults["data"]) != '{}' || defaults["cache"])) {
                defaults["url"] += "?" + defaults["data"] + defaults["cache"];
            }
            var oXhr = ROOT.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
            oXhr.param = defaults["param"];
            oXhr.open(defaults["type"], defaults["url"], defaults["async"]);
            // set headers
            if (hasObject(defaults["headers"])) {
                // 读取headers值
                for (var k in defaults["headers"]) {
                    oXhr.setRequestHeader(k, defaults["headers"][k]);
                }
            } else {
                defaults["headers"] = {};
                defaults["headers"]['channel'] = '';
                defaults["headers"]['token'] = '';
                // get headers value
                for (var k in defaults["headers"]) {
                    oXhr.setRequestHeader(k, defaults["headers"][k]);
                }
            }
            if (defaults["type"].toLowerCase() === "get") {
                oXhr["send"](null);
            } else {
                oXhr.setRequestHeader("Content-type", defaults["contentType"]);
                oXhr.send(defaults["data"]);
            }
            if (typeof defaults["setToken"] != "undefined" && typeof defaults["setToken"] === "function") {
                defaults["setToken"](oXhr);
            }
            oXhr.onreadystatechange = function () {
                if (oXhr.readyState === 4) {
                    if (oXhr.status === 200) {
                        if (typeof defaults["success"] === "function") {
                            if (defaults["dataType"].toLowerCase() === "json") {
                                try {
                                    defaults["success"].call(oXhr, eval("(" + oXhr.responseText + ")"));
                                } catch (e) {}
                            } else {
                                try {
                                    defaults["success"].call(oXhr, oXhr.responseText);
                                } catch (e) {}
                            }
                        }
                    } else {
                        typeof defaults["error"] === "function" && defaults["error"]();
                    }
                }
            };
        },
        isweixin: "micromessenger" == ROOT.navigator.userAgent.toLowerCase().match(/MicroMessenger/i),
        tips: function (txt, speed) {
            var _this = this;
            if (txt && txt != "") {
                var tout = null;
                if (!$("#systemTips")) {
                    _this.getBody.addHtml('<div id="systemTips">' + (txt.toString() || "") + '</div>');
                    var systemTips = $('#systemTips');
                    if (systemTips) {
                        tout = setTimeout(function () {
                            if (systemTips.parentNode) {
                                systemTips.parentNode.removeChild(systemTips);
                                clearTimeout(tout);
                            }
                        }, (speed > 0 ? speed : 2000));
                    }
                }
            }
        },
        rutorUnit: function (isLoad, ele, pageUrl, fn) {
            var _this = this;
            var nxhr = new XMLHttpRequest();
            if (isLoad && this.getUrlValue('aspenRutor')) {
                try {
                    pageUrl = (!/^[.|/]/.test(pageUrl) ? './' : '') + pageUrl.split('/').splice(0, pageUrl.split('/').length - 1).join('/') + '/' + this.getUrlValue('aspenRutor');
                } catch (error) {
                    pageUrl = './';
                }
            }
            if (pageUrl.length > 3) {
                nxhr.open("get", pageUrl + '/index.html');
                nxhr.send(null);
                nxhr.onload = function () {
                    if (nxhr.status == 200 && ele) {
                        ele.innerHTML = '';
                        ele.addHtml(nxhr.responseText);
                        $createJS = Ment.createElement('script');
                        $createJS.type = "text/javascript";
                        $createJS.src = pageUrl + '/index.js';
                        ele.appendChild($createJS);
                        // 内存回收
                        nxhr = null;
                        $createJS = null;
                        typeof fn === 'function' && fn();
                    } else {
                        _this.tips('请确认资源是否存在！');
                        return false;
                    }
                }
            } else {
                _this.tips('请检查URL正确性！');
                return false;
            }
        },
        loading: function (txt) {
            var _this = this,
                styleHtml = 'width: 100%; height:' + ROOT.innerHeight + 'px; background: rgba(0,0,0,.4); position: fixed; top: 0px; left: 0px; z-index: 90909090',
                initHtml = '<div id="aspenLoadingWrap" style="' + styleHtml + '"><div id="aspenLoading">' +
                '<div class="mod1"></div>' +
                '<div class="mod2"></div>' +
                '<div class="mod3"></div>' +
                '<div class="mod4"></div>' +
                '<div class="mod5"></div>' +
                '<p>' + (txt || '数据加载中，请稍候') + '</p>' +
                '</div></div>';
            _this.getBody.addHtml(initHtml);
        },
        removeLoading: function (fn) {
            var getSysWrap = $("#aspenLoadingWrap");
            getSysWrap && getSysWrap.parentNode.removeChild(getSysWrap);
            typeof fn === 'function' && fn();
        }
    }
    ROOT.aspenLib = Aspen.fn, Aspen = null;
})(window, document, function () {
    throw new Error("(Window is Aspen method) || (Please download IE9 and above)");
});
/**
 * NewTab - V1.0.0
 * Javascript
 * @author kengwang
 * @version 1.0.0
 *
 *  _   _               _____     _
 *  | \ | | _____      _|_   _|_ _| |__
 * |  \| |/ _ \ \ /\ / / | |/ _` | '_ \
 * | |\  |  __/\ V  V /  | | (_| | |_) |
 * |_| \_|\___| \_/\_/   |_|\__,_|_.__/

 */

/*
页面加载完成
 */

if (document.addEventListener) {		//标准浏览器
    document.addEventListener('DOMContentLoaded', function () {
        //注销时间，避免反复触发
        document.removeEventListener('DOMContentLoaded', arguments.callee, false);
        OnReady();		//执行函数
    }, false);
}

var bg = chrome.extension.getBackgroundPage();
var eg = bg.engineNameToConfig();

function OnReady() {
    console.log(' *  _   _               _____     _\n' +
        ' * | \\ | | _____      _|_   _|_ _| |__\n' +
        ' * |  \\| |/ _ \\ \\ /\\ / / | |/ _` | \'_ \\\n' +
        ' * | |\\  |  __/\\ V  V /  | | (_| | |_) |\n' +
        ' * |_| \\_|\\___| \\_/\\_/   |_|\\__,_|_.__/' +
        '\n' +
        '\nVersion 1.0.0b' +
        '\nAuthor github@Kengwang');
    RefreshEngine();
    if (eg === undefined) {
        ChangeDefaultEngine('baidu');
    }
    RefreshEngineBigImg();
    document.getElementById('switch_engine_button').addEventListener('click', function () {
        ChangeDefaultEngine();
    });

    document.getElementById('keyword').addEventListener('focus', function () {
        console.log('Selected');
        document.getElementsByClassName('search-box-background')[0].classList.add('search-box-background-round');
        document.getElementsByClassName('search-box-background')[0].classList.remove('search-box-background-no-round');
        document.getElementById('hover').classList.add('hover');
    });

    document.getElementById('keyword').addEventListener('blur', function () {
        console.log('Selected');
        document.getElementsByClassName('search-box-background')[0].classList.remove('search-box-background-round');
        document.getElementsByClassName('search-box-background')[0].classList.add('search-box-background-no-round');
        document.getElementById('hover').classList.remove('hover');
    });
}

function RefreshEngineBigImg() {
    var img = document.getElementById('egimg');
    img.src = eg.bigImg;
}

function ChangeDefaultEngine(enginenane = null) {
    if (enginenane == null) {
        enginenane = document.getElementById('keyword').value;
    }
    bg.setDefaultSearchEngine(enginenane);
    console.log('Changed to ' + enginenane + ' Now is ' + bg.config.defaultEngine);
}

function RefreshEngine() {
    var eg = bg.engineNameToConfig();
}



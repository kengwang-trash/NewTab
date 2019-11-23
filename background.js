var engine = {
    "baidu": {
        name: "百度",
        homePage: "www.baidu.com",
        searchLinkFinal: function (keyword) {
            return "https://www.baidu.com/#ie=utf-8&wd=" + keyword
        },
        bigImg: "https://www.baidu.com/img/bd_logo1.png?qua=high&where=super"
    },
    "google": {
        name: "Google",
        homePage: "https://www.google.com",
        searchLinkFinal: function (keyword) {
            return "https://www.google.com/search?q=" + keyword
        },
        bigImg: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    },
    "bing": {
        name: "Bing",
        homePage: "https://www.bing.com",
        searchLinkFinal: function (keyword) {
            return "https://www.bing.com/search?q=" + keyword
        },
        bigImg: "https://ae01.alicdn.com/kf/H7999c5dbc3894b57a34bd557e9c17defw.png"
    },
    "duckduckgo": {
        name: "DuckDuckGo",
        homePage: "https://www.duckduckgo.com",
        searchLinkFinal: function (keyword) {
            return "https://duckduckgo.com/?q=" + keyword;
        },
        bigImg: "https://duckduckgo.com/assets/logo_homepage.normal.v108.svg",
        darkBigImg: "https://duckduckgo.com/assets/logo_homepage.alt.v108.svg"
    },
    "yahoo": {
        name: "Yahoo!",
        homePage: "https://search.yahoo.com",
        searchLinkFinal: function (keyword) {
            return "https://search.yahoo.com/search?p=" + keyword;
        },
        bigImg: "https://s.yimg.com/pv/static/img/logo_f_p_white-1567793732828.min.png"
    }
};



chrome.contextMenus.create({
    title: chrome.i18n.getMessage("save_page_text"),
    onclick: function () {
        savelink("TODO");
    }
});

chrome.contextMenus.create({
    title: chrome.i18n.getMessage("save_link_text"), // 显示的文字，除非为“separator”类型否则此参数必需，如果类型为“selection”，可以使用%s显示选定的文本
    contexts: ['link'], // 上下文环境，可选：["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio"]，默认page
    onclick: function (links) {
        savelink("TODO");
    }

});

function savelink(link, title = null) {
    alert("TODO")
}

function Search(keyword) {
    alert("Try to find " + keyword + " ?");

}

function engineNameToConfig(ename=getDefaultSearchEngine())
{
    return
}

function getDefaultSearchEngine() {
    chrome.storage.sync.get({defaultEngine: 'baidu'}, function (items) {
        return item.defaultEngine;
    });
}

function getSetting(param) {
    chrome.storage.sync.get({$param: 'baidu'}, function (items) {
        return item;
    });
}
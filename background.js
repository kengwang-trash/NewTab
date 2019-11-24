var engine = {
    "baidu": {
        name: "百度",
        homePage: "www.baidu.com",
        searchLinkFinal: function (keyword) {
            return "https://www.baidu.com/#ie=utf-8&wd=" + keyword
        },
        bigImg: "/img/engineimg/baidu.png"
    },
    "google": {
        name: "Google",
        homePage: "https://www.google.com",
        searchLinkFinal: function (keyword) {
            return "https://www.google.com/search?q=" + keyword
        },
        bigImg: "/img/engineimg/google.png"
    },
    "bing": {
        name: "Bing",
        homePage: "https://www.bing.com",
        searchLinkFinal: function (keyword) {
            return "https://www.bing.com/search?q=" + keyword
        },
        bigImg: "/img/engineimg/bing.png"
    },
    "duckduckgo": {
        name: "DuckDuckGo",
        homePage: "https://www.duckduckgo.com",
        searchLinkFinal: function (keyword) {
            return "https://duckduckgo.com/?q=" + keyword;
        },
        bigImg: "/img/engineimg/duckduckgo.svg",
        darkBigImg: "/img/engineimg/duckduckgo.night.svg"
    },
    "yahoo": {
        name: "Yahoo!",
        homePage: "https://search.yahoo.com",
        searchLinkFinal: function (keyword) {
            return "https://search.yahoo.com/search?p=" + keyword;
        },
        bigImg: "/img/engineimg/yahoo.png"
    }
};

var config;

document.addEventListener("DOMContentLoaded", function () {
    refreshGoogleConfig();
    refreshGoogleConfig();
});

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
    let eg = engineNameToConfig();
    alert("Try to find " + keyword + " by " + eg.name);

}

function refreshGoogleConfig() {
    chrome.storage.sync.get({'defaultEngine': 'baidu'}, function (items) {
        config = items;
    });
}

function engineNameToConfig(ename = null) {
    if (ename == null && config.defaultEngine) {
        refreshGoogleConfig();
        return engine[config.defaultEngine];
    }else if(ename == null ){
        return engine['baidu'];
    }
    return engine[ename];
}


function setDefaultSearchEngine(ename) {
    chrome.storage.sync.set({'defaultEngine': ename}, function () {
        console.log('Reselected to '.ename);
    });
    refreshGoogleConfig();
}

function getSetting(param) {
    chrome.storage.sync.get({$param: 'baidu'}, function (items) {
        return item;
    });
}
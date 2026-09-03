export const RULES = [

// URL parameter rules for search engines to enforce SafeSearch
// for example, for Google, the parameter "safe=active" is used to enforce SafeSearch
    {
        type: "url",
        domains: ["www.google.com"],
        params: {safe: "active"}
    },

    {
        type: "url",
        domains: ["bing.com", "www.bing.com", "edgeservices.bing.com"],
        params: {adlt: "strict"}
    },

    {
        type: "url",
        domains: ["search.yahoo.com"],
        params: {vm: "r"}
    },

    
    {
        type: "url",
        domains: ["qwant.com", "www.qwant.com"],
        params: {s: "2"}
    },

    {
        type: "url",
        domains: [
            "yandex.com",
            "www.yandex.com",

            "yandex.ru",
            "www.yandex.ru",

            "yandex.az",
            "www.yandex.az",

            "yandex.by",
            "www.yandex.by",

            "yandex.co.il",
            "www.yandex.co.il",

            "yandex.com.am",
            "www.yandex.com.am",

            "yandex.com.ge",
            "www.yandex.com.ge",

            "yandex.com.ru",
            "www.yandex.com.ru",

            "yandex.com.tr",
            "www.yandex.com.tr",

            "yandex.de",
            "www.yandex.de",

            "yandex.ee",
            "www.yandex.ee",

            "yandex.eu",
            "www.yandex.eu",

            "yandex.fi",
            "www.yandex.fi",

            "yandex.fr",
            "www.yandex.fr",

            "yandex.kz",
            "www.yandex.kz",

            "yandex.lt",
            "www.yandex.lt",

            "yandex.lv",
            "www.yandex.lv",

            "yandex.md",
            "www.yandex.md",

            "yandex.net",
            "www.yandex.net",

            "yandex.org",
            "www.yandex.org",

            "yandex.pl",
            "www.yandex.pl",

            "yandex.tj",
            "www.yandex.tj",

            "yandex.tm",
            "www.yandex.tm",

            "yandex.uz",
            "www.yandex.uz",

            "ya.ru",
            "www.ya.ru",

            "xn--d1acpjx3f.xn--p1ai",
            "www.xn--d1acpjx3f.xn--p1ai",

            "desktop.yandex.com",
            "online.yandex.com",
            "server.yandex.com",
            "wap.yandex.com"
        ],
        params: {fyandex: "1"}
    },

// Domain redirect rules for search engines to enforce SafeSearch
// for example, for Google, the domain "startpage.com" is redirected to "safe.startpage.com" to enforce SafeSearch

    {
        type: "redirect",
        domains: ["duckduckgo.com", "www.duckduckgo.com", "start.duckduckgo.com"],
        target: "https://safe.duckduckgo.com"
    },

    {
        type: "redirect",
        domains: ["startpage.com", "www.startpage.com"],
        target: "https://safe.startpage.com"
    },

    {
        type: "redirect",
        domains: ["search.brave.com"],
        target: "https://safe.search.brave.com"
    },

    {
        type: "redirect",
        domains: ["pixabay.com", "www.pixabay.com"],
        target: "https://safesearch.pixabay.com"
    }
];
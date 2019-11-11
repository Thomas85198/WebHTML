/*
    type 0: 無子選單
    type 1: Menu1（子選單＋文章列表）
    type 2: Menu2（文章列表）
    type 3: Menu3（子選單）
*/
var menuList = [
    {
        type: 0,
        slug: "constitutionalforum",
        name: "啟動修憲",
        target: "_blank",
        link: "https://taiwan-constitution.nownews.com/"
    },
    {
        type: 1,
        // id: 122403,
        slug: "column",
        name: "焦點",
        link: "https://www.nownews.com/cat/column/",
        subList: [],
        currentSub: {}
    },
    {
        type: 3,
        // id: 6,
        slug: "entertainment",
        name: "娛樂",
        link: "https://www.nownews.com/cat/entertainment/",
        subList: [
            {
                // id: 148651,
                slug: "breaking-news",
                name: "最新",
                link: "https://www.nownews.com/cat/entertainment"
            },
            {
                // id: 33,
                slug: "cpopcelebrity",
                name: "華語名人圈",
                link: "https://www.nownews.com/cat/entertainment/cpopcelebrity"
            },
            {
                // id: 27,
                slug: "jkpop",
                name: "日韓流行線",
                link: "https://www.nownews.com/cat/entertainment/jkpop"
            },
            {
                // id: 31,
                slug: "english",
                name: "西洋發燒星",
                link: "https://www.nownews.com/cat/entertainment/english"
            },
            {
                // id: 147761,
                slug: "kol",
                name: "網紅五四三",
                link: "https://www.nownews.com/cat/entertainment/kol"
            },
            {
                // id: 152944,
                slug: "horoscope",
                name: "星座命理區",
                link: "https://www.nownews.com/cat/entertainment/horoscope"
            },
            {
                // id: 147763,
                slug: "showbiztopic",
                name: "娛樂NOW一下",
                link: "https://www.nownews.com/cat/entertainment/showbiztopic"
            },
            {
                // id: 0,
                slug: "",
                name: "金視獎",
                link: "//gva.tavis.tw/108",
                target: "_blank"
            },
            {
                // id: 173800,
                slug: "imovies",
                name: "iLOOK電影",
                link: "https://www.nownews.com/cat/entertainment/imovies"
            },
            {
                // id: 186630,
                slug: "gv108",
                name: "榮耀金視獎",
                link: "https://www.nownews.com/cat/entertainment/gv108"
            }
        ]
    },
    {
        type: 3,
        // id: 0,
        name: "電競",
        link: "//game.nownews.com",
        target: "_blank",
        subList: [
            {
                // id: 42,
                slug: "gamenews",
                name: "電玩急先鋒",
                link: "https://www.nownews.com/cat/webgame/gamenews/"
            },
            {
                // id: 149516,
                slug: "esports",
                name: "電競快報",
                link: "https://www.nownews.com/cat/webgame/esports/"
            }
        ]
    },
    {
        type: 3,
        // id: 124252,
        slug: "clips",
        name: "影音",
        link: "https://www.nownews.com/cat/clips/",
        subList: [
            {
                // id: 182123,
                slug: "hero",
                name: "今日英雄",
                link: "https://www.nownews.com/cat/hero"
            }
        ]
    },
    {
        type: 3,
        // id: 1,
        slug: "politics",
        name: "政治",
        link: "https://www.nownews.com/cat/politics/",
        subList: [
            {
                // id: 1,
                slug: "breaking-news",
                name: "最新",
                link: "https://www.nownews.com/cat/politics"
            },
            {
                // id: 194347,
                slug: "constitutionalforum",
                name: "啟動修憲",
                link: "https://www.nownews.com/cat/politics/constitutionalforum"
            },
            {
                // id: 147762,
                slug: "military",
                name: "軍武",
                link: "https://www.nownews.com/cat/politics/military"
            },
            {
                // id: 142493,
                slug: "analysis",
                name: "政治巷仔內",
                link: "https://www.nownews.com/cat/politics/analysis"
            },
            {
                // id: 172321,
                slug: "sen-lian",
                name: "聲量調查所",
                link: "https://www.nownews.com/cat/politics/sen-lian"
            }
        ]
    },
    {
        type: 3,
        // id: 124253,
        slug: "forum-2",
        name: "觀點",
        link: "https://www.nownews.com/cat/forum-2",
        subList: [
            {
                // id: 124253,
                slug: "breaking-news",
                name: "最新",
                link: "https://www.nownews.com/cat/forum-2"
            },
            {
                // id: 131521,
                slug: "nownewsa1",
                name: "今日社論",
                link: "https://www.nownews.com/cat/forum-2/nownewsa1"
            },
            {
                // id: 85,
                slug: "celebritycomment-forum-2",
                name: "名家論壇",
                link: "https://www.nownews.com/cat/forum-2/celebritycomment-forum-2"
            },
            {
                // id: 20,
                slug: "usertalk",
                name: "今日廣場",
                link: "https://www.nownews.com/cat/forum-2/usertalk"
            },
            {
                // id: 147764,
                slug: "talkshow",
                name: "今日直播室",
                link: "https://www.nownews.com/cat/forum-2/talkshow"
            }
        ]
    },
    {
        type: 3,
        // id: 7,
        slug: "global",
        name: "國際",
        link: "https://www.nownews.com/cat/global",
        subList: [
            {
                // id: 7,
                slug: "breaking-news",
                name: "最新",
                link: "https://www.nownews.com/cat/global"
            },
            {
                // id: 148647,
                slug: "frontpage",
                name: "國際要聞",
                link: "https://www.nownews.com/cat/global/frontpage"
            },
            {
                // id: 148648,
                slug: "intlfun",
                name: "國際萬象",
                link: "https://www.nownews.com/cat/global/intlfun"
            },
            {
                // id: 185425,
                slug: "asia-news",
                name: "亞洲新聞",
                link: "https://www.nownews.com/cat/global/asia-news"
            }
        ]
    },
    {
        type: 3,
        // id: 5,
        slug: "sport",
        name: "運動",
        link: "https://www.nownews.com/cat/sport",
        subList: [
            {
                // id: 5,
                slug: "breaking-news",
                name: "最新",
                link: "https://www.nownews.com/cat/sport"
            },
            {
                // id: 5,
                slug: "cha-news",
                name: "謝謝恰恰",
                link: "https://thankyouchia.nownews.com/",
                target: "_blank"
            },
            {
                // id: 165278,
                slug: "nba",
                name: "NBA",
                link: "https://www.nownews.com/cat/sport/nba"
            },
            {
                // id: 165280,
                slug: "mlb",
                name: "MLB",
                link: "https://www.nownews.com/cat/sport/mlb"
            },
            {
                // id: 165279,
                slug: "npb-sport",
                name: "日職",
                link: "https://www.nownews.com/cat/sport/npb-sport"
            },
            {
                // id: 73,
                slug: "baseball",
                name: "棒球",
                link: "https://www.nownews.com/cat/sport/baseball"
            },
            {
                // id: 75,
                slug: "baseketball",
                name: "籃球",
                link: "https://www.nownews.com/cat/sport/baseketball"
            },
            {
                // id: 76,
                slug: "comple",
                name: "綜合",
                link: "https://www.nownews.com/cat/sport/comple"
            },
            {
                // id: 169809,
                slug: "sportsinside",
                name: "運動巷仔內",
                link: "https://www.nownews.com/cat/sport/sportsinside"
            },
            {
                // id: 172172,
                slug: "dreamers",
                name: "寶島夢想家",
                link: "https://www.nownews.com/cat/sport/dreamers"
            },
            {
                // id: 136015,
                slug: "antarctica-adventure",
                name: "冒險專區",
                link: "https://www.nownews.com/cat/sport/antarctica-adventure"
            }
        ]
    },
    {
        type: 3,
        // id: 140,
        slug: "house2",
        name: "房產",
        link: "https://www.nownews.com/cat/house2",
        subList: [
            {
                // id: 138596,
                slug: "區域房市",
                name: "區域房市",
                link: "https://www.nownews.com/cat/house2/區域房市"
            },
            {
                // id: 124232,
                slug: "focus",
                name: "房產焦點",
                link: "https://www.nownews.com/cat/house2/focus"
            },
            {
                // id: 124234,
                slug: "oversea",
                name: "海外置產",
                link: "https://www.nownews.com/cat/house2/oversea"
            },
            {
                // id: 124235,
                slug: "lifestyle",
                name: "居家生活",
                link: "https://www.nownews.com/cat/house2/lifestyle"
            },
            {
                // id: 141115,
                slug: "2019房產新勢力",
                name: "2019房產新勢力",
                link: "https://www.nownews.com/cat/house2/2019房產新勢力"
            }
        ]
    },
    {
        type: 3,
        // id: 2,
        slug: "finance",
        name: "財經",
        link: "https://www.nownews.com/cat/finance",
        subList: [
            {
                // id: 3,
                slug: "breaking-news",
                name: "最新",
                link: "https://www.nownews.com/cat/finance"
            },
            {
                // id: 82,
                slug: "nowfinance",
                name: "財經專題",
                link: "https://www.nownews.com/cat/finance/nowfinance"
            },
            {
                // id: 83,
                slug: "industry",
                name: "產業動態",
                link: "https://www.nownews.com/cat/finance/industry"
            },
            {
                // id: 80,
                slug: "financial",
                name: "股匯投資",
                link: "https://www.nownews.com/cat/finance/financial"
            },
            {
                // id: 144776,
                slug: "people",
                name: "財經人物",
                link: "https://www.nownews.com/cat/finance/people"
            },
            {
                // id: 81,
                slug: "careers",
                name: "職場速報",
                link: "https://www.nownews.com/cat/finance/careers"
            },
            {
                // id: 135,
                slug: "housenews",
                name: "房市掃瞄",
                link: "https://www.nownews.com/cat/finance/housenews"
            },
            {
                // id: 147760,
                slug: "sign",
                name: "財經巷仔內",
                link: "https://www.nownews.com/cat/finance/sign"
            },
            {
                // id: 181345,
                slug: "online-banking",
                name: "數位理財",
                link: "https://www.nownews.com/cat/finance/online-banking"
            }
        ]
    },
    {
        type: 3,
        // id: 97,
        slug: "chinaindex",
        name: "兩岸",
        link: "https://www.nownews.com/cat/chinaindex",
        subList: [
            {
                // id: 97,
                slug: "breaking-news",
                name: "最新",
                link: "https://www.nownews.com/cat/chinaindex/breaking-news"
            },
            {
                // id: 148661,
                slug: "xfile",
                name: "歷史探密",
                link: "https://www.nownews.com/cat/chinaindex/xfile"
            }
        ]
    },
    {
        type: 3,
        // id: 9,
        slug: "novelty",
        name: "新奇",
        link: "https://www.nownews.com/cat/novelty",
        subList: [
            {
                // id: 9,
                slug: "breaking-news",
                name: "最新",
                link: "https://www.nownews.com/cat/novelty"
            },
            {
                // id: 124241,
                slug: "bizarre",
                name: "奇人異事",
                link: "https://www.nownews.com/cat/novelty/bizarre"
            },
            {
                // id: 25,
                slug: "pets",
                name: "動物星球",
                link: "https://www.nownews.com/cat/novelty/pets"
            },
            {
                // id: 40,
                slug: "hotzone",
                name: "秘密花園",
                link: "https://www.nownews.com/cat/novelty/hotzone"
            }
        ]
    },
    {
        type: 3,
        // id: 3,
        slug: "life",
        name: "生活",
        link: "https://www.nownews.com/cat/life",
        subList: [
            {
                // id: 3,
                slug: "breaking-news",
                name: "最新",
                link: "https://www.nownews.com/cat/life"
            },
            {
                // id: 181366,
                slug: "lifetopic",
                name: "生活專題",
                link: "https://www.nownews.com/cat/life/lifetopic"
            },
            {
                // id: 147767,
                slug: "smart-life",
                name: "聰明消費",
                link: "https://www.nownews.com/cat/life/smart-life"
            },
            {
                // id: 147768,
                slug: "food-life",
                name: "美食旅遊",
                link: "https://www.nownews.com/cat/life/food-life"
            },
            {
                // id: 12,
                slug: "eworld",
                name: "科技樂活",
                link: "https://www.nownews.com/cat/life/eworld"
            },
            {
                // id: 165828,
                slug: "culture-artistic",
                name: "藝文有物",
                link: "https://www.nownews.com/cat/life/culture-artistic"
            },
            {
                // id: 164789,
                slug: "life-focus",
                name: "生活焦點",
                link: "https://www.nownews.com/cat/life/life-focus"
            },
            {
                // id: 21,
                slug: "public",
                name: "愛心公益",
                link: "https://www.nownews.com/cat/life/public"
            }
        ]
    },
    {
        type: 0,
        // id: 4,
        slug: "society",
        name: "社會",
        link: "https://www.nownews.com/cat/society"
    },
    {
        type: 3,
        // id: 11,
        slug: "local",
        name: "地方",
        link: "https://www.nownews.com/cat/local",
        subList: [
            {
                // id: 11,
                slug: "breaking-news",
                name: "最新",
                link: "https://www.nownews.com/cat/local"
            },
            {
                // id: 155952,
                slug: "loc-food",
                name: "美食巷仔內",
                link: "https://www.nownews.com/cat/local/loc-food"
            },
            {
                // id: 56,
                slug: "ppc",
                name: "北北基",
                link: "https://www.nownews.com/cat/local/ppc"
            },
            {
                // id: 58,
                slug: "tcm",
                name: "桃竹苗",
                link: "https://www.nownews.com/cat/local/tcm"
            },
            {
                // id: 59,
                slug: "cct",
                name: "中彰投",
                link: "https://www.nownews.com/cat/local/cct"
            },
            {
                // id: 60,
                slug: "ycn",
                name: "雲嘉南",
                link: "https://www.nownews.com/cat/local/ycn"
            },
            {
                // id: 62,
                slug: "kpp",
                name: "高屏澎",
                link: "https://www.nownews.com/cat/local/kpp"
            },
            {
                // id: 63,
                slug: "yhd",
                name: "宜花東",
                link: "https://www.nownews.com/cat/local/yhd"
            },
            {
                // id: 64,
                slug: "km",
                name: "金馬",
                link: "https://www.nownews.com/cat/local/km"
            }
        ]
    },
    {
        type: 3,
        // id: 115,
        slug: "",
        name: "保庇",
        link: "//bobee.nownews.com/?state=news",
        target: "_blank",
        subList: [
            {
                // id: 0,
                slug: "",
                name: "發生神麼事",
                link: "//bobee.nownews.com/category/current-events",
                target: "_blank"
            },
            {
                // id: 0,
                slug: "",
                name: "神明展神威",
                link: "//bobee.nownews.com/category/religious-rites",
                target: "_blank"
            },
            {
                // id: 0,
                slug: "",
                name: "神從哪裡來",
                link: "//bobee.nownews.com/category/culture",
                target: "_blank"
            },
            {
                // id: 0,
                slug: "",
                name: "神的百寶袋",
                link: "//bobee.nownews.com/category/community",
                target: "_blank"
            },
            {
                // id: 0,
                slug: "",
                name: "神藝術漫遊",
                link: "//bobee.nownews.com/category/religion-in-art",
                target: "_blank"
            }
        ]
    },
    {
        type: 0,
        // id: 0,
        slug: "",
        name: "寵毛",
        link: "//petsmao.nownews.com/",
        target: "_blank"
    },
    {
        type: 0,
        // id: 0,
        slug: "",
        name: "雙語",
        link: "//chinapost.nownews.com/category/news/bilingual-news",
        target: "_blank"
    },
    {
        type: 1,
        // id: 147771,
        slug: "health-life",
        name: "健康",
        link: "https://www.nownews.com/cat/health-life",
        subList: [
            {
                // id: 172662,
                slug: "health-news",
                name: "健康搶鮮報",
                link: "https://www.nownews.com/cat/health-life/health-news",
                postList: [],
                currentPage: 1
            },
            {
                // id: 172663,
                slug: "boy-and-girl",
                name: "兩性潘朵拉",
                link: "https://www.nownews.com/cat/health-life/boy-and-girl",
                postList: [],
                currentPage: 1
            },
            {
                // id: 172664,
                slug: "cancer",
                name: "癌症最前線",
                link: "https://www.nownews.com/cat/health-life/cancer",
                postList: [],
                currentPage: 1
            },
            {
                // id: 172661,
                slug: "loseweight",
                name: "美麗身心靈",
                link: "https://www.nownews.com/cat/health-life/loseweight",
                postList: [],
                currentPage: 1
            }
        ],
        currentSub: {}
    },
    {
        type: 2,
        // id: 123682,
        slug: "travel-eat",
        name: "旅食",
        link: "//play.nownews.com/",
        target: "_blank",
        postList: [],
        currentPage: 1
    },
    {
        type: 3,
        // id: 155695,
        slug: "gama",
        name: "校園",
        link: "https://www.nownews.com/cat/gama",
        subList: [
            {
                // id: 173828,
                slug: "gamaschool",
                name: "初聲",
                link: "https://www.nownews.com/cat/gama/gamaschool"
            },
            {
                // id: 171630,
                slug: "bi-chun",
                name: "精選畢展",
                link: "https://www.nownews.com/cat/gama/bi-chun"
            }
        ]
    },
    {
        type: 3,
        // id: 171577,
        slug: "",
        name: "懶人包",
        link: "https://onepage.nownews.com",
        target: "_blank",
        subList: [
            {
                // id: 0,
                slug: "",
                name: "NOW交友",
                link: "//nowfriends.nownews.com/",
                target: "_blank"
            }
        ]
    }
];



var windowWidth = $(window).width();

var modePhone, breakpoint = {};
breakpoint.getValue = function () {
    this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');

    modePhone = ['xs', 'sm'].indexOf(this.value) !== -1;
};

function loadingFadeOut() {
    setTimeout(function () {
        $('.ih-loading').fadeOut();
    }, 1500);
}


$(function () {

    breakpoint.getValue();
    if (modePhone) {
        $('.ih-component-header, .ih-component-nav').addClass('fixed-top');
    } else {
        $('.ih-component-nav').addClass('sticky-top');
    }

    var $searchform = $("#searchform1"),
        $csetext = $searchform.find(".csetext");

    $csetext.focus(function () {
        $csetext.addClass("focus");
    }).blur(function () {
        if (!!!$csetext.val()) $csetext.removeClass("focus");
    });

});



$(window).on('load', function () {
    loadingFadeOut();
});



$(window).resize(function () {

    if ($(window).width() !== windowWidth) {
        location.reload();
    }

});



$(window).scroll(function () {

});
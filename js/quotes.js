const quotes = [
    {
        quote:"피할 수 없으면 즐겨라.",
        author: "로버트 엘리엇",
    },{
        quote:"산다는 것, 그것은 치열한 전투이다.",
        author: "로망 로랑",
    },{
        quote:"자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.",
        author: "오손 웰스",
    },{
        quote:"한번의 실패와 영원한 실패를 혼동하지 마라.",
        author: "F.스콧 핏제랄드",
    },{
        quote:"실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
        author: "하버트 개서",
    },{
        quote:"이미 끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
        author: "탈무드",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText =`\n - ${todaysQuote.author}`;
const quotes = [
    {
        quote: '변명 중에서도 가장 어리석고 못난 변명은 "시간 없어서" 라는 변명이다.',
        author: '에디슨'
    },
    {
        quote: '바쁜 사람은 눈물 흘릴 시간이 없다.',
        author: '바이런'
    },
    {
        quote: '왜 굳이 의미를 찾으려 하는가? 인생은 욕망이지, 의미가 아니다.',
        author: '찰리 채플린'
    },
    {
        quote: '인생은 과감한 모험이던가, 아니면 아무것도 아니다.',
        author: '헬렌 켈러'
    },
    {
        quote: '잃어버린 시간은 결코 다시 찾지 못한다.',
        author: 'B.프랭클린'
    },
    {
        quote: 'You always pass failure on the way to success.',
        author: 'Mickey Rooney'
    },
    {
        quote: 'Action is the foundational key to all success.',
        author: 'Pablo Picasso'
    },
    {
        quote: 'Big shots are only little shots who keep shooting.',
        author: 'Christopher Morley'
    },
    {
        quote: 'To be happy, we must not be too concerned with others.',
        author: 'Albert camus'
    },
    {
        quote: "To follow, without halt, one aim: There's the secret of success.",
        author: 'Anna Pavlova'
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
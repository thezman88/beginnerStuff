console.log('hey');

const button = document.querySelector('button');
const quotes = ["Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
'When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid',
'Great minds discuss ideas; average minds discuss events; small minds discuss people.',
'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.'

]
const authors = ['-Mark Twain','-Helen Keller','-Audre Lorde','– Eleanor Roosevelt','– David Brinkley']

button.addEventListener('click', changeQuote);

function changeQuote(){
    const index = parseInt(Math.random()*quotes.length)
    document.getElementById('quoteBlock').innerHTML= quotes[index];
    document.getElementById('author').innerHTML = authors[index];

}
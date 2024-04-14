// const myCarouselElement = document.querySelector('#myCarousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// })
// quote block
const quoteArea = document.querySelector('#quoteOfDay');
const authorArea = document.querySelector('#quoteAuthor');
const sourceTitleArea = document.querySelector('#quoteSource');
const quoteContainer = [];
const authorContainer = [];
const sourceContainer = [];
const good = 0;



quoteContainer.push('Computers are like Old Testament gods; lots of rules and no mercy.', 
                    'Man is still the most extraordinary computer of all', 
                    'The good news about computers is that they do what you tell them to do.  The bad news is they do what you tell them to do.', 
                    "Never trust a computer you can't throw out a window",
                    'Computing is not about computers any more.  It is about living',
                    'Those who can imagine anything, can create the impossible',
                    'Good judgement comes from experience, and experience comes from bad judgement')
authorContainer.push('Joseph Campbell', 'President John F. Kennedy', 'Ted Nelson', 'Steve Wozniack', 'Nicholas Negroponte', 'Alan Turing', 'Frederick P. Brooks');
sourceContainer.push('Brainy Quote', 'The Power of Myth', 'Unknown');

// object for quotes
const quotes = [{quote: 'Computers are like Old Testament gods; lots of rules and no mercy.', author: 'Joseph Campbell', source: 'The Power of Myth'},
{quote: 'Man is still the most extraordinary computer of all', author: 'President John F. Kennedy', source: 'Brainy Quote'},
{quote: 'The good news about computers is that they do what you tell them to do.  The bad news is they do what you tell them to do.', author: 'Ted Nelson', source: 'Unknown'},
{quote: "Never trust a computer you can't throw out a window", author: 'Steve Wozniack', source: 'Brainy Quote'},
{quote: 'Computing is not about computers any more.  It is about living', author: 'Nicholas Negroponte', source: 'Unknown'},
{quote: 'Those who can imagine anything, can create the impossible', author: 'Alan Turing', source: 'Unknown'},
{quote: 'Computer Science is no more about computers than astronomy is about telescopes', author: 'Edsger Wybe Dijkstra', source: 'Unknown'}];

const the = quotes.map(theQuotes => theQuotes.quote);
const by = quotes.map(byAuthors => byAuthors.author);
const from = quotes.map(fromSources => fromSources.source);

oneQuoteAtATime();

function oneQuoteAtATime(){
    quoteArea.innerText += the[0];
    authorArea.innerText += by[0];
    sourceTitleArea.innerText += from[0];
    
    let sid = setTimeout(() => {
        // immediate
        // necessary, I created the function as I was learning how to make the quotes change on their own time
        // function operation: it empties the whole quote block
        disappearQuote();
        // function operation: after one day passes (86400 secs) the next quote appears while the old one is removed from user sight
        nextQuoteAppear();
    }, 5000);
    return sid;
}

// function quoteTwo(callThree){
//     const quoteWhat = setInterval(() => {
//         quoteArea.innerText += the[2];
//         setTimeout(() => {
//             quoteArea.innerText = '';
//         }, 4000)
//     }, 8000)
//     clearInterval(quoteWhat);
//     callThree = oneQuoteAtATime;
//     console.log('The End');
//     return callThree;
// }

// function quoteOne(callTwo){
//     const quoteThat = setInterval(() => {
//         quoteArea.innerText += the[1];
//         setTimeout(() => {
//             quoteArea.innerText = '';
//         }, 4000)
//     }, 8000)
//     clearInterval(quoteThat);
//     callTwo = quoteTwo;
//     return callTwo;
// }

// function displayQuotes (){
// }

// const quoteInterval = setInterval(function (){
//     console.log(shuffleQuotes(the));
    
// }, 5000);



// shuffleQuotes(quoteContainer, authorContainer, sourceContainer);

// const quoteChangeTime = setInterval(function changeoverQuote(qOne, qTwo, qThree, aOne, aTwo, aThree, sOne, sTwo, sThree){
   
//     // passing functons as parameters
//     qOne = function (quote){
//         quote.innerText = 'Computers are like Old Testament gods; lots of rules and no mercy.';
//         // author.innerText = 'Joseph Campbell';
//         // sourceTitle.innerText = 'Brainy Quote';
//     }
    
//     qTwo = function (quote){
//         quote.innerText = 'Man is still the most extraordinary computer of all';
//         // author.innerText = 'President John F. Kennedy';
//         // sourceTitle.innerText = 'Brainy Quote';
//     }
    
//     qThree = function (quote){
//         quote.innerText = 'The good news about computers is that they do what you tell them to do.<br>  The bad news is they do what you tell them to do.';
//         // author.innerText = 'Ted Nelson';
//         // sourceTitle.innerText = '';
//     }

//     aOne = function (author){
//         // quote.innerText = 'Computers are like Old Testament gods; lots of rules and no mercy.';
//         author.innerText = 'Joseph Campbell';
//         // sourceTitle.innerText = 'Brainy Quote';
//     }

//     aTwo = function (author){
//         // quote.innerText = 'Man is still the most extraordinary computer of all';
//         author.innerText = 'President John F. Kennedy';
//         // sourceTitle.innerText = 'Brainy Quote';
//     }
    
//     aThree = function (author){
//         // quote.innerText = 'The good news about computers is that they do what you tell them to do.<br>  The bad news is they do what you tell them to do.';
//         author.innerText = 'Ted Nelson';
//         // sourceTitle.innerText = '';
//     }

//     sOne = function (sourceTitle){
//         // quote.innerText = 'Computers are like Old Testament gods; lots of rules and no mercy.';
//         // author.innerText = 'Joseph Campbell';
//         sourceTitle.innerText = 'Brainy Quote';
//     }

//     sTwo = function (sourceTitle){
//         // quote.innerText = 'Man is still the most extraordinary computer of all';
//         // author.innerText = 'President John F. Kennedy';
//         sourceTitle.innerText = 'Brainy Quote';
//     }
    
//     sThree = function (sourceTitle){
//         // quote.innerText = 'The good news about computers is that they do what you tell them to do.<br>  The bad news is they do what you tell them to do.';
//         // author.innerText = 'Ted Nelson';
//         sourceTitle.innerText = '';
//     }


//     // putting functions in an array so I can cycle through them one at a time
//     const poem = [];
//     const poet = [];
//     const publisher = [];
//     poem.push(qOne, qTwo, qThree);
//     poet.push(aOne, aTwo, aThree);
//     publisher.push(sOne, sTwo, sThree);

//     // loop through the quotes
//     for (pamphlet = 0; pamphlet < poem.length; pamphlet++){
//          quoteArea += poem[pamphlet];
//     }

//     for (creator = 0; creator < poet.length; creator++){
//         authorArea += poet[creator];
//     }

//     for (printer = 0; printer < publisher.length; printer++){
//         sourceTitleArea += publisher[printer];
//     }

    

// }, 10000);

// const rotatingQuotes =



function nextQuoteAppear(){
    disappearQuote();
    quoteArea.innerText += the[1];
    authorArea.innerText += by[1];
    sourceTitleArea.innerText += from[1];
    setTimeout(() => {
        disappearQuote();
        quoteArea.innerText += the[2];
        authorArea.innerText += by[2];
        sourceTitleArea.innerText += from[2];
        setTimeout(() => {
            disappearQuote();
            quoteArea.innerText += the[3];
            authorArea.innerText += by[3];
            sourceTitleArea.innerText += from[3];
            setTimeout(() => {
                disappearQuote();
                quoteArea.innerText += the[4];
                authorArea.innerText += by[4];
                sourceTitleArea.innerText += from[4];
                setTimeout(() => {
                    disappearQuote();
                    quoteArea.innerText += the[5];
                    authorArea.innerText += by[5];
                    sourceTitleArea.innerText += from[5];
                    setTimeout(() => {
                        disappearQuote();
                        quoteArea.innerText += the[6];
                        authorArea.innerText += by[6];
                        sourceTitleArea.innerText += from[6];
                        setTimeout(() => {
                            disappearQuote();
                            return oneQuoteAtATime();
                        }, 86400000)
                    }, 86400000)
                }, 86400000)
            }, 86400000)
        }, 86400000)
    }, 86400000)
}



function disappearQuote(){
    quoteArea.innerText = '';
    authorArea.innerText = '';
    sourceTitleArea.innerText = '';
}

// weather block
const f = document.querySelector('#farenheit');
const c = document.querySelector('#celsius');
const weather = document.querySelector('#weatherPic');
const city = document.querySelector('#locale');







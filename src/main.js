require('dotenv').config();

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
console.log(the);
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

const far = document.querySelector('#farenheit');
const cel = document.querySelector('#celsius');
const far2 = document.querySelector('#farenheit2');
const cel2 = document.querySelector('#celsius2');
const far3 = document.querySelector('#farenheit3');
const cel3 = document.querySelector('#celsius3');
const far4 = document.querySelector('#farenheit4');
const cel4 = document.querySelector('#celsius4');
const far5 = document.querySelector('#farenheit5');
const cel5 = document.querySelector('#celsius5');
const far6 = document.querySelector('#farenheit6');
const cel6 = document.querySelector('#celsius6');
const far7 = document.querySelector('#farenheit7');
const cel7 = document.querySelector('#celsius7');
const weather = document.querySelector('#weatherPic');
const localCity = document.querySelector('#locale');
const weather2 = document.querySelector('#weatherPic2');
const localCity2 = document.querySelector('#locale2');
const weather3 = document.querySelector('#weatherPic3');
const localCity3 = document.querySelector('#locale3');
const weather4 = document.querySelector('#weatherPic4');
const localCity4 = document.querySelector('#locale4');
const weather5 = document.querySelector('#weatherPic5');
const localCity5 = document.querySelector('#locale5');
const weather6 = document.querySelector('#weatherPic6');
const localCity6 = document.querySelector('#locale6');
const weather7 = document.querySelector('#weatherPic7');
const localCity7 = document.querySelector('#locale7');
const apiKey = process.env.API_KEY;
const cities = ['Atlanta','Phoenix','Manhattan','Dillon', 'Tampa', 4473083, 'Okinawa']
const cache = new Map();
// async function getWeatherData(city) {
//     // Checks if the city exists in the array
//     // IF the array citites does NOT INCLUDE whatever paramater is entered then a new error will be thrown with a message
//     if (!cities.includes(city)) {
//         throw new Error(`City "${city}" not found in the list`);
//     }

//     // Construct the API URL
//     const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//     try {
       
//         const response = await fetch(apiURL);

//         // Check if the response is successful
//         if (!response.ok) {
//             throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
//         }

//         // Return the weather data as JSON
//         return await response.json();
//     } catch (error) {
//         // Handle any errors that occur during the fetch
//         console.error("Error fetching weather data:", error.message);
//         throw error; // Re-throw the error for higher-level handling
//     }
// }



// async function getWeatherData(city){

    
//     for(const currentCity of cities){
//         if(currentCity === city){

//             const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//             const response = await fetch(apiURL);

//             // If the response is NOT ok ✅ throw a NEW error with a message

//             if(!response.ok){
//                 throw new Error('Did not fetch the weather data')
//             }
            
//             return await response.json();

//         }
//     }
    
// }

// Function to fetch weather data with caching
async function getWeatherData(city) {
    city = cities;
    if (cache.has(city)) {
        console.log(`Using cached data for ${city}`);
        return cache.get(city); // Return cached data if available
    }
    
   

    try {
        
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await fetch(apiURL);

        for(city of cities) {
            if(city === 'Atlanta'){
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();

                // change the icon image based on the id code 
                if (data.weather[0].id === 800){
                    //weather is sunny!
                    const img = document.createElement('span');
                    weather.appendChild(img);
                    img.className = 'fa-solid fa-sun';
                    img.style.color = '#fecb3e';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";
                    
                } else if (data.weather[0].id > 800 && data.weather[0].id < 805){
                    //weather is cloudy!
                    const img = document.createElement('span');
                    weather.appendChild(img);
                    img.className = 'fa-solid fa-cloud-sun';
                    img.style.color = '#00c7fc';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 600 && data.weather[0].id < 623){
                    //weather is snowy!
                    const img = document.createElement('span');
                    weather.appendChild(img);
                    img.className = 'fa-regular fa-snowflake';
                    img.style.color = '#E5E4E2';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 300 && data.weather[0].id < 532){
                    //weather is rainy!
                    const img = document.createElement('span');
                    weather.appendChild(img);
                    img.className = 'fa-solid fa-cloud-rain';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 200 && data.weather[0].id < 233){
                    //weather is stormy!
                    const img = document.createElement('span');
                    weather.appendChild(img);
                    img.className = 'fa-solid fa-cloud-bolt';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else {
                    //No weather to report!
                    const img = document.createElement('span');
                    weather.appendChild(img);
                    img.alt = "No Weather to report";

                }
        
                localCity.innerHTML = `${data.name}, GA`;
                far.innerHTML = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + `ºF`;
                cel.innerHTML = (data.main.temp - 273.15).toFixed(1) + 'ºC';

            }
            if(city === 'Phoenix'){
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();

                // change the icon image based on the id code 
                if (data.weather[0].id === 800){
                    //weather is sunny!
                    const img = document.createElement('span');
                    weather2.appendChild(img);
                    img.className = 'fa-solid fa-sun';
                    img.style.color = '#fecb3e';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";
                    
                } else if (data.weather[0].id > 800 && data.weather[0].id < 805){
                    //weather is cloudy!
                    const img = document.createElement('span');
                    weather2.appendChild(img);
                    img.className = 'fa-solid fa-cloud-sun';
                    img.style.color = '#00c7fc';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 600 && data.weather[0].id < 623){
                    //weather is snowy!
                    const img = document.createElement('span');
                    weather2.appendChild(img);
                    img.className = 'fa-regular fa-snowflake';
                    img.style.color = '#E5E4E2';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 300 && data.weather[0].id < 532){
                    //weather is rainy!
                    const img = document.createElement('span');
                    weather2.appendChild(img);
                    img.className = 'fa-solid fa-cloud-rain';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 200 && data.weather[0].id < 233){
                    //weather is stormy!
                    const img = document.createElement('span');
                    weather2.appendChild(img);
                    img.className = 'fa-solid fa-cloud-bolt';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else {
                    //No weather to report!
                    const img = document.createElement('span');
                    weather2.appendChild(img);
                    img.alt = "No Weather to report";

                }
        
                localCity2.innerHTML = `${data.name}, AZ`;
                far2.innerHTML = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + `ºF`;
                cel2.innerHTML = (data.main.temp - 273.15).toFixed(1) + 'ºC';
            }
            if(city === 'Manhattan'){
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();

                // change the icon image based on the id code 
                if (data.weather[0].id === 800){
                    //weather is sunny!
                    const img = document.createElement('span');
                    weather3.appendChild(img);
                    img.className = 'fa-solid fa-sun';
                    img.style.color = '#fecb3e';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";
                    
                } else if (data.weather[0].id > 800 && data.weather[0].id < 805){
                    //weather is cloudy!
                    const img = document.createElement('span');
                    weather3.appendChild(img);
                    img.className = 'fa-solid fa-cloud-sun';
                    img.style.color = '#00c7fc';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 600 && data.weather[0].id < 623){
                    //weather is snowy!
                    const img = document.createElement('span');
                    weather3.appendChild(img);
                    img.className = 'fa-regular fa-snowflake';
                    img.style.color = '#E5E4E2';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 300 && data.weather[0].id < 532){
                    //weather is rainy!
                    const img = document.createElement('span');
                    weather3.appendChild(img);
                    img.className = 'fa-solid fa-cloud-rain';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 200 && data.weather[0].id < 233){
                    //weather is stormy!
                    const img = document.createElement('span');
                    weather3.appendChild(img);
                    img.className = 'fa-solid fa-cloud-bolt';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else {
                    //No weather to report!
                    const img = document.createElement('span');
                    weather3.appendChild(img);
                    img.alt = "No Weather to report";

                }
        
                localCity3.innerHTML = `${data.name}, NYC`;
                far3.innerHTML = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + `ºF`;
                cel3.innerHTML = (data.main.temp - 273.15).toFixed(1) + 'ºC';
            }
            if(city === 'Dillon'){
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();

                // change the icon image based on the id code 
                if (data.weather[0].id === 800){
                    //weather is sunny!
                    const img = document.createElement('span');
                    weather4.appendChild(img);
                    img.className = 'fa-solid fa-sun';
                    img.style.color = '#fecb3e';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";
                    
                } else if (data.weather[0].id > 800 && data.weather[0].id < 805){
                    //weather is cloudy!
                    const img = document.createElement('span');
                    weather4.appendChild(img);
                    img.className = 'fa-solid fa-cloud-sun';
                    img.style.color = '#00c7fc';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 600 && data.weather[0].id < 623){
                    //weather is snowy!
                    const img = document.createElement('span');
                    weather4.appendChild(img);
                    img.className = 'fa-regular fa-snowflake';
                    img.style.color = '#E5E4E2';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 300 && data.weather[0].id < 532){
                    //weather is rainy!
                    const img = document.createElement('span');
                    weather4.appendChild(img);
                    img.className = 'fa-solid fa-cloud-rain';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 200 && data.weather[0].id < 233){
                    //weather is stormy!
                    const img = document.createElement('span');
                    weather4.appendChild(img);
                    img.className = 'fa-solid fa-cloud-bolt';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else {
                    //No weather to report!
                    const img = document.createElement('span');
                    weather4.appendChild(img);
                    img.alt = "No Weather to report";

                }
        
                localCity4.innerHTML = `${data.name}, SC`;
                far4.innerHTML = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + `ºF`;
                cel4.innerHTML = (data.main.temp - 273.15).toFixed(1) + 'ºC';
            }
            if(city === 'Tampa'){
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();

                // change the icon image based on the id code 
                if (data.weather[0].id === 800){
                    //weather is sunny!
                    const img = document.createElement('span');
                    weather5.appendChild(img);
                    img.className = 'fa-solid fa-sun';
                    img.style.color = '#fecb3e';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";
                    
                } else if (data.weather[0].id > 800 && data.weather[0].id < 805){
                    //weather is cloudy!
                    const img = document.createElement('span');
                    weather5.appendChild(img);
                    img.className = 'fa-solid fa-cloud-sun';
                    img.style.color = '#00c7fc';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 600 && data.weather[0].id < 623){
                    //weather is snowy!
                    const img = document.createElement('span');
                    weather5.appendChild(img);
                    img.className = 'fa-regular fa-snowflake';
                    img.style.color = '#E5E4E2';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 300 && data.weather[0].id < 532){
                    //weather is rainy!
                    const img = document.createElement('span');
                    weather5.appendChild(img);
                    img.className = 'fa-solid fa-cloud-rain';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 200 && data.weather[0].id < 233){
                    //weather is stormy!
                    const img = document.createElement('span');
                    weather5.appendChild(img);
                    img.className = 'fa-solid fa-cloud-bolt';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else {
                    //No weather to report!
                    const img = document.createElement('span');
                    weather5.appendChild(img);
                    img.alt = "No Weather to report";

                }
        
                localCity5.innerHTML = `${data.name}, FL`;
                far5.innerHTML = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + `ºF`;
                cel5.innerHTML = (data.main.temp - 273.15).toFixed(1) + 'ºC';
            }
            if(city === 4473083){
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}`;
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();

                // change the icon image based on the id code 
                if (data.weather[0].id === 800){
                    //weather is sunny!
                    const img = document.createElement('span');
                    weather6.appendChild(img);
                    img.className = 'fa-solid fa-sun';
                    img.style.color = '#fecb3e';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";
                    
                } else if (data.weather[0].id > 800 && data.weather[0].id < 805){
                    //weather is cloudy!
                    const img = document.createElement('span');
                    weather6.appendChild(img);
                    img.className = 'fa-solid fa-cloud-sun';
                    img.style.color = '#00c7fc';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 600 && data.weather[0].id < 623){
                    //weather is snowy!
                    const img = document.createElement('span');
                    weather6.appendChild(img);
                    img.className = 'fa-regular fa-snowflake';
                    img.style.color = '#E5E4E2';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 300 && data.weather[0].id < 532){
                    //weather is rainy!
                    const img = document.createElement('span');
                    weather6.appendChild(img);
                    img.className = 'fa-solid fa-cloud-rain';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 200 && data.weather[0].id < 233){
                    //weather is stormy!
                    const img = document.createElement('span');
                    weather6.appendChild(img);
                    img.className = 'fa-solid fa-cloud-bolt';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else {
                    //No weather to report!
                    const img = document.createElement('span');
                    weather6.appendChild(img);
                    img.alt = "No Weather to report";

                }
        
                localCity6.innerHTML = `${data.name}, NC`;
                far6.innerHTML = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + `ºF`;
                cel6.innerHTML = (data.main.temp - 273.15).toFixed(1) + 'ºC';
            }
            if(city === 'Okinawa'){
                const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const response = await fetch(apiURL);

                if (!response.ok) {
                    throw new Error(`Failed to fetch weather data for ${city}: ${response.statusText}`);
                }

                const data = await response.json();

                // change the icon image based on the id code 
                if (data.weather[0].id === 800){
                    //weather is sunny!
                    const img = document.createElement('span');
                    weather7.appendChild(img);
                    img.className = 'fa-solid fa-sun';
                    img.style.color = '#fecb3e';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";
                    
                } else if (data.weather[0].id > 800 && data.weather[0].id < 805){
                    //weather is cloudy!
                    const img = document.createElement('span');
                    weather7.appendChild(img);
                    img.className = 'fa-solid fa-cloud-sun';
                    img.style.color = '#00c7fc';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 600 && data.weather[0].id < 623){
                    //weather is snowy!
                    const img = document.createElement('span');
                    weather7.appendChild(img);
                    img.className = 'fa-regular fa-snowflake';
                    img.style.color = '#E5E4E2';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 300 && data.weather[0].id < 532){
                    //weather is rainy!
                    const img = document.createElement('span');
                    weather7.appendChild(img);
                    img.className = 'fa-solid fa-cloud-rain';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else if (data.weather[0].id >= 200 && data.weather[0].id < 233){
                    //weather is stormy!
                    const img = document.createElement('span');
                    weather7.appendChild(img);
                    img.className = 'fa-solid fa-cloud-bolt';
                    img.style.color = '#848884';
                    img.style.width = '34px';
                    img.style.height = '32px';
                    img.alt = "Uploaded Image";

                } else {
                    //No weather to report!
                    const img = document.createElement('span');
                    weather7.appendChild(img);
                    img.alt = "No Weather to report";

                }
        
                localCity7.innerHTML = `${data.name}, JP`;
                far7.innerHTML = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1) + `ºF`;
                cel7.innerHTML = (data.main.temp - 273.15).toFixed(1) + 'ºC';
            }  
            
        }

        const data = await response.json();
        cache.set(city, data); // Store result in cache
        return localCity;
    } catch (error) {
        throw error;
    }
}

//Day N Night
function themeChange() {
    const body = document.querySelector('.main-body');
    const inBody = document.querySelector('.inner-main');
    const skills = document.querySelectorAll('h5');
    const quoteSpace = document.querySelector('.card-body');
    const paragraphs = document.querySelectorAll('p');

    // Get current time
    const now = new Date();
    const hours = now.getHours(); // Hours in 24-hour format (0-23)

    if (hours >= 18 || hours <= 8){
        body.setAttribute('style', 'background-color: #202426');
        inBody.setAttribute('style', 'background-color: #353839');
        // loops thru all the h5 tags and turns them into the set color
        skills.forEach((skill) => {
            console.log(skill.textContent);
            skill.style.color = '#FAF9F6';
        });
        quoteSpace.setAttribute('style', 'background-color: #353839');
        // loops thru all the p tags and turns them into the set color
        paragraphs.forEach((paragraph) => {
            paragraph.style.color = '#FAF9F6';
        });

    } else {
        body.setAttribute('style', 'background-color: #FAF9F6');
        inBody.setAttribute('style', 'background-color: #ffffff');
        // loops thru all the h5 tags and turns them into the set color
        skills.forEach((skill) => {
            console.log(skill.textContent);
            skill.style.color = '#202426';
        });
        quoteSpace.setAttribute('style', 'background-color: #ffffff');
        // loops thru all the p tags and turns them into the set color
        paragraphs.forEach((paragraph) => {
            paragraph.style.color = '#202426';
        });
    }
}

getWeatherData();
themeChange();





/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * 
 * Array of Objects
 ***/

var Quotes = [{

        quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
        source: 'Martin Fowler',
        citation: 'Fowler, M. F. (2001, September 11)',
        date: '2001',

    },
    {

        quote: 'First, solve the problem. Then, write the code',
        source: 'John Johnson',
        citation: 'Johnson, J. J. (2013, April 2)',
        date: '2013',

    },
    {

        quote: 'Experience is the name everyone gives to their mistakes',
        source: 'Oscar Wilde',
        citation: 'Wilde, O. W. (2010, June 22)',
        date: '2010',

    },
    {

        quote: 'In order to be irreplaceable, one must always be different',
        source: 'Coco Chanel',
        citation: 'Chanel, C. C. (2017, May 27)',
        date: '2017',
    },
    {

        quote: 'Java is to JavaScript what car is to Carpet',
        source: 'Chris Heilmann',
        citation: 'Heilmann, C. H. (2000, August 4)',
        date: '2000',

    },
    {

        quote: 'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday\’s code"',
        source: 'Dan Salomon',
        citation: 'Salomon, D. S. (2011, December 9)',
        date: '2011',

    },
    {

        quote: 'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away',
        source: 'Antoine de Saint-Exupery',
        citation: 'Saint-Exupery, A. S. (2009, August 27)',
        date: '2000',
        favorite: 'This is a personal favorite Quote of mine',

    },
    {

        quote: 'Code is like humor. When you have to explain it, it’s bad',
        source: 'Cory House',
        citation: 'House, C. H. (2007, january 18)',
        date: '2007',

    },
    {

        quote: 'Simplicity is the soul of efficiency',
        source: 'Austin Freeman',
        // citation: 'Freeman, A. F. (2002, february 20)',
        date: '2000',

    },
    {

        quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
        source: 'John Woods',
        // citation: 'Woods, J. W. (2017, August 27)',
        // date: 2006,

    }
];

// console.log your array of objects to view wether or not it works and registers as a array of objects

console.log(Quotes)

/***
 * `getRandomQuote` function
 * defining the function to retrieve a quote at random from the Quotes array 
 * 
 * create a variable to store a random number received between 0 and the length of the Quote using (  Math.floor(Math.random() * Quotes.length) ) 
 * as the Quotes in the array use 0 based notation, its necessary for the function to supply a value from 0 and the amount of objects in the created array
 * this value which is stored in the variable of your choosing is then used as a index value to identify a random Quote object in the array of Quotes
 * which will be stored in a variable for later use
 */

function getRandomQuote() {

    const randomNumber = Math.floor(Math.random() * Quotes.length);
    const randomQuote = Quotes[randomNumber];
    return randomQuote;

};

/*** 
console.log your getRandomQuote
function to view and make sure that your
function returns a random Quote object from the array of object every time it 's called *so the a random Quote can be generated ** *
*/

console.log(getRandomQuote());

/**
 * `printQuote` function
 * defining the function to display the Quote on the html page
 * 
 * assign the random Quote received from the getRandomQuote() function and assign it to a variable (Any variable)
 * create a variable that you will use to store the html code (template literal) to display the code (`<p class="quote">${getRandomQuote_Quote.quote}</p>`)
 * then return a document.querySelector method to display the html Quote picked at random by the getRandomQuote function to the page/HTML document
 * 
 * the html should be between the <div> </div>.
 **/

function printQuote() {

    let getRandomQuote_Quote = getRandomQuote();
    let html = ` 
        <p class = "quote" > ${ getRandomQuote_Quote.quote } </p> 
        <p class = "source" > ${ getRandomQuote_Quote.source }

    `;


    if (getRandomQuote_Quote.favorite && getRandomQuote_Quote.date && getRandomQuote_Quote.citation) {

        html += `<span class = "citation"> ${getRandomQuote_Quote.citation} </span><span class = "year">${getRandomQuote_Quote.year}</span><span class = "citation">${+getRandomQuote_Quote.favorite}</span></p>`;

    } else if (getRandomQuote_Quote.citation && getRandomQuote_Quote.year) {

        html += `<span class = "citation">${getRandomQuote.citation}</span><span class = "year">${getRandomQuote.year}</span></p>`

    } else if (getRandomQuote_Quote.citation) {

        html += `<span class = "citation">${getRandomQuote_Quote.citation}</span><span class = "year">No year was noted</span></p>`

    } else if (getRandomQuote_Quote.year) {

        html += `<span class = "citation">No citation was noted</span><span class = "year">${getRandomQuote.year}</span>`

    } else {

        html += ` <span class = "citation"> (No available reference noted) </span> <span class = "year">(No available year noted)</span> </p>`;
    };

    return document.querySelector('div').innerHTML = html;

};

// A created array of colors i want the page to change to

const colors = ['#EB6245', '#21D670', '#BF2ADE', '#EA3A69', '#6919E7', '#78DF51', '#C2A453', '#000000', '#47ACC2', '#D591CA']

/** function to define the color value used to change the color of the page
 * use a Math.random method to get a random value between 0 and the length of the array (colors) and store it in a variable
 * 
 * use the random number(variable) received as an index value for the array (colors) so that a color can be picked at random every time the function is called
 * 
 * display the color using .style.background = (variable you color received at random)
 */

function PageColor() {

    let Color_index = Math.floor(Math.random() * colors.length);
    let Color_code = colors[Color_index];
    return document.getElementById('body').style.background = Color_code;

}

/***
 * console.log your printQuote() function to check if the Quote displays in the terminal 
 * 
 * console.log the PageColor() function to check if the random color displays in the terminal 
 */

console.log(PageColor());
console.log(printQuote());

// setInterval('window.location.reload("PrintQuote()")', 20000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
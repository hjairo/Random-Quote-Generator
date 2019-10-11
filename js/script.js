// variables

var randomNumber;
var quotes;
var div;
var color;
var blue;
var green;
var red;
var myInterval = setInterval(printQuote, 20000);

// quotes array being defined

quotes = [
  {
    quote: 'Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.',
    source: 'Michael Scott',
    citation: 'The Office',
    year: 2009
  },
  {
    quote: 'I’m not superstitious, but I am a little stitious.',
    source: 'Michael Scott',
    citation: 'The Office',
    year: 2007,
    tag: 'Humor'
  },
  {
    quote: 'What do you think people did before ladders?',
    source: 'Hannibal Buress',
    citation: 'The Eric Andre Show'
  },
  {
    quote: 'Jump, and you will find out how to unfold your wings as you fall.',
    source: 'Ray Bradbury'
  },
  {
    quote: "We're made of star stuff. We are a way for the cosmos to know itself.",
    source: 'Carl Sagan',
    citation: 'Cosmos: A personal Voyage'
  },
  {
    quote: 'The privilege of a lifetime is to become who you truly are.',
    source: 'Carl Jung',
    tag: 'Psychology'
  },
  {
    quote: 'It take a long time to become young.',
    source: 'Pablo Picasso',
    tag: 'Philosophy'
  },
  {
    quote: 'All religions, arts and sciences are branches of the same tree.',
    source: 'Albert Einstein',
    tag: 'Philosophy'
  },
  {
    quote: 'Got more soul than a sock with a hole.',
    source: 'MF DOOM',
    citation: 'Rhinestone Cowboy, Madvilliany',
    year: 2004,
    tag: 'Music'
  },
  {
    quote: 'Catch a throatful from the fire vocal, Ash and molten glass like Eyjafjallajökull.',
    source: 'JJ DOOM',
    citation: 'GUV’NOR',
    tag: 'Music'
  },
  {
    quote: 'Fill your bowl to the brim and it will spill. Keep sharpening your knife and it will blunt.',
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: '4th century BC'
  },
  {
    quote: 'Nature uses only the longest threads to weave her patterns, so that each small piece of her fabric reveals the organization of the entire tapestry.',
    source: 'Richard Feynman',
    tag: 'Physics'
  },
  {
    quote: 'DJ KHALED',
    source: 'DJ Khaled',
    tag: 'Motivational'
  },
  {
    quote: 'Legalize Ranch.',
    source: 'Eric Andre',
    citation: 'The Eric Andre Show'
  },
  {
    quote: 'See you, space cowboy...',
    source: 'Cowboy Bebop'
  },
  {
    quote: 'I’d like to point out to people the divine in a musical language that transcends words. I want to speak to their souls.',
    source: 'John Coltrane',
    tag: 'Music'
  }
]

// getRandomQuote function creates a random integer in range of the length of the 'quotes' array to return a random quote object from the array.

function getRandomQuote () {
  for (i = quotes.length; i--;) {
    var random = quotes.splice(Math.floor(Math.random() * i), 1)[0];
    return random;
  };
}

// backgroundCol function that changes background color. Source: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

function backgroundCol () {
  blue = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  red = Math.floor(Math.random() * 256);
  color = "rgb(" + blue + "," + green + "," + red + ")";
  document.body.style.backgroundColor = color;
}

/*
printQuote function creates the HTML string to be printed out and also calls for the properties if they are contained in the quote object.
Function includes setInterval() & clearInterval() functions to auto-refresh the quote after 20 seconds of being idle. Source: https://www.w3schools.com/jsref/met_win_setinterval.asp
Function also generates a change in background color when called.
*/

function printQuote () {
  backgroundCol();
  var randomQuote = getRandomQuote();
  var message = '';
  message += '<p class="quote" id="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    message += '<span class="citation">' + randomQuote.citation + ' </span>';
  }
  if (randomQuote.year) {
    message += '<span class="year">' + randomQuote.year + ' </span>';
  }
  if (randomQuote.tag) {
    message += '<span class="tag">, ' + randomQuote.tag + '</span>';
  }
  message += '</p>';
  div = document.getElementById('quote-box');
  div.innerHTML = message;
  clearInterval(myInterval);
  myInterval = setInterval(printQuote, 20000);
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

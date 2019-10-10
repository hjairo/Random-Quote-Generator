// variables

var randomNumber;
var quotes;
var div;

// quotes array being defined

quotes = [
  {
    quote: 'Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.',
    source: 'Michael Scott',
    citation: 'The Office, Season 5, "The Duel"',
    year: 2009
  },
  {
    quote: 'I’m not superstitious, but I am a little stitious.',
    source: 'Michael Scott',
    citation: 'The Office, Season 4, "Fun Run"',
    year: 2007
  },
  {
    quote: 'Without music, life would be a mistake.',
    source: 'Friedrich Nietzsche',
    citation: 'Twilight of the Idols',
    year: 1889
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
    source: 'Carl Jung'
  },
  {
    quote: 'It take a long time to become young',
    source: 'Pablo Picasso'
  },
  {
    quote: 'The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.',
    source: 'Albert Einstein'
  },
  {
    quote: 'The further one goes, the less one knows.',
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: '4th century BC'
  },
  {
    quote: 'Fill your bowl to the brim and it will spill. Keep sharpening your knife and it will blunt.',
    source: 'Lao Tzu',
    citation: 'Tao Te Ching',
    year: '4th century BC'
  }
]

// getRandomQuote function creates a random integer less than the length of the 'quotes' array to return a random quote object from the array.

function getRandomQuote () {
  randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// printQuote function creates the HTML string to be printed out and also calls for the properties if they are contained in the quote object.

function printQuote () {
  var randomQuote = getRandomQuote();
  var message = '';
  message += '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    message += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    message += '<span class="year">' + randomQuote.year + '</span>';
  }
  message += '</p>';
  document.getElementById("quote-box").innerHTML = message;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

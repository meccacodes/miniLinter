// Mini Linter

// As a note, this project originally came from Codecademy.

// In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph.

// This is the same type of work that word processing software does. Additionally, you may have heard of linting, a process by which text is evaluated and improved by an application. In this project, you will create a miniature version of a linter using array methods that you have learned.

// Step 1 Below, there is a string called story. We want to gather some information about the individual words and sentences in the string. Let’s split the string into individual words and save them in a new array called storyWords.

let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");

// console.log(storyWords);

let overusedWords = ["really", "very", "basically"];

// Step 2 Log how many words there are in this story to the console.

let totalWords = storyWords.length;

console.log(totalWords);

// Step 3 There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.

let unnecessaryWords = ["extremely", "literally", "actually"];

let betterWords = storyWords.filter((word) => !unnecessaryWords.includes(word));

console.log(betterWords);

// Step 4
// There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first.

// 1. using forEach anf filter
// let overusedWordCounts = overusedWords.map(word => ({
//     word: word,
//     count: storyWords.filter(w => w.toLowerCase() === word.toLowerCase()).length
//   }));

//   overusedWordCounts.forEach(item => {
//     console.log(`The word "${item.word}" was used ${item.count} time(s).`);
//   });

// 2. using reduce
let overusedWordCounts = overusedWords.reduce((acc, word) => {
  acc[word] = storyWords.filter(
    (w) => w.toLowerCase() === word.toLowerCase()
  ).length;
  return acc;
}, {});

for (let word in overusedWordCounts) {
  console.log(
    `The word "${word}" was used ${overusedWordCounts[word]} time(s).`
  );
}

// Step 5
// Now, count how many sentences are in the paragraph.

// This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.

let sentenceCount = 0;

storyWords.forEach((word) => {
  if (word.endsWith(".") || word.endsWith("!")) {
    sentenceCount++;
  }
});

console.log(`The story contains ${sentenceCount} sentences.`);

// Step 6
// Log these items to the console:

// The word count
// The sentence count
// The number of times each overused word appears
// You could choose to simply log them one by one or, for a challenge, create a function that logs all of them with some formatting.

function logStoryStats(storyWords, sentenceCount, overusedWordCounts) {
  console.log("Story Statistics:");
  console.log("-----------------");
  console.log(`Word count: ${storyWords.length}`);
  console.log(`Sentence count: ${sentenceCount}`);
  console.log("\nOverused word appearances:");
  overusedWordCounts.forEach((item) => {
    console.log(`  "${item.word}": ${item.count} time(s)`);
  });
}

// Calculate overused word counts
let overusedWordCountsLoop = overusedWords.map((word) => ({
  word: word,
  count: storyWords.filter((w) => w.toLowerCase() === word.toLowerCase())
    .length,
}));

// Call the function with our data
logStoryStats(storyWords, sentenceCount, overusedWordCountsLoop);

// Step 7
// Now, log the betterWords array to the console as a single string.

console.log(betterWords.join(" "));

// Step 8
// Congratulations! You’ve improved the original paragraph and given the user some important information about his or her work. Think about ways in which you can extend this project, potentially by using other JavaScript knowledge you have.

// Here are some ideas:

// For the overused words, remove it every other time it appears.
let betterWordsEveryOtherOverusedWord = storyWords.reduce(
  (acc, word, index) => {
    let lowerWord = word.toLowerCase();
    if (overusedWords.includes(lowerWord)) {
      let count = acc.filter((w) => w.toLowerCase() === lowerWord).length;
      if (count % 2 === 0) {
        acc.push(word);
      }
    } else {
      acc.push(word);
    }
    return acc;
  },
  []
);

console.log(betterWords.join(" "));

// Write a function that finds the word that appears the greatest number of times.
function findMostFrequentWord(words) {
  const wordCounts = words.reduce((acc, word) => {
    const lowerWord = word.toLowerCase().replace(/[.,!?]/g, "");
    acc[lowerWord] = (acc[lowerWord] || 0) + 1;
    return acc;
  }, {});

  let mostFrequentWord = "";
  let highestCount = 0;

  for (const word in wordCounts) {
    if (wordCounts[word] > highestCount) {
      mostFrequentWord = word;
      highestCount = wordCounts[word];
    }
  }

  return { word: mostFrequentWord, count: highestCount };
}

const mostFrequent = findMostFrequentWord(storyWords);
console.log(
  `The most frequent word is "${mostFrequent.word}" with ${mostFrequent.count} occurrences.`
);

// Replaced overused words with something else.
const replacements = {
  really: ["truly", "genuinely", "absolutely"],
  very: ["extremely", "exceedingly", "incredibly"],
  basically: ["essentially", "fundamentally", "in essence"],
};

let improvedStory = storyWords.map((word) => {
  let lowerWord = word.toLowerCase();
  if (overusedWords.includes(lowerWord)) {
    let alternatives = replacements[lowerWord];
    return alternatives[Math.floor(Math.random() * alternatives.length)];
  }
  return word;
});

console.log(improvedStory.join(" "));

// Step 9
// Turn your project in

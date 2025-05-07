// Input 1

let sentence = "This is a test sentence and this test is only a test";

// Input 2

let bannedWord = "test";

function ocurancessWord(sentence, bannedWord) {
    let words = sentence.toLowerCase().split(" ");
    let wordCount = {};

    for (let word of words) {
        if (word !== bannedWord) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    }

    console.log(`Repeated words and excluding banned word "${bannedWord}"`);

    for (let word in wordCount) {
        if (wordCount[word] > 1) {
            console.log(`${word}:${wordCount[word]}`);

        }
    }


}
console.log(ocurancessWord(sentence, bannedWord));





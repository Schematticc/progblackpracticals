document.getElementById("senButton").addEventListener("click", GenerateSentence);

const adjectives = ["quick", "slow", "lazy", "huge", "tiny", "energetic", "boring", "upset", "joyful"];
const nouns = ["fox", "dog", "cat", "whale", "crocodile", "elephant", "cow", "pig", "giraffe"];
const verbs = ["runs", "jumps", "leaps", "swims", "walks", "dashes", "paints", "eats", "sleeps"];
const adverbs = ["effectively", "arrogantly", "sternly", "gleefully", "crazily"];

function GenerateSentence(event) {
    let adjectiveList = document.getElementById("adjectives").value.split(" ");
    let nounList = document.getElementById("nouns").value.split(" ");
    let verbList = document.getElementById("verbs").value.split(" ");
    let adverbList = document.getElementById("adverbs").value.split(" ");

    let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let noun = nouns[Math.floor(Math.random() * nouns.length)];
    let verb = verbs[Math.floor(Math.random() * verbs.length)];
    let adverb = adverbs[Math.floor(Math.random() * adverbs.length)];
    
    if (adjectiveList[0] != "") {
        adjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
    }
    if (nounList[0] != "") {
        noun = nounList[Math.floor(Math.random() * nounList.length)];
    }
    if (verbList[0] != "") {
        verb = verbList[Math.floor(Math.random() * verbList.length)];
    }
    if (adverbList[0] != "") {
        adverb = adverbList[Math.floor(Math.random() * adverbList.length)];
    }

    let sentence = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";
    document.getElementById("senDisplay").innerHTML = sentence;
}
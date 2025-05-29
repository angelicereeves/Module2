/*---Function to count characters and set a maximum length.
   To be used for the form on the Top Tracks page---*/
function updateCharCount(text) {
  const maxLength = 300; /*defining constant variables*/
  const currentLength = text.length;
  const remainingChar = maxLength - currentLength;
  console.log(`Characters remaining: ${remainingChar}`); /*printing the remaining character count to console*/
}

/*---Function to validate email address by checking for specific characters.
   To be used for the form on the Join Us page---*/
function validateEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    console.log("Valid email address.");
  } else {
    console.log("Invalid email address."); /*printing the validation result to console*/
  }
}

/*---Function to generate a random lyric from an iconic rock band.---*/
function getRandomLyric() {
  const lyrics = [
    "“You can go your own way” – Fleetwood Mac",
    "“We will, we will rock you!” – Queen",
    "“Come as you are” – Nirvana",
    "“Life in the fast lane” – Eagles",
    "“There's a lady who's sure all that glitters is gold...” – Led Zeppelin"
  ]; /*defining and initializing an array of iconic rock lyrics*/
  let selectedLyric = lyrics[Math.floor(Math.random() * lyrics.length)];
  console.log(`Random Lyric: ${selectedLyric}`);
}

/*---Function to display a random rock 'n' roll trivia question.---*/
function getRockTrivia() {
  const trivia = [
    "Which band famously performed on a rooftop in 1969? (The Beatles)",
    "What was Freddie Mercury's birth name? (Farrokh Bulsara)",
    "Who is known as the 'Godfather of Grunge'? (Neil Young)",
    "Which rock band had a drummer who spontaneously combusted in *Spinal Tap*? (Fictional: Spinal Tap!)",
    "Which song features the lyrics: 'Hello darkness, my old friend'? (The Sound of Silence – Simon & Garfunkel)"
  ];
  let selectedTrivia = trivia[Math.floor(Math.random() * trivia.length)];
  console.log(`Rock Trivia: ${selectedTrivia}`);
}

/*---Function to display the current date.---*/
function getCurrentDate() {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const today = new Date();
  console.log(`Today's Date: ${today.toLocaleDateString(undefined, options)}`);
}










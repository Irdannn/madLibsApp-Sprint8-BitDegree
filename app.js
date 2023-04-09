"Use Strict"

let questionTotal = 9;

let questionCounter = 0;

let solicitation = `Please enter a` ;
let questionArray = [
  `${solicitation} name a problem` ,
  `${solicitation} superhero name` ,
  `${solicitation} villain name` ,
  `${solicitation} name a PC part` ,
  `${solicitation} Name another a PC part` ,
  `${solicitation} noun` ,
  `${solicitation} another noun` ,
  `${solicitation} name a body part` ,
  `${solicitation} relative ("mom", "dad" etc)` ,
  `${solicitation} verb (past-tense)` ,
];

let userInputs = [];
for (let i = questionTotal; i >= 0; i--) {
  console.log(
    questionArray[questionCounter] + `... (${questionTotal} questions left)`
  );
  userInputs.push(
    prompt(
      questionArray[questionCounter] + `... (${questionTotal} questions left)`
    )
  );
  console.log(userInputs);
  questionCounter++;
  questionTotal--;
}

let originalStory = `<h2>Rapunzel grew into the most beautiful child beneath the ${userInputs[0]}.  When she was twelve years old, ${userInputs[1]} shut her into a tower, which lay in a forest.  The tower had no ${userInputs[3]} or ${userInputs[4]}, but only a little ${userInputs[5]} at the very top.  When the ${userInputs[1]} wanted to go in, she stood beneath the ${userInputs[6]} and cried,</h2>
  <h2>"Rapunzel, Rapunzel,</h2>
  <h2>Let down your ${userInputs[7]}."</h2>
  <h2>Rapunzel had magnificent long ${userInputs[7]}, fine as spun gold, and when she heard the voice of the ${userInputs[1]} she wound her braids round one of the hooks of the window, and then the ${userInputs[7]} fell down the side of the tower and ${userInputs[1]} climbed up by it.</h2>
  <h2>After a year or two, it came to pass that the ${userInputs[2]} rode through the forest and went by the tower.  He heard a song which was so lovely that he stood still and listened.  This was Rapunzel who in her loneliness passed her time singing.  ${userInputs[2]} wanted to climb up to her, and looked for the door of the tower, but none was to be found.  He rode home, but the singing had so deeply touched his heart, that every day he went out into the forest and listened to it.</h2>
  <h2>Once when he was standing behind a ${userInputs[9]} listening to Rapunzel's song, he saw ${userInputs[1]} come and heard how she cried,</h2>
  <h2>"Rapunzel, Rapunzel,</h2>
  <h2>Let down your ${userInputs[7]}."</h2>
  <h2>Then Rapunzel let down the braids of her ${userInputs[7]}, and ${userInputs[1]} climbed up to her.</h2> 
  <h2>"If that is the ladder by which one mounts, I will for once try my fortune," thought ${userInputs[2]} and the next day when it began to grow dark, he went to the tower and ${userInputs[10]},</h2>
  <h2>"Rapunzel, Rapunzel,</h2>
  <h2>Let down your ${userInputs[7]}."</h2>
  <h2>Immediately the ${userInputs[7]} fell down and ${userInputs[2]} climbed up.</h2>`;
  console.log(originalStory);

alert(
  "All done, see ur story"
);

console.log(originalStory);
document.write(originalStory);
let start = document.getElementById('start');
let hike = document.getElementById('hike');
let display = document.getElementById('display');
let btnDisplay = document.getElementById('btn-display')
let left = document.getElementById('left');
let right = document.getElementById('right');
let ignore = document.getElementById('ignore');
let investigate = document.getElementById('investigate');
let restart = document.getElementById('restart');
let turn = document.getElementById('turn');
let hack = document.getElementById('hack');
let picture = document.getElementById('picture');
let shoot = document.getElementById('shoot');
let innerDisplay = document.getElementById('inDisplay');

let phrases = [
    "You keep walking down the trail. The sun is shining and the birds are happily chirping.", 
    "The day is beautiful and you are enjoying the wonderful outdoors. You take a deep breath and take in thr beauty or your surrounds.",
    "You walk down the trail happy to be out in nature. What beautiful scenery!"
]

start.addEventListener('click', function () {
    start.classList.add('hidden');
    hike.classList.remove('hidden');
    display.innerText = phrases[Math.trunc(Math.random() * phrases.length)];
});

hike.addEventListener('click', function() {
    picture.classList.add('hidden');
    shoot.classList.add('hidden');
    turn.classList.add('hidden');
    let odds = Math.trunc(Math.random() * 50) + 1;
    if (odds % 7 === 0){
        display.innerText = "You have come to a fork in the road. Choose your path."
        left.classList.remove('hidden');
        right.classList.remove('hidden');
        hike.classList.add('hidden');
    } else if (odds % 9 === 0) {
        display.innerText = "You are happily walking down your trail until you hear a sound. Something is in the bushes. Would do you do?";
        ignore.classList.remove('hidden');
        investigate.classList.remove('hidden');
        hike.classList.add('hidden');
     } else if (odds % 10 === 0){
        display.innerText = "You're trail is becoming narrow. You notice the bushes and trees are getting thicker in front of you. Oh no! It looks like you have come to a deadend. What would you like to do."
        hike.classList.add('hidden');
        turn.classList.remove('hidden');
        hack.classList.remove('hidden');
    } else {
        hike.classList.remove('hidden');
        display.innerText = phrases[Math.trunc(Math.random() * phrases.length)];
    }
    console.log(odds);
});

left.addEventListener('click', function() {
    display.innerText = "You took the left side of the fork and keep walking."
    hike.classList.remove('hidden');
    left.classList.add('hidden');
    right.classList.add('hidden');
});

right.addEventListener('click', function() {
    display.innerText = "You took the right side of the fork and keep walking."
    hike.classList.remove('hidden');
    left.classList.add('hidden');
    right.classList.add('hidden');
});

ignore.addEventListener('click', function() {
    display.innerText = "You ignore the sound and keep walking with a little more pep in your step."
    hike.classList.remove('hidden');
    ignore.classList.add('hidden');
    investigate.classList.add('hidden');
});

investigate.addEventListener('click', function() {
    display.innerText = "You walk toward the bushes with caution. You think 'It can't be that bad, maybe just a little squirel'. You peak throught the bushes... OH NO! It's a big furry bear. You scream, it charges! Flailing your arms in legs to get away, it catches up and eats you. You are no more and the Bear had a good snack."
    hike.classList.add('hidden');
    ignore.classList.add('hidden');
    investigate.classList.add('hidden');
    restart.classList.remove('hidden');
    innerDisplay.innerText = "GAME OVER!";
});

turn.addEventListener('click', function(){
    display.innerText = "You decided to turn around and not to risk hacking throught he bushes into the unknown. You continue to happily walk back down the trail."
    hike.classList.remove('hidden');
    turn.classList.add('hidden');
    hack.classList.add('hidden');
    picture.classList.add('hidden');
    shoot.classList.add('hidden');
});

hack.addEventListener('click', function(){
    let animals = [
        "deer",
        "elk",
        "turkeys",
        "small children playing in a field"
    ];
    let hackPhrases = [
        "You've hacked through the bushes and there are just more bushes. You should turn around.",
        `You have been hacked through the bushes and you see a small clearing. You keep at it and step thorugh and see a beautiful valley. In the distance you see ${animals[Math.trunc(Math.random() * animals.length)]}. You approach slowly. What beautiful creatures! What would you like to do?`,
        "You hack through the bushes and step through. Oh there's the trail. Looks like it was just the back side of the trail.",
    ];
    display.innerHTML = `${hackPhrases[Math.trunc(Math.random() * hackPhrases.length)]}`;
    if (display.innerHTML === hackPhrases[1]) {
        picture.classList.remove('hidden');
        shoot.classList.remove('hidden');
        hike.classList.remove('hidden');
        turn.classList.remove('hidden');
        hack.classList.add('hidden');
    } else if (display.innerHTML === hackPhrases[0]){
        hike.classList.add('hidden');
        turn.classList.remove('hidden');
        hack.classList.add('hidden');
        picture.classList.add('hidden');
        shoot.classList.add('hidden');
   } else {
        hike.classList.remove('hidden');
        turn.classList.add('hidden');
        hack.classList.add('hidden');
        picture.classList.add('hidden');
        shoot.classList.add('hidden');
   }
});

restart.addEventListener('click', function(){
    location.reload();
})

/* if 'start' is clicked remove 'start' display 'hike' 
when 'hike' is clicked randomize
*/
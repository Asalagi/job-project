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
let back = document.getElementById('back');
let hack = document.getElementById('hack');
let picture = document.getElementById('picture');
let shoot = document.getElementById('shoot');
let run = document.getElementById('run');
let fight = document.getElementById('fight');
let home = document.getElementById('home');
let innerDisplay = document.getElementById('inDisplay');

let phrases = [
    "You keep walking down the trail. The sun is shining and the birds are happily chirping.", 
    "The day is beautiful and you are enjoying the wonderful outdoors. You take a deep breath and take in the beauty or your surrounds.",
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
    home.classList.add('hidden');
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
    let investPhrases = [
        "You walk towards the bushes with caution. You reach to push aside branches but you see nothing. As you look down a sneaky little snake slithers over your foot. You jump! Best leave it alone.",
        "You walk towards the bushes with caution. The russeling is getting louder. It must be something big. You prepare yourself to run. You are almost to the bush and BAM something jumps out at you. You jump back and see a cute little rabbit. You feel a little dumb, but how cute and fluffy is this little rabbit.",
        "You walk towards the bushes with caution. The russeling is getting louder. You see a glipse of what looks like brown fur. What could it be? You take a step forward and a big bear steps out and roars. Frozen you are unsure of what to do. Fight or run?",
        "You walk towards the bushes with caution. You reach to push aside the branches. There is nothing there, but you see a shiny penny. Now you're a penny richer!"
    ]
    display.innerText = `${investPhrases[Math.trunc(Math.random() * investPhrases.length)]}`;
    if (display.innerText === investPhrases[2]) {
        hike.classList.add('hidden');
        ignore.classList.add('hidden');
        investigate.classList.add('hidden');
        run.classList.remove('hidden');
        fight.classList.remove('hidden');
    } else {
        hike.classList.remove('hidden');
        ignore.classList.add('hidden');
        investigate.classList.add('hidden');
    }
});

run.addEventListener('click', function() {
    let runPhrases = [
        "You see the bear lumbering towards you. You run! But you are slow. Did you really think your little human legs could outrun a bear. Well they can't. You hear the bear coming closer. You keep running until BAM the bear hits your back. You are on the ground and a bear on your back. Atleast you had a nice hike before your untimely death and you got to feed a bear a snack.",
        "You see the bear lumbering towards you. You run! You turn and your legs start moving as fast as the possibly can. While your running a little fear toot sneaks out. It seems your body is turning on turbo speed. You swiftly turn a corner and look back and see no bear. Your feet and turbo toot has saved you. Do you continue on with your hike or call it a day and go home?"
    ];
    display.innerText = `${runPhrases[Math.trunc(Math.random() * runPhrases.length)]}`;
    if (display.innerText === runPhrases[0]){
        innerDisplay.innerText = "YOU DIED GAME OVER";
        run.classList.add('hidden');
        fight.classList.add('hidden');
        hike.classList.add('hidden');
        restart.classList.remove('hidden');
    } else {
        restart.classList.add('hidden');
        run.classList.add('hidden');
        fight.classList.add('hidden');
        hike.classList.remove('hidden');
        home.classList.remove('hidden');
    }
});


fight.addEventListener('click', function() {
    let fightPhrases = [
        "You see the bear. It stands up on it's hide legs and lets out a big roar. It's go time! This is it! You've always wanted to try and punch a bear. The bear comes are you and you punch. You have fists of steal and stone and you slam your fist into the bears face. It stops stares are you like you are a psycho for punching a bear and turns around and walks away. You won! Would you like to go home and tell your friends you punched a bear or keep hiking?",
        "You see the bear. It stands up on it's hide legs and lets out a big roar. It's go time! You prepare yourself to take down this beast of fur and anger. You run and strike the bear but he is a bear and you are a human. A humane snack. The bear grapples you and you are now a bear chew toy. Well atleast you tried."
    ];
    display.innerText = `${fightPhrases[Math.trunc(Math.random() * fightPhrases.length)]}`;
    if (display.innerText === fightPhrases[1]){
        innerDisplay.innerText = "YOU DIED GAME OVER";
        run.classList.add('hidden');
        fight.classList.add('hidden');
        hike.classList.add('hidden');
        restart.classList.remove('hidden');
    } else {
        restart.classList.add('hidden');
        run.classList.add('hidden');
        fight.classList.add('hidden');
        hike.classList.remove('hidden');
        home.classList.remove('hidden');
    }
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
        back.classList.remove('hidden');
        hack.classList.add('hidden');
        turn.classList.add('hidden');
    } else if (display.innerHTML === hackPhrases[0]){
        hike.classList.add('hidden');
        back.classList.add('hidden');
        turn.classList.remove('hidden');
        hack.classList.add('hidden');
        picture.classList.add('hidden');
        shoot.classList.add('hidden');
   } else {
        hike.classList.remove('hidden');
        back.classList.add('hidden');
        turn.classList.add('hidden');
        hack.classList.add('hidden');
        picture.classList.add('hidden');
        shoot.classList.add('hidden');
   }
});

back.addEventListener('click', function() {
    display.innerText = "You decided to turn around and go back to your trail and let nature be."
    hike.classList.remove('hidden');
    back.classList.add('hidden');
    turn.classList.add('hidden');
    hack.classList.add('hidden');
    picture.classList.add('hidden');
    shoot.classList.add('hidden');
});

picture.addEventListener('click', function() {
    display.innerText = "Wow look at the beauty of nature. You decide to take a picture and go on your merry way."
    hike.classList.remove('hidden');
    back.classList.add('hidden');
    turn.classList.add('hidden');
    hack.classList.add('hidden');
    picture.classList.add('hidden');
    shoot.classList.add('hidden');
});

shoot.addEventListener('click', function() {
    let shootOdds = [
        "Oh look at those tasty creatures. Your trigger finger is getting mighty itchy. You quietly set yourself up, point, focus and pull the trigger. BANG! Gosh dang it you missed! Do you go home feeling defeated or keep walking in hopes to find something else along your hike?",
        "Oh look at those tasty creatures. Your trigger finger is getting mighty itchy. You quietly set yourself up, point, focus and pull the trigger. BANG! Hit! You are overjoyed with your prize. You load up your kill. Do you end your day on a good note and go home or do you continue hiking on."
    ]
    display.innerText = `${shootOdds[Math.trunc(Math.random() * shootOdds.length)]}`;
    hike.classList.remove('hidden');
    home.classList.remove('hidden');
    back.classList.add('hidden');
    turn.classList.add('hidden');
    hack.classList.add('hidden');
    picture.classList.add('hidden');
    shoot.classList.add('hidden');
});

home.addEventListener('click', function() {
    display.innerText = "You have successfully made it home alive!";
    innerDisplay.innerText = "Congrats!";
    restart.classList.remove('hidden');
    hike.classList.add('hidden');
    home.classList.add('hidden');
});

restart.addEventListener('click', function(){
    location.reload();
});


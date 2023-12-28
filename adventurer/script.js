let start = document.getElementById('start');
let hike = document.getElementById('hike');
let display = document.getElementById('display');
let left = document.getElementById('left');
let right = document.getElementById('right');

start.addEventListener('click', function () {
    start.classList.add('hidden');
    hike.classList.remove('hidden');
    display.innerText = "You keep walking down the trail. The sun is shining and the birds are happily chirping."
});

hike.addEventListener('click', function() {
    let odds = Math.trunc(Math.random() * 50) + 1;
    if (odds % 7 === 0){
        display.innerText = "You have come to a fork in the road. Choose your path."
        left.classList.remove('hidden');
        right.classList.remove('hidden');
        hike.classList.add('hidden');
    } else {
        hike.classList.remove('hidden');
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

let phrases = []

/* if 'start' is clicked remove 'start' display 'hike' 
when 'hike' is clicked randomize
*/
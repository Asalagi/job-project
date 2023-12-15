function display(val) {
    document.getElementById('result').value += val
}

function calculatorFunc(event){
    if (event.key === '0' || event.key === '1' || event.key === '2' 
        || event.key === '3' || event.key === '4' || event.key === '5'
        || event.key === '6' || event.key === '7' || event.key === '8'
        || event.key === '9' || event.key === '+' || event.key === '-'
        || event.key === '*' || event.key === '/')
        document.getElementById('result').value += event.key;
    }

let cal = document.getElementById('calcu');
cal.onkeydown = function(event){
    if (event.keyCode === 13){
        console.log('Enter');
        let x = document.getElementById('result').value;
        console.log(x);
        solve();
    }
}

function solve() {
    let x = document.getElementById('result').value;
    let y = match.evaluate(x);
    document.getElementById('result').value = y;
}

function clear(){
    document.getElementById('result').value = "";
}


window.onload = function() {
    let x = document.getElementById('myBtn');
    // x.addEventListener('mouseover', myFunction('Moused over!'));
    // x.addEventListener('click', mySecondFunction('Clicked!'));
    // x.addEventListener('mouseout', myThirdFunction('Moused out!'));
    x.addEventListener('mouseover', myFunction);
    x.addEventListener('click', mySecondFunction);
    x.addEventListener('click', myFourthFunction);
    x.addEventListener('mouseout', myThirdFunction);
}


function myFunction() {
    document.getElementById('demo').textContent = 'Moused over!';
}

function mySecondFunction() {
    document.getElementById('demo').textContent = 'Clicked!';
}

function myThirdFunction() {
    document.getElementById('demo').textContent = 'Moused out!';
}
function myFourthFunction() {
    document.getElementById('demo').textContent = 'Moused out!';
}
const inp = document.querySelector('.input');
const divn = document.querySelector('.txt');

document.getElementById('btn').addEventListener('click', function () {
    if (inp.value.trim() === '') {
        divn.style.display = 'block';
        inp.style.border = '2px solid red'
    } else {
        divn.style.display = 'none';
        inp.style.border = '2px solid black'
    }
});

inp.addEventListener('input', function () {
    if (inp.value.trim() !== '') {
        divn.style.display = 'none';
        inp.style.border = '2px solid black'
    }
});

document.getElementById('btns').addEventListener('click', function () {
    const inp = document.getElementById('inpu')
    if (inp.type === 'password') {
        inp.type = 'text'
    } else {
        inp.type = 'password'
    }
})

const ip = document.getElementById('inputs')
document.getElementById('clicked').addEventListener('click', function() {
    if(ip.value.trim() == ''){
        ip.style.border = '2px solid red'
    } else {
        ip.style.border = '2px solid black'
    }
})

ip.addEventListener('input', function () {
    if (ip.value.trim() !== '') {
        ip.style.border = '2px solid black'
    }
});
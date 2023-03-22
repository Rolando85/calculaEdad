const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
	e.preventDefault();
const birthdateInput = document.querySelector('#birthdate');
const birthdate = new Date(birthdateInput.value);
const nombre = document.querySelector('#nombre').value;
const today = new Date();

// Validar que la fecha de nacimiento no sea posterior a la fecha actual
const diffTime = Math.abs(today - birthdate);
const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
const diffDays = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
if (birthdate > today) {
    result.innerHTML = `La fecha de nacimiento no puede ser posterior a la fecha actual`;
    result.style.color='red'
  } else {
    result.style.color='rgb(0, 0, 0)'
    result.innerHTML = `Hola <b>${nombre}</b> tu edad es: <b>${diffYears}</b> años, <b>${diffMonths}</b> meses y <b>${diffDays}</b> días.`;
  }

  ver_ms()
});

function ver_ms(){
    document.querySelector('.cont_res').classList.add('ver_res')
}

document.querySelector('.res_closs').addEventListener('click',function(){
    document.querySelector('.cont_res').classList.remove('ver_res')
    
})

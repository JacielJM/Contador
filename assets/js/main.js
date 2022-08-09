//contador

let contador = 0;

function incrementar() {
	contador++;
	document.getElementById('contador').innerHTML = contador;
}

function decrementar() {
	contador--;
	document.getElementById('contador').innerHTML = contador;
}

function reset() {
	contador = 0;
	document.getElementById('contador').innerHTML = contador;
}

document.getElementById('decrementar').addEventListener('click', decrementar);
document.getElementById('incrementar').addEventListener('click', incrementar);
document.getElementById('reset').addEventListener('click', reset);

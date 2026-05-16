//window.history.pushState({}, '', 'ATILog?lang=es');

document.getElementById('logo_izq').innerHTML = `${config.site[0]}`;
document.getElementById('logo_mid').innerHTML = `${config.site[1]}`;
document.getElementById('logo_der').innerHTML = `${config.site[2]}`;
const inputElement = document.getElementById('nombre');
inputElement.placeholder = `${config.name}` + '...';
document.getElementById('boton_formulario').innerHTML = `${config.search}`;
document.getElementById('derechos').innerHTML = `${config.copyRight}`;
// Parte 7
document.getElementById('logo_izq').innerHTML = `${config.site[0]}`;
document.getElementById('logo_mid').innerHTML = `${config.site[1]}`;
document.getElementById('logo_der').innerHTML = `${config.site[2]}`;
const inputElement = document.getElementById('nombre');
inputElement.placeholder = `${config.name}` + '...';
document.getElementById('boton_formulario').innerHTML = `${config.search}`;
document.getElementById('derechos').innerHTML = `${config.copyRight}`;
document.getElementById('titulo_principal').innerHTML = `${config.semester}`;

// Parte 8
const listadoPerfiles = profiles;
const tamanioLista = listadoPerfiles.length;

const contenedorUL = document.getElementById('listado_perfiles_principal');

//Parte 11
document.getElementById('boton_formulario').addEventListener('click', function() {
    const valorInput = document.getElementById('nombre').value.toLowerCase();

    localStorage.setItem('searchQuery', valorInput);
});

const searchQuery = localStorage.getItem('searchQuery');
let estructuraTarjeta = ``;

listadoPerfiles.forEach(profiles => {

    const nameLowerCase = profiles.name.toLowerCase();
    if (nameLowerCase.includes(searchQuery) || searchQuery === null || searchQuery === '') {

        estructuraTarjeta = `
            <li class = "listado_perfiles">
                <a href="/profile.html?lang=ES_CI=${profiles.ci}" id="redireccionar">
                    <div class = "tarjeta">
                        <img src="/${profiles.ci}/${profiles.ci}Big${profiles.image_ext}" alt="Foto de Perfil Pc" class = "img_pc">
                        <img src="/${profiles.ci}/${profiles.ci}Small${profiles.image_ext}" alt="Foto de Perfil Movil" class = "img_movil">
                    <div class = "superpuesto">
                        <p class = "name_profile_menu"> ${profiles.name} </p>
                    </div>
                </a>
            </li>
        `;

        contenedorUL.insertAdjacentHTML('beforeend', estructuraTarjeta);
    }
});

if (estructuraTarjeta === `` && searchQuery !== null && searchQuery !== '') {
    document.getElementById('msg_auxiliar').innerHTML = `${config.alert}` + ': ' + `<b>${searchQuery}</b>`;
    document.getElementById('listado_perfiles_principal').style.display = 'none';
}

document.getElementsByClassName('menu_principal')[0].addEventListener('click', function() {
    localStorage.removeItem('searchQuery');
});

//Parte 12
let cont = 0;

document.getElementById('menu').addEventListener('click', function() {
    
    document.querySelector('header').classList.toggle('abierto');
    if (cont % 2 === 0) {
        document.getElementsByClassName('texto_perfil')[0].innerHTML = `${config.profile}`;
        document.getElementsByClassName('texto_perfil')[0].style.display = 'block';
    } else {
        document.getElementsByClassName('texto_perfil')[0].style.display = 'none';
    }
    cont++;
});
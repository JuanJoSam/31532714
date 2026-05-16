// Parte 7
document.getElementById('logo_izq').innerHTML = `${config.site[0]}`;
document.getElementById('logo_mid').innerHTML = `${config.site[1]}`;
document.getElementById('logo_der').innerHTML = `${config.site[2]}`;
const inputElement = document.getElementById('nombre');
inputElement.placeholder = `${config.name}` + '...';
document.getElementById('boton_formulario').innerHTML = `${config.search}`;
document.getElementById('derechos').innerHTML = `${config.copyRight}`;

// Parte 8
const listadoPerfiles = profiles;
const tamanioLista = listadoPerfiles.length;

const contenedorUL = document.getElementById('listado_perfiles_principal');

listadoPerfiles.forEach(profiles => {
    
    const estructuraTarjeta = `
        <li class = "listado_perfiles">
            <a href="/profile.html?lang=ES_CI=${profiles.ci}" id="redireccionar">
                <div class = "tarjeta">
                        <img src="/${profiles.ci}/${profiles.ci}Big${profiles.image_ext}" alt="Foto de Perfil Pc" class = "img_pc">
                        <img src="/${profiles.ci}/${profiles.ci}Small${profiles.image_ext}" alt="Foto de Perfil Movil" class = "img_movil">
                    <div class = "superpuesto">
                        <p class = "name_profile_menu"> ${profiles.name} </p>
                    </div>
                </div>
            </a>
        </li>
    `;

    contenedorUL.insertAdjacentHTML('beforeend', estructuraTarjeta);
});
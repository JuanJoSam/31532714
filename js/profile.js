//Parte 9
document.getElementById('logo_izq').innerHTML = `${config.site[0]}`;
document.getElementById('logo_mid').innerHTML = `${config.site[1]}`;
document.getElementById('logo_der').innerHTML = `${config.site[2]}`;
const inputElement = document.getElementById('nombre');
inputElement.placeholder = `${config.name}` + '...';
document.getElementById('boton_formulario').innerHTML = `${config.search}`;
document.getElementById('derechos').innerHTML = `${config.copyRight}`;
document.getElementById('name_profile').innerHTML = `${profile.name}`;
document.getElementById('description').innerHTML = `${profile.description}`;
document.getElementById('color_favorito').innerHTML = `${config.color}` + ':';
document.getElementById('color_favorito_valor').innerHTML = `${profile.color}`;
document.getElementById('lenguajes_favoritos').innerHTML = `${config.language}` + ':';
const lenguajesSeparados = profile.language.join(', ');
document.getElementById('lenguajes_favoritos_valor').innerHTML = `${lenguajesSeparados}`;
document.getElementById('encabezado').innerHTML = `${profile.name}`;

if(profile.book.length > 1) {
    document.getElementById('libro_favorito').innerHTML = `${config.book[1]}` + ':';
} else {
    document.getElementById('libro_favorito').innerHTML = `${config.book[0]}` + ':';
}
const librosSeparado = profile.book.join(', ');
document.getElementById('libro_favorito_valor').innerHTML = `${librosSeparado}`;

if(profile.music.length > 1) {
    document.getElementById('musica_favorita').innerHTML = `${config.music[1]}` + ':';
} else {
    document.getElementById('musica_favorita').innerHTML = `${config.music[0]}` + ':';
}
const musicaSeparada = profile.music.join(', ');
document.getElementById('musica_favorita_valor').innerHTML = `${musicaSeparada}`;

if(profile.video_game.length > 1) {
    document.getElementById('videojuego_favorito').innerHTML = `${config.video_game[1]}` + ':';
} else {
    document.getElementById('videojuego_favorito').innerHTML = `${config.video_game[0]}` + ':';
}
const videoJuegosSeparados = profile.video_game.join(', ');
document.getElementById('videojuego_favorito_valor').innerHTML = `${videoJuegosSeparados}`;

const emailEdited = (profile.email) ? config.email.slice(0, -8) : config.email;
document.getElementById('contacto').innerHTML = `${emailEdited}:  <b><a href="mailto:${profile.email}">${profile.email}</a></b>`;

const imagenPC = document.querySelector('.izquierda_pc');
imagenPC.src = `/${profile.ci}/${profile.ci}Big${profile.image_ext}`;

const imagenMovil = document.querySelector('.izquierda_movil');
imagenMovil.src = `/${profile.ci}/${profile.ci}Small${profile.image_ext}`;

//Parte 11
document.getElementById('boton_formulario').addEventListener('click', function(e) {
    e.preventDefault();

    const valorInput = document.getElementById('nombre').value.toLowerCase();

    localStorage.setItem('searchQuery', valorInput);
    window.location.href = 'index.html'; 
});

//Parte 12
let cont = 0;

document.getElementById('menu').addEventListener('click', function() {
    
    // Modificación para el uso de this:
    // Menú
    console.log("Menú", this); // <-- Insertado para el análisis
    document.querySelector('header').classList.toggle('abierto');

    if (cont % 2 === 0) {
        document.getElementsByClassName('texto_perfil')[0].innerHTML = `${config.profile}`;
        document.getElementsByClassName('texto_perfil')[0].style.display = 'block';
    } else {
        document.getElementsByClassName('texto_perfil')[0].style.display = 'none';
    }
    cont++;
});

// Modificación para el uso de this:

// Dentro del evento del botón de formulario
document.getElementById('boton_formulario').addEventListener('click', function(e) {
   
    e.preventDefault();
    console.log("Botón Formulario Profiles:", this); // <-- Insertado para el análisis
    const valorInput = document.getElementById('nombre').value.toLowerCase();
    localStorage.setItem('searchQuery', valorInput);
    window.location.href = 'index.html'; 
});

// Contexto global
console.log("Ámbito Global:", this); // <-- Insertado para el análisis
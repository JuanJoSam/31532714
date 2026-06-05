// Crea una promesa para cargar scripts dinámicamente con rendimiento optimizado
function cargarScriptAsincrono(ruta) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = ruta;
        
        // Forzamos la carga asíncrona sin bloquear el renderizado del HTML
        script.async = true; 

        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`No se pudo cargar el recurso: ${ruta}`));
        document.head.appendChild(script);
    });
}

// 2. Descarga los recursos en paralelo
async function cargarPerfilDelSistema() {
    const urlParams = new URLSearchParams(window.location.search);
    const cadena = urlParams.get('lang')?.toUpperCase() || '';
    const idioma = cadena.slice(0, 2);
    const ci = cadena.slice(6);

    try {
        // Descargamos ambos scripts simultáneamente en paralelo
        await Promise.all([
            cargarScriptAsincrono(`/conf/config${idioma}.json`),
            cargarScriptAsincrono(`/${ci}/profile.json`)
        ]);

        // Una vez que ambos scripts se cargaron con éxito, las variables globales 'config' y 'profile'
        // ya existen en memoria, por lo que podemos proceder a pintar el DOM de forma segura.
        inyectarDatosEnDOM();

    } catch (error) {
        console.error("Error al transferir o procesar los recursos de rendimiento:", error);
    }
}

// 3. Modifica el HTML con los datos ahora disponibles
function inyectarDatosEnDOM() {
    // Parte 9
    document.getElementById('logo_izq').innerHTML = `${config.site[0]}`;
    document.getElementById('logo_mid').innerHTML = `${config.site[1]}`;
    document.getElementById('logo_der').innerHTML = `${config.site[2]}`;
    
    const inputElement = document.getElementById('nombre');
    if (inputElement) inputElement.placeholder = `${config.name}...`;
    
    document.getElementById('boton_formulario').innerHTML = `${config.search}`;
    document.getElementById('derechos').innerHTML = `${config.copyRight}`;
    document.getElementById('name_profile').innerHTML = `${profile.name}`;
    document.getElementById('description').innerHTML = `${profile.description}`;
    document.getElementById('color_favorito').innerHTML = `${config.color}:`;
    document.getElementById('color_favorito_valor').innerHTML = `${profile.color}`;
    document.getElementById('lenguajes_favoritos').innerHTML = `${config.language}:`;
    
    const lenguajesSeparados = profile.language.join(', ');
    document.getElementById('lenguajes_favoritos_valor').innerHTML = `${lenguajesSeparados}`;
    document.getElementById('encabezado').innerHTML = `${profile.name}`;

    if (profile.book.length > 1) {
        document.getElementById('libro_favorito').innerHTML = `${config.book[1]}:`;
    } else {
        document.getElementById('libro_favorito').innerHTML = `${config.book[0]}:`;
    }
    const librosSeparado = profile.book.join(', ');
    document.getElementById('libro_favorito_valor').innerHTML = `${librosSeparado}`;

    if (profile.music.length > 1) {
        document.getElementById('musica_favorita').innerHTML = `${config.music[1]}:`;
    } else {
        document.getElementById('musica_favorita').innerHTML = `${config.music[0]}:`;
    }
    const musicaSeparada = profile.music.join(', ');
    document.getElementById('musica_favorita_valor').innerHTML = `${musicaSeparada}`;

    if (profile.video_game.length > 1) {
        document.getElementById('videojuego_favorito').innerHTML = `${config.video_game[1]}:`;
    } else {
        document.getElementById('videojuego_favorito').innerHTML = `${config.video_game[0]}:`;
    }
    const videoJuegosSeparados = profile.video_game.join(', ');
    document.getElementById('videojuego_favorito_valor').innerHTML = `${videoJuegosSeparados}`;

    const emailEdited = (profile.email) ? config.email.slice(0, -8) : config.email;
    document.getElementById('contacto').innerHTML = `${emailEdited}: <b><a href="mailto:${profile.email}">${profile.email}</a></b>`;

    // Descarga condicional de imágenes según Viewport activo
    if (window.matchMedia("(min-width: 1025px)").matches) {
        const imagenPC = document.querySelector('.izquierda_pc');
        if (imagenPC) imagenPC.src = `/${profile.ci}/${profile.ci}Big${profile.image_ext}`;
    } else {
        const imagenMovil = document.querySelector('.izquierda_movil');
        if (imagenMovil) imagenMovil.src = `/${profile.ci}/${profile.ci}Small${profile.image_ext}`;
    }
}


// 4. EVENT LISTENERS EXTERNOS

document.getElementById('boton_formulario').addEventListener('click', function(e) {
    e.preventDefault();
    console.log("Botón Formulario Profiles:", this); 
    const valorInput = document.getElementById('nombre').value.toLowerCase();
    localStorage.setItem('searchQuery', valorInput);
    window.location.href = 'index.html'; 
});

let cont = 0;
document.getElementById('menu').addEventListener('click', function() {
    console.log("Menú", this); 
    document.querySelector('header').classList.toggle('abierto');
    if (cont % 2 === 0) {
        document.getElementsByClassName('texto_perfil')[0].innerHTML = `${config.profile}`;
        document.getElementsByClassName('texto_perfil')[0].style.display = 'block';
    } else {
        document.getElementsByClassName('texto_perfil')[0].style.display = 'none';
    }
    cont++;
});

cargarPerfilDelSistema();
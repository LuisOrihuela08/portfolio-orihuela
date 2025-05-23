let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        //habilidades[0].classList.add("javascript");
       // habilidades[1].classList.add("htmlcss");
       // habilidades[2].classList.add("java");
        //habilidades[3].classList.add("python");
       // habilidades[4].classList.add("sql");
        habilidades[0].classList.add("comunicacion");
        habilidades[1].classList.add("creatividad");
        habilidades[2].classList.add("trabajo");
        habilidades[3].classList.add("dedicacion");
        habilidades[4].classList.add("proyect");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
}

//Esto es para mandar correo a traves del formulario con Emailjs
const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_iaom2eo';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Mensaje';
                alert('Mensaje enviado correctamente!');
            }, (err) => {
                btn.value = 'Enviar Mensaje';
                alert(JSON.stringify(err));
            });
    });

//Esto es para mostrar los videos de la seccion de proyectos
function abrirModal(el) {
    const videoUrl = el.getAttribute("data-video");
    const iframe = document.getElementById("youtubeVideo");
    iframe.src = videoUrl;
    document.getElementById("modalVideo").style.display = "flex";
  }

  function cerrarModal() {
    const modal = document.getElementById("modalVideo");
    const iframe = document.getElementById("youtubeVideo");
    modal.style.display = "none";
    iframe.src = ""; // Detiene el video
  }
  // Cerrar modal al hacer clic fuera del contenido
  window.onclick = function(event) {
    const modal = document.getElementById("modalVideo");
    if (event.target === modal) {
      cerrarModal();
    }
  }
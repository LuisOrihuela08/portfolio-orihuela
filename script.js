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

//Codigo para el envio de correo
const btn = document.getElementById('button');
const form = document.getElementById('form');

let isSending = false;          // evita múltiples envíos simultáneos
let lastSendTime = 0;           // timestamp del último envío
const COOLDOWN_MS = 10000;       // tiempo de espera entre envíos (10 segundos)

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const now = Date.now();

    // Verifica cooldown (1 correo por segundo)
    if (now - lastSendTime < COOLDOWN_MS) {
        alert('Estás enviando mensajes muy rápido. Inténtalo de nuevo en un momento.');
        return;
    }

    // Evita doble envío mientras se está procesando
    if (isSending) {
        return;
    }

    isSending = true;
    lastSendTime = now;

    btn.value = 'Enviando...';
    btn.disabled = true;

    const serviceID = 'default_service';
    const templateID = 'template_iaom2eo';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar Mensaje';
            alert('Mensaje enviado correctamente!');
        }, (err) => {
            btn.value = 'Enviar Mensaje';
            alert(JSON.stringify(err));
        })
        .finally(() => {
            isSending = false;
            btn.disabled = false;
        });
});


//Esto es para mostrar los videos de la seccion de proyectos
function abrirModalvideo(el) {
    // 🔥 NUEVO: Agregar clase al body para desactivar hovers
    document.body.classList.add('modal-activo');

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

    // 🔥 NUEVO: Remover clase del body
    document.body.classList.remove('modal-activo');
  }
  // Cerrar los modales al hacer clic fuera del contenido
  window.onclick = function(event) {
    const modal = document.getElementById("modalVideo");
    const modalDocker = document.getElementById("modalDocker");

    if (event.target === modal) {
      cerrarModal();
    }

    if(event.target === modalDocker){
        cerrarModalDocker();
    }
  }

  //Esto es para mostrar un modal con instrucciones de instalacion
  function abrirModalDocker(){
    // 🔥 NUEVO: Agregar clase al body
    document.body.classList.add('modal-activo');
    
    const modalDocker = document.getElementById("modalDocker");
    modalDocker.style.display = "flex";
    document.body.style.overflow = "hidden";

    
    
  }

  function cerrarModalDocker(){
    const modalDocker = document.getElementById("modalDocker");
    modalDocker.style.display = "none";
    document.body.style.overflow = "auto";

    //Resetear el boton de copiar
    const copyButton = document.querySelector(".copy-button");
    const copyComand = document.getElementById("copyComand");
    copyButton.classList.remove("copied");
    copyComand.textContent ="Copiar";

     // 🔥 NUEVO: Remover clase del body
    document.body.classList.remove('modal-activo');
  }

  function copiarComando(){
    const comand = document.getElementById("comandDocker").textContent;
    const copyButton = document.querySelector(".copy-button");
    const copyComand = document.getElementById("copyComand");

    navigator.clipboard.writeText(comand).then(() => {
        copyButton.classList.add("copied");
        copyButton.textContent = "¡Copiado!";

        setTimeout(() => {
            copyButton.classList.remove("copied");
            copyComand.textContent ="Copiar";
        }, 5000);
    }).catch(err => {
        console.error('Error al copiar el comando: ', err);
        alert('Error al copiar el comando. Por favor, inténtalo de nuevo.');
    });
  }
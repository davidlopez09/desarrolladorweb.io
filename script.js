function selecionar(link){
    var opciones = document.querySelector('#links a');
    opciones[0].className="";
    opciones[1].className="";
    opciones[2].classNae="";
    opciones[3].classNamme="";
    opciones[4].className="";
    link.className = "seleccionado";

    var x = document.getElementById("nav");
    x.className="";
    
} 

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className += "responsive";
    } else {
        x.className = "";
    }
}

function seleccionar(element) {
    var links = document.querySelectorAll("#nav ul a");
    links.forEach(function(link) {
        link.classList.remove("seleccionado");
    });
    element.classList.add("seleccionado");

    // Cerrar el menú si está en modo responsive
    var nav = document.getElementById("nav");
    if (nav.className === "responsive") {
        nav.className = "";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("html").setAttribute('data-progress', 95);
    document.getElementById("js").setAttribute('data-progress', 70);
    document.getElementById("bd").setAttribute('data-progress', 84);
    document.getElementById("php").setAttribute('data-progress', 80);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const bar = entry.target.children[0];
            if (entry.isIntersecting) {
                bar.style.width = bar.getAttribute('data-progress') + '%';
            } else {
                bar.style.width = '0%';
            }
        });
    }, {
        threshold: 0.5 
    });

    document.querySelectorAll('.barra').forEach(bar => {
        observer.observe(bar);
    });
});


const roles = ["Desarrollador web", "Desarrollador front-end", "Desarrollador back-end"];
let currentRole = 0;
const roleElement = document.getElementById("role");

function typeRole() {
  roleElement.textContent = roles[currentRole];
  roleElement.style.animation = 'no ne'; 
  roleElement.offsetHeight; 
  roleElement.style.animation = 'typing 2s steps(30, end), blink-caret 0.75s step-end infinite';

  setTimeout(() => {
    roleElement.style.animation = 'none'; 
    roleElement.offsetHeight;
    roleElement.style.animation = 'deleting 2s steps(30, end)';

    setTimeout(() => {
      currentRole = (currentRole + 1) % roles.length;
      typeRole();
    }, 2000); 
  }, 3000);  
}

document.addEventListener("DOMContentLoaded", typeRole);

document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('rol');
    const text = textElement.innerHTML;
    textElement.innerHTML = '';
    textElement.style.width = text.length + 'ch'; 

    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); 
        }
    }

    typeWriter();
});


window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('html').style.width = '95%';
    document.getElementById('js').style.width = '80%';
    document.getElementById('bd').style.width = '94%';
    document.getElementById('php').style.width = '90%';
  });

  AOS.init();

  



  

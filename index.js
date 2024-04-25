//sending email
function sendMail(event) {
    event.preventDefault();  // Adiciona esta linha

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceId = "service_ge9gu8m";
    const templateId = "template_htx6mpp";

    emailjs.send(serviceId, templateId, params)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message sent successfully");
            // Limpa o formulário aqui
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }, function (error) {
            console.log('FAILED...', error);
        });
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", sendMail);
});


//menu navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bt-x');
    navbar.classList.toggle('active');
}



//scroll section

// Seleciona todas as seções e links de navegação
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    // Encontra a seção que está mais próxima do topo da página
    sections.forEach(section => {
        const sectionTop = window.scrollY + 200; // Ajuste este valor conforme necessário para melhorar a precisão
        const sectionOffset = section.offsetTop;

        if (sectionTop >= sectionOffset) {
            currentSection = section.getAttribute('id');
        }
    });

    // Atualiza os links de navegação com base na seção visível
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(currentSection)) {
            link.classList.add('active');
        }
    });
});



//sticky header
window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    //remove menu when click on item
    menuIcon.classList.remove('bt-x');
    navbar.classList.remove('active');
}
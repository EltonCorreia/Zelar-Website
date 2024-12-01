function enviarEmail()
{
    let templateParams = {
        subject: document.getElementById('subject').value,
        email: document.getElementById('email').value,
        name: document.getElementById('name').value,
        message: document.getElementById('message').value,
    }

    emailjs.send('service_4vfuknh', 'template_z8z9bf7', templateParams).then(alert("Mensagem enviada!"));  
}

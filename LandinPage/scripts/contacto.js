function enviarCorreo() {
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;

  const asunto = encodeURIComponent(`Mensaje de contacto de ${nombre}`);
  const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`);

  window.location.href = `mailto:susana.hurtado.psi@gmail.com?subject=${asunto}&body=${cuerpo}`;
  return false; // evita que el formulario se envíe por defecto
}

export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length;
  }
};

export const mostrarMensaje = (mensaje) => {
  Swal.fire({
    title: mensaje,
    icon: "success",
    draggable: true,
    confirmButtonText: "Genial!",
    backdrop: false,
    customClass: {
      confirmButton: "btn-msj",
      popup: "box-msj",
    },
  });

  /*   alert(mensaje); */
};

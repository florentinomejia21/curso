let refBoton = document.getElementById("boton");
let refFeedback = document.getElementById("feedback");

refBoton.addEventListener("click", onClick);

function onClick() {
  let refNumero1 = parseInt(document.getElementById("numero1").value);
  let refNumero2 = parseInt(document.getElementById("numero2").value);
  let refNumero3 = parseInt(document.getElementById("numero3").value);

  if (isNaN(refNumero1) || isNaN(refNumero2) || isNaN(refNumero3)) {
    refFeedback.innerText = "No todas las cajas tienen un valor numérico.";
    refFeedback.style.color = "red";
  } else {
    if (refNumero1 > refNumero2 && refNumero1 > refNumero3) {
      refFeedback.innerText = "El número mayor es:" + refNumero1;
    } else if (refNumero2 > refNumero1 && refNumero2 > refNumero3) {
      refFeedback.innerText = "El número mayor es:" + refNumero2;
    } else {
      refFeedback.innerText = "El número mayor es:" + refNumero3;
    }
    refFeedback.style.color = "green";
  }

  // alert("Se presionó el botón!");
}

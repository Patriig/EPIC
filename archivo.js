var elementoBoton = document.getElementById("boton")
elementoBoton.addEventListener("click", cambiarTexto)

var elementoTitulo= document.getElementById("titulo")

function cambiarTexto()
{ if(elementoTitulo.classList.contains("activado"))
 {
    elementoTitulo.classList.remove("activado")
    elementoTitulo.classList.add("desactivado")
    elementoTitulo.innerText = "Hasta luego"
  }
 else if(elementoTitulo.classList.contains("desactivado"))
 {
   elementoTitulo.classList.remove ("desactivado")
  elementoTitulo.classList.add ("activado") 
   elementoTitulo.innerText ="Bienvenido otra vez"
 }
}

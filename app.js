
function login(form){
    var user, pass

    user = document.getElementById("usuario").value
    pass =  document.getElementById("contraseña").value

    if (user == "Mali" && pass == "1234"){
    location="princi1.html"
    }else if (user == "Gera" && pass == "4321"){
    location="princi2.html"
    }else if (user == "Maui" && pass == "5678"){
    location="princi3.html"
   }else {
    alert("Error de Usuario o Contraseña, verifica información")
   }
}

function resultado(){
    var nivel = document.getElementById("nivel").value; 
    console.log(nivel)



if (nivel == 1){
        document.querySelector('#verificar').innerHTML = "Nível: Estagiário  Valor: R$10"         

} else if  (nivel == 2)  {

 document.querySelector('#verificar').innerHTML = "Nível: júnior , Valor: R$20" 

} else if  (nivel == 3){

document.querySelector('#verificar').innerHTML = "Nível: Pleno, Valor: R$35" 

} else if (nivel == 4) 

document.querySelector('#verificar').innerHTML = "Nível: Sênior,  Valor: R$50"

else  {

document.querySelector('#verificar').innerHTML = "Opção invalida"

} 
}
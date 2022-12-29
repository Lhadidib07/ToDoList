var todo_list = document.getElementById('todo_list');
var inputeField = document.getElementById('inputeField'); // recupérer la tache 
var sup="suprimer";
var i=0;

function addToDoButton(){
    if(inputeField.value =="") // verfier si l'input est vide 
    alert("vous n'avez pas remplis de tache "); 
    else{
        var nvlElement = document.createElement('li'); // je crée un li 
        nvlElement.id=id="todo_list"+i; // je donne un id a mon li 
        nvlElement.innerHTML=inputeField.value+"<button class=todo_list_bouton  onclick=suprimer("+i+");>"+sup+ "</button>"; // creation du bouton 
        todo_list.appendChild(nvlElement); // j'ajoute mon nvElement a la todo_list 
    }
    inputeField.value =""; // pour vider l'endroit du inpute 
    i++; // je l'utilise pour enlever les taches effectuer 
}   

function suprimer(i){
 var ligne = document.getElementById('todo_list').firstElementChild; // je passe au premier Li 
 while(ligne.id != "todo_list"+i ){ // je verfie si Id != de l'id que je veux je cherche encore 
    ligne = ligne.nextElementSibling ; 
 }
 if(ligne.id == "todo_list"+i){  // je verfie si j'ai bien trouver l'id que je voulais 
  ligne.parentNode.removeChild(ligne); // je suprime 
}
}
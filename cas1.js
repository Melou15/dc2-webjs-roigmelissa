let elt = document.getElementById('main');
elt.innerHTML = "<div>texte 1</div><div>texte2</div><div>texte 3</div>";

let newElm = document.createElement("div");
newElm.innerHTML = "<div>texte4</div>";
elt.appendChild(newElm);

//* Remplacer élément que l'on à par une section et 2 span"//

elt.replaceChild(document.createElement("section"), newElm);
newElm.innerHTML = "<section><p><span>coucou je test quelque chose</span></p><p><span>coucou je test autre chose </span></p></section>";
elt.appendChild(newElm);

const mel = document.getElementById('bouton');
mel.addEventListener('click', function(){
	mel.innerHTML = "ET C'EST RÉUSSI !";
	elt.style = "color:blue";
});


let objSon = {
	nom : "serpiclean",
	longueur : 20,
	largeur : 30,
	poids : 500,
	fonction : "lave le sol",
	classe : "A",
}
let objLinea = JSON.stringify(objSon);
localStorage.setItem("serpiere",objLinea);


let serpi = localStorage.getItem("serpiere");
alert(objSon.nom);
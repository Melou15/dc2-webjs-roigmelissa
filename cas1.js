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
	prix : 8.99,
	absorption : 98.5
}
let objLinea = JSON.stringify(objSon);
localStorage.setItem("serpiere",objLinea);


let serpi = localStorage.getItem("serpiere");
let pli = JSON.parse(serpi);
elt.innerHTML += pli.nom;


const nameInput = document.getElementById('input');
const registrer = document.getElementById('display');
const displayArea = document.getElementById('displayArea');

registrer.addEventListener('click', function(){
	const name = nameInput.value;
	localStorage.setItem("nom", name);
});


const ret = document.getElementById('retour');
ret.addEventListener('click',function(){
	var text = localStorage.getItem("text");
	if (text) {
		displayArea.textContent = "Texte enregistré : " + text;
		localStorage.removeItem("text");
	}
	});
	


var str = "https://www.domain.com/page?name=francois1&id=opwiueru3920983r2&lastname=john";
var url = new URL(str);
var search_params = new URLSearchParams(url.search);

if (search_params.has('name')){
	var name = search_params.get('name');
	console.log(name);
	var id = search_params.get('id');
	console.log(id);
	var lastname = search_params.get('lastname');
	console.log(lastname);
}






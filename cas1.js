let elt = document.getElementById('main');
elt.innerHTML = "<div>texte 1</div><div>texte2</div><div>texte 3</div>";

let newElm = document.createElement("div");
newElm.innerHTML = "<div>texte4</div>";
elt.appendChild(newElm);

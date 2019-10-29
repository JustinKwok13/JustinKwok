document.addEventListener('DOMContentLoaded', (event)=> {
  let el1 = document.getElementById('artistbutton');
  el1.addEventListener('click', buttonartist);  

  let el2 = document.getElementById('addbtn');
  el2.addEventListener('click', addartist);

  let el3 = document.getElementById('searchbutton');
  el3.addEventListener('click', searchartist);

  loading();
})

function deletediv(e, name)
{
    localStorage.removeItem(name);
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}

function buttonartist() {
    var x = document.getElementById("inputdiv");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function addartist() {
    var image = document.getElementById("imginput").value;
    var name = document.getElementById("nameinput").value;
    var about = document.getElementById("aboutinput").value;
    localStorage.setItem(name, JSON.stringify([image, name, about]));
    buttonadd(image, name, about);

    document.getElementById("imginput").textContent = "";
    document.getElementById("nameinput").textContent = "";
    document.getElementById("aboutinput").textContent = "";
}

function buttonadd(image, name, about){
    document.getElementById("inputdiv").style.display = "none";

    let div = document.createElement("div");
    div.setAttribute("class", "list")

    let div1 = document.createElement("div");
    div1.setAttribute("class", "triplediv");
    div1.setAttribute("id", "trip1");
    div.appendChild(div1);

    let div2 = document.createElement("div");
    div2.setAttribute("class", "triplediv");
    div2.setAttribute("id", "trip2");
    div.appendChild(div2); 

    let div3 = document.createElement("div");
    div3.setAttribute("class", "triplediv");
    div3.setAttribute("id", "trip3");
    div.appendChild(div3);

    let img = document.createElement("img");
    img.setAttribute("class", "listimg");
    img.setAttribute("src", image);
    div1.appendChild(img);

    let artname = document.createElement("p");
    artname.setAttribute("class", "listtexttitle");
    artname.textContent = name;
    div2.appendChild(artname);

    let artdesc = document.createElement("p");
    artdesc.setAttribute("class", "listtext");
    artdesc.textContent = about;
    div2.appendChild(artdesc);

    let del = document.createElement("button");
    del.setAttribute("id", "delbtn");
    del.onclick = function() {
        deletediv(del, name)
    };
    del.textContent = "Delete";
    div3.appendChild(del);

    document.body.append(div);
    
}

function loading(){
    for (var i = 0; i < localStorage.length; i++) {
        var loc = JSON.parse(localStorage.getItem(localStorage.key(i)));
        console.log(loc);
        buttonadd(loc[0], loc[1], loc[2]);
    }
}

function searchartist(){
    var searchname = document.getElementById('searchtext').value;

    var divs = document.getElementsByClassName('list');
    while(divs[0]){
        divs[0].parentNode.removeChild(divs[0]);
    }

    for (var i = 0; i < localStorage.length; i++) {
        var loc = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (JSON.stringify(loc[1]).includes(searchname)) {
            buttonadd(loc[0], loc[1], loc[2]);
        }    
    }

}
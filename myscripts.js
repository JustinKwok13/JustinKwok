document.addEventListener('DOMContentLoaded', (event)=> {
  let el1 = document.getElementById('artistbutton');
  el1.addEventListener('click', buttonartist);  

  let el2 = document.getElementById('addbtn');
  el2.addEventListener('click', buttonadd);
})

function deletediv(e)
{
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

function buttonadd(){
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
    img.setAttribute("src", document.getElementById("imginput").value);
    div1.appendChild(img);

    let artname = document.createElement("p");
    artname.setAttribute("class", "listtexttitle");
    artname.textContent = document.getElementById("nameinput").value;
    div2.appendChild(artname);

    let artdesc = document.createElement("p");
    artdesc.setAttribute("class", "listtext");
    artdesc.textContent = document.getElementById("aboutinput").value;
    div2.appendChild(artdesc);

    let del = document.createElement("button");
    del.setAttribute("id", "delbtn");
    del.setAttribute("onclick", "deletediv(this)");
    del.textContent = "Delete";
    div3.appendChild(del);

    document.body.append(div);
}
// window = function() {
window.addEventListener("load", function(){
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});

window.addEventListener("load", function(){
    var section2 = document.getElementById("section2");
    var inputs = section2.getElementsByTagName("input");
    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});

window.addEventListener("load", function(){
    var section3 = document.getElementById("section3");
    var inputs = section3.querySelectorAll("input");
    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x+y;
    };
});

window.addEventListener("load", function(){
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");

    var input1 = box.children[0];
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okay";
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input");

    changeButton.onclick = function(){
        //img.src = "images/" + imgSelect.value;
        img.src = "images/" + srcInput.value;
        // img.style["border-color"] = colorInput.value;
        img.style.borderColor = colorInput.value;
    };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section6");

    var titleInput = section.querySelector(".title-input");
    var menuListUl = section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    addButton.onclick = function(){
        /* 
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        menuListUl.appendChild(txtNode); 
        */

        /*
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        var aNode = document.createElement("a");
        var liNode = document.createElement("li");

        aNode.href="";
        aNode.appendChild(txtNode);
        liNode.appendChild(aNode);
        menuListUl.appendChild(liNode);
        */

        /*
        var title = titleInput.value;
        menuListUl.innerHTML += '<li><a href="">' + title + '</a></li>';
        */

        var title = titleInput.value;
        var html = '<a href="">' + title + '</a>';
        var li = document.createElement("li");
        li.innerHTML = html;

        menuListUl.append(li);
    }

    delButton.onclick = function(){
        /*
        var txtNode = menuListUl.childNodes[0];
        menuListUl.removeChild(txtNode);
        */

        /*
        var liNode = menuListUl.children[0];
        menuListUl.removeChild(liNode);
        */

        var liNode = menuListUl.children[0];
        liNode.remove();
    }
});
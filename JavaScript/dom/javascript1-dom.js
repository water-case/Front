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

//Ex7 : ?????? ????????? ????????? ??????
window.addEventListener("load", function(){
    var notices = [
        {id:5, title:"?????????~~~", regDate:"2019-01-26", writerId:"newlec", hit:0},
        {id:6, title:"??? ??? ????????????~", regDate:"2019-01-26", writerId:"newlec", hit:17}
    ];

    var section = document.querySelector("#section7");
    
    var noticeList =section.querySelector(".notice-list"); 
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");

    cloneButton.onclick = function(){
        var trNode = noticeList.querySelector("tbody tr");
        var cloneNode = trNode.cloneNode(true);
        var tds = cloneNode.querySelectorAll("td");

        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = '<a href = "' + notices[0].id + '">' + notices[0].title + '</a>';
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;

        tbodyNode.append(cloneNode);
    };

    templateButton.onclick = function(){
        var template = section.querySelector("template");
        var cloneNode = document.importNode(template.content, true);
        var tds = cloneNode.querySelectorAll("td");

        tds[0].textContent = notices[0].id;

        //tds[1].innerHTML = '<a href = "' + notices[0].id + '">' + notices[0].title + '</a>';
        var aNode = tds[1].children[0];
        aNode.href = notices[0].id;
        aNode.textContent = notices[0].title;

        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;

        tbodyNode.append(cloneNode);
        
    };

});

//Ex8-?????? ????????? ?????????
window.addEventListener("load", function(){

    var section = document.querySelector("#section8");
    
    var noticeList =section.querySelector(".notice-list"); 
    var tbodyNode = noticeList.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

    var currentNode = tbodyNode.firstElementChild;//.children[0];

    downButton.onclick = function(){
        var nextNode = currentNode.nextElementSibling;
        if(nextNode == null){
            alert("??? ?????? ????????? ??? ????????????");
            return;
        }
        
        // tbodyNode.insertBefore(nextNode, currentNode);

        currentNode.insertAdjacentElement("beforebegin" ,nextNode);
    };

    upButton.onclick = function(){
        var preNode = currentNode.previousElementSibling;
        if(preNode == null){
            alert("??? ?????? ????????? ??? ????????????");
            return;
        }
        
        // tbodyNode.insertBefore(currentNode, preNode);

        currentNode.insertAdjacentElement("afterend" ,preNode);
    };

});

//Ex9-?????? ???????????? ????????? ????????????, ????????? ???????????????
window.addEventListener("load", function(){

    var section = document.querySelector("#section9");
    
    var noticeList =section.querySelector(".notice-list"); 
    var tbody = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox");
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");

    allCheckbox.onchange = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']");
        for(var i=0; i<inputs.length; i++)
            inputs[i].checked = allCheckbox.checked;
    };

    delButton.onclick = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        
        for(var i=0; i<inputs.length; i++)
            inputs[i].parentElement.parentElement.remove();
    };

    swapButton.onclick = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        if(inputs.length != 2)
        {
            alert("????????? ???????????????");
            return;
        }
        
        var trs = [];
        trs.push(inputs[0].parentElement.parentElement);
        trs.push(inputs[1].parentElement.parentElement);

        var cloneNode = trs[0].cloneNode(true);
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1])

    };

});

//Ex10-????????? ????????? ???????????? ????????? ???????????? #1
window.addEventListener("load", function(){

    var notices = [
        {"id":1, "title":"???????????? ??????????????? ???????????? ?????????....??????..", "regDate":"2019-02-05", "writerId":"newlec", "hit":2},
        {"id":2, "title":"?????????????????????..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
        {"id":3, "title":"???????????? ????????????....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1},
        {"id":4, "title":"?????? ???????????? ??????..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0}
    ];

    var section = document.querySelector("#section10");
    
    var noticeList =section.querySelector(".notice-list");
    var titldTd = section.querySelector(".title");
    var tbodyNode = noticeList.querySelector("tbody");

    var bindData = function(){
        var template = section.querySelector("template");

        for(var i=0; i<notices.length; i++){
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].textContent = notices[i].id;            

            var aNode = tds[1].children[0];
            aNode.href=notices[i].id;
            aNode.textContent = notices[i].title;

            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;

            tbodyNode.appendChild(cloneNode);
        }
    };

    bindData();

    var titleSorted = false;

    titldTd.onclick = function(){
        // ??? ????????? ?????? ?????? ????????? ????????? ?????????.
        tbodyNode.innerHTML ="";

        if(!titleSorted)
        {
            notices.sort(function(a,b){
                titleSorted = true;
     
                 if(a.title < b.title)
                     return -1;
                 else if(a.titls > b.title)
                     return 1;
                 else
                     return 0;
            });
        }
        else
            notices.reverse();
        bindData();
    };
});
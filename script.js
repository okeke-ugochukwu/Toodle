
function increaseWidth() {
    document.getElementById("input").style.width = "70%";
}
function decreaseWidth() {
    document.getElementById("input").style.width = "50%";
}
function newElement() {
   var newTask = document.getElementById("input").value;
   if (newTask == "") {
       document.getElementById("errorMssg").style.display = "block";
    }
   else {
       /clear error mssg if any/
       document.getElementById("errorMssg").style.display = "none";
       
       /create new list element/
       var newTaskInput = document.createElement("li");

       /add delete button to each list item/
        var getElement = document.getElementsByTagName("li");
        var deleteNode = document.createElement("button");
        var deleteTxt = document.createTextNode("\u00D7");

        /attach deleteTxt to deleteNode/
        deleteNode.appendChild(deleteTxt);

        /attach id to button/
        deleteNode.className = "closebtn";

       /get value from input/
       var inputValue = document.getElementById("input").value;

       /create textnode for input collected/
       var node = document.createTextNode(inputValue);

       /input collected input in created list element/
       newTaskInput.appendChild(node);

       /attach button to created list element/
       newTaskInput.appendChild(deleteNode);
       
       /input list element into existing element/
       document.getElementById("tasklist").appendChild(newTaskInput);
    }
   
   /reset input box/
   document.getElementById("input").value = "";

    /fetch all the removeTask buttons/
    var buttonNodeList = document.getElementsByClassName("closebtn");
    var i;
    for (i = 0; i < buttonNodeList.length; i++) {

        /create an event and add a function that'll hide parent element (List item)/

        buttonNodeList[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

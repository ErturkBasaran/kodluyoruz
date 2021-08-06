// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to remove the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {    
    var div = this.parentElement;
    var ul = div.parentElement;
    ul.removeChild(div)
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
      $(".done").toast("show")
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue.trim().length  == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        var ul = div.parentElement;
        ul.removeChild(div)
        $(".delete").toast("show")
    };
  }
}
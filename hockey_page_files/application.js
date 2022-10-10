function toggleRadius(){
  var hockeyPhoto = document.getElementById('olympic_champions')
  hockeyPhoto.classList.toggle('belgian-photo-rounded');
}

function toggleButtonColorBlue() {
  var btn = document.getElementById('btn-1');
  btn.classList.toggle('blue-button');

  var txt1 = document.getElementById('txt-1');
  txt1.classList.toggle('txt')
};

function toggleButtonColorGreen() {
  var btn2 = document.getElementById('btn-2');
  btn2.classList.toggle('green-button');

  var txt2 = document.getElementById('txt-2');
  txt2.classList.toggle('txt')
};

function toggleButtonColorPink() {
  var btn3 = document.getElementById('btn-3');
  btn3.classList.toggle('pink-button');

  var txt3 = document.getElementById('txt-3');
  txt3.classList.toggle('txt')
};

function unorderedList(){
  var originalListItems = ['Gumshield', 'Hockey Stick', 'Shinpads', 'Glove', 'Ball'];

  return originalListItems;
}

function orderList() {

  this.classList.toggle('active');

  if(this.classList.value === 'active'){
    run = true;

    while(run){
    run = false;

    var hockeyItems = document.querySelectorAll('.hockey-equipment > li');

    for (i = 0; i < (hockeyItems.length - 1); i++) {
      stop = false;
      if (hockeyItems[i].innerHTML.toLowerCase() >
        hockeyItems[i + 1].innerHTML.toLowerCase()) {
        stop = true;
        break;
      }
    }
    if (stop) {
        hockeyItems[i].parentNode.insertBefore(
                hockeyItems[i + 1], hockeyItems[i]);

        run = true;
    }
   }
  } else {
    var contentOfList = document.querySelectorAll('.hockey-equipment > li')
    let i = 0
    contentOfList.forEach(function(entry){
      entry.innerText = unorderedList()[i];
      i++;
    });
  }

  if(this.classList.value === 'active'){
    this.innerText = "Revert to original order"
  } else {
    this.innerText = "Arrange the items in alphabetical order!"
  }
}

function copyText(){
  var text = document.getElementById('text-to-copy');
  navigator.clipboard.writeText(text.value);
};

document.getElementById('alphabetical-ordering').addEventListener('click', orderList);
document.getElementById('copy-button').addEventListener('click', copyText);

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var btn = document.getElementById("modal-button");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

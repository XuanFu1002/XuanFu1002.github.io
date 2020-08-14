const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';

nextBtn.addEventListener("click", () => {
  if(counter >= carouselImages.length - 1) return; 
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
}); 

prevBtn.addEventListener("click", () => {
  if(counter <= 0 ) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
});

carouselSlide.addEventListener('transitionend', () =>{
  console.log(carouselImages[counter]);
  if(carouselImages[counter].id === 'lastclone'){
    carouselSlide.style.transition = "none";
    console.log("none");
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
  }
  if(carouselImages[counter].id === 'firstclone'){
    carouselSlide.style.transition = "none";
    console.log("none");
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) +'px)';
  }
});

var input = document.getElementById('text');
var button = document.getElementById('send');
var list = document.getElementById('list');

button.addEventListener("click",addData);

var todolist = [];


function addData() {

  todolist.push(input.value);

  var listcontent = "";

  for(var i = 0; i < todolist.length; i++){

      listcontent = listcontent + 

      "<div><button onclick='delData(" + i + ")'>Delete</button>" + todolist[i] + "</div>";
    }

    list.innerHTML = listcontent;
}

function delData(index){

  var temp = [];

  for(var i = 0; i < todolist.length; i++){

    if(i != index) temp.push(todolist[i])
  }

  todolist = temp;
  //alert(temp)

  var listcontent = "";

  for(var i = 0; i < todolist.length; i++){
    listcontent = listcontent + 

      "<div><button onclick='delData(" + i + ")'>Delete</button>" + todolist[i] + "</div>";
  }

  list.innerHTML = listcontent;
}

var title = document.getElementById("title");

var characters = title.innerHTML.split("")

function charToHTML(char,index){
  return `<span class="move" style="animation-delay: ${index}s">${char}</span>`
}

var content = characters.map(charToHTML).join("");

title.innerHTML = content;
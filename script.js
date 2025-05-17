

function render(){
    let contentRef = document.getElementById('window');

    for (let indexRender = 0; indexRender < books.length; indexRender++) {
      contentRef.innerHTML += getTemplateBooks(indexRender);
    }
}


function loadLikesButton(indexTemplate){
  if(books[indexTemplate].liked == true){
   return `<img class="like-button" src="./assets/img/icons/like_true.png">`
  } else return `<img class="like-button" src="./assets/img/icons/like_false.png">`
}


function toggleLikeButton(indexTemplate){
contentRef = document.getElementById(`like_button${indexTemplate}`)

if(books[indexTemplate].liked){
      books[indexTemplate].liked = false;
      return contentRef.innerHTML = `<img class="like-button" src="./assets/img/icons/like_false.png">`
} else{
      books[indexTemplate].liked = true;
      contentRef.innerHTML = `<img class="like-button" src="./assets/img/icons/like_true.png">`
  }
}
 


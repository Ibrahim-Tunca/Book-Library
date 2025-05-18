

function render(){
    let contentRef = document.getElementById('window');

    contentRef.innerHTML = "";
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
      books[indexTemplate].likes -= 1;
      render();
      return contentRef.innerHTML = `<img class="like-button" src="./assets/img/icons/like_false.png">`
} else{
      books[indexTemplate].liked = true;
      books[indexTemplate].likes += 1;
      contentRef.innerHTML = `<img class="like-button" src="./assets/img/icons/like_true.png">`
      render();
  }
}
 

function showAllComments(indexTemplate){
    let htmlText = "";

    if(books[indexTemplate].comments.length > 0){
    for (let index = 0; index < books[indexTemplate].comments.length; index++) {
    htmlText += `<p class="padding-user-comment"><i class="user-name-style">${books[indexTemplate].comments[index].name}</i><br><a> ${books[indexTemplate].comments[index].comment}</a></p><br>`
      }
    } else htmlText = `<div class="no-comment-section"><div class="seperator-short" ></div><p class="no-comment-font">noch keine Kommentare vorhanden. Jetzt Kommentieren!</p></div>`

    return htmlText;
  }

  
function addComment(indexTemplate){
  let contentRef = document.getElementById(`add_comment${indexTemplate}`);
  let commentContent = contentRef.value;


  if(contentRef.value != ""){
  let newComment = {
    "name": "halofreak114",
    "comment": commentContent
  }

  books[indexTemplate].comments.unshift(newComment);
  contentRef.value = "";
  } 

  render();
}


function getTemplateBooks(indexTemplate){
    return `<div class="window">
                
                  <h3>${books[indexTemplate].name}</h3>
                  <a>von: ${books[indexTemplate].author}</a>


                  <div class="icon-frame">
                      <div class="book-container">
                          <img class="icon-style-book" src="./assets/img/icons/buch.png" alt="book">
                      </div>
                      <div class="icon-frame-likes">
                          <a>${books[indexTemplate].likes}</a>
                          <button id="like_button" onclick="likeButton(${indexTemplate})"></button>
                      </div>
                  </div>

                  <table style="width: 100%">
                    <tr>
                      <td>Preis: </td>
                      <td>${books[indexTemplate].price},-</td>
                      
                       
                    </tr>
                    <tr>
                      <td>Genre: </td>
                      <td>${books[indexTemplate].genre}</td>
                      
                    </tr>
                    <tr>
                      <td>Erschienen: </td>
                      <td>${books[indexTemplate].publishedYear}</td>
                    </tr>
                  </table>



                  <div id="comment_section">
                  <p>${showAllComments(indexTemplate)}</p>
                  </div>
                  
                  

              
            </div>`
}


function likeButton(index){
  contentRef = document.getElementById("like_button");
  if(books[index].liked == true){
     return `<img src="./assets/img/icons/like_true.png" alt="liked">`
  } else {return `<img src="./assets/img/icons/like_false.png" alt="not-liked">`}
}

function showAllComments(indexTemplate){
  contentRef = document.getElementById("comment_section");
  
  for (let index = 0; index < books[indexTemplate].comments.lenght ; index++) {
     
    
    

    contentRef.innerHTML += `${books[indexTemplate].comments[index].name}`
    
  }
}

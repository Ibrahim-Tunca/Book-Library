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
                              
                          <a id="like_id${indexTemplate}" onload="loadLikeButton(${indexTemplate})">
                             x 
                          </a>

                      </div>
                  </div>



                  <table class="table-width">
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

function loadLikeButton(indexTemplate){
  let contentRef = document.getElementById(`like_id${indexTemplate}`);

    if(books[indexTemplate].liked == true){
      contentRef.innerHTML =  `<img src="./assets/img/icons/like_true.png">`
    }else contentRef.innerHTML =  `<img src="./assets/img/icons/like_false.png">`
    
  
}




function showAllComments(indexTemplate){
  contentRef = document.getElementById("comment_section");
  
  for (let index = 0; index < books[indexTemplate].comments.lenght ; index++) {
     
    
    

    contentRef.innerHTML += `${books[indexTemplate].comments[index].name}`
    
  }
}

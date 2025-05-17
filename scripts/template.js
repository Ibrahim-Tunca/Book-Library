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
                              
                          <a id="like_button${indexTemplate}" onclick="toggleLikeButton(${indexTemplate})">

                            ${loadLikesButton(indexTemplate)}

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

                  <br>


                  <div>
                      ${showAllComments(indexTemplate)}
                  </div>
                  
            </div>`
}


function showAllComments(indexTemplate){
    let htmlText = "";

    for (let index = 0; index < books[indexTemplate].comments.length; index++) {
  
    htmlText += `<p><i class="user-name-style">${books[indexTemplate].comments[index].name}</i><br><a> ${books[indexTemplate].comments[index].comment}</a></p><br>`
  }
    return htmlText;
  }


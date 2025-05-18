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

                  
                    <div class="commentary-scroll-section-header">
                         <a>kommentare...</a>
                        <div class="seperator" ></div>
                    </div>
                    <div class="commentary-scroll-section">
                        <div class="commentary-scroll-section-content">
                          <div class="display-flex">
                            <input type="text" id="add_comment${indexTemplate}" class="input-commentary-scroll-section" placeholder="Hier Kommentieren...">
                            <a ><img onclick="addComment(${indexTemplate})" class="send-button" src="./assets/img/icons/senden.png" alt="senden.png"></a>
                          </div>
                          ${showAllComments(indexTemplate)}
                        </div>
                    </div>
                  
            </div>`
}

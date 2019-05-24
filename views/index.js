
function dibuja() {
    let post = document.getElementById('posts');
    for (let i = 0; i < 5; i++) {
        let nvoPost = ' <div id="posts-container"> <div class="content-container"> <h3 id="title">Entrada de Noticias ' + i + '</h3> <p id="date">## ## 31/20/2010 ' + i + '</p> <p id="post"> ' + i + ' "LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> <p id="author">Autor del Post ' + i + ' </p> </div> <div class="image-container">  <img id="img" src="img/Domkyrkan0737.jpg" alt="Prueba"> </div></div> ';
        post.innerHTML += nvoPost;

    }
}

{/* <div id="posts-container">
        <div class="content-container">
            <h3 id="title">Entrada de Noticias ' + i + '</h3>
            <p id="date">## ## 31/20/2010 ' + i + '</p>
            <p id="post"> ' + i + ' "LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum."</p>
            <p id="author">Autor del Post ' + i + ' </p>
        </div>
        <div class="image-container">
            <img id="img" src="img/Domkyrkan0737.jpg" alt="Prueba">
        </div>
    </div> */}
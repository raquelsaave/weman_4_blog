
function dibuja() {
    let post = document.getElementById('posts');
    for (let i = 0; i < 5; i++) {
        let nvoPost = ' <div id="posts-container"> <div class="content-container"> <h3 id="title">Entrada de Noticias ' + i + '</h3> <p id="date">## ## 31/20/2010 ' + i + '</p> <p id="post"> ' + i + ' "LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> <p id="author">Autor del Post ' + i + ' </p> </div> <div class="image-container">  <img id="img" src=""> </div></div>';
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

/** Este archivo se usará para poner funciones de ejemplo para llamadas asíncronas
* Aunque no vienen pensadas en ejercicio original, es bueno pensarlas de una vez.
*/
function peticionAsync(tipo, url, parametros) {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (ajax.status == 200) {
                //El resultado es exitoso!
                //Tomar las acciones necesarias aquí
                let resp= JSON.parse(ajax.responseText);
                if(resp.error == "0"){
                    if(url === '/comentarios'){
                        dibujaPublicaciones(resp.registros)
                    }
                }
            } else if (ajax.status == 404) {
                //No encontró el servicio o API
            } else {
                //Una respuesta inesperada por parte del servidor
                alert('Saliendo precipitadamente de la aldea por culpa de la escaces de rinocerontes');
            }
        }
    };
    //El tipo puede ser GET, POST, PUT, DELETE o cualquier tipo aceptado por HTTP
    //La URL es a dondo hará la petición...
    //Por último, el "true" indica que es una petición asíncrona
    ajax.open(tipo, url, true);
    //Se establece cómo será enviado el contenido.
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //La función encodeURI se encarga que la petición tenga el formato adecuado para ser enviado...
    //un ejemplo de petición puede ser variable=valor&otravariable=otrovalor...
    ajax.send(encodeURI(parametros));
}

function leerPublicaciones() {
    peticionAsync('GET', '/comentarios', '');
}



function dibujaPublicaciones(publis) {
    let contenedor = document.getElementById('all')
    for (let i = 0; i < publis.length; i++) {
        let nuevaPublicacion = '<div class="posts-container id="post' + publis[i].id + '">' + '\
                                     <div class="content-container"> \
                                         <h3 id="title">' + publis[i].titulo + '</h3> \
                                             <p id="date">' + publis[i].momento + '</p>\
                                             <p id="post">' + publis[i].contenido + '</p> \
                                            <p id="author">Autor del Post ' + publis[i].idusuario + ' </p> \
                                     </div> \
                                     <div class="image-container">\
                                     <img id="img" src="Prueba.jpg" alt="Prueba"> \
                                     </div>\
                                 </div>'
                                 contenedor.innerHTML  += nuevaPublicacion;
    }

}


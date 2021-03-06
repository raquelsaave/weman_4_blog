const dbcon = require('../models/db.js');

/** v
 * 
 * @brief Valida las credenciales de un usuario.
 * @param usr El correo o nombre de usuario a validar.
 * @param pwd La contraseña correspondiente.
 * @param resp Un objeto Response en donde escribirá el resultado de la función.
 * @returns Un objeto JSON con la propiedad "error", siendo "0" su estado de éxito, la propiedad "nombre" contiene el nombre del usuario y la propiedad "idusuario" con el ID del usuario desde la base de datos.
 * 		En caso de existir algún error, establece la propiedad "errmsg" con una breve leyenda descriptiva del error
 * 
 */
const v = (usr, pwd, resp) => {
	let retval = {
		error: "99",
		errmsg: "Algo raro salió muy raro"
	};
	if(usr == '' || pwd == ''){
		console.log("Espacios en blanco")
		  retval.error = "3";
		  retval.errmsg = "Necesitas ingresar email y contraseña";
		  resp.json(retval);
		 
	}else{
	// Hacemos validacion con regular expressions para email y contraseña
	if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(usr) && /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(pwd)){
		  console.log("Email & contraseña valida")
		  let qry = "select id, nombre from usuario where email = '"+usr+"' and passwd = password('"+pwd+"');";
		  console.log("Consulta de validación: " + qry);
		  //console.log("Entra a validar usuario...");
		  dbcon.query(qry, (err, res, campos) => {
			  if (err) {
				  //Marcamos el error
				  console.log(err + "\n:(");
				  retval.error = "98";
				  retval.errmsg = "Falló la consulta a los comentarios";
			  } else {
				  console.log(res);
				  if (res.length == 1) {
					  retval.error = "0";
					  retval.errmsg = "";
					  retval.idusuario = res[0].id;
					  retval.nombre = res[0].nombre;
					  console.log("Firmado exitoso!");
				  } else {
					  retval.error = "1";
					  retval.errmsg = "Usuario o contraseña como Clarita la de Heidi";
				  }
			  }
			  resp.json(retval);
		  });
		}else{
		  console.log("Email y/o contraseña invalida")
		  retval.error = "2";
		  retval.errmsg = "Email y/o contraseña invalida CHECA CARACTERES";
		  resp.json(retval);
		}  
	}
};

module.exports = {
	valida: (usr, pwd, resp) => v(usr, pwd, resp)
}

var mysql = require('mysql');

var conexion = mysql.createConnection({
	database: 'loprint',
	username: 'usuarios_db',
	host: 'root',
	password: ''
});

conexion.connect(function(error){
	if(error){
		throw error;
	}else{
		console.log('CONEXION EXITOSA');
	}
});
conexion.end();
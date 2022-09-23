const mongoose = require ('mongoose');
const routes = require("./routes");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({path: 'variables.env'});
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
});

// crear el servidor
const app = express();

// habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// importar cors permite que un cliente se conecte a otro servidor
const whitelist = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: (origin, callback)=>{
        //revisar si viene de lista blanca 
        const existe = whitelist.some(dominio => dominio === origin);
        if(existe){
            callback(null, true);
        }else{
            callback(new Error('no permitido por cors'))
        }
    }
}
//habilitar cors
app.use(cors(corsOptions));

// Rutas de la app
app.use('/', routes());

// carpeta publica
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;
// puerto
app.listen(port, host, ()=>{
    console.log('servidor funcionando')
});
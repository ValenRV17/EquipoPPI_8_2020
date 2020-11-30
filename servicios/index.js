const express = require('express');
const app = express();
const routes = require('./routes/routes');
const ingreso = require('./routes/ingreso');
const gasto = require('./routes/gasto');
const gasinp = require('./routes/gasinp');
const persona = require('./routes/persona');
const consejos = require('./routes/consejos') 

app.set('port', 3001);

app.use(express.json());

app.use('/api', routes);
app.use('/api', ingreso);
app.use('/api', gasto);
app.use('/api', gasinp);
app.use('/api', persona);
app.use('/api', consejos);

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});
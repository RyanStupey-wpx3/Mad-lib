const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());

massive(process.env.DB_CONNECTION_STRING) //<-- need to input connection string into .env file
.then(dbInstance => app.set('db', dbInstance));

app.get('/api/message', (req, res) => {
    res.status(200).send('hola amigo')
})

const port = 3535;

app.listen(port, () => {console.log(`app is listening on port ${port}`)})
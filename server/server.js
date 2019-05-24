const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const person = require('./routes/person.router');
const hobby = require('./routes/hobbies.router');
const personHobbies = require('./routes/person-hobbies-router');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/person', person);
app.use('/hobby', hobby);
app.use('/person/hobbies', personHobbies);

app.listen(PORT, () => {
    console.log(`Totes listening on PORT: ${PORT}`);
})
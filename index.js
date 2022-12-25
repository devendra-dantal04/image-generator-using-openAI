require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

//Enable BodyParser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openai.routes'));

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
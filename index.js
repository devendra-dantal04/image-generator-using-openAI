require('dotenv').config();
const express = require('express');
const app = express();

//Enable BodyParser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/openai', require('./routes/openai.routes'));

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
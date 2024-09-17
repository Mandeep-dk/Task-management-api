const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const errorHandler = require('./middlewares/errorHandler');
const connectDb = require('./config/dbConnection');

connectDb();
app.use(express.json());
app.use('/api/tasks', require('./routes/tRoutes'));
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server is listening on http://localhost:${port}`);

})
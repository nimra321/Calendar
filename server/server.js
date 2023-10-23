const express = require('express');
const cors = require('cors');
const { configDotenv } = require('dotenv');

// dotenv configuration
configDotenv();


// rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());


// routes
// app.use('calendarific.com/api/v2', require('') );


// port
const PORT= process.env.PORT || 5000;

// listen 
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
})

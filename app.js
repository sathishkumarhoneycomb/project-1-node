const express = require('express');
const cors = require('cors');
const path = require('path');


// import routes 
const pilotRoutes = require('./routes/pilotRoutes');
const sequelize = require('./util/db');


// configurations


// models associations



const app = express()

// parsers 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// cors 
app.use(cors());








const PORT  = 5000;



app.use(pilotRoutes);




// defining associations 


// database connection and start the server 
// sequelize.sync({force:true}) // drop the table if they exists
sequelize.sync()
.then((result) => {
    app.listen(5000, () => {
        console.log('server running on machine 5000')
    })
})
.catch(err => console.log(err))



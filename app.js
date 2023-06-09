require('dotenv').config();
const express = require('express');
const configViewEngine = require('./src/config/viewEngine');
const cors = require('cors');


const router = require('./src/routes/web');
const routerAPI = require('./src/routes/api');

const app = express();
const port = process.env.PORT || 8888;  //port

const connection = require('./src/config/database');


//Config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//Config template engine &&  Config static files
configViewEngine(app);

//Khai báo Router
app.use('/', router);
app.use('/v1/api/', routerAPI);

(async () => {
    try {
        //Using mongoose
        await connection();

        //Lắng nghe cổng chạy server
        app.listen(port, () => {
            console.log(`Server running ${port}/`);
        })
    } catch (error) {
        console.log("Error connect to DB: ", error);
    }
})();
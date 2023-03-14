const express = require('express');
// route
const route = require('./controller/index.js');
// cors
const cors = require('cors');
// port
const port = parseInt(process.env.PORT) || 4000;
// Express app
const app = express();
const cookieParser = require('cookie-parser');
const {ErrorHandling} = require('./middleware/ErrorHandling')


app.use((req, res, next)=> {
        res.header('Access-Control-Allow-Origin', 'https://capstone-ecommerce.onrender.com/')
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "https://capstone-ecommerce.onrender.com/")
        res.header("Access-Control-Allow-Headers", "https://capstone-ecommerce.onrender.com/")
        next();
});
app.use(route);
app.use(
    cors(),
    cookieParser(),
    express.json(),
    express.urlencoded({extended: false})
)

// The Server is running
app.listen(port, ()=> {
    console.log(`Server is running @ port ${port}`);
});

// The Handling of all errors
app.use(ErrorHandling);
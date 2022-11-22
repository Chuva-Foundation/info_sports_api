const express = require('express');
const UserController = require("./controler/UserController")
const SessionContoller = require("./controler/SessionController")


const app = express();

const PORT = 4000;

app.use(express.json());

// USER
app.post('/users', UserController.create)



app.listen(PORT, () => {
    console.log(`Listen in PORT ${PORT}`);
})
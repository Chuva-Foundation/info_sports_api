const express = require('express');
const UserController = require("./controler/UserController")
const SessionContoller = require("./controler/SessionController")
const TeamController = require("./controler/TeamControler")
const PlayerController = require("./controler/PlayerController")

const app = express();

const PORT = 4000;

app.use(express.json());

// USER
app.post('/users', UserController.create)
//app.get('/users', UserController.list)
//app.get('/users/:id', UserController.list_one)


//SESION
app.post('/session',SessionContoller.create)

//TEAM
app.post('/teams',TeamController.create)
app.get('/teams', TeamController.list)
app.get('/teams/:id', TeamController.listone)

//PLAYER
app.post('/players', PlayerController.create)
app.get('/players', PlayerController.list)
app.get('/players/:id', PlayerController.listone)

app.listen(PORT, () => {
    console.log(`Listen in PORT ${PORT}`);
})
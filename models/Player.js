const db = require('../config/database');

const playerlist = [{name: "player 1", id : 1, date: "2000", position_id: "2"} ]

class players {

    static async create(id, name, date, position_id) {
        playerlist.push({
            name, id, date, position_id
        })
    }

    static async list() {
        return playerlist;
    }


    static async get_by_id(id){

        const response = playerlist.filter((player) => player.id === Number(id));
        return response;
    }
}



module.exports = players;
const db = require('../config/database');

class players {

    static async getall() {
        try {
            const player = await db.query("SELECT * FROM players");

            return player.rows;
        } catch (error) {
            console.error(error.message);
            return error.message;
        }

    }

    static async create(name, birth_date, id_position) {
        const newplayer = await db.query("INSERT INTO players (name, birth_date, id_position) VALUES($1, $2, $3) RETURNING *", [name, birth_date, id_position]);
        return newplayer.rows
        } catch (error) {
            console.error(error.message);
            return error.message
    } 


    static async get_by_id(id){    
        try {
            const Player = await db.query("SELECT * FROM players WHERE id=$1", [id]);  
            return Player.rows;
           } catch (error) {
               console.error(error.message);
               return error.message
       }
    }

}



module.exports = players;
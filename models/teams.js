const db = require('../config/database');


class teams {

    static async get() {
        try {
            const teams = await db.query("SELECT * FROM teams");

            return teams.rows;
        } catch (error) {
            console.error(error.message);
            return error.message;
        }


    }
    

    static async create(name, date, id_zone) {
         try {
         const newTeam = await db.query("INSERT INTO teams (name, birth_date, zone_id) VALUES($1, $2, $3) RETURNING *", [name, date, id_zone]);  
         return newTeam.rows
        } catch (error) {
            console.error(error.message);
            return error.message
    }
    }
    

     static async get_by_id(id){    
        try {
            const Team = await db.query("SELECT * FROM teams WHERE id=$1", [id]);  
            return Team.rows;
           } catch (error) {
               console.error(error.message);
               return error.message
       }
    }
   

 }
 

    

module.exports = teams;
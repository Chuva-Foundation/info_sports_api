const db = require('../config/database');

const teamlist = [{name: "team 1", id : 1 }, {name: "team 2", id : 2} ]

class teams {

    static async get() {
        try {
            const teams = await db.query("SELECT * FROM teams");

            return teams.rows;
        } catch (error) {
            console.error(error.message);
        }

        return teamlist;
    }
    

    static async create(name, date, id_zone) {
         try {
          await db.query("INSERT INTO teams (name, date, id_zone) VALUES($1, $2, $3) RETURNING *", [name, email, id_zone]);  
        } catch (error) {
            console.error(error.message);
    }

        teamlist.push({
            name, date, id_zone
        })
    

    //  static async get_by_id(id){
    //     console.log("team_id", typeof id)
    
    //     const response = teamlist.filter((team) => team.id === Number(id));
    //     console.log('response', response);
    //     return response;
    // }
   

 }
 
}
    

module.exports = teams;
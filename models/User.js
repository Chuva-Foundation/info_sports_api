const db = require('../config/database');
const bcrypt = require('bcrypt');

class User {

    static async create(name, email, password, profile_id) {
        try {
            const password_hash = await bcrypt.hash(password, 8);

          const user = await db.query("INSERT INTO users (name, email, password, profile_id) VALUES($1, $2, $3, $4) RETURNING id,name", [name, email, password_hash, profile_id]);
          
          return user.rows[0];
        } catch (error) {
            console.error(error.message);
        }
    }

    static async getById(id) {
        try {
            const user = await db.query("SELECT  name, email, profile_id FROM users WHERE id = $1", [id]);

            return user.rows;
        } catch (error) {
            console.error(error.message);
        }
    }

    static async checkPassword(password, password_hash) {
        return await bcrypt.compare(password, password_hash);
    }

    static async getAll() {
        try {
            const allUser = await db.query("SELECT id,name,email,profile_id FROM users");
             
            return allUser.rows;
        } catch (error) {
            console.error(error.message);
        }
    }
}

module.exports = User;
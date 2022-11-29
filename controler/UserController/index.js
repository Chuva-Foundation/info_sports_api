const User = require('../../models/User');

exports.create = async (req, res) => {

    const { name, email, password, profile_id } = req.body;

    try {
        const user = await User.create(name, email, password, profile_id);
       console.log(user)
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(
            {
                message: "Internal server error"
            }
        );
    }
}

exports.list = async (req, res) => {

    try {
        const users = await User.getAll()   
    
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json(
            {
                message: "Internal server errorrrr"
            }
        );
    }
}

exports.list_one = async (req, res) => {
    const id =req.params.id
    console.log(id)
    try {
        const user = await User.getById(id)   
    
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(
            {
                message: "Internal server error"
            }
        );
    }

}
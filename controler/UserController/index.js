const User = require('../../models/User');

exports.create = async (req, res) => {

    const { name, email, password, profile_id } = req.body;

    try {
        const user = await User.create(name, email, password, profile_id);    
    
        res.status(201).json(
            {
                id: user.id
            }
        );
    } catch (error) {
        res.status(500).json(
            {
                message: "Internal server error"
            }
        );
    }

}

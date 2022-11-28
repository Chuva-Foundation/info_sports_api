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


exports.list = async (request, response) => {

     const { name, email, password, profile_id } = req.body;

    try {
        const user = await User.create(name, email, password, profile_id);    
    
        response.status(201).json(user);
    } catch (error) {
        res.status(500).json(
            {
                message: "Internal server error"
            }
        );
    }

}

//exports.list_one = async (request, response) => {
    //const id = "01"
    //const { name, email, password, profile_id } = req.body;

   // try {
   //     const user = await User.create(name, email, password, profile_id);    
   
       // response.status(201).json(array);
   // } catch (error) {
   //     res.status(500).json(
   //         {
   //             message: "Internal server error"
   //         }
   //     );
   // }



const players = require('../../models/Player');
    
exports.create = async (req, res) => {

    console.log('Post player:', req.body);
    const  {name, birth_date, id_position} = req.body
    const player = await players.create(name, birth_date, id_position);
    res.status(201).json(player);

    
 }

 exports.list = async (req, res) => {

    const player = await players.getall()
    res.status(200).json(player);
    
 }

 exports.listone = async (req, res) => {

   const id = req.params.id
   const player = await players.get_by_id(id);
   
   res.status(200).json(player);
}

 
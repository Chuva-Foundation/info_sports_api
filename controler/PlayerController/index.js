const players = require('../../models/Player');
    
exports.create = async (req, res) => {

    console.log('Post player:', req.body);

    const team = await players.create(req.body);
    res.status(201).json({});
    
 }

 exports.list = async (req, res) => {

    const player = await players.list(req.body);
    res.status(200).json(player);
    
 }

 exports.listone = async (req, res) => {

   console.log('GET Player by Id:', req.params);

   const player = await players.get_by_id(req.params.id);
   
   res.status(200).json(player);
}

 
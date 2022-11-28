const teams = require('../../models/teams');


exports.create = async (req, res) => {

   console.log('Post Team by Team Id:', req.body);
   const {name,date,id_zone} = req.body
   const team = await teams.create(name,date,id_zone);
   
   res.status(201).json(team);
   
}

exports.list = async (req, res) => {

    console.log('GET Team :', req.params);

    const team = await teams.get();
    res.status(200).json(team);
}

 
 exports.listone = async (req, res) => {
   const id = req.params.id
   const team = await teams.get_by_id(id);
   
   res.status(200).json(team);
 }
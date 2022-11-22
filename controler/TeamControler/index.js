const team = require('../../models/Student');

exports.get = async (req, res) => {

    console.log('GET Team by Team Id:', req.userId);

    const team = await team.get();

    res.status(200).json(team);
}

exports.create = async (req, res) => {

    const { } = 

   
  
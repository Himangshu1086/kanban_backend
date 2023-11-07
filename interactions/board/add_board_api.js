//import models
const Board  = require('../../db/models/boardSchema');


const addBoard = async (req, res) => {
  try{
      const {name , description} = req.body;
      
      const isBoardExist = await Board.findOne({name:name});
      if(isBoardExist)
        return res.status(422).json({err:"Board exits already"})


      const new_board = new Board({
        name:name,
        description:description
      });
      await new_board.save();

      res.status(200).json({ message:"Board added successfully" })
  }
  catch{
    err =>{
      console.log(err)
    }
  }
};

module.exports = { addBoard };


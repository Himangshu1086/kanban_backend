//import models

const Board = require("../../db/models/boardSchema");

const getBoard = async (req, res) => {
    try{
      const boards = await Board.find();
      // res.status(200).json({boards});
      return res.send(boards)
    }
    catch{
      err=>{
        console.log(err)
      }
    }
  };
  
  module.exports = { getBoard };
  
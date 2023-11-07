//import models

const Column = require("../../db/models/columnSchema");

const getColumn = async (req, res) => {
    try{
      const Columns = await Column.find();
      res.status(200).json({Columns});
    }
    catch{
      err=>{
        console.log(err)
      }
    }
  };
  
  module.exports = { getColumn };
  
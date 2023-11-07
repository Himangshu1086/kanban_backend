//import models

const Item = require("../../db/models/boardItemSchema");

const getItem = async (req, res) => {
    try{
      const Items = await Item.find();
      res.status(200).json({Items});
    }
    catch{
      err=>{
        console.log(err)
      }
    }
  };
  
  module.exports = { getItem };
  
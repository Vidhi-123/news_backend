var cat=require('../model/cat_model');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    console.log(req.body);
    cat.getAllCateogry(function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
         console.log(rows);
     res.json(rows);
     }
    });
  });

  module.exports=router;
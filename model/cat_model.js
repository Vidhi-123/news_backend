
var db=require('../db_connection');
var cat={
    getAllCateogry:function(callback){
        return db.query("SELECT * FROM category",callback); 
        }
};
module.exports=cat;
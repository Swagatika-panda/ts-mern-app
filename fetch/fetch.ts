import *as mongodb from "mongodb";
import *as express from "express";
import swagtIT  from "../config/client";
import db_urls from "../config/db_urls";
import swagatIT from "../config/client";
import db_config from "../config/db_config";

let fetch=express.Router().get("/",(req,res)=>{
    //cliet info
    swagatIT.connect(db_urls,(err,client)=>{
        let db=client.db(db_config.db_name);
        db.collection(db_config.collection_name).find().toArray((err,array)=>{
            if(err) throw err;
            else{
                res.send(array);
            }
        });
    });

});
export default fetch;
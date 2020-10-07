import *as mongodb from "mongodb";
import *as express from "express";
import  swagatIT from "../config/client";
import db_urls from "../config/db_urls";
import db_config from "../config/db_config";

let remove=express.Router().delete("/",(req,res)=>{

    swagatIT.connect(db_urls,(err,client)=>{
        if(err) throw err;
        else{
            let db=client.db(db_config.db_name);
            db.collection(db_config.collection_name).deleteOne({"e_id":req.body.e_id},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"success"});
                }
            });

        }
    });
});
export default remove;
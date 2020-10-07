import *as mongodb from "mongodb";
import *as express from "express";
import  swagatIT from "../config/client";
import db_urls from "../config/db_urls";
import db_config from "../config/db_config";

let insert=express.Router().post("/",(req,res)=>{
    swagatIT.connect(db_urls,(err,client)=>{
        if(err) throw err;
        else{
            let db=client.db(db_config.db_name);
            db.collection(db_config.collection_name).insertOne({
                "e_id":req.body.e_id,
                "e_name":req.body.e_name,
                "e_sal":req.body.e_sal,
                "e_desgination":req.body.e_desgination,
                "dob":req.body.dob,
                "contact":req.body.contact,
                "e_habits":req.body.e_habits,
                "e_dept":req.body.e_dept,
                "gender":req.body.gender
            },(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"insert":"success"});
                }

            });
    }
    });

});
export default insert;
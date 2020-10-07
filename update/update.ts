import *as mongodb from "mongodb";
import *as express from "express";
import  swagatIT from "../config/client";
import db_urls from "../config/db_urls";
import db_config from "../config/db_config";

let update=express.Router().put("/",(req,res)=>{
    swagatIT.connect(db_urls,(err,client)=>{
        if(err) throw err;
        else{
            let db=client.db(db_config.db_name);
            db.collection(db_config.collection_name).updateOne({"e_id":req.body.e_id},{
                $set:{"e_sal":req.body.e_sal,
                "e_desgination":req.body.e_desgination,
              "contact" :req.body.contact,
              "e_dept":req.body.e_dept
            }
            },(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"update":"success"});
                }
            });
        }
    });

});
export default update;
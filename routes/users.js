const router=require("express").Router();
router.get("/",(req,res)=>{
    res.send("ites user part");
})
module.exports=router
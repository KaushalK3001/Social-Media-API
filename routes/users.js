const router=require('express').Router();

router.get('/',(req,res)=>{
    res.send('Hello, this is user page');
});

module.exports=router;
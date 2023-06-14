const router = require('express').Router();
const ReactUser = require('../models/ReactUser');

router.post('/', async(req,res) => {
   const {react,username} = req.body;

   try{
        const response = await ReactUser.create({
            react,username
        })
        response.save();
        res.status(200).json(response)
   }
   catch(err){
    res.status(200).json(err)
   }
})

module.exports = router

const express = require('express');

const Router = express.Router();
const User = require('../models/User');
const { updateOne, deleteOne } = require('../models/User');

// "schema" for a "model" to use in the "route". 


/* 
CREATE

*/



// GET ALL USERS
Router.get('/', async (req,res) => {
    try{
   let users = await User.find();
   res.json(users);
} catch(e) {res.json({message: e})}

})

// GET SINGLE USER 
Router.get('/:userId', async (req,res) => {
    try{
        let uid = req.params.uid;
   let user = await User.findById(uid);
   res.json(user);
} catch(e) {res.json({message: e})}

})


// CREATING A USER 
Router.post('/', async  (req,res)=>{
try{
    const user = new User({
        name: req.body.name, 
        email: req.body.email,
        age: req.body.age
    });
    
    const savedUser = await user.save();
    res.json(savedUser);

} catch(e) {res.json({message: e})}

});


// UPDATING A USER 
Router.put('/:userId',async (req,res)=>{
    try{
        const uid = req.params.userId;
        constupdateUser = await User.updateOne({_id: req.params.userId}, {$set: {name: req.body.name}})

        res.json({message:'updated :)'});
    } catch(e) {res.json({message: e})}
   
})

// DELETE USER 
Router.delete('/:userId',async (req,res) =>{
  try{
    const uid = req.params.userId;
    const user = await User.deleteOne({_id: uid});
    res.json({message: 'deleted user :( '});
} catch(e) {res.json({message: e})}
   
})





module.exports = Router;
# MongoDB Node.js 2020 | CRUD API in 20 Minutes | Web Development

A simple tutorial for using MongoDB with Node.js in 2020. 


## AGENDA 

Things we are going to cover in this tutorial 



### 1. INSTALLATION
Installing mogodb is simple though you may find a very common error where /data/db path is missing. 
create this folder in the respective directory.
https://treehouse.github.io/installation-guides/mac/mongo-mac.html

### 2. EXPRESS SETUP
Setup a project folder and install express,body parser and mongoose. 

### 3. CONNECTING TO MONGODB
Create a mognoose connection with your mongodb database url.  Add the 
```
mognoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true}, ()=> console.log('Connected to MongoDB!) ) 
```

### 4. CREATING ROUTES 
Using express.Router() we will be creating route for our required model. 
``` JS 
// routes/users.js
const router = express.Router();
router.get('/', (req,res)=> res.send(....));

// server.js 
const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

```

### 4. CREATE SCHEMA  
Creating a new Schema 
``` JS 
// schemas/usersSchema.js
module.exports = usersSchema = mongoose.Schema({
    name:{type:string, required:false}
});

```
## 5. CREATE MODEL 
Now create a model and import the created Schema. Simply pass the schema to the model and export it.
``` JS
// models/User.js
const usersSchema = require('./schemas/usersSchema.js');
module.exports = mongoose.model('Users', usersSchema);

```


## 6. CREATE - FUNCTION

``` JS
// routes/users.js 
const User = require('../models/User')
router.post('/', async (req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });
    try{
            const userCreated = await user.save();
            res.json(userCreated);
    } catch(e) err => res.json({message: err})

  //  user.save().exec().then(data => res.json(data)).catch(err => res.json({message: err}))
} )
```


## 7. FIND ALL - FUNCTION
This will return all the users.
``` JS 
const users = await User.find();
```

## 7. FIND ONE - FUNCTION 
Finding a user with its unique Id 
``` JS 
router.get('/:userId', async (req,res)=>{
    try{
  let uid = req.params.userId;
    const user = await User.findById(uid)
    res.json(user);
    } catch (e) => res.json({message: e})

})
```


## 8. UPDATE ONE - FUNCTION
Update one of the user with only its id 
``` JS 
const  updateUser = await User.updateOne({_id: req.params.userId}, {$set: {name: req.body.name}})
````

## 9. DELETE ONE - FUNCTION
Delete a user 
``` jS 
const removeUser = await User.remove({_id: req.param.userId})

```




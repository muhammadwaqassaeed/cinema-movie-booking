// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post("/signup", (req,res)=>{
  const {name, userName, email, password } = req.body;
  if(!name || !email || !userName || !password) {
      return res.status(422).json({error: "Please all add fields"})
  }
  User.findOne({$or:[{email:email},{userName:userName}]}).then((savedUser)=>{
      if(savedUser){
          return res.status(422).json({error:"user already exist with that email or userName"})
      }
      bcrypt.hash(password,12).then((hashPassword)=> {
          const user = new User({
              name,
              email,
              userName,
              password:hashPassword
      
          })
          user.save()
          .then(user=>{res.json({message: "Register successfully"})})
          .catch(err => console.log(err))
      })
     
  
  })

 

})

// router.post('/signup', async (req, res) => {
//   const { name, userName, email, password } = req.body;

//   try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'User already exists' });
//     }

//     // Hash the password
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     // Create a new user
//     const newUser = new User({
//       name,
//       userName,
//       email,
//       password: hashedPassword,
//     });

//     // Save the user to the database
//     await newUser.save();

//     res.json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error in signup:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, 'yoursecretkey', { expiresIn: '1h' });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        userName: user.userName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Error in signin:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

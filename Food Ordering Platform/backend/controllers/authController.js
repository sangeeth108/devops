const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register User model
exports.registerUser = async(req,res) =>{
    const {firstName, lastName, email,phoneNumber,role,password} = req.body;
    try{
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg: 'User already exists'});
        }
        user = new User({
            firstName,
            lastName,
            email,
            phoneNumber,
            role,
            password
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        res.json({ status:"ok",msg: 'Account created successfully' });
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });
  
      // Define the payload based on the user's role
      const payload = {
        user: {
          id: user.id,
          role: user.role,
          TeacherID: user.role === 'user' ? user.TeacherID : undefined,
          StudentID: user.role === 'restaurantOwner' ? user.StudentID : undefined,
        },
      };
  
      // Sign the JWT with the additional ID field
      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
        if (err) throw err;
  
        // Send the response based on user role
        if (user.role === 'user') {
          res.json({ status: "ok", data: token, type: user.role, userID: user.userID });
        } else {
          // For restaurant Owner roles
          res.json({ status: "ok", data: token, type: user.role });
        }
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
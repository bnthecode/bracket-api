import { createToken } from "../middlewares/authMiddleware.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";


export const createUser = async (req, res) => {
  try {
    const { user } = req.body;


    const saltRounds = 10;
    

 const pwHash = await bcrypt.hash(user.password, saltRounds);

 const createdUser = new User({
  ...user,
  is_new: true,
  password: pwHash,
});
 const savedUser = await createdUser.save();
    
    const jwt = createToken(savedUser);
    res.cookie( 'bracket_session', jwt,{ maxAge: 1000 * 60 * 10, httpOnly: false });
    res.status(201).send({ user: savedUser, token: jwt});
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: {
        content: "An error occured creating user",
        info: error.message,
      },
    });
  }
};

// export const loginUser = async (req, res) => {
//   try {
//     const { user } = req.body;
//     const foundUser = await User.findOne({
//       username: user.username,
//     });
//     if (!foundUser) return createUser(req, res);
//     const foundMainUser = await User.findOne({ username: mainUser.username });
//     foundMainUser.friends.push(foundUser._id);
//     await foundMainUser.save();
//     foundUser.status = "Online";
//     await foundUser.save();
//     const uiUser = mongoUserToUiUser(foundUser);

//     res.cookie("ct_session", uiUser.id);
//     res.status(201).send(uiUser);
//   } catch (error) {
//     logger.error(`logging in ${error.message}`);
//     res.status(500).send({
//       message: {
//         content: "An error occured logging in user",
//         info: error.message,
//       },
//     });
//   }
// };


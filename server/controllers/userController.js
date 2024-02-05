import User from "../models/User.js";



export const createUser = async (req, res) => {
  try {
    const { user } = req.body;
    const createdUser = new User({
      ...user,
    });



    const savedUser = await createdUser.save();


    // res.cookie("bracket_session", savedUser.id);
    res.status(201).send(savedUser);
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


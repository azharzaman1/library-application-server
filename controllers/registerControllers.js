import bcrypt from "bcrypt";
import User from "../models/auth/userModal.js";

export const registerNewUser = async (req, res) => {
  const { username, pswd, email } = req.body;
  console.log(req.body);

  if (!username && !pswd && !email) {
    return res.status(400).json({
      status: "failed",
      message:
        "Unable to Register an account. Some Important Fields are missing",
    }); // bad request
  }

  const duplicateUserName = await User.findOne({ username }).exec();
  const duplicateEmail = await User.findOne({ email }).exec();

  if (duplicateUserName) {
    //conflict
    res.statusMessage = "username already taken";
    return res.sendStatus(409);
  } else if (duplicateEmail) {
    //conflict
    res.statusMessage = "email already taken";
    return res.sendStatus(409);
  }
  try {
    const hashedPswd = await bcrypt.hash(pswd, 10);
    const user = { ...req.body, pswd: hashedPswd }; // user role will be added automatically

    const createdUser = await User.create(user);

    if (createdUser) {
      res.statusMessage = "user created successfully with auto generated ID";
      res.status(201).send(createdUser);
    } else {
      res.statusMessage = "unable to create user";
      res.sendStatus(500);
    }
  } catch (err) {
    res.statusMessage = err.message;
    res.sendStatus(500);
  }
};

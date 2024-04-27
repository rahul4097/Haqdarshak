const express = require('express');
const { signup, signin, contactNumber, userAdd } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signup",signup)
userRouter.post("/signin",signin)
userRouter.post("/contact",contactNumber)
userRouter.post("/address",userAdd)


module.exports = userRouter;
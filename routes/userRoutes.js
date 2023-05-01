const express = require("express");


const router = express.Router();

const userController = require("../controller/userController");

router.post("/add-users",userController.postAddUsers);

router.get("/users",userController.getAddUsers);

router.delete("/users/:userId",userController.deleteUser)

router.get("/",userController.getUserForm)

module.exports = router;
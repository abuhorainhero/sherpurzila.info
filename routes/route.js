const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.route("/").get(controller.send);
router.route("/register").post(controller.registerForm);
router.post("/login", controller.login)


module.exports=router






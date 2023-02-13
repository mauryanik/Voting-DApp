import {Router} from "express";
const router = Router();

import * as controller from '../controllers/appController.js'

//Post Methods
router.route('/register').post(controller.register); //register route
// router.route('/registerMail').post();//send the mail
router.route('/authenticate').post((req,res) => res.end());//authenticate user
router.route('/login').post(controller.login);//login in app

//Get Methods
router.route('/user/:username').get(controller.getUser);//user with username
router.route('/generateOTP').get(controller.generateOTP);//generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP);//verify generated OTP
router.route('/createResetSession').get(controller.createResetSession);//reset all the variables

//PUT Methods
router.route('/updateuser').put(controller.updateUser);//is use to update the user profile
router.route('/resetPassword').put(controller.createResetSession);//use to reset password

export default router;
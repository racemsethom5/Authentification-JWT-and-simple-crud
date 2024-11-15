const router = require("express").Router();
const { getAllUsersCtrl, getUserProfileCtrl,updateUserProfileCtrl,getUsersCountCtrl, profilePhotoUploadCtrl, deleteUserProfileCtrl } = require("../controller/usersController");
const photoUpload = require("../middlewares/photoUpload");
const validateObjectId = require("../middlewares/validateObjectId");
const {verifyTokenAndAdmin,verifyTokenAndOnlyUser, verifyToken, verifyTokenAndAuthorization } = require("../middlewares/verifyToken");


// /api/users/profile
router.route("/profile").get(verifyTokenAndAdmin,getAllUsersCtrl);

// /api/users/profile/:id
router.route("/profile/:id")
 .get(validateObjectId,getUserProfileCtrl)
 .put(validateObjectId,verifyTokenAndOnlyUser,updateUserProfileCtrl)
 .delete(validateObjectId,verifyTokenAndAuthorization,deleteUserProfileCtrl);


 // /api/users/count
router.route("/count").get(verifyTokenAndAdmin, getUsersCountCtrl);


// /api/users/profile/profile-photo-upload
router.route("/profile/profile-photo-upload")
 .post(verifyToken,photoUpload.single("image")  ,profilePhotoUploadCtrl) ;







module.exports = router;
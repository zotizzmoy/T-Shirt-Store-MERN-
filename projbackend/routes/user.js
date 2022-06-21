const express = require("express")
const router = express.Router()

const {getUserById, getUser} = require("../controllers/user")
const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth");
const { updateUser } = require("../controllers/user");

router.param("userId", getUserById, getUser);

router.get("/user/:userId", isSignedIn, isAuthenticated, isAdmin );
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser)


module.exports = router;
const express = require("express");
const router = express.Router();
const {getContact,postContact,putContact,deleteContact}=require("../controllers/contactController");

router.route("/").get(getContact);
router.route("/").post(postContact);
router.route("/:id").put(putContact);
// router.route("/:id").get();
router.route("/:id").delete(deleteContact);
module.exports=router

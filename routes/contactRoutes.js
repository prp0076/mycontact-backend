const express = require("express");
const router = express.Router();
const {getContact,postContact,putContact,deleteContact}=require("../controllers/contactController");

router.route("/").get(getContact).post(postContact);
// router.route("/").post(postContact);
router.route("/:id").put(putContact).delete(deleteContact);
// router.route("/:id").get();
// router.route("/:id").delete(deleteContact);
module.exports=router

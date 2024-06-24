const express = require ("express");
const router = express.Router();
const usercontroller = require("../controller/usercontroller")



router.get("/", usercontroller.articles)

router.post("/addTweet" , usercontroller.addArticle)

router.get("/addTweet" , usercontroller.allArticel)


router.get("/delete/:id", usercontroller.deleteArticle)
router.get("/update/:id", usercontroller.updateArticle)

router.post("/editArticle/:id" ,usercontroller.saveEdit)
// mainPage:

router.get("/main" , usercontroller.mainPage)

router.post("/signUp", usercontroller.signUp)




router.post("/logIn", usercontroller.logIn)




module.exports=router
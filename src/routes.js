const express = require("express")
const router = express.Router()
const userController = require("./Controllers/userController")

router.post("/login",userController.login)

router.all("/**", (req, res) => {
    try{
        res.status(400).send({status: false,msg: "The api you request is not available"})
    }catch(err){
        res.send(err.message)
    }
})

module.exports = router;
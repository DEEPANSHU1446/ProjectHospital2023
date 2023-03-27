const userModel = require("../Models/userModel")
// const valid = require("../validator/validations")


const login = async function (req,res){
    try {
        let otp = function(){
            let length = 4 
            let generate = " "
            for (let i = 0; i<length; i++) {
                generate += Math.floor(Math.random()*10);
            }
             return generate
        }
      let otpgenerated = otp()
        let Data = req.body
        let MobileNo= req.body.MobileNo
        let UserType = req.body.UserType
    
        if(!MobileNo){
            return res.status(400).send({ status: false, msg:"Enter Mobile Number"})
        }
        if(!UserType){
            return res.status(400).send({ status: false, msg:"Enter UserType"})
        }
        // if(!valid.isvalid(MobileNo)){
        //     return res.status(400).send({ status: false, msg:"Please Enter Valid Mobile Number"})
        // }
        let saveData = await userModel.create(Data)
        console.log(saveData)
        let finalData = {
            mobile: saveData.MobileNo,
            Usertype: saveData.UserType,
            OTP:otpgenerated,
            OtpReferenceId:saveData._id
        }
        console.log(finalData)
        return res.status(201).send({ status: true, Data: finalData })
        
    } catch (error) {
        return res.status(500).send({ status: false, msg:error.message})
    }
}
      module.exports={login}
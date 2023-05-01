const path = require("path")
const Users = require("../Models/users");
const sequelize = require("../utils/dataBase");



exports.postAddUsers = async (req,res,next)=>{
    const urlEncodedString = Object.keys(req.body)[0]; // get the URL-encoded string from the object keys
    const decodedString = decodeURIComponent(urlEncodedString); // decode the URL-encoded string
    const userObject = JSON.parse(decodedString); // parse the string into a JavaScript object
    
    const userName = userObject.userName;
    const userEmailId = userObject.userEmailId;
    const userPhoneNumber = userObject.userPhoneNumber;

    if(!userEmailId || !userPhoneNumber){
       return res.status(400).json({error:"Email-id and Phone-Number is mandatory field"})
    }

    try { 
    const data = await Users.create({
        userName : userName,
        userEmailId : userEmailId,
        userPhoneNumber : userPhoneNumber
    });
    res.status(201).json({newUserDetail:data});
  } catch(err){
    console.log(err)
    res.status(500).json({
        error:err
    })
  }
 };


exports.getUserForm = (req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views", "index.html"));
}

exports.getAddUsers = async (req,res)=>{
    try{ 
        const userDetails = await Users.findAll()
             res.status(200).json({userDetails})
    } catch (err){
        res.status(500).json({
            error:err
        })
    }
};

exports.deleteUser = async (req,res)=>{
  const userId = req.params.userId;
  try{
  const toDeleteUser = await Users.findByPk(userId);
      await  toDeleteUser.destroy();
      res.status(200).json({
        message:"Deleting completed successfully!"
      })
  } catch(err){
    res.status(400).json({
        error:"Something went wrong"
    })
  }
// res.redirect("/")
}

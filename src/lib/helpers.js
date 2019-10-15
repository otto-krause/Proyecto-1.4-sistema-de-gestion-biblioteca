const bcrypt=require('bcryptjs');
const helpers ={};

helpers.encryptPassword = async (password)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const EncryptedPassword = await bcrypt.hash(password, salt);
        return EncryptedPassword;
    }
    catch(e){
        console.log(e);
    } 
    
}
helpers.comparePassword = async(password, DBPassword)=>{
    try{
        return await bcrypt.compare(password, DBPassword);
    }
    catch(e){
        console.log(e);
    } 
    
}
module.exports = helpers;
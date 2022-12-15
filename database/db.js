import mongoose from "mongoose";

export const Connection = async (URL) =>{
    
    try{
        await mongoose.connect(URL ,{ useNewUrlParser : true });
        console.log("database connected successfully");
    }catch(error){
        console.log("Error while connecting with database",error);
    }
}

export default Connection ;
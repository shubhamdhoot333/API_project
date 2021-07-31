const mongoose = require('mongoose'); 
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
const userSchema=new mongoose.Schema({
    name:{
            type:String,
            required:true
        },
    email:{
        type:String,
        required:true
        },
    phone:{
            type:Number,
            required:true
            },
    work:{
            type:String,
            required:true
         },
password:{
            type:String,
            required:true
         },
cpassword:{
            type:String,
            required:true
          },
      });



    

        //hasing password here 
    userSchema.pre('save', async (next) =>{ 
        if(this.isModified('password')){
                this.password = bcrypt.hash(this.password,12);
                this.cpassword = bcrypt.hash(this.cpassword,12);
        }
        next();
    });

    //generate authtoken and store in database

    userSchema.methods.generateAuthToken = async function(){
            try{
                  let token =jwt.sign({_id:this._id},process.env.SECRET_KEY);  
                  this.tokens = this.tokens.concat({token:token });
                   await this.save();
                    return token;
                }catch(err){
                console.log(err);

            }
    
    
    }

    const User = mongoose.model('user',userSchema);

    module.exports = User;
const {User}=require('../models/users.model')


const  register = async (req,res) => {
    try {


        const user=await User.create(req.body)


        res.send(user)
        
    } catch (error) {
        res.send(error)
    }

}

const login = async (req,res) => {
    
    const {email,password}=req.body;

    try {
       const user=await User.findOne({email:email}) 

       if(!user){
        return res.send('User not found')
       }

       if(password === user.password){
        return res.send(user)
       }
       else{
        res.send("Incorrect password")
       }
    } catch (error) {
        res.send(error)
    }
}

module.exports={register,login}
const User = require('../models/User.model');
const bcrypt = require('bcrypt')

const signUp = async (req, res) => {
    try {
        const {email} = req.body;
        const userExist = await User.findOne({email});

        if (!userExist){
            const newUser = new User(req.body)
            newUser.hashPassword(req.body.password)

            const response = await newUser.save()

            return res.json({
                message: 'user created successfully',
                detail: response
            })
        }else{
            return res.json({
                message: 'usuario ya existe',
                
            })
        }
    } catch (error) {
        return res.json({
            meseege: 'Error',
            detail: error.meseege
        })
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({ email })

        const correctPassword = user === null ? false : await bcrypt.compare(password, user.password)

        if(!(user && correctPassword)){
            return res.json({
                message: 'Invalid user or password'

            })
        }else{
            return res.json({
                message: 'ok',
                detail: {
                    user,
                    token: user.generateJWT()

                }
            })
        }
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const response = await User.find()
        if (response) {
            return res.json({
                message: 'users',
                detail: response
            })
        }
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.meseege
        })
    }
}

const upDateUser = async (req, res) =>{
    try {
        const newData = req.body;

        const response = await User.findByIdAndUpdate(
            newData.id,
            { $set: newData },
            { new: true }
        )
        if (response){
            return res.json({
                message: 'usuario actualizado correctamente',
                detail: response
            })
        }
    } catch (error) {
        return res.json({
            message: 'error',
            detail: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const response = await User.findByIdAndDelete(req.body.id)
        if (response){
            return res.json ({
                message: "usuario eliminado exitosamente ",
                detail: response
            })
        }
    } catch (error) {
        return res.json({
            message: 'error',
            detail: error.message
        })
    }
}

module.exports = {
    signUp,
    login,
    getAllUsers,
    upDateUser,
    deleteUser
}
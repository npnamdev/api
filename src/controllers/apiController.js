const User = require("../models/user");
//==================GET===============

const getUsersApi = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json(
        {
            errorCode: 0,
            data: results
        }
    )
}

const createUserApi = async (req, res) => {
    let { email, name, city } = req.body;
    let results = await User.create({ email, name, city, });
    return res.status(200).json(
        {
            errorCode: 0,
            data: results
        }
    )
}

const updateUserApi = async (req, res) => {
    let { userId, email, name, city } = req.body;
    let results = await User.updateOne({ _id: userId }, { email: email, name: name, city: city });
    return res.status(200).json(
        {
            errorCode: 0,
            data: results
        }
    )
}

const deleteUserApi = async (req, res) => {
    let { userId } = req.body;
    let results = await User.deleteOne({ _id: userId })
    return res.status(200).json(
        {
            errorCode: 0,
            data: results
        }
    )
}



module.exports = {
    getUsersApi, createUserApi, updateUserApi, deleteUserApi
}
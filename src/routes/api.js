const express = require('express');
const routerAPI = express.Router();
const { getUsersApi, createUserApi, updateUserApi, deleteUserApi } = require('../controllers/apiController');



routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', createUserApi);
routerAPI.put('/users', updateUserApi);
routerAPI.delete('/users', deleteUserApi);



module.exports = routerAPI;



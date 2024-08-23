const User = require('../models/userModel');

const createUser = async (userData) => {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};


module.exports = {
    createUser
};

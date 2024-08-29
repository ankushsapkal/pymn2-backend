import User from '../models/userModel.js';

const createUser = async (userData) => {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};

const getAllUsers = async () => {
    try {
        return await User.findAll();
    } catch (error) {
        throw new Error('Error retrieving users: ' + error.message);
    }
};


export  {
    createUser,
    getAllUsers
};

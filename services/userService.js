import User from '../models/userModel.js';

const createUser = async (userData) => {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            const field = error.errors[0].path; 

            if (field === 'email') {
                throw new Error('User with this email already exists.');
            } else if (field === 'mobile_number') {
                throw new Error('User with this mobile number already exists.');
            }
        }
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

export {
    createUser,
    getAllUsers
};

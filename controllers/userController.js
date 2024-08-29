import { createUser as createUserService , getAllUsers as getAllUserService } from '../services/userService.js';

const createUser = async (req, res) => {
    try {
        const newUser = await createUserService(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUserService();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {
    createUser,
    getAllUsers,
};

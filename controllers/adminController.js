import { authenticateAdmin } from '../services/adminService.js';
import { getAllUsers as getAllUserService } from '../services/userService.js';
import jwt from 'jsonwebtoken';

const adminLogin = async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const admin = await authenticateAdmin(username, password);

        if (admin) {
            const token = jwt.sign(
                { id: admin.id, username: admin.username },
                process.env.JWT_SECRET,
                { expiresIn: '15m' } 
            );

            res.status(200).json({ message: 'Login successful', token });
        } else {
            res.status(401).json({ error: 'Unauthorized user', Status_Code: 401 });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUserService();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {
    adminLogin,
    getAllUsers
};

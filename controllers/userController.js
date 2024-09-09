import { createUser as createUserService, getAllUsers as getAllUserService } from '../services/userService.js';
import { validationResult, check } from 'express-validator';

const registerUserValidators = [
    check('first_name').notEmpty().withMessage('First name is required'),
    check('last_name').notEmpty().withMessage('Last name is required'),
    check('email').isEmail().withMessage('Email Id is required and Valid email is required'),
    check('mobile_number').isLength({ min: 10, max: 10 }).withMessage('mobile number is required and Mobile number must be exactly 10 digits'),
    check('product_type').isIn(['Retailer', 'Distributor', 'API User']).withMessage('Product type is required or Invalid product type')
];

const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Validation failed', errors: errors.array() });
    }

    try {
        const newUser = await createUserService(req.body);
        res.status(201).json({ message: 'User registered successfully', user: newUser });
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
    registerUserValidators,
    createUser,
    getAllUsers
};

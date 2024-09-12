import { createUser as createUserService, getAllUsers as getAllUserService } from '../services/userService.js';
import { validationResult, check } from 'express-validator';

const registerUserValidators = [
    check('first_name')
        .trim()
        .notEmpty().withMessage('First name is required') 
        .bail()
        .customSanitizer(value => value.replace(/\s+/g, ' ')) 
        .matches(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/).withMessage('First name can only contain letters'),

    check('last_name')
        .trim()  
        .notEmpty().withMessage('Last name is required') 
        .bail()  
        .customSanitizer(value => value.replace(/\s+/g, ' ')) 
        .matches(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/).withMessage('Last name can only contain letters'),

    check('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .bail() 
        .isEmail().withMessage('Valid email is required') 
        .bail() 
        .normalizeEmail() 
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).withMessage('Invalid email format')
        .custom((value) => {
            const domain = value.split('@')[1];
            const validDomains = ['gmail.com', 'yahoo.com', 'outlook.com'];
            if (!validDomains.includes(domain)) {
                throw new Error('Invalid email domain');
            }
            return true;
        }),

    check('mobile_number')
        .trim()  
        .isLength({ min: 10, max: 10 }).withMessage('Mobile number must be exactly 10 digits')
        .bail() 
        .matches(/^\d+$/).withMessage('Mobile number must contain only digits'),

    check('product_type')
        .trim()  
        .notEmpty().withMessage('Product type is required') 
        .bail() 
        .isIn(['Retailer', 'Distributor', 'API User']).withMessage('Invalid product type'),
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

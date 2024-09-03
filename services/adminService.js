import Admin from '../models/adminModel.js';

const authenticateAdmin = async (username, password) => {
    try {
        const admin = await Admin.findOne({ where: { username, password } });
        
        return admin;
    } catch (error) {
        throw new Error('Error authenticating admin: ' + error.message);
    }
};

export {
    authenticateAdmin
};

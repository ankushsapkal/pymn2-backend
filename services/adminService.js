import Admin from '../models/adminModel.js';

const authenticateAdmin = async (username, password) => {
    try {
        const admin = await Admin.findOne({ where: { username, password } });
        return admin;
    } catch (error) {
        throw new Error('Error authenticating admin: ' + error.message);
    }
};

const saveRefreshToken = async (adminId, refreshToken) => {
    try {
        await Admin.update(
            { refresh_token: refreshToken },
            { where: { id: adminId } }
        );
    } catch (error) {
        throw new Error('Error saving refresh token: ' + error.message);
    }
};

const getAdminByRefreshToken = async (refreshToken) => {
    try {
        return await Admin.findOne({ where: { refresh_token: refreshToken } });
    } catch (error) {
        throw new Error('Error retrieving admin by refresh token: ' + error.message);
    }
};

export {
    authenticateAdmin,
    saveRefreshToken,
    getAdminByRefreshToken
};

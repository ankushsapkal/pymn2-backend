import { authenticateAdmin, saveRefreshToken, getAdminByRefreshToken } from '../services/adminService.js';
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

            const refreshToken = jwt.sign(
                { id: admin.id, username: admin.username },
                process.env.JWT_SECRET,
                { expiresIn: '7d' } 
            );

            await saveRefreshToken(admin.id, refreshToken);

            res.status(200).json({ message: 'Login successful', token, refreshToken });
        } else {
            res.status(401).json({ error: 'Unauthorized user', Status_Code: 401 });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const refreshAccessToken = async (req, res) => {
    const { refreshToken } = req.body;

    try {
        if (!refreshToken) {
            return res.status(403).json({ error: 'Refresh token not provided' });
        }

        const admin = await getAdminByRefreshToken(refreshToken);

        if (!admin) {
            return res.status(403).json({ error: 'Invalid refresh token' });
        }

        jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ error: 'Invalid or expired refresh token' });
            }

            const newToken = jwt.sign(
                { id: admin.id, username: admin.username },
                process.env.JWT_SECRET,
                { expiresIn: '15m' }
            );

            res.status(200).json({ token: newToken });
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export {
    adminLogin,
    refreshAccessToken
};

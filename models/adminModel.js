import pkg from 'sequelize';
const { DataTypes } = pkg;
import sequelize from '../config/db.js';

const Admin = sequelize.define('Admin', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'admin_logIn',
    timestamps: false
});

export default Admin;

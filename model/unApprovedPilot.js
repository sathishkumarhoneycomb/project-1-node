const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/db');




const UnapprovedPilot = sequelize.define("unapproved_pilots", {
    memberId: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    mobile: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    gender: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    pan: {
        type: DataTypes.STRING(10),
        allowNull: true,
        unique: true
    },
    aadhar: {
        type: DataTypes.STRING(16),
        allowNull: true,
        unique: true
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    dgca: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    licenceType: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    airline: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    base: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    aircraft: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    photo: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    isnag: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    is_gmc: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    memberType: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    licenseNumber: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    noofmonth: {
        type: DataTypes.ENUM('1', '3', '6', '12'),
        allowNull: true
    },
    addedby: {
        type: DataTypes.ENUM('self', 'alpa', 'trust'),
        allowNull: false,
        defaultValue: 'self'
    },
    addedbyid: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    remember_token: {
        type: DataTypes.TEXT,
        allowNull: true
    },
}, {
    timestamps: true
});






module.exports = UnapprovedPilot;

const Sequelize = require('sequelize');

const sequelize = require('../util/db');


const UnApprovedPilot = sequelize.define("unapproved_pilots",{
    member_id: {
      type: DataTypes.TEXT,
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
    licencetype: {
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

    isaccepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
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
    onetimefee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    membertype: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    licenseno: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    noofmonth: {
      type: DataTypes.ENUM('1', '3', '6', '12'),
      allowNull: true
    },
    fund_started_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    addedby: {
      type: DataTypes.ENUM('self', 'alpa', 'trust'),
      allowNull: false,
      defaultValue: 'self'
    },
    addedbyid: {
      type: DataTypes.STRING(255),
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  })


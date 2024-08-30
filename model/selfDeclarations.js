const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../util/db'); // Adjust the path to your database connection
const UnapprovedPilot = require('./unapprovedPilot');

const SelfDeclaration = sequelize.define('self_declarations', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  memberId: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  require_hospitalization: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  previous_illness: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  mental_illness: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  sleep_disorder: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  Impairment: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  suicide_attempt: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  head_injury: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  migraine: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  dizziness: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  unconsciousness: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  back_pain: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  vascular_trouble: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  anaemia: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  bp: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  chest_pain: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  pneumonia: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  intestinal_trouble: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  indigestion: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  jaundice: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  kidney_trouble: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  urine_trouble: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  ear_trouble: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  vision_trouble: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  wearing_anything: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  night_blindness: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  leprosy: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  malaria: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  cancer: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  fever: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  diabetes: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  hormone_disorder: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  std: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  hiv: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  skin_condition: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  drug_allergy: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  alcohol: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  dental_problems: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  failed_examination: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  drug_medicines: {
    type: DataTypes.STRING(3),
    allowNull: true,
  },
  past_history: {
    type: DataTypes.STRING(3),
    allowNull: true,
  }

}, {
  timestamps: true,
});



SelfDeclaration.belongsTo(UnapprovedPilot, { as : 'member' , foreignKey : 'memberId', constraints: false});


module.exports = SelfDeclaration;

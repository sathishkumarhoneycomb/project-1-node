const { Op } = require('sequelize');
const UnapprovedPilot = require('../model/unapprovedPilot'); // Adjust the path as needed

const randomUniqueCode = async () => {
    const random = 'ALPA' + Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1111111111) + 1111111111);

    const count = await UnapprovedPilot.count({
        where: {
            memberId: random
        }
    });

    if (count === 0) {
        return random;
    } else {
        return randomUniqueCode(); // Recursively call until a unique code is found
    }
};

module.exports = randomUniqueCode;

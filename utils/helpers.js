module.exports = {};

const { Donomon } = require('../models');
// Level up function for Donomon
const levelUp = async (donomonId) => {
    // Find the donomon by id
    const donomon = await Donomon.findByPk(donomonId);
    // Get current level and exp
    const exp = donomon.exp;
    let level = donomon.level;
    // Increase the level by 1 at specific exp values
    switch (exp) {
        case 10:
            level = 2;
            break;
        case 20:
            level = 3;
            break;
        case 30:
            level = 4;
            break;
        case 40:
            level = 5;
            break;
        case 50:
            level = 6;
            break;
        case 60:
            level = 7;
            break;
        case 70:
            level = 8;
            evolve();
            break;
        case 80:
            level = 9;
            break;
        case 90:
            level = 10;
            break;
        case 100:
            level = 11;
            break;
        case 110:
            level = 12;
            break;
        case 120:
            level = 13;
            break;
        case 130:
            level = 14;
            break;
        case 140:
            level = 15;
            break;
        case 150:
            level = 16;
            evolve();
            break;
        default:
    }
    // Update the donomon with the new level
    await Donomon.update(
        {
            level,
        },
        {
            where: {
                id: donomonId,
            },
        },
    );
    // Return the updated donomon
    return donomon;
};

exports.levelUp = levelUp;

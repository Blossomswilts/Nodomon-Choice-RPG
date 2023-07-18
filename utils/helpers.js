const { Donomon } = require('../models');
//___________________________________________________EVOLVE FUNCTION_______________________________________________________
// Evolve function for Donomon
const evolve = async (donomon) => {
    // Get the name and morality
    const id = donomon.id;
    const morality = donomon.morality;
    let name;
    let type;
    // Evolve depending on name and morality
    switch (donomon.name) {
        //________________________Water Donomon________________________
        case 'Turbulin':
            if (morality >= 0) {
                name = 'Truskblind';
                type = 'water/light';
            } else {
                name = 'Trushblin';
                type = 'water/dark';
            }
            await Donomon.update(
                {
                    type,
                    name,
                },
                {
                    where: {
                        id,
                    },
                },
            );
            break;
        case 'Trushblin':
            if (morality >= 0) {
                name = 'Triskloon';
                type = 'water/cloud';
            } else {
                name = 'Trillnight';
                type = 'water/midnight';
            }
            await Donomon.update(
                {
                    type,
                    name,
                },
                {
                    where: {
                        id,
                    },
                },
            );
            break;
        case 'Truskblind':
            if (morality >= 0) {
                name = 'Trushblinding';
                type = 'water/radiant';
            } else {
                name = 'Trisklown';
                type = 'water/cloud';
            }
            await Donomon.update(
                {
                    type,
                    name,
                },
                {
                    where: {
                        id,
                    },
                },
            );
            break;
        //________________________Fire Donomon________________________
        case 'Raskat':
            if (morality >= 0) {
                name = 'Roskight';
                type = 'fire/light';
            } else {
                name = 'Riskin';
                type = 'fire/dark';
            }
            await Donomon.update(
                {
                    type,
                    name,
                },
                {
                    where: {
                        id,
                    },
                },
            );
            break;
        case 'Roskight':
            if (morality >= 0) {
                name = 'Raskatiant';
                type = 'fire/radiant';
            } else {
                name = 'Rosekin';
                type = 'fire/cloud';
            }
            await Donomon.update(
                {
                    type,
                    name,
                },
                {
                    where: {
                        id,
                    },
                },
            );
            break;
        case 'Riskin':
            if (morality >= 0) {
                name = 'Remskyte';
                type = 'fire/cloud';
            } else {
                name = 'Risknuit';
                type = 'fire/midnight';
            }
            await Donomon.update(
                {
                    type,
                    name,
                },
                {
                    where: {
                        id,
                    },
                },
            );
            break;
        //________________________Grass Donomon_______________________
        case 'Snoober':
            if (morality >= 0) {
                name = 'Snipight';
                type = 'grass/light';
            } else {
                name = 'Snarker';
                type = 'grass/dark';
            }
            await Donomon.update(
                {
                    type,
                    name,
                },
                {
                    where: {
                        id,
                    },
                },
            );
            break;
        case 'Snipight':
            if (morality >= 0) {
                name = 'Snoobeam';
                type = 'grass/radiant';
            } else {
                name = 'Snowsyke';
                type = 'grass/cloud';
            }
            await Donomon.update(
                {
                    type,
                    name,
                },
                {
                    where: {
                        id,
                    },
                },
            );
            break;
        case 'Snarker':
            if (morality >= 0) {
                name = 'Snawitch';
                type = 'grass/cloud';
            } else {
                name = 'Snawitchin';
                type = 'grass/midnight';
            }
            await Donomon.update(
                {
                    type,
                    name,
                },
                {
                    where: {
                        id,
                    },
                },
            );
            break;
        default:
    }
};
//___________________________________________________LEVEL UP FUNCTION_______________________________________________________
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
            evolve(donomon);
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
            evolve(donomon);
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
};

exports.levelUp = levelUp;

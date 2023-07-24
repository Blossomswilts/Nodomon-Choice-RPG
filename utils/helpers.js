const { Donomon } = require('../models');
//___________________________________________________EVOLVE FUNCTION_______________________________________________________
// Evolve function for Donomon
const evolve = async (donomon) => {
    // Get the name and morality
    const id = donomon.id;
    const morality = donomon.morality;
    let donomonTypeId = donomon.donomon_type_id;
    // Evolve depending on name and morality
    switch (donomonTypeId) {
        //________________________Water Donomon________________________
        case 1:
            if (morality >= 0) {
                donomonTypeId = 3;
            } else {
                donomonTypeId = 2;
            }
            // await Donomon.update(
            //     {
            //         donomonTypeId,
            //     },
            //     {
            //         where: {
            //             id,
            //         },
            //     },
            // );
            break;
        case 2:
            if (morality >= 0) {
                donomonTypeId = 5;
            } else {
                donomonTypeId = 4;
            }
            // await Donomon.update(
            //     {
            //         donomonTypeId,
            //     },
            //     {
            //         where: {
            //             id,
            //         },
            //     },
            // );
            break;
        case 3:
            if (morality >= 0) {
                donomonTypeId = 7;
            } else {
                donomonTypeId = 6;
            }
            // await Donomon.update(
            //     {
            //         donomonTypeId,
            //     },
            //     {
            //         where: {
            //             id,
            //         },
            //     },
            // );
            break;
        //________________________Fire Donomon________________________
        case 8:
            if (morality >= 0) {
                donomonTypeId = 10;
            } else {
                donomonTypeId = 9;
            }
            // await Donomon.update(
            //     {
            //         donomonTypeId,
            //     },
            //     {
            //         where: {
            //             id,
            //         },
            //     },
            // );
            break;
        case 10:
            if (morality >= 0) {
                donomonTypeId = 14;
            } else {
                donomonTypeId = 12;
            }
            // await Donomon.update(
            //     {
            //         donomonTypeId,
            //     },
            //     {
            //         where: {
            //             id,
            //         },
            //     },
            // );
            break;
        case 9:
            if (morality >= 0) {
                donomonTypeId = 13;
            } else {
                donomonTypeId = 11;
            }
            // await Donomon.update(
            //     {
            //         donomonTypeId,
            //     },
            //     {
            //         where: {
            //             id,
            //         },
            //     },
            // );
            break;
        //________________________Grass Donomon_______________________
        case 15:
            if (morality >= 0) {
                donomonTypeId = 17;
            } else {
                donomonTypeId = 16;
            }
            // await Donomon.update(
            //     {
            //         donomonTypeId,
            //     },
            //     {
            //         where: {
            //             id,
            //         },
            //     },
            // );
            break;
        case 17:
            if (morality >= 0) {
                donomonTypeId = 21;
            } else {
                donomonTypeId = 19;
            }
            // await Donomon.update(
            //     {
            //         donomonTypeId,
            //     },
            //     {
            //         where: {
            //             id,
            //         },
            //     },
            // );
            break;
        case 16:
            if (morality >= 0) {
                donomonTypeId = 20;
            } else {
                donomonTypeId = 18;
            }
            // await Donomon.update(
            //     {
            //         donomonTypeId,
            //     },
            //     {
            //         where: {
            //             id,
            //         },
            //     },
            // );
            break;
        default:
    }
    return donomonTypeId;
};
//___________________________________________________LEVEL UP FUNCTION_______________________________________________________
// Level up function for Donomon
const levelUp = async (donomon) => {
    let donomonTypeId;
    // Get current level and exp
    // const exp = donomon.exp;
    const exp = 70;
    // let level = donomon.level;
    let level = 8;
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
            donomonTypeId = await evolve(donomon);
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
            donomonTypeId = await evolve(donomon);
            break;
        default:
        // donomon.level = level;
    }
    donomon.level = level;
    donomon.donomon_type_id = donomonTypeId;
    return donomon;
    // // Update the donomon with the new level
    // await Donomon.update(
    //     {
    //         level,
    //     },
    //     {
    //         where: {
    //             id: donomon.id,
    //         },
    //     },
    // );
    // return { ...donomon, level, donomonTypeId: donomon.donomon_type_id };
};

exports.levelUp = levelUp;

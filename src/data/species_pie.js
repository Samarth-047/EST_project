import { Andaman_species_pie } from "./mangroves/Andaman";
import { Sundarban_species_pie } from "./mangroves/Sundarban";

export const SpeciesPieChartLabels = (mangrove) => {
    switch (mangrove) {
        case 'Andaman':
            return Andaman_species_pie['labels'];
            break;
        case 'Sundarbans':
            return Sundarban_species_pie['labels'];
            break;
        default:
            break;
    }
    return [1, 2, 3]
}

export const SpeciesPieChartData = (mangrove) => {
    switch (mangrove) {
        case 'Andaman':
            return Andaman_species_pie['data'];
            break;
        case 'Sundarbans':
            return Sundarban_species_pie['data'];
            break;
        default:
            break;
    }
    return [33.33, 33.33, 33.33]
}

export const SpeciesPieChartColors = (mangrove) => {
    switch (mangrove) {
        case 'Andaman':
            return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4", "#29cc61", "#7040fa", "#ff8a65", "#d0d0d0", "#ff8a65", "#d0d0d0"];
            break;
        case 'Sundarbans':
            return ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157", "#a389d4"];
            break;
    }
    return [];
}

// module.exports = {
//     SpeciesPieChartLabels,
//     SpeciesPieChartData,
// };
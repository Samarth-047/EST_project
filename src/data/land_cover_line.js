import { Sundarban_land_cover_line } from "./mangroves/Sundarban"

export const LandCoverLineYears = (mangrove) => {
    switch (mangrove) {
        case 'Sundarbans':
            return Sundarban_land_cover_line['years'];
            break;
        default:
            break;
    }
    return [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
};

export const LandCoverLineData = (mangrove) => {
    switch (mangrove) {
        case 'Sundarbans':
            return Sundarban_land_cover_line['data'];
            break;
        default:
            break;
    }
    return [
        [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
        [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63]
    ]
}

export const LandCoverLineColors = (mangrove) => {
    switch (mangrove) {
        case 'Sundarbans':
            return ['#fbc658', '#51CACF', '#f17e5d', '#6bd098', '#fcc468'];
            break;
        default:
            break;
    }
    return ['#fbc658', '#51CACF', '#f17e5d', '#6bd098', '#fcc468'];
}

export const LandCoverLineLabels = (mangrove) => {
    switch (mangrove) {
        case 'Sundarbans':
            return Sundarban_land_cover_line['labels'];
            break;
        default:
            break;
    }
    return ["Dense", "Moderate-Dense", "Sparse", "Barren", "Water"];
}

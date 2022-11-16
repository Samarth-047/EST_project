import { Sundarban_species_headings, Sundarban_species_data } from "./mangroves/Sundarban";
import { Bhitakanika_species_headings, Bhitakanika_species_data } from "./mangroves/Bhitakanika";

const species_cover = {
    headings: {
        'Sundarbans': Sundarban_species_headings,
        'Bhitarkanika': Bhitakanika_species_headings,
    },

    data: {
        'Sundarbans': Sundarban_species_data,
        'Bhitarkanika': Bhitakanika_species_data
    }
}

export default species_cover;
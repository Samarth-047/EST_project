import { Krishna_land_cover_headings, Krishna_land_cover_data } from "./mangroves/Krishna"
import { Kachchh_land_cover_headings, Kachchh_land_cover_data } from "./mangroves/Kachchh"

const land_cover = {
    headings: {
        'Krishna': Krishna_land_cover_headings,
        'Kachchh': Kachchh_land_cover_headings,
    },

    data: {
        'Krishna': Krishna_land_cover_data,
        'Kachchh': Kachchh_land_cover_data,
    }

}

export default land_cover;
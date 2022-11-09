import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"

import MarkerClusterGroup from 'react-leaflet-cluster'
import { MapContainer, TileLayer, Marker, Tooltip, Popup } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map = (props) => {
    const [hotel, sethotel] = useState([]);
    const navigate = useNavigate();

    const tileLayer = {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
    //create a 2d array of lat and long
    const lat = ["22.7443", "20.730696", "21.9497"]
    const long = ["69.9550", "86.866511", "89.1833"]
    const name = ["Gulf of kachh", "Bhitarkanika", "Sunderbans"]
    const position = [lat.map((item) => item), long.map((item) => item)]

    const a = "51.505"
    const b = "-0.09"
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ cursor: "pointer" }}
                            onClick={() => navigate("/")}
                        >
                            MANGROOVE DATABASE OF THE COUNTRY
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <br /><br /><br /><br />
            <Grid container align={'center'}>
                <Grid item xs={12}>
                    <MapContainer style={{ height: '70vh', width: '70vw' }}
                        center={[14.8, 77.4]} zoom={5} scrollWheelZoom={true}>
                        <TileLayer {...tileLayer} />
                        <MarkerClusterGroup
                            chunkedLoading
                        >
                            {lat.map((users1, index) =>
                                <>
                                    <Marker position={[lat[index], long[index], "abc"]} >
                                        <Tooltip>
                                            Hotel: {name[index]}
                                        </Tooltip>
                                    </Marker>
                                </>
                            )}
                        </MarkerClusterGroup>
                    </MapContainer>
                </Grid>
            </Grid>
            <br />
        </>
    );
};

export default Map;

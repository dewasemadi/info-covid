import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Link from "next/link";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { makeStyles } from "@mui/styles";
import styles from "./Map.style";
const useStyles = makeStyles(styles);

export default function Map({ lat, long, name, phone, address }) {
  const classes = useStyles();

  return (
    <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={true} className='map-container'>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[lat, long]}>
        <Popup>
          <p className={classes.name}>{name}</p>

          <div className={classes.container}>
            <LocationOnRoundedIcon sx={{ fontSize: 17, mr: 1 }} className={classes.icon} />
            <p className={classes.address}>{address}</p>
          </div>

          <Link href={`tel:${phone ? phone : ""}`} passHref>
            <div className={classes.container}>
              <PhoneRoundedIcon sx={{ fontSize: 17, mr: 1 }} className={classes.icon} />
              <p className={classes.phone}>{phone ? phone : "No phone number"}</p>
            </div>
          </Link>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

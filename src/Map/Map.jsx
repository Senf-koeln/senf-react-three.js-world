import ReactMapboxGl from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { customLayer } from "./config";


const style = "mapbox://styles/tmorino/ckclpzylp0vgp1iqsrp4asxt6";
const mapStyle = {
  height: "100vh",
  width: "100vw",
};

const MapComponent = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoidG1vcmlubyIsImEiOiJjazBzZHZjeWQwMWoyM2NtejlzcnMxd3FtIn0.I_Xcc1aJiN7hToGGjNy7ow",
  // mapInstance: MapboxGL.Map,
  antialias: true
});

const Map = () => {
  return (
    <MapComponent
      onStyleLoad={(map, evt) => {
        map.addLayer(customLayer);
      }}
      zoom={[18]}
      center={[148.9819, -35.3981]}
      pitch={[60]}
      style={style}
      containerStyle={mapStyle}
    />
  );
};

export default Map;

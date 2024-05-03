import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "leaflet";
import { clearPath } from "../redux/slices/flightSlice";

const MapView = ({ setDetailId }) => {
  const flightState = useSelector((store) => store.flightReducer);

  const dispatch = useDispatch();

  const planeIcon = icon({
    iconUrl: "/plane-icon.png",
    iconSize: [30, 30],
  });

  return (
    <div>
      <MapContainer
        center={[38.948771, 35.425597]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/*Uçuş verisi kadar simgi render et */}
        {flightState.flights.map((flight) => (
          <Marker
            icon={planeIcon}
            key={flight.id}
            position={[flight.lat, flight.lng]}
          >
            <Popup>
              <div className="d-flex flex-column gap-2">
                <span>Kod: {flight.code}</span>
                <button
                  onClick={() => setDetailId(flight.id)}
                  className="w-100 bg-black text-white"
                >
                  Detay
                </button>

                {/*Rota varsa ekranda temizle butonu koy */}
                {flightState.path.length > 0 && (
                  <button onClick={() => dispatch(clearPath())}>
                    Rotayı Temizle
                  </button>
                )}
              </div>
            </Popup>
          </Marker>
        ))}

        {/*Uçağın rotasını çizmek */}

        <Polyline positions={flightState?.path} />
      </MapContainer>
    </div>
  );
};

export default MapView;

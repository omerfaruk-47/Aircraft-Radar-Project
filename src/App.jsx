import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";
import Modal from "./components/Modal";

function App() {
  //harita görünümü aktif mi
  const [isMapView, setIsMapView] = useState(true);

  //Detayı gösterilecek elemanın idsi
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  //uçuş verilerini al
  useEffect(() => {
    dispatch(getFlights());

    //10 saniyede bir uçuş verilerini al
    setInterval(() => {
      dispatch(getFlights());
    }, 10000);
  }, []);

  return (
    <div>
      <Header />

      <div className="view-buttons">
        <button
          className={isMapView ? "active" : ""}
          onClick={() => setIsMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={isMapView ? "" : "active"}
          onClick={() => setIsMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {/*Hangi görürümün ekrana basılacağını belirle */}

      {isMapView ? (
        <MapView setDetailId={setDetailId} />
      ) : (
        <ListView setDetailId={setDetailId} />
      )}

      {/*Detailıd değeri varsa ekrana modal bas*/}
      {detailId && (
        <Modal detailId={detailId} close={() => setDetailId(null)} />
      )}
    </div>
  );
}

export default App;

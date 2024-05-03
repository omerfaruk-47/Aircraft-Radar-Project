import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const ListView = ({ setDetailId }) => {
  const flightState = useSelector((store) => store.flightReducer);

  //Gösterilecek ilk elemanı state 'i
  const [itemOffset, setItemOffset] = useState(0);

  //sayfa başına gösterilecek eleman sayısı
  const itemsPerPage = 10;

  // son gösterileck elemanı belirler
  const endOffset = itemOffset + itemsPerPage;

  //belirlenen aralıktaki elemanları alır
  const currentItems = flightState.flights.slice(itemOffset, endOffset);

  //maksimum sayfa sayısını belirle
  const pageCount = Math.ceil(flightState.flights.length / itemsPerPage);

  // Her yeni sayfa seçildiğinde çalışır
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % flightState.flights.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="p-4">
      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>İd</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.slice(0, 10).map((i) => (
            <tr key={i.id}>
              <th>{i.id}</th>
              <td>{i.code}</td>
              <td>{i.lat}</td>
              <td>{i.lng}</td>
              <td>
                <button onClick={() => setDetailId(i.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        className="pagination"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Önceki"
        nextLabel="Sonraki"
      />
    </div>
  );
};

export default ListView;

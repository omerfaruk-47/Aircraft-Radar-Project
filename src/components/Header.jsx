import { useSelector } from "react-redux";

const Header = () => {
  const flightState = useSelector((store) => store.flightReducer);

  return (
    <header>
      <div>
        <img className="logo" src="/App_Logo.png" alt="logo" />
      </div>
      <p>
        {flightState.isLoading
          ? "Uçuşlar Hesaplanıyor..."
          : flightState.isError
          ? "Özgünüz bir hata Oluştu"
          : flightState.flights.length + " Uçuş Bulundu"}
      </p>
    </header>
  );
};

export default Header;

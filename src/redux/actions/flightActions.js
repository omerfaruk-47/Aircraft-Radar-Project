import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../constant";

export const getFlights = createAsyncThunk("flights/getFlights", async () => {
  //1)api isteği atmak
  const res = await axios.request(options);

  //2)Gelen veriyi formatla dizi içerisindeki dizileri nesnelere çevirecez
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lng: item[3],
  }));

  //3)Aksiyonun payload ı olarak formatlanan veriyi ekle
  return formatted;
});

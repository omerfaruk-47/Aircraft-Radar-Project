export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "47.2701",
    bl_lng: "44.0000",
    tr_lat: "36.0000",
    tr_lng: "26.0000",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY1,
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const headerOpt = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY2,
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

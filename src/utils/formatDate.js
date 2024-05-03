import moment from "moment/moment";
import "moment/locale/tr";

// unix formatındaki veriyi normal formata çeiren fonksiyon
const formatDate = (unix_time) => {
  //unix formatındaki saniye verisini date ile kulllanabilmek için 1000 ile çarppıp millisaniyeye çevirdik
  const date = new Date(unix_time * 1000);

  //veriyi formatla
  return moment(date).calendar();
};

export default formatDate;

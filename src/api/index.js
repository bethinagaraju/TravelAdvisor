import axios from "axios";

// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne,URL) => {
  try {

    const { data :{ data }} = await axios.get(URL, {
 
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-key': '45850473b8msh100019c393d81e9p11d29ajsn00afce8b747e',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    });
    console.log("API CALLING restaurants"+URL);
   return data;
  } catch (error) {
    console.log(error);
  }
};





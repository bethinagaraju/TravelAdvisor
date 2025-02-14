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
        'x-rapidapi-key': '65db60bc87mshc9db11900052399p1348a1jsnc4a32a5bac22',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    });
    // console.log("API CALLING restaurants"+URL);
   return data;
  } catch (error) {
    console.log(error);
  }
};





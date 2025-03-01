import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';

export const  getPlacesDatatwo = async (sw, ne) => {
  let arr = [];
  try {

    const { data :{ data }} = await axios.get(URL, {
 
      params: {
        bl_latitude: '17.385044',
        tr_latitude: '17.424944',
        bl_longitude: '78.456939',
        tr_longitude: '78.504019',
      },
      headers: {
        'x-rapidapi-key': '65db60bc87mshc9db11900052399p1348a1jsnc4a32a5bac22',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    });
    console.log("API CALLING hotels");
    arr[0] = data;
    return arr;
  } catch (error) {
    console.log(error);
  }
};






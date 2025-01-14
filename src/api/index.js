import axios from 'axios';

export const getPlacesData = async () => {


  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
    params: {
      bl_latitude: '37.7749',
      tr_latitude: '37.7958',
      bl_longitude: '-122.4194',
      tr_longitude: '-122.3043',
      limit: '30',
      currency: 'USD',
      lang: 'en_US'
    },
    headers: {
      'X-RapidAPI-Key': '698414dc1bmshc1e222daa2f454ep1472a6jsn764a477849ed',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}


import axios from "axios";
export const appService = async (search, page) => {
      axios.defaults.baseURL = 'https://pixabay.com/api';
try {
  const response = await axios.get( `/`,{
        params: {
          key:process.env.REACT_APP_API_KEY,
          q: `${search}`,
          page: `${page}`,
          image_type: "photo",
          orientation: "horizontal",
          per_page: 12
       }
     })

return response.data

} catch (error) {
  console.log(error.message);
}
  }
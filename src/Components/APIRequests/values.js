import axios from 'axios';

const baseUrl = 'https://localhost:44337/candy';

const getValues = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}`).then((result) => {
      resolve(result.data);
    })
      .catch((error) => {
        reject(error);
      });
  });

  export default {
      getValues
  }
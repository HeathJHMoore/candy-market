import axios from 'axios';

const baseUrl = 'https://localhost:44337/candy';

const eatCandy = (candyId) => new Promise((resolve, reject) => {
    axios.delete(`${baseUrl}/${candyId}/eat`).then((result) => {
      resolve(result.data);
    })
      .catch((error) => {
        reject(error);
      });
  });

export default {
    eatCandy
}
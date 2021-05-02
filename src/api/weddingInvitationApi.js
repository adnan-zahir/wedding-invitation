import axios from 'axios';
import DATA from '../data/DATA.json';

class FetchWeddingData {
  static async getDatas() {
    const { data } = await axios.get(DATA.databaseUrl + '/weddingData');
    return data;
  }

  static async getWishes() {
    const { data } = await axios.get(DATA.databaseUrl + '/wishes');
    return data;
  }

  static async postWish(wish) {
    const { data } = await axios.post(DATA.databaseUrl + '/wishes', wish);
    return data;
  }
}

export default FetchWeddingData;

import axios from "axios";
import {store} from '../../store/store';
import {fetchData} from './postSlice';

export const getData = async () => {
    try {  
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      )
      store.dispatch(fetchData(response.data))

    } catch (err) {
        console.log(err.message);
    }
}
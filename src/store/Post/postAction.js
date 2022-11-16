import axios from "axios";
import {store} from '../../store/store';
import {fetchData} from './postSlice';
import {setIsLoding} from '../commonState/commonSlice';
import {setIsError} from '../commonState/commonSlice';

export const getData = async () => {
    store.dispatch(setIsLoding(true));
    try {  
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts`
      )
      store.dispatch(fetchData(response.data))
      console.log('response', response);
      store.dispatch(setIsLoding(false));
      store.dispatch(setIsError(''));

    } catch (err) {
        store.dispatch(setIsLoding(false));
        store.dispatch(setIsError(err.message));
        // console.log(err.message);
    }
}
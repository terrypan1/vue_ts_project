//無二次封裝
import axios from 'axios';

const getPhotos = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return result.data
}

export default getPhotos
//無二次封裝
import axios from 'axios';

interface IPhotos {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
export const getPhotos = async (page:number,limit:number):Promise<IPhotos[]> => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`)
    return result.data
}
export const getAllPhotos = async ():Promise<IPhotos[]> => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/photos')
    return result.data
}

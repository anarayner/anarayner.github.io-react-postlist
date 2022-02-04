import axios from 'axios';

export default class PostService{

    static async getAll(){
        console.log('start')

            const response = await axios.get('https://jsonplaceholder.typicode.com/posts1111')
            console.log(response.data)
            return response.data
        }
}
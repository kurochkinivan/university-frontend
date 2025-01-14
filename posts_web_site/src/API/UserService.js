import axios from "axios";

export default class UserService {
    static async getById(userId) {
        const response = await axios.get(`https://dummyjson.com/users/${userId}`)
        return response.data
    }
}
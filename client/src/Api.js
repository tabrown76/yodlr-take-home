import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001"; 
console.log(BASE_URL);

export default class YodlrApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.message);
      let message = err.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Register a user. */
  static async registerUser(data){
    let res = await this.request(`users`, data, "post");
    return res;
  }

  /** Get all users */
  static async getAllUsers(){
    let res = await this.request(`users`);
    return res;
  }

  /** Get user by id */
  static async getUser(id){
    let res = await this.request(`users/${id}`);
    return res;
  }
}

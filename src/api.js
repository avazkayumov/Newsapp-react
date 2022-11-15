import axios from "axios"

class Api {
    async fetchNews(data) {
      const result = await axios.get(`https://newsapi.org/v2/everything?q=${data.input}&from=${data.dateOne}&to=${data.dateTwo}&sortBy=publishedAt&apiKey=8bd5c4a38a714033a1c79646a6358761`)
      return result
    } 
}

export const api = new Api()
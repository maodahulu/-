import axios from 'axios'
import base from './base'

const api = {
  getCovInfo() {
    return axios.get(base.host + base.conInfo)
  },
  getChinaMap() {
    return axios.get("./yiqing.json")
  },
  getSwiperBanner() {
    return axios.get("http://iwenwiki.com/wapicovid19/ncovimg.php")
  },
  getTravel() {
    return axios.get("/api/springTravel/citys?key=fd6c41686a73704380812789e30ec6d4")
  },
  getTravelCity(params) {
    return axios.get('/api/springTravel/query?key=fd6c41686a73704380812789e30ec6d4', {
      params
    })
  },
  getCity() {
    return axios.get('/bang/aj/getcitycode')
  }
}

export default api
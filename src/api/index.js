import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-dot-submission-mgce-asep.et.r.appspot.com'
})

export default api;
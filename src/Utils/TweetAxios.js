import Axios from 'axios'

export default Axios.create({
  baseURL: 'http://localhost:3000/asd',
  timeout: 25000,
})

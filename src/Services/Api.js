import axios from 'axios'


export default () => {
  return axios.create ({
    baseURL: 'http://staging-service.youse.co.ke/doc'
  })
}

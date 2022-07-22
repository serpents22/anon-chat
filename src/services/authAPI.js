import apiClient from "./API";

const config = { headers: { 
  'Content-Type': 'application/x-www-form-urlencoded'
}}



export default {
  signIn(data) {
    return apiClient.post('account.signIn',data,config)
  },
  signUp(data) {
    return apiClient.post('account.signUp',data,config)
  },

}
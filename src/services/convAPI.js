import apiClient from "./API";

const config = { headers: { 
                  'Content-Type': 'multipart/form-data',
                } 
              }

export default {
  getConv(data) {
    return apiClient.post('conversations.get',data,config)
  },

}
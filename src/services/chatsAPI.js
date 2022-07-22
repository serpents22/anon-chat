import apiClient from "./API";

const config = { headers: { 
                  'Content-Type': 'multipart/form-data',
                } 
              }

export default {
  getChats(data) {
    return apiClient.post('chat.get',data,config)
  },

  getChatsNext(data) {
    return apiClient.post('chat.getNext',data,config)
  },

  getChatsPrev(data) {
    return apiClient.post('chat.getPrevious',data,config)
  }
}
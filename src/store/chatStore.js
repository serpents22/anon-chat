import { defineStore } from 'pinia'
import chatsAPI from '@/services/chatsAPI'
import { ref } from 'vue'

export const useChatStore = defineStore('chats', {
  state: () => ({
    chatsData: ref(''),
    chatId: ref('')
  }),
  actions: {

    async loadChats(data) {
      try {
        const res = await chatsAPI.getChats(data)
        this.chatsData = res.data
        console.log(res.data)
      } catch (err) {
          console.error(err)
          return err
    } 
    },
}
})
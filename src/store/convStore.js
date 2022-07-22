import { defineStore } from 'pinia'
import convAPI from '@/services/convAPI'
import { ref } from 'vue'

export const useConvStore = defineStore('conversation', {
  state: () => ({
    convData: ref('')
  }),
  actions: {

    async getConv(data) {
      try {
        const res = await convAPI.getConv(data)
        this.convData = res.data
      } catch (err) {
          this.user = null
          console.error( err)
          return err
    } 
    },
}

})
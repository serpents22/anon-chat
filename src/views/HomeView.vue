<template>
  <Modal>
    <h1 class="tittle">PRISGA CHAT</h1>
    <div class="chat-modal">
      <div class="chat-section">
        <div class="search">
          <SearchBar v-model="search" placeholder="search any user..." />
        </div>
        <div class="msg-header">
        <h1>Message</h1>
        </div>
        <ChatList :convos="convData.chats"/>
      </div>
      <div class="chat-room">
        <ChatRoom :messages="chatsData.messages">
          <div class="profile-picture">
            <img v-if="chatsData.messages" v-bind:src="chatsData.messages[0].fromUserPhotoUrl">
          </div>
        <span v-if="chatsData.messages">{{chatsData.messages[0].fromUserFullname}}</span>
        </ChatRoom>
      </div>
    </div>
  </Modal>
</template>

<script>
import ChatList from '@/components/ChatList.vue'
import ChatRoom from './ChatRoom.vue'
import Modal from '@/components/NewModal.vue'
import SearchBar from '@/components/SearchBar.vue'
import { ref } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core'
import { useConvStore } from '@/store/convStore'
import { useChatStore } from '@/store/chatStore'
import { useAuthStore } from '@/store/authStore'
import { storeToRefs } from 'pinia'

export default {
  components: {
    Modal, SearchBar, ChatList, ChatRoom
  },
  setup(){
    const { accessToken, accountId } = storeToRefs(useAuthStore())
    const convStore = useConvStore()
    const chatStore = useChatStore()
    const { convData } = storeToRefs(useConvStore())
    const { chatsData, chatId } = storeToRefs(useChatStore())
    const convParams = {
      accountId: accountId.value,
      accessToken: accessToken.value
    }


    const search = ref('')
    // const newConvData = computed( () => {
    //   return convData.value.map((data) => ({
    //     data
    //   }))
    // })
    onMounted( async ()=>{
      await convStore.getConv(convParams)
      const chatParams = {
        accountId: accountId.value,
        accessToken: accessToken.value,
        chatId: convData.value.chats[0].id
      }
      await chatStore.loadChats(chatParams)
    })

      watch(search, () => {
        console.log(search.value)
      })
      // // filter message
      // const searchMsg = computed(() => {
      //   console.log(convData.value.chats)
      //   return convData.value.chats.filter((convo) => convo.withUserFullname.toLowerCase().match(search.value.toLowerCase()))
      // })


    // async function loadMessages () {
    //   console.log('loadMessages')
    //   await chatStore.loadChats(chatParams)
    // }

    return {
      convData, chatsData
    }
  }
}
</script>

<style scoped>
.tittle {
  @apply text-xl font-bold text-white
}
.chat-modal {
  @apply flex gap-5
}
.chat-section {
  @apply w-[360px] h-[564px] bg-[#121212]  flex flex-col 
}
.search {
  @apply min-h-[76px] flex justify-center items-center border-b border-[#282828] px-4
}
.msg-header {
  @apply min-h-[50px] flex items-center px-4 text-xl font-normal text-white
}

.chat-room {
  @apply w-[980px] h-[564px] border-[#121212] border bg-black relative flex flex-col
}
.profile-picture { 
  @apply h-[49px] w-[49px]
}
span { 
  @apply font-medium text-white text-base
}

.profile-picture img {
  @apply object-cover h-[49px] w-[49px] rounded-full
}


</style>

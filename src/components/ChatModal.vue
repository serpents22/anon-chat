<template>
    <div class="chat" @click="getChatID">
      <div class="profile-picture">
        <img v-bind:src="convo.withUserPhotoUrl">
      </div>
      <div class="chat-item" >
        <p class="username"> {{ convo.withUserFullname }} </p>
        <p class="message"> {{ snippet }} </p>
      </div>
    </div>
</template>

<script scoped>
import { computed } from '@vue/runtime-core'
import { useAuthStore } from '@/store/authStore'
import { useChatStore } from '@/store/chatStore'
import { storeToRefs } from 'pinia'
export default {
  props: ['convo'],
  emits: ['chatSelected'],
  setup(props) {
    const chatStore = useChatStore()
    const { chatId } = storeToRefs(useChatStore())
    // snippet message
    const snippet = computed(() => {
      if (props.convo.lastMessage.length > 36) {
        return props.convo.lastMessage.substring(0,36) + '....'
      }
      return props.convo.lastMessage
    })
    const { accessToken, accountId } = storeToRefs(useAuthStore())
    const chatParams = {
        accountId: accountId.value,
        accessToken: accessToken.value,
        chatId: props.convo.id
      }

    function getChatID() {
      chatStore.loadChats(chatParams)
      chatId.value = props.convo.id
    }

    return { snippet, getChatID }
  }
}
</script>

<style scoped>


.chat {
  @apply h-[72px] w-full border-b border-[#282828] flex items-center p-[10px] gap-3 cursor-pointer 
}

.chat:hover {
  @apply bg-[#282828] rounded-xl
}

.chat-item {
  @apply flex flex-col gap-[6px]
}

.username {
  @apply text-base font-medium text-white
}

.message {
  @apply text-xs font-normal text-[#A7A7A7]
}

.profile-picture { 
  @apply h-[49px] w-[49px] 
}

img {
  @apply object-cover h-[44px] w-[44px] rounded-full
}

</style>
<template>
  <div class="chat-list">
    <div v-for="convo in convos" :key="convo.id">
      <ChatModal :convo="convo" />
    </div>
  </div>
</template>

<script>
import ChatModal from './ChatModal.vue'
export default {
  components: {
    ChatModal
  },
  props: [
    'convos'
  ],
  // emits: ['chatSelected'],
  // setup({emit}) {
  //   function chatSelected() {
  //     emit('chatSelected')
  //   }
  //   return {
  //     chatSelected
  //   }
  // }
  
}
</script>

<style scoped>

.chat-list {
  @apply overflow-auto px-4 justify-center items-center
}
</style>
<template>
  <div class="header">
    <slot></slot>
  </div>
  <div class="chat-wrapper">
    <div v-for="message in messages" :key="message.id" class="chat-box">
      <span>{{message.message}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'messages', 'profilePicture', 'fromUserName'
  ]
}
</script>

<style scoped>
.header {
  @apply flex flex-row bg-[#121212] items-center py-4 px-6 gap-3
}

.chat-wrapper {
  @apply flex flex-col overflow-auto gap-2 
}
.chat-box {
  @apply font-normal text-xs bg-[#121212] rounded flex items-center px-3 py-2 ml-16  text-[#a7a7a7] max-w-sm 
}

</style>
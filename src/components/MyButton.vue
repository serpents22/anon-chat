<template>
    <button v-bind="$attrs">{{ label }}</button>
</template>

<script>
export default {

  data() {
    return {
    }
  },
    props: {
      label: {
        type: String,
        default: () => "label"
      }
    }
}
</script>

<style scoped>
button {
  @apply disabled:opacity-75
}
.elevated {
  @apply bg-white rounded-md text-[#1363df] p-2 rounded-md cursor-pointer text-sm font-medium justify-center items-center text-center shadow-md
  transition-colors duration-300
}
.elevated:hover {
  @apply bg-[#1363DF] text-white p-2 
  
}
.filled {
  @apply bg-[#1363DF] rounded-md text-white p-2 cursor-pointer text-sm font-medium justify-center items-center text-center
  transition-colors duration-300
}

.filled:hover {
  @apply bg-[#1363DF]/70 
}

.filled-tonal {
  @apply bg-[#1363DF]/70 rounded-md p-2 cursor-pointer text-sm font-medium justify-center items-center text-center
  transition-colors duration-300
  
}
.outlined {
  @apply border border-[#1363DF] rounded-md p-2 cursor-pointer text-sm font-medium justify-center items-center text-center
  transition-colors duration-300
}

.floating {
  @apply bg-[#1363DF]/70 rounded-md p-2 cursor-pointer text-sm font-medium justify-center items-center text-center shadow-md
  transition-colors duration-300

}
</style>
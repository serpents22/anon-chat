<template>
  <input       
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="label"
    v-bind="$attrs">
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
    type: [String, Number],
    default: '',
    }
  }
}
</script>

<style scoped>
input {
  @apply w-full pl-4 h-9 placeholder:italic placeholder:text-[#A7A7A7] placeholder:text-xs rounded-[20px]  text-xs text-[#121212] self-center !important
}
</style>
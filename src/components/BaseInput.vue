<template>
  <div v-bind="$attrs">
    <label v-show="label" :for="name">{{ label }}</label>
    <input :id="name" :name="name" :type="type" v-model="value" />
    <span v-show="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script>
import { useField } from 'vee-validate'
export default {
  props: [
    'name','label', 'type'
  ],
  setup(props) {
    const { value, errorMessage } = useField(props.name)
    return {
      value, errorMessage
    }
  }
}
  

</script>

<style scoped>

.text-field {
  @apply flex flex-col gap-2
}

label {
  @apply text-xs font-bold
}

span {
  @apply text-xs text-[#F15412]/80
}



.text-field input {
  @apply h-9 pl-2 rounded-lg bg-[#F5F8FA] text-xs font-medium !important
} 


.text-field input::placeholder {
  @apply text-xs font-medium text-[#9A9EA4]  !important
} 

.checkbox {
  @apply flex gap-2 items-center
}

.checkbox input {
  @apply default:ring-2 checked:bg-black !important
}

</style>
<template>
  <div id="container">
    <div class="head-tittle">
      <span>PRISGA</span>
    </div>
    <div class="form-container">
      <VeeForm :validation-schema="schema" v-slot="{ handleSubmit }" as="div"> 
        <form  @submit="handleSubmit($event, onSubmit)" class="form-modal">
          <div class="field-wrapper">
            <BaseInput type="text" label="Username" name="username" class="text-field" />
          </div>
          <div class="field-wrapper">
            <BaseInput type="password" label="Password" name="password" class="text-field" />
          </div>
          <div class="button-wrapper">
            <MyButton type="submit" class="filled" label="Login" />
          </div>
        </form>
      </VeeForm>
    </div>
  </div>
</template>

<script>
import NewModal from '@/components/NewModal.vue'
import { useAuthStore  } from '@/store/authStore'
import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import BaseInput from '@/components/BaseInput.vue'
import MyButton from '@/components/MyButton.vue'
import { ref } from 'vue'
export default {
  components: {
    NewModal, VeeForm, BaseInput, MyButton
  },
  setup() {
    // const username = ref('')
    // const password = ref('')
    const schema = yup.object({
      username: yup.string().required(),
      password: yup.string().required().min(8),
    });
    // auth with pinia
    const authStore = useAuthStore();
    const onSubmit = async (values) => {
      const data = `username=${values.username}&password=${values.password}&clientId=1`
      await authStore.sigIn(data)
    }

    return {
      onSubmit,schema
    }
  }

}
</script>

<style scoped>
#container {
  @apply bg-white h-screen relative
}

.head-tittle {
  @apply flex justify-center items-center w-full h-[104px] border-b border-[#282828]/40
}
.head-tittle span {
  @apply font-black text-3xl
}
.form-container {
  @apply flex p-5 w-full justify-center mt-10
}
.form-modal {
  @apply flex flex-col p-5 w-[500px] justify-center
}

.field-wrapper{
  @apply flex flex-col h-20
}

.button-wrapper {
  @apply mt-3 w-full flex flex-col
}



</style>
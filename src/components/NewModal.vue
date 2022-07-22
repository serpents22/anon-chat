<template>
  <div class="container">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.container {
  @apply h-screen justify-center items-center flex m-auto
}

.modal {
  @apply w-[1400px] m-auto bg-black p-5 text-left drop-shadow-md flex flex-col gap-4
}
</style>
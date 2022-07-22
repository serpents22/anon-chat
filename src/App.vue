<template>
  <router-view/>
</template>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html {
  background-color: #121210;

}

/* width */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #121212; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}


</style>

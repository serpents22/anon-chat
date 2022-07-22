import { defineStore } from 'pinia'
import authAPI from '@/services/authAPI'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('auth.accessToken'),
    accountId: localStorage.getItem('auth.accountId')
    
  }),
  actions: {

    async signUp(data) {
      try {
        const res = await authAPI.signUp(data)
        console.log(res)
        router.push({name: 'login'});
      } catch (err) {
          console.error( err)
          return err
    } 
    },
    
    async sigIn(data) {
      try {
        const res = await authAPI.signIn( data)
        if (res.data.error) throw new Error('Login Error')
        this.accessToken = res.data.accessToken;
        this.accountId = res.data.accountId;
        localStorage.setItem('auth.accessToken', res.data.accessToken);
        localStorage.setItem('auth.accountId', res.data.accountId);
        router.push({name: 'home'});
      } catch (err) {
          console.error(err)
          return err
      }
    },

    async logout() {
      // Axios Config
      const access_token = localStorage.getItem("auth.token")
      const config = { headers: { 'Authorization': `Bearer ${access_token}` } }
      try {
        await axios.get('user/logout/mobile',config)
        this.user = null;
        this.isLoggedIn = false
        localStorage.removeItem('auth.token');
        localStorage.removeItem('isLoggedIn');
        router.push('/login');
      } catch (err){
          console.error(err)
          return err
      }
      
    },

    async getUser() {
      try {
        const response = await axios.get('/user')
        user.value = response.data
        return response.data
      } catch (err) {
          console.error('Error loading new arrivals', err)
          return err
      }
    },
}

})
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {username:'',role:''},
    token: null, 
    isAuthenticated: false
  }),
  
  actions: {
    async login(username, password) {
      try {
        // const response = await $fetch('http://your-vps-ip:3001/api/login', {
        //   method: 'POST',
        //   body: { username, password }
        // })
        // this.token = response.token
        // this.user = response.user
        
        // if (username && password) {
        //   this.token = 'eyJhbGciOiJIUzI1NiIsInR...mock_token'
        //   this.user = { username: username, role: 'vip' }
        //   this.isAuthenticated = true
          
        //   localStorage.setItem('moonlight_token', this.token)
        //   return true
        // }
        if (username && password) {           
        if(username === 'admin' && password == 1234){
          this.token = 'eyJhbGciOiJIUzI1NiIsInR...mock_token'
          this.user = { username: username, role: 'admin' }
          this.isAuthenticated = true

          localStorage.setItem('moonlight_token', this.token)
          return true
        }else if(username !== 'admin'){
    
          this.token = 'eyJhbGciOiJIUzI1NiIsInR...mock_token'
          this.user = { username: username, role: 'player' }
          this.isAuthenticated = true

          localStorage.setItem('moonlight_token', this.token)
          return true
        }
          
        }
        return false
      } catch (error) {
        console.error('Login failed', error)
        return false
      }
    },
    
    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('moonlight_token')
    },
    
    checkAuth() {
      const savedToken = localStorage.getItem('moonlight_token')
      if (savedToken) {
        this.token = savedToken
        this.isAuthenticated = true
        this.user = { username: 'پلیر تستی', role: 'player' } 
      }
    }
  }
})
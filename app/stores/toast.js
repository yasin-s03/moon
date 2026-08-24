import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: []
  }),
  actions: {
    addToast(message, type = 'success') {
      const id = Date.now()
      this.toasts.push({ id, message, type })
      
      setTimeout(() => {
        this.removeToast(id)
      }, 3000)
    },
    removeToast(id) {
      this.toasts = this.toasts.filter(toast => toast.id !== id)
    }
  }
})
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] 
  }),
  
  getters: {
    totalItems: (state) => state.items.length,
    totalPrice: (state) => state.items.reduce((total, item) => total + item.price, 0)
  },
  
  actions: {
    addToCart(product) {
      const exists = this.items.find(item => item.id === product.id)
      if (!exists) {
        this.items.push(product)
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId)
    },
    clearCart() {
      this.items = []
    }
  }
})
import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', {
  state: () => ({
    categories: ['همه', 'ماشین‌ها', 'املاک', 'سلاح گرم', 'تجهیزات نفوذ', 'محافظتی'],
    
    products: [
      { id: 1, title: 'ماشین اسپرت توربو', category: 'ماشین‌ها', price: 450000, description: 'سرعت و شتاب فوق‌العاده برای سطح شهر.', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop' },
      { id: 2, title: 'پنت‌هاوس ساحلی', category: 'املاک', price: 1200000, description: 'مجهز به هلیکوپترپد و ویلای اختصاصی.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop' },
      { id: 3, title: 'کلاشنیکف (AK-47)', category: 'سلاح گرم', price: 150000, description: 'سلاح تهاجمی برای درگیری‌های گنگستری.', image: 'https://images.unsplash.com/photo-1595590424283-b8f1784cb2c8?q=80&w=800&auto=format&fit=crop' }
    ]
  }),

  actions: {
    addProduct(product) {
      const newId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1
      this.products.push({ id: newId, ...product })
    },

    updateProduct(updatedProduct) {
      const index = this.products.findIndex(p => p.id === updatedProduct.id)
      if (index !== -1) {
        this.products[index] = { ...updatedProduct }
      }
    },

    deleteProduct(id) {
      this.products = this.products.filter(p => p.id !== id)
    },

    addCategory(categoryName) {
      if (categoryName && !this.categories.includes(categoryName)) {
        this.categories.push(categoryName)
      }
    },

    deleteCategory(categoryName) {
      this.categories = this.categories.filter(c => c !== categoryName)
    }
  }
})
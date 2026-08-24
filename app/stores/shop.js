import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useShopStore = defineStore('shop', () => {
  const products = ref([])
  const loading = ref(false)
  const selectedCategory = ref('همه')
  const searchQuery = ref('')

  const categories = [
    { id: 'all', name: 'همه', icon: '🏠' },
    { id: 'vehicles', name: 'وسایل نقلیه', icon: '🚗' },
    { id: 'properties', name: 'املاک و مستغلات', icon: '🏢' },
    { id: 'weapons', name: 'سلاح و تجهیزات', icon: '🛡️' },
    { id: 'blackmarket', name: 'بازار سیاه', icon: '⚡' }
  ]

  const fetchProducts = async () => {
    loading.value = true
    try {
      products.value = [
        { id: 1, title: 'ماشین اسپرت توربو', category: 'vehicles', price: 450000, stock: 3, isVip: true, description: 'سرعت و شتاب فوق‌العاده برای سطح شهر.', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop' },
        { id: 2, title: 'پنت‌هاوس ساحلی', category: 'properties', price: 1200000, stock: 1, isVip: true, description: 'مجهز به هلیکوپترپد و ویلای اختصاصی.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop' },
        { id: 3, title: 'کلاشنیکف (AK-47)', category: 'weapons', price: 150000, stock: 5, isVip: false, description: 'سلاح تهاجمی برای درگیری‌های گنگستری.', image: 'https://images.unsplash.com/photo-1595590424283-b8f1784cb2c8?q=80&w=800&auto=format&fit=crop' }
      ]
    } catch (error) {
      console.error('خطا در دریافت اطلاعات از سرور:', error)
    } finally {
      loading.value = false
    }
  }

  const purchaseProduct = async (productId) => {
    try {

      
      return { success: true, message: 'انتقال موفق به درگاه پرداخت...' }
    } catch (error) {
      return { success: false, message: 'خطا در ارتباط با درگاه پرداخت.' }
    }
  }

  const filteredProducts = computed(() => {
    let result = products.value
    
    if (selectedCategory.value !== 'همه') {
      result = result.filter(p => p.category === selectedCategory.value)
    }

    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase()
      result = result.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
    }

    return result
  })

  return {
    products,
    loading,
    categories,
    selectedCategory,
    searchQuery,
    filteredProducts,
    fetchProducts,
    purchaseProduct
  }
})
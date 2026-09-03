<template>
  <div class="bg-rp-card border border-rp-border rounded-2xl overflow-hidden hover:border-rp-primary transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-glow-primary/20">
    
    <!-- بخش تصویر محصول -->
    <div class="relative h-48 bg-rp-dark overflow-hidden flex-shrink-0">
      <img :src="image" :alt="title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
      
      <!-- تگ دسته‌بندی -->
      <div class="absolute top-3 right-3 bg-rp-dark/80 text-rp-primary text-xs font-bold px-3 py-1 rounded-full border border-rp-primary/30 backdrop-blur-sm">
        {{ category }}
      </div>
    </div>
    
    <!-- بخش اطلاعات محصول -->
    <div class="p-5 flex flex-col flex-grow">
      <h3 class="text-xl font-bold text-rp-light mb-2">{{ title }}</h3>
      <p class="text-rp-muted text-sm line-clamp-2 mb-6 flex-grow">{{ description }}</p>
      
      <!-- بخش قیمت و دکمه خرید -->
      <div class="flex items-center justify-between mt-auto pt-4 border-t border-rp-border/50">
        <div class="flex flex-col">
          <span class="text-xs text-rp-muted">قیمت:</span>
          <span class="text-rp-primary font-extrabold text-lg">{{ price.toLocaleString() }} <span class="text-sm font-normal text-rp-light">تومان</span></span>
        </div>
        
        <button @click="handleAddToCart" class="bg-rp-dark text-rp-light border border-rp-border px-4 py-2 rounded-lg hover:bg-rp-primary hover:text-rp-dark hover:border-rp-primary transition-all flex items-center gap-2 group/btn">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="font-bold">خرید</span>
          
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
import { useToastStore } from '~/stores/toast'
const emit = defineEmits(['buy'])
const useShopping = userShoppingStore()
const props = defineProps({
  id: Number, 
  title: String,
  description: String,
  price: Number,
  category: String,
  image: String

})
const cartStore = useCartStore()
const toastStore = useToastStore() 

const handleAddToCart = () => {
    emit('buy',props) 
  
  const exists = cartStore.items.find(item => item.id === props.id)
  
  if (exists) {
    toastStore.addToast('این آیتم قبلاً به سبد خرید اضافه شده است!', 'error')
    return 
  }

  cartStore.addToCart({
    id: props.id,
    title: props.title,
    price: props.price,
    image: props.image
  })
  
  toastStore.addToast(`آیتم ${props.title} به سبد خرید اضافه شد.`, 'success')
}
</script>
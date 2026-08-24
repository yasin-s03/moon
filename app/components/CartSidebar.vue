<template>
  <div>
    <!-- (کدهای قبلی Overlay و بدنه سایدبار دست نخورده می‌ماند) -->
    <div v-if="isOpen" @click="$emit('close')" class="fixed inset-0 bg-rp-dark/60 backdrop-blur-sm z-[60] transition-opacity"></div>

    <div :class="isOpen ? 'translate-x-0' : '-translate-x-full'" class="fixed top-0 left-0 h-full w-full sm:w-96 bg-rp-card border-r border-rp-border z-[70] transition-transform duration-300 flex flex-col shadow-2xl">
      
      <!-- هدر و لیست آیتم‌ها (مثل قبل) -->
      <div class="p-6 border-b border-rp-border flex items-center justify-between bg-rp-dark/50">
        <h2 class="text-xl font-bold text-rp-light">سبد خرید شما</h2>
        <button @click="$emit('close')" class="text-rp-muted hover:text-rp-accent transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex-grow overflow-y-auto p-6 flex flex-col gap-4 custom-scrollbar">
        <div v-if="cartStore.items.length === 0" class="text-center text-rp-muted mt-10">سبد خرید شما خالی است.</div>
        <div v-for="item in cartStore.items" :key="item.id" class="flex gap-4 bg-rp-dark/50 p-3 rounded-xl border border-rp-border/50">
          <img :src="item.image" class="w-20 h-20 object-cover rounded-lg" alt="" />
          <div class="flex flex-col flex-grow justify-between">
            <h4 class="text-rp-light font-bold text-sm">{{ item.title }}</h4>
            <div class="flex items-center justify-between">
              <span class="text-rp-primary text-sm font-bold">{{ item.price.toLocaleString() }} تومان</span>
              <button @click="cartStore.removeFromCart(item.id)" class="text-rp-muted hover:text-rp-accent text-xs">حذف</button>
            </div>
          </div>
        </div>
      </div>

      <!-- فوتر سبد خرید (تغییر یافته) -->
      <div v-if="cartStore.items.length > 0" class="p-6 border-t border-rp-border bg-rp-dark/50">
        <div class="flex justify-between items-center mb-6">
          <span class="text-rp-muted">مبلغ کل:</span>
          <span class="text-rp-primary font-extrabold text-2xl">{{ cartStore.totalPrice.toLocaleString() }} <span class="text-sm font-normal text-rp-light">تومان</span></span>
        </div>
        
        <!-- با کلیک روی این دکمه، پاپ‌آپ پرداخت باز می‌شود -->
        <button @click="isCheckoutModalOpen = true" class="w-full bg-rp-primary text-rp-dark py-3 rounded-xl font-bold hover:bg-yellow-500 transition-all shadow-glow-primary">
          تایید و پرداخت
        </button>
      </div>
    </div>

    <!-- فراخوانی کامپوننت مدال پرداخت -->
    <CheckoutModal 
      :is-open="isCheckoutModalOpen" 
      @close="isCheckoutModalOpen = false"
      @payment-success="handlePaymentSuccess"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '~/stores/cart'
import CheckoutModal from './CheckoutModal.vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const cartStore = useCartStore()

const isCheckoutModalOpen = ref(false)

const handlePaymentSuccess = () => {
  isCheckoutModalOpen.value = false 
  emit('close')
}
</script>
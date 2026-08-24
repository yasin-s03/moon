<template>
  <Transition name="modal-fade">
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center px-4">
      
      <!-- لایه تاریک‌کننده پس‌زمینه -->
      <div class="absolute inset-0 bg-rp-dark/80 backdrop-blur-sm" @click="closeModal"></div>

      <!-- محتوای اصلی مدال -->
      <div class="relative bg-rp-card border border-rp-border rounded-2xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col">
        
        <!-- افکت نوری -->
        <div class="absolute -top-16 -left-16 w-32 h-32 bg-rp-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        <!-- هدر مدال -->
        <div class="p-6 border-b border-rp-border flex justify-between items-center relative z-10 bg-rp-dark/50">
          <h3 class="text-xl font-bold text-rp-light flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-rp-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            تایید نهایی سفارش
          </h3>
          <button @click="closeModal" class="text-rp-muted hover:text-rp-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- بدنه مدال -->
        <div class="p-6 relative z-10 flex flex-col gap-6">
          <div class="bg-rp-dark rounded-xl p-5 border border-rp-border/50">
            <div class="flex justify-between items-center mb-3">
              <span class="text-rp-muted text-sm">تعداد آیتم‌ها:</span>
              <span class="text-rp-light font-bold">{{ cartStore.totalItems }} عدد</span>
            </div>
            <div class="flex justify-between items-center border-t border-rp-border/50 pt-3">
              <span class="text-rp-muted text-sm">مبلغ قابل پرداخت:</span>
              <span class="text-rp-primary font-extrabold text-xl">{{ cartStore.totalPrice.toLocaleString() }} <span class="text-xs font-normal text-rp-light">تومان</span></span>
            </div>
          </div>
          
          <p class="text-xs text-rp-muted text-center leading-relaxed">
            با کلیک بر روی دکمه زیر، شما به درگاه امن بانکی منتقل می‌شوید. پس از پرداخت، آیتم‌ها به صورت خودکار به انبار شما در سرور اضافه خواهند شد.
          </p>
        </div>

        <!-- فوتر و دکمه پرداخت -->
        <div class="p-6 border-t border-rp-border bg-rp-dark/50 relative z-10">
          <button 
            @click="processPayment" 
            :disabled="isProcessing"
            class="w-full bg-rp-primary text-rp-dark py-3 rounded-xl font-bold hover:bg-yellow-500 transition-all shadow-glow-primary flex justify-center items-center gap-2 disabled:opacity-70"
          >
            <!-- آیکون لودینگ -->
            <svg v-if="isProcessing" class="animate-spin h-5 w-5 text-rp-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span v-if="isProcessing">در حال پردازش...</span>
            <span v-else>پرداخت و انتقال به درگاه</span>
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '~/stores/cart'
import { useToastStore } from '~/stores/toast'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close', 'payment-success'])

const cartStore = useCartStore()
const toastStore = useToastStore()
const router = useRouter()

const isProcessing = ref(false)

const closeModal = () => {
  if (!isProcessing.value) {
    emit('close')
  }
}

const processPayment = () => {
  isProcessing.value = true
  
  setTimeout(() => {
    isProcessing.value = false
    
    toastStore.addToast('پرداخت با موفقیت انجام شد!', 'success')
    
    cartStore.clearCart()
    
    emit('payment-success')
    
    router.push('/panel')
  }, 2000)
}
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
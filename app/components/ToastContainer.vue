<template>
  <!-- کانتینر اصلی که در گوشه پایین سمت راست ثابت است -->
  <div class="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
    
    <TransitionGroup name="toast">
      <div 
        v-for="toast in toastStore.toasts" 
        :key="toast.id"
        class="pointer-events-auto flex items-center gap-3 px-5 py-4 rounded-xl border shadow-lg backdrop-blur-md min-w-[300px]"
        :class="toast.type === 'success' ? 'bg-rp-dark/90 border-rp-primary shadow-glow-primary/20 text-rp-light' : 'bg-rp-dark/90 border-rp-accent shadow-glow-accent/20 text-rp-light'"
      >
        <!-- آیکون موفقیت (طلایی) -->
        <svg v-if="toast.type === 'success'" class="w-6 h-6 text-rp-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
        <!-- آیکون خطا (قرمز) -->
        <svg v-else class="w-6 h-6 text-rp-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <span class="font-bold text-sm">{{ toast.message }}</span>
      </div>
    </TransitionGroup>

  </div>
</template>

<script setup>
import { useToastStore } from '~/stores/toast'
const toastStore = useToastStore()
</script>

<style scoped>
/* انیمیشن ورود و خروج نرم برای پیام‌ها */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(50px) scale(0.9);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(50px) scale(0.9);
}
</style>
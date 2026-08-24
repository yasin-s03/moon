<template>
  <div class="min-h-[calc(100vh-100px)] flex items-center justify-center px-4 pt-20">
    
    <div class="bg-rp-card/80 backdrop-blur-lg border border-rp-border p-8 rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden">
      <!-- افکت نوری پس‌زمینه کارت -->
      <div class="absolute -top-10 -right-10 w-32 h-32 bg-rp-primary/20 rounded-full blur-3xl"></div>
      
      <div class="text-center mb-8 relative z-10">
        <h1 class="text-3xl font-extrabold text-rp-light tracking-wide mb-2">
          ورود به <span class="text-rp-primary">مون لایت</span>
        </h1>
        <p class="text-rp-muted text-sm">برای دسترسی به فروشگاه و پنل کاربری وارد شوید.</p>
      </div>

      <form @submit.prevent="handleLogin" class="flex flex-col gap-5 relative z-10">
        
        <!-- فیلد یوزرنیم -->
        <div class="flex flex-col gap-2">
          <label class="text-rp-light text-sm font-bold">نام کاربری (داخل بازی)</label>
          <input 
            v-model="form.username" 
            type="text" 
            class="bg-rp-dark border border-rp-border rounded-xl px-4 py-3 text-rp-light focus:outline-none focus:border-rp-primary focus:ring-1 focus:ring-rp-primary transition-all"
            placeholder="مثال: Jahangir_Rad"
            required
          />
        </div>

        <!-- فیلد رمز عبور -->
        <div class="flex flex-col gap-2">
          <label class="text-rp-light text-sm font-bold">رمز عبور</label>
          <input 
            v-model="form.password" 
            type="password" 
            class="bg-rp-dark border border-rp-border rounded-xl px-4 py-3 text-rp-light focus:outline-none focus:border-rp-primary focus:ring-1 focus:ring-rp-primary transition-all"
            placeholder="••••••••"
            required
          />
        </div>

        <!-- دکمه ورود -->
        <button 
          type="submit" 
          :disabled="isLoading"
          class="mt-4 bg-rp-primary text-rp-dark py-3 rounded-xl font-bold hover:bg-yellow-500 transition-all shadow-glow-primary flex justify-center items-center gap-2 disabled:opacity-70"
        >
          <svg v-if="isLoading" class="animate-spin h-5 w-5 text-rp-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span v-else>ورود به حساب</span>
        </button>
        
      </form>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'
import { useToastStore } from '~/stores/toast'

const router = useRouter()
const authStore = useAuthStore()
const toastStore = useToastStore()

const form = ref({
  username: '',
  password: ''
})

const isLoading = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  
  setTimeout(async () => {
    const success = await authStore.login(form.value.username, form.value.password)
    
    if (success) {
      toastStore.addToast(`خوش آمدید، ${form.value.username}!`, 'success')
      router.push('/') 
    } else {
      toastStore.addToast('نام کاربری یا رمز عبور اشتباه است.', 'error')
    }
    
    isLoading.value = false
  }, 1000)
}
</script>
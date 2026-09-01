<template>
  <div dir="rtl" class="min-h-screen bg-rp-dark text-rp-light font-sans flex flex-col justify-between">
    
    <!-- هدر ثابت و یکپارچه سایت -->
    <header class="sticky top-0 z-50 border-b border-rp-border bg-rp-dark/80 backdrop-blur-md">
      <div class="container mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="group flex items-center gap-3">
          <div class="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-rp-primary/40 bg-rp-card shadow-glow-primary transition-all duration-300 group-hover:scale-105">
            <span class="text-rp-primary font-extrabold text-lg">ML</span>
          </div>
          <div class="flex flex-col items-start leading-none">
            <span class="text-xl font-extrabold tracking-tight text-rp-light">مون <span class="text-rp-primary">لایت</span></span>
            <span class="text-[11px] font-medium tracking-[0.2em] text-rp-muted">MOONLIGHT RP</span>
          </div>
        </NuxtLink>

        <nav class="hidden items-center gap-1 rounded-full border border-rp-border bg-rp-card/60 p-1.5 shadow-inner md:flex">
          <NuxtLink to="/" class="rounded-full px-4 py-2 text-sm font-medium text-rp-muted transition-colors hover:bg-rp-primary/10 hover:text-rp-primary" active-class="bg-rp-primary/10 text-rp-primary font-bold">صفحه اصلی</NuxtLink>
          <NuxtLink to="/rules" class="rounded-full px-4 py-2 text-sm font-medium text-rp-muted transition-colors hover:bg-rp-primary/10 hover:text-rp-primary" active-class="bg-rp-primary/10 text-rp-primary font-bold">قوانین</NuxtLink>
          <NuxtLink to="/staff" class="rounded-full px-4 py-2 text-sm font-medium text-rp-muted transition-colors hover:bg-rp-primary/10 hover:text-rp-primary" active-class="bg-rp-primary/10 text-rp-primary font-bold">تیم استف</NuxtLink>
          <NuxtLink to="/leaders" class="rounded-full px-4 py-2 text-sm font-medium text-rp-muted transition-colors hover:bg-rp-primary/10 hover:text-rp-primary" active-class="bg-rp-primary/10 text-rp-primary font-bold">لیدر ها</NuxtLink>
          <NuxtLink v-if="auth.user.role === 'admin'" to="/admin" class="rounded-full px-4 py-2 text-sm font-medium text-rp-primary transition-colors hover:bg-rp-primary/10" active-class="bg-rp-primary/20 font-bold">پنل مدیریت</NuxtLink>
        </nav>

        <div class="flex items-center gap-3">
          <NuxtLink v-if="!auth.user.username" to="/login" class="rounded-xl bg-rp-primary px-5 py-2.5 text-sm font-bold text-rp-dark shadow-glow-primary transition-all hover:bg-yellow-500 active:scale-95">
           <p>
            ورود / ثبت‌نام
           </p>
          </NuxtLink>
          <div v-else class="rounded-xl bg-rp-primary px-5 py-2.5 text-sm font-bold text-rp-dark shadow-glow-primary transition-all hover:bg-yellow-500 active:scale-95">
           <p>
           نام کاربری {{ auth.user.username }}
           </p>
          </div>
          
           <NuxtLink v-if="auth.user.username" to="/login" v-on:click="handleExit" class="rounded-xl bg-rp-accent px-5 py-2.5 text-sm font-bold text-rp-dark shadow-glow-primary transition-all hover:bg-yellow-500 active:scale-95">
          خروج
          </NuxtLink>
         
           
        </div>
      </div>
    </header>

    <!-- محتوای صفحات (هر صفحه ای که لود بشه میاد اینجا قرار میگیره) -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- فوتر یکپارچه سایت -->
    <footer class="relative border-t border-rp-border bg-rp-dark px-6 pt-16 pb-8">
      <div class="container mx-auto max-w-7xl flex flex-col md:flex-row items-start justify-between gap-12">
        <div class="max-w-md">
          <div class="mb-4 flex items-center gap-3">
            <h2 class="text-2xl font-extrabold text-rp-light">مون <span class="text-rp-primary">لایت</span></h2>
          </div>
          <p class="text-sm leading-7 text-rp-muted">بهترین تجربه رول‌پلی در فایوم، با جامعه‌ای فعال، پایداری بالا و امکانات انحصاری برای بازیکنان حرفه‌ای.</p>
        </div>
        
        <div class="w-full max-w-sm rounded-2xl border border-rp-border bg-rp-card p-5 shadow-lg">
          <h3 class="mb-3 text-sm font-bold text-rp-light">اتصال سریع به سرور</h3>
          <div class="flex items-center justify-between gap-3 rounded-xl border border-rp-border bg-rp-dark px-4 py-3">
            <code dir="ltr" class="truncate text-sm text-rp-primary">connect moonlight.ir</code>
            <button class="shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold bg-rp-primary text-rp-dark hover:bg-yellow-500 transition-all">کپی آیپی</button>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-rp-border pt-8 text-center text-xs text-rp-muted">
        تمامی حقوق این پورتال متعلق به سرور مون لایت می‌باشد.
      </div>
    </footer>

  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()
function handleExit(){
  auth.user.username = ''
  auth.logout
}
</script>
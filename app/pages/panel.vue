<template>
  <div class="container mx-auto px-6 pt-32 pb-24 min-h-screen">
    
    <!-- در صورتی که کاربر لاگین نکرده باشد -->
    <div v-if="!authStore.isAuthenticated" class="flex flex-col items-center justify-center py-20 text-center gap-6">
      <div class="w-24 h-24 bg-rp-card rounded-full flex items-center justify-center border border-rp-accent shadow-glow-accent">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-rp-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      <h2 class="text-3xl font-bold text-rp-light">دسترسی غیرمجاز</h2>
      <p class="text-rp-muted">برای مشاهده پنل کاربری ابتدا باید وارد حساب خود شوید.</p>
      <NuxtLink to="/login" class="bg-rp-primary text-rp-dark px-8 py-3 rounded-xl font-bold hover:bg-yellow-500 transition-all shadow-glow-primary mt-4">
        ورود به حساب کاربری
      </NuxtLink>
    </div>

    <!-- داشبورد اصلی (در صورت لاگین بودن) -->
    <div v-else class="flex flex-col gap-8">
      
      <!-- هدر داشبورد و خوش‌آمدگویی -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-rp-card/50 backdrop-blur-md border border-rp-border p-8 rounded-2xl relative overflow-hidden">
        <!-- افکت نوری -->
        <div class="absolute -right-20 -top-20 w-48 h-48 bg-rp-primary/10 rounded-full blur-3xl"></div>
        
        <div class="flex items-center gap-6 relative z-10">
          <div class="w-20 h-20 bg-rp-dark rounded-2xl border border-rp-primary flex items-center justify-center shadow-glow-primary">
            <span class="text-3xl font-bold text-rp-primary">{{ authStore.user?.username.charAt(0).toUpperCase() }}</span>
          </div>
          <div>
            <h1 class="text-3xl font-bold text-rp-light mb-1">{{ authStore.user?.username }}</h1>
            <span class="text-rp-primary font-bold text-sm bg-rp-primary/10 px-3 py-1 rounded-full border border-rp-primary/20">
              سطح کاربری: VIP
            </span>
          </div>
        </div>

        <!-- کارت کیف پول -->
        <div class="bg-rp-dark border border-rp-border p-6 rounded-xl flex flex-col items-center min-w-[250px] relative z-10">
          <span class="text-rp-muted text-sm mb-2">موجودی کیف پول شما</span>
          <div class="text-3xl font-extrabold text-rp-light mb-4">
            0 <span class="text-sm font-normal text-rp-muted">تومان</span>
          </div>
          <button class="w-full bg-rp-card text-rp-primary border border-rp-primary/50 hover:bg-rp-primary hover:text-rp-dark px-4 py-2 rounded-lg transition-all font-bold text-sm">
            شارژ حساب
          </button>
        </div>
      </div>

      <!-- تب‌های مدیریت دارایی‌ها -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- تاریخچه خرید -->
        <div class="md:col-span-2 bg-rp-card border border-rp-border rounded-2xl p-6">
          <h3 class="text-xl font-bold text-rp-light mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-rp-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            تاریخچه تراکنش‌ها
          </h3>
          
          <div class="text-center py-10 text-rp-muted border border-dashed border-rp-border/50 rounded-xl">
            شما هنوز هیچ خریدی انجام نداده‌اید.
          </div>
          <!-- در آینده با یک جدول (Table) وصل شده به API بک‌اند پر می‌شود -->
        </div>

        <!-- دارایی‌های فعال -->
        <div class="bg-rp-card border border-rp-border rounded-2xl p-6">
          <h3 class="text-xl font-bold text-rp-light mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-rp-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            گاراژ و املاک
          </h3>
          
          <ul class="flex flex-col gap-3">
            <li class="bg-rp-dark border border-rp-border p-3 rounded-lg flex justify-between items-center opacity-50">
              <span class="text-sm text-rp-muted">ماشین‌ها</span>
              <span class="text-rp-light font-bold">۰</span>
            </li>
            <li class="bg-rp-dark border border-rp-border p-3 rounded-lg flex justify-between items-center opacity-50">
              <span class="text-sm text-rp-muted">املاک</span>
              <span class="text-rp-light font-bold">۰</span>
            </li>
          </ul>
          
          <NuxtLink to="/vehicles" class="block w-full text-center mt-6 text-sm text-rp-primary hover:text-yellow-500 transition-colors">
            ورود به نمایشگاه و خرید »
          </NuxtLink>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
</script>
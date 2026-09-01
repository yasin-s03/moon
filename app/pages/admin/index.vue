<template>
  <div v-if="auth.user.role === 'admin' " class="max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-extrabold text-rp-light mb-2">داشبورد فرماندهی</h1>
      <p class="text-rp-muted">به پنل مدیریت مون لایت خوش آمدید. از منوی سمت راست می‌توانید بخش‌ها را مدیریت کنید.</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-rp-card p-6 rounded-2xl border border-rp-border flex flex-col justify-between h-36">
        <span class="text-rp-muted text-sm font-bold">وضعیت سرور</span>
        <p class="text-2xl font-extrabold text-green-400">آنلاین و پایدار</p>
        <span class="text-xs text-rp-muted">پینگ: 14ms</span>
      </div>

      <div class="bg-rp-card p-6 rounded-2xl border border-rp-border flex flex-col justify-between h-36">
        <span class="text-rp-muted text-sm font-bold">دسترسی سریع</span>
        <NuxtLink to="/admin/products" class="text-rp-primary font-bold hover:underline">مدیریت و افزودن محصولات کلیک کنید &larr;</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const auth = useAuthStore()

definePageMeta({
})
</script>
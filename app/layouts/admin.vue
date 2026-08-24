<template>
  <div class="h-screen w-full flex bg-rp-dark text-rp-light font-sans overflow-hidden" dir="rtl">
    
    <!-- سایدبار کامپوننت‌محور ادمین -->
    <AdminSidebar />

    <!-- محتوای اصلی و هدر -->
    <div class="flex-1 flex flex-col min-w-0 bg-rp-dark">
      <header class="h-16 bg-rp-card border-b border-rp-border flex items-center justify-between px-8 flex-shrink-0 z-10 shadow-md">
        <h2 class="text-sm font-bold text-rp-light">پیشخوان مدیریت سرور مون لایت</h2>
        <div class="text-xs bg-rp-dark border border-rp-border px-3 py-1.5 rounded-lg text-rp-muted">
          نقش: <span class="text-rp-primary font-bold">مدیر کل (Admin)</span>
        </div>
      </header>
      
      <main class="flex-1 overflow-x-hidden overflow-y-auto p-8 custom-scrollbar">
        <slot />
      </main>
    </div>

  </div>
</template>

<script setup>
</script>
<template>
  <aside class="w-64 bg-rp-card border-l border-rp-border flex flex-col flex-shrink-0 z-20 shadow-2xl">
    <div class="h-16 flex items-center px-6 border-b border-rp-border">
      <span class="text-xl font-extrabold text-rp-light tracking-widest">
        <span class="text-rp-primary">MOON</span> ADMIN
      </span>
    </div>
    
    <nav class="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2 custom-scrollbar">
      <NuxtLink 
        to="/admin" 
        class="flex items-center gap-3 px-4 py-3 rounded-xl text-rp-muted hover:text-rp-light hover:bg-rp-dark/50 transition-all font-bold text-sm"
        active-class="bg-rp-dark text-rp-primary shadow-sm border border-rp-border"
      >
        <span>📊</span> داشبورد مرکزی
      </NuxtLink>
      
      <NuxtLink 
        to="/admin/products" 
        class="flex items-center gap-3 px-4 py-3 rounded-xl text-rp-muted hover:text-rp-light hover:bg-rp-dark/50 transition-all font-bold text-sm"
        active-class="bg-rp-dark text-rp-primary shadow-sm border border-rp-border"
      >
        <span>📦</span> مدیریت محصولات
      </NuxtLink>
    </nav>
    
    <div class="p-4 border-t border-rp-border bg-rp-dark/30">
      <NuxtLink to="/" class="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-bold text-rp-muted bg-rp-dark rounded-xl border border-rp-border hover:text-rp-accent hover:border-rp-accent/40 transition-all">
        &larr; بازگشت به سایت اصلی
      </NuxtLink>
    </div>
  </aside>
</template>

<script setup>
</script>
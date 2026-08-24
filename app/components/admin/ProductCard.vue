<template>
  <div class="bg-rp-card border border-rp-border rounded-2xl p-4 flex items-center justify-between gap-4 hover:border-rp-primary/50 transition-all shadow-lg group">
    <!-- بخش چپ: عکس و اطلاعات اصلی -->
    <div class="flex items-center gap-4 min-w-0">
      <img 
        :src="product.image" 
        alt="" 
        class="w-16 h-16 rounded-xl object-cover border border-rp-border flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm" 
      />
      <div class="min-w-0">
        <span class="inline-block bg-rp-dark text-rp-primary text-[10px] px-2.5 py-1 rounded-md border border-rp-border mb-1 font-bold">
          {{ product.category }}
        </span>
        <h3 class="font-bold text-rp-light truncate text-base">{{ product.title }}</h3>
        <p class="text-xs text-rp-muted truncate mt-0.5">{{ product.description }}</p>
      </div>
    </div>

    <!-- بخش راست: قیمت و اکشن‌ها -->
    <div class="flex flex-col items-end justify-between flex-shrink-0 gap-3">
      <span class="text-rp-primary font-extrabold text-sm">
        {{ product.price.toLocaleString() }} <span class="text-[10px] font-normal text-rp-muted">تومان</span>
      </span>
      <div class="flex items-center gap-1.5">
        <button 
          @click="$emit('edit', product)" 
          class="p-2 bg-rp-dark text-rp-muted hover:text-rp-primary rounded-lg border border-rp-border hover:border-rp-primary/40 transition-all" 
          title="ویرایش"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
        </button>
        <button 
          @click="$emit('delete', product.id)" 
          class="p-2 bg-rp-dark text-rp-muted hover:text-rp-accent rounded-lg border border-rp-border hover:border-rp-accent/40 transition-all" 
          title="حذف"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['edit', 'delete'])
</script>
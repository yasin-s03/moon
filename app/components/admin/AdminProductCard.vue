<template>
  <div class="bg-rp-card border border-rp-border rounded-2xl p-4 flex items-center justify-between gap-4 hover:border-rp-primary/50 transition-all shadow-lg group">
    <!-- عکس و اطلاعات -->
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

    <!-- قیمت و عملیات -->
    <div class="flex flex-col items-end justify-between flex-shrink-0 gap-3">
      <span class="text-rp-primary font-extrabold text-sm">
        {{ product.price.toLocaleString() }} <span class="text-[10px] font-normal text-rp-muted">تومان</span>
      </span>
      <div class="flex items-center gap-1.5">
        <button 
          @click="$emit('edit', product)" 
          class="p-2 bg-rp-dark text-rp-muted hover:text-rp-primary rounded-xl border border-rp-border hover:border-rp-primary/40 transition-all" 
          title="ویرایش"
        >
          ✏️
        </button>
        <button 
          @click="$emit('delete', product.id)" 
          class="p-2 bg-rp-dark text-rp-muted hover:text-rp-accent rounded-xl border border-rp-border hover:border-rp-accent/40 transition-all" 
          title="حذف"
        >
          🗑️
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
defineEmits(['edit', 'delete'])
</script>
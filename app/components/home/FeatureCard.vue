<template>
  <div class="group rounded-2xl border border-rp-border bg-rp-card p-6 hover:border-rp-primary/50 transition-all shadow-lg">
    <div class="w-11 h-11 rounded-xl bg-rp-primary/10 text-rp-primary flex items-center justify-center mb-4 group-hover:bg-rp-primary/20 transition-colors font-bold text-lg">
      {{ icon }}
    </div>
    <h3 class="font-bold text-lg mb-2 text-rp-light">{{ title }}</h3>
    <p class="text-sm text-rp-muted leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String
})
</script>
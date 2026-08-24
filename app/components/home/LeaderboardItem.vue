<template>
  <div class="flex items-center gap-4 px-5 py-4 border-b border-rp-border last:border-b-0 hover:bg-rp-dark/30 transition-colors">
    <span :class="badgeClass" class="flex items-center justify-center w-9 h-9 rounded-lg font-bold text-sm border">
      {{ rank }}
    </span>
    <div class="flex-1 min-w-0">
      <div class="font-bold text-rp-light truncate">{{ name }}</div>
      <div class="text-xs text-rp-muted">{{ xp }} XP</div>
    </div>
    <div class="text-left">
      <div class="text-rp-primary font-extrabold"><span dir="ltr" class="tabular-nums">{{ level }}</span></div>
      <div class="text-xs text-rp-muted">LEVEL</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  rank: [Number, String],
  name: String,
  xp: String,
  level: [Number, String],
  badgeClass: {
    type: String,
    default: 'bg-rp-dark text-rp-muted border-rp-border'
  }
})
</script>
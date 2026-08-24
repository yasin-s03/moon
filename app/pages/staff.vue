<template>
  <div dir="rtl" class="min-h-screen bg-rp-dark text-rp-light font-sans py-12 px-6">
    <div class="max-w-5xl mx-auto space-y-8">
      
      <!-- هدر -->
      <div class="text-center space-y-3">
        <h1 class="text-3xl md:text-4xl font-extrabold">تیم مدیریت و <span class="text-rp-primary">استف</span></h1>
        <p class="text-rp-muted text-sm max-w-lg mx-auto">ارکان اجرایی، پشتیبان‌ها و ادمین‌های سرور که نظم شهر را برقرار می‌کنند.</p>
      </div>

      <!-- گرید کارت‌های استف -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="member in staffMembers" :key="member.id" class="bg-rp-card border border-rp-border rounded-2xl p-6 shadow-lg flex flex-col items-center text-center group hover:border-rp-primary/50 transition-all">
          <div class="w-20 h-20 rounded-2xl bg-rp-dark border border-rp-border flex items-center justify-center text-3xl mb-4 group-hover:scale-105 transition-transform shadow-inner">
            👤
          </div>
          <h3 class="font-extrabold text-lg text-rp-light mb-1">{{ member.name }}</h3>
          <span class="bg-rp-primary/10 text-rp-primary text-xs px-3 py-1 rounded-full border border-rp-primary/20 font-bold mb-3">
            {{ member.role }}
          </span>
          <p class="text-xs text-rp-muted leading-relaxed">{{ member.description }}</p>
        </div>
      </div>

      <!-- بازگشت -->
      <div class="text-center pt-4">
        <NuxtLink to="/" class="inline-flex items-center gap-2 bg-rp-card text-rp-light border border-rp-border px-6 py-3 rounded-xl font-bold text-sm hover:border-rp-primary transition-all">
          &larr; بازگشت به صفحه اصلی
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
const staffMembers = [
  { id: 1, name: 'Jahangir Rad', role: 'Owner & Developer', description: 'مدیر کل و توسعه‌دهنده اصلی زیرساخت‌های سرور.' },
  { id: 2, name: 'Pouyan Timsar', role: 'Head Admin', description: 'مسئول نظارت بر ادمین‌ها و هماهنگی بخش‌های رول‌پلی.' },
  { id: 3, name: 'Salar Vosoogh', role: 'Senior Admin', description: 'مدیر بخش ناظران و بررسی گزارش‌های تخلف بازیکنان.' },
  { id: 4, name: 'Arya Boss', role: 'Event Manager', description: 'طراح و برگزارکننده ایونت‌های بزرگ هفتگی و همایش‌ها.' },
  { id: 5, name: 'Kourosh King', role: 'Support Lead', description: 'مسئول تیم پشتیبانی تلگرام، دیسکورد و تیکت‌ها.' },
  { id: 6, name: 'Behruz Sniper', role: 'Game Moderator', description: 'ناظر فعال داخل بازی برای جلوگیری از برهم خوردن نظم.' }
]

definePageMeta({ layout: 'default' })
</script>
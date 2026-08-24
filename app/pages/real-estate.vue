<template>
  <div class="container mx-auto px-6 pt-32 pb-24 relative min-h-screen">
    
    <!-- هدر صفحه املاک -->
    <div class="mb-10 border-b border-rp-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h1 class="text-4xl font-bold text-rp-light mb-3">املاک و مستغلات</h1>
        <p class="text-rp-muted text-lg">خرید لوکس‌ترین پنت‌هاوس‌ها، عمارت‌های اختصاصی و مخفیگاه‌ها در سطح شهر.</p>
      </div>
      
      <div class="text-sm font-bold bg-rp-dark/50 text-rp-primary px-4 py-2 rounded-lg border border-rp-primary/20 backdrop-blur-sm">
        {{ filteredProperties.length }} ملک موجود است
      </div>
    </div>

    <!-- نوار فیلتر دسته‌بندی‌ها -->
    <div class="flex gap-3 overflow-x-auto pb-6 mb-6 custom-scrollbar">
      <button 
        v-for="category in categories" 
        :key="category"
        @click="selectedCategory = category"
        :class="[
          'px-6 py-2.5 rounded-xl font-bold whitespace-nowrap transition-all duration-300',
          selectedCategory === category 
            ? 'bg-rp-primary text-rp-dark shadow-glow-primary scale-105' 
            : 'bg-rp-card text-rp-muted border border-rp-border hover:border-rp-primary/50 hover:text-rp-light hover:scale-105'
        ]"
      >
        {{ category }}
      </button>
    </div>

    <!-- گرید املاک -->
    <div v-if="filteredProperties.length === 0" class="text-center py-20 text-rp-muted text-xl">
      هیچ ملکی در این دسته‌بندی یافت نشد.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <TransitionGroup name="grid-fade">
        <ProductCard 
          v-for="property in filteredProperties" 
          :key="property.id" 
          :id="property.id"
          :title="property.title"
          :description="property.description"
          :price="property.price"
          :category="property.category"
          :image="property.image"
        />
      </TransitionGroup>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['همه', 'پنت‌هاوس', 'عمارت (کارتل)', 'آپارتمان لوکس', 'مخفیگاه']
const selectedCategory = ref('همه')

const properties = ref([
  {
    id: 101,
    title: 'پنت‌هاوس برج میلاد',
    description: 'دید ۳۶۰ درجه به کل طهران. دارای هلیکوپتر پد اختصاصی، گاوصندوق سطح ۳ و گاراژ ۱۰ ماشینه.',
    price: 5000000,
    category: 'پنت‌هاوس',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 102,
    title: 'عمارت لواسان (بیس گنگ)',
    description: 'یک عمارت فوق‌امنیتی با دیوارکشی بلند. مناسب برای راه‌اندازی تشکیلات، دارای اتاق مانیتورینگ و انبار اسلحه.',
    price: 12000000,
    category: 'عمارت (کارتل)',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 103,
    title: 'آپارتمان فرمانیه',
    description: 'آپارتمان مدرن با طراحی مینیمال، دارای استخر سرپوشیده و پارکینگ اختصاصی.',
    price: 2500000,
    category: 'آپارتمان لوکس',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 104,
    title: 'سوله متروکه جنوب شهر',
    description: 'بهترین مکان برای دور ماندن از رادار پلیس. قابلیت ارتقا برای راه‌اندازی لابراتوار تولید مواد.',
    price: 800000,
    category: 'مخفیگاه',
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=800&auto=format&fit=crop'
  }
])

const filteredProperties = computed(() => {
  if (selectedCategory.value === 'همه') {
    return properties.value
  }
  return properties.value.filter(p => p.category === selectedCategory.value)
})
</script>

<style scoped>
.grid-fade-enter-active,
.grid-fade-leave-active {
  transition: all 0.5s ease;
}
.grid-fade-enter-from,
.grid-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.grid-fade-leave-active {
  position: absolute;
}
</style>
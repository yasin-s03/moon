<template>
  <div class="container mx-auto px-6 pt-32 pb-24 relative min-h-screen">
    
    <!-- هدر صفحه -->
    <div class="mb-10 border-b border-rp-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h1 class="text-4xl font-bold text-rp-light mb-3">نمایشگاه نقلیه</h1>
        <p class="text-rp-muted text-lg">خاص‌ترین و کمیاب‌ترین وسایل نقلیه طهران برای تسخیر خیابان‌ها.</p>
      </div>
      
      <!-- شمارنده نتایج -->
      <div class="text-sm font-bold bg-rp-dark/50 text-rp-primary px-4 py-2 rounded-lg border border-rp-primary/20 backdrop-blur-sm">
        {{ filteredCars.length }} وسیله نقلیه پیدا شد
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

    <!-- گرید محصولات -->
    <!-- در صورت خالی بودن نتایج -->
    <div v-if="filteredCars.length === 0" class="text-center py-20 text-rp-muted text-xl">
      هیچ وسیله نقلیه‌ای در این دسته‌بندی یافت نشد.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <TransitionGroup name="grid-fade">
        <ProductCard 
          v-for="car in filteredCars" 
          :key="car.id" 
          :id="car.id"
          :title="car.title"
          :description="car.description"
          :price="car.price"
          :category="car.category"
          :image="car.image"
        />
      </TransitionGroup>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['همه', 'کلاسیک ایرانی', 'آمریکایی لوکس', 'موتور سیکلت']

const selectedCategory = ref('همه')

const cars = ref([
  {
    id: 1,
    title: 'پیکان جوانان گوجه‌ای',
    description: 'ماشین اصیل طهران قدیم با هندلینگ کاستوم و سرعت نهایی ۱۸۰ کیلومتر بر ساعت. مناسب برای خیابان‌گردی‌های شبانه.',
    price: 50000,
    category: 'کلاسیک ایرانی',
    image: 'https://images.unsplash.com/photo-1599813292415-3736862590ec?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'شورلت ایمپالا ۱۹۶۷',
    description: 'کابوس خیابان‌ها. این ماشین با موتور V8 و بدنه ضدگلوله (سطح ۱) مخصوص اعضای رده‌بالای مافیاست.',
    price: 350000,
    category: 'آمریکایی لوکس',
    image: 'https://images.unsplash.com/photo-1570356528233-a46747e04f02?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'موتور وسپا کلاسیک',
    description: 'بهترین انتخاب برای گشت و گذار در بازار و کوچه‌پس‌کوچه‌های باریک. کم‌مصرف و به شدت استایل‌دار.',
    price: 15000,
    category: 'موتور سیکلت',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'کادیلاک فلیت‌وود',
    description: 'خودرویی تشریفاتی با فضای داخلی وسیع و هندلینگ فوق‌العاده نرم. مناسب برای اسکورت مقامات.',
    price: 450000,
    category: 'آمریکایی لوکس',
    image: 'https://images.unsplash.com/photo-1493156683889-4a0b284e3661?q=80&w=800&auto=format&fit=crop'
  }
])

const filteredCars = computed(() => {
  if (selectedCategory.value === 'همه') {
    return cars.value
  }
  return cars.value.filter(car => car.category === selectedCategory.value)
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
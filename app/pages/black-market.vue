<template>
  <div class="container mx-auto px-6 pt-32 pb-24 relative min-h-screen">
    
    <!-- لایه تاریک‌کننده اختصاصی برای بازار سیاه (تم قرمز/دارک) -->
    <div class="fixed inset-0 bg-gradient-to-b from-rp-dark via-rp-dark to-rp-accent/5 pointer-events-none z-0"></div>

    <div class="relative z-10">
      <!-- بنر هشدار -->
      <div class="bg-rp-accent/10 border border-rp-accent/30 rounded-xl p-4 mb-8 flex items-start gap-4 backdrop-blur-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-rp-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <h4 class="text-rp-accent font-bold text-sm mb-1">هشدار امنیتی (IC)</h4>
          <p class="text-rp-muted text-xs leading-relaxed">
            شما در حال ورود به شبکه زیرزمینی و غیرقانونی مون لایت هستید. هرگونه تراکنش در این بخش غیرقابل پیگیری بوده و مسئولیت حمل این آیتم‌ها در سطح شهر مستقیماً بر عهده خود شماست.
          </p>
        </div>
      </div>

      <!-- هدر صفحه -->
      <div class="mb-10 border-b border-rp-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 class="text-4xl font-extrabold text-white mb-3 drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]">بازار سیاه</h1>
          <p class="text-rp-muted text-lg">تجهیزات ممنوعه، سلاح‌های گرم و ابزارهای نفوذ.</p>
        </div>
        
        <div class="text-sm font-bold bg-rp-dark/80 text-rp-accent px-4 py-2 rounded-lg border border-rp-accent/30 backdrop-blur-sm">
          {{ filteredItems.length }} محموله در دسترس است
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
              ? 'bg-rp-accent text-white shadow-glow-accent scale-105 border-transparent' 
              : 'bg-rp-card text-rp-muted border border-rp-border hover:border-rp-accent/50 hover:text-white hover:scale-105'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- گرید آیتم‌های غیرقانونی -->
      <div v-if="filteredItems.length === 0" class="text-center py-20 text-rp-muted text-xl">
        در حال حاضر محموله‌ای در این دسته موجود نیست.
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <TransitionGroup name="grid-fade">
          <ProductCard 
            v-for="item in filteredItems" 
            :key="item.id" 
            :id="item.id"
            :title="item.title"
            :description="item.description"
            :price="item.price"
            :category="item.category"
            :image="item.image"
            @buy="openPanel"
          />
        </TransitionGroup>
      </div>
    </div>

  </div>
        <!-- <PanelShop :product="selectProdcut" @show="showPanel" @close="showPanel = false"/> -->
        <PanelShop v-if="showPanel" :product="selectProdcut" @close="openPanel" />

</template>

<script setup>
import { ref, computed } from 'vue'
import PanelShop from '~/components/PanelShop.vue'

const useshop = userShoppingStore()
const categories = ['همه', 'سلاح گرم', 'تجهیزات نفوذ', 'محافظتی']
const selectedCategory = ref('همه')
const selectProdcut = ref()
const showPanel = ref(false)
function openPanel(item){
  if(item){
  showPanel.value = true
  selectProdcut.value = item
  useshop.sumShop(item.price)
  useshop.addShop({id:0,name:item.title,price:item.price})
  }else{
    showPanel.value = false
  }
}

const blackMarketItems = ref([
  {
    id: 201,
    title: 'اسلحه کلاشنیکف (AK-47)',
    description: 'سلاح تهاجمی با قدرت تخریب بالا و لگد زیاد. محبوب‌ترین انتخاب برای درگیری‌های گنگستری.',
    price: 150000,
    category: 'سلاح گرم',
    image: 'https://images.unsplash.com/photo-1595590424283-b8f1784cb2c8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 202,
    title: 'دستگاه هک ATM',
    description: 'یک تبلت مجهز به نرم‌افزارهای بای‌پَس برای خالی کردن دستگاه‌های خودپرداز سطح شهر. (یکبار مصرف)',
    price: 45000,
    category: 'تجهیزات نفوذ',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 203,
    title: 'جلیقه ضدگلوله (Heavy Armor)',
    description: 'جلیقه تاکتیکال سرامیکی که ۱۰۰٪ آرمور شما را پر می‌کند. ضروری برای سرقت از بانک.',
    price: 25000,
    category: 'محافظتی',
    image: 'https://images.unsplash.com/photo-1659103597816-563b7df8d951?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 204,
    title: 'کلت کمری (Desert Eagle)',
    description: 'قدرت توقف بی‌نظیر. کالیبر کلت، دمیج اسنایپر.',
    price: 85000,
    category: 'سلاح گرم',
    image: 'https://images.unsplash.com/photo-1584281721568-1eb248796856?q=80&w=800&auto=format&fit=crop'
  }
])

const filteredItems = computed(() => {
  if (selectedCategory.value === 'همه') {
    return blackMarketItems.value
  }
  return blackMarketItems.value.filter(item => item.category === selectedCategory.value)
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
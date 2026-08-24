<template>
  <div class="max-w-6xl mx-auto space-y-8" dir="rtl">
    
    <!-- هدر صفحه -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-rp-card p-6 rounded-2xl border border-rp-border shadow-xl">
      <div>
        <h1 class="text-2xl font-extrabold text-rp-light tracking-wide mb-1">مدیریت انبار و محصولات</h1>
        <p class="text-rp-muted text-xs">افزودن، ویرایش یا حذف آیتم‌های فروشگاه و بازار سیاه.</p>
      </div>

      <div class="flex items-center gap-3 w-full sm:w-auto">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="جستجوی محصول..." 
          class="flex-1 sm:w-64 bg-rp-dark border border-rp-border rounded-xl px-4 py-2.5 text-rp-light text-sm focus:border-rp-primary outline-none transition-all"
        />
        <button 
          @click="openAddModal"
          class="bg-rp-primary text-rp-dark px-5 py-2.5 rounded-xl font-extrabold hover:bg-yellow-500 transition-all shadow-glow-primary text-sm whitespace-nowrap"
        >
          + افزودن محصول
        </button>
      </div>
    </div>

    <!-- لیست کارت‌های محصولات (کامپوننت‌محور) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <AdminProductCard 
        v-for="product in filteredProducts" 
        :key="product.id" 
        :product="product"
        @edit="openEditModal"
        @delete="adminStore.deleteProduct"
      />
    </div>

    <div v-if="filteredProducts.length === 0" class="text-center py-16 bg-rp-card border border-rp-border rounded-2xl">
      <p class="text-rp-muted text-sm">هیچ محصولی یافت نشد.</p>
    </div>

    <!-- مدال فرم (افزودن / ویرایش) -->
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div class="absolute inset-0 bg-rp-dark/80 backdrop-blur-sm" @click="isModalOpen = false"></div>
      
      <div class="relative bg-rp-card border border-rp-border rounded-2xl w-full max-w-lg p-6 shadow-2xl z-10 flex flex-col gap-6">
        <div class="flex justify-between items-center border-b border-rp-border pb-4">
          <h3 class="text-lg font-bold text-rp-light">
            {{ isEditing ? 'ویرایش مشخصات محصول' : 'ثبت آیتم جدید' }}
          </h3>
          <button @click="isModalOpen = false" class="text-rp-muted hover:text-rp-accent">✕</button>
        </div>

        <form @submit.prevent="saveProduct" class="flex flex-col gap-4">
          <div>
            <label class="block text-rp-muted text-xs mb-2">عنوان محصول</label>
            <input v-model="form.title" type="text" required class="w-full bg-rp-dark border border-rp-border rounded-xl px-4 py-3 text-rp-light focus:border-rp-primary outline-none text-sm" placeholder="مثلا: ماشین اسپرت" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-rp-muted text-xs mb-2">دسته‌بندی</label>
              <select v-model="form.category" class="w-full bg-rp-dark border border-rp-border rounded-xl px-4 py-3 text-rp-light focus:border-rp-primary outline-none text-sm">
                <option v-for="cat in adminStore.categories.filter(c => c !== 'همه')" :key="cat" :value="cat">{{ cat }}</option>
              </select>
            </div>
            <div>
              <label class="block text-rp-muted text-xs mb-2">قیمت (تومان)</label>
              <input v-model.number="form.price" type="number" required class="w-full bg-rp-dark border border-rp-border rounded-xl px-4 py-3 text-rp-light focus:border-rp-primary outline-none text-sm" placeholder="150000" />
            </div>
          </div>

          <div class="h-16 w-full">
            <label class="block text-rp-muted text-xs mb-2">بارگذاری عکس</label>
            <input v-if="!form.image" v-on:change="handleImage" type="file" accept="*/image"  class="w-full bg-rp-dark border border-rp-border rounded-xl px-4 py-3 text-rp-light focus:border-rp-primary outline-none text-sm" placeholder="https://..." />
            <img v-else :src="form.image" class="w-full h-full  rounded" alt="image">
          </div>

          <div>
            <label class="block text-rp-muted text-xs mb-2">توضیحات کوتاه</label>
            <textarea v-model="form.description" rows="3" class="w-full bg-rp-dark border border-rp-border rounded-xl px-4 py-3 text-rp-light focus:border-rp-primary outline-none text-sm resize-none"></textarea>
          </div>

          <div class="flex justify-end gap-3 pt-2 border-t border-rp-border">
            <button type="button" @click="isModalOpen = false" class="px-5 py-2.5 rounded-xl bg-rp-dark text-rp-muted border border-rp-border hover:text-rp-light transition-all text-sm font-bold">انصراف</button>
            <button type="submit" class="px-6 py-2.5 rounded-xl bg-rp-primary text-rp-dark font-extrabold hover:bg-yellow-500 transition-all text-sm shadow-glow-primary">ذخیره اطلاعات</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAdminStore } from '~/stores/admin'

definePageMeta({
  layout: 'admin'
})

const adminStore = useAdminStore()
const searchQuery = ref('')
const isModalOpen = ref(false)
const isEditing = ref(false)

const form = ref({
  id: null,
  title: '',
  category: 'ماشین‌ها',
  price: 0,
  image: '',
  description: ''
})



const handleImage = (event) =>{
  const file = event.target.files[0]
  console.log(event.target.files);
  if(file){
  form.value.image = URL.createObjectURL(file)
  }
}


const filteredProducts = computed(() => {
  if (!searchQuery.value) return adminStore.products
  return adminStore.products.filter(p => 
    p.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const openAddModal = () => {
  isEditing.value = false
  form.value = { id: null, title: '', category: adminStore.categories[1] || 'ماشین‌ها', price: 0, image: '', description: '' }
  isModalOpen.value = true
}

const openEditModal = (product) => {
  isEditing.value = true
  form.value = { ...product }
  isModalOpen.value = true
}

const saveProduct = () => {
  if (isEditing.value) {
    adminStore.updateProduct(form.value)
  } else {
    adminStore.addProduct(form.value)
  }
  isModalOpen.value = false
}
</script>
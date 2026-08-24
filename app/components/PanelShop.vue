
<template>
    <div   class="transition-transform duration-1000 ease-in-out -translate-x-[110%]  z-50 fixed flex justify-evenly items-center flex-col w-[300px] h-[100vh] rounded-md border-white/50 left-0 top-0 text-slate-300 font-bold text-[40px] p-2 shadow-lg shadow-white
    " :class="show ? 'translate-x-0' : '-translate-x-[110%]'" style="background:linear-gradient(0deg ,rgb(0, 3, 40), rgba(255, 255, 255, 0.1)); backdrop-filter: blur(10px);">
  
  
    <span v-on:click="emit('close')" class="text-red-600 left-5px top-0 text-xl mr-auto" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArklEQVR4nO3ZMQoCQQyF4VxC0bsJO28Glr3fhhVLK1G00cLjKLESL+DL8L4TzA/TJDETEXrT7rBu8Fsr89FSRxR/NPirFj9bRsCyapjvnwj4cxh8Y9kogoUiWCiChSJYKIKFIlhAESSgCBLoISJU+DUiYkyNcdWyqr2E4OdrjeN+a1lBMaSgGFJQDCkohpRiWCmGlWJYKYZVVzHT93kafrHMIiZ2ABXz6d9vEenVGwA4nQBpAgg7AAAAAElFTkSuQmCC" alt="back--v1"></span>
     <div class="flex justify-center items-center gap-2 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
     <h2>لیست</h2> 
    </div>
      
     <div v-if="product" class="border-y border-y-white h-full w-full p-2 flex flex-col gap-y-2 overflow-auto mb-3">
        <div v-for="(item,array) in useshopping.shopArray" class=" group relative container bg-white/30 text-sm font-normal flex p-3 transition hover:bg-white/50">
            <div v-if="item" class=" flex flex-col justify-start"  :key="item">
              <div class="flex">
                <p>نام تجهیزات:</p>
                <p>{{ item.name }} </p>
            </div>
            <span class="absolute opacity-0 left-0 bottom-0 group-hover:opacity-100 transition" v-on:click="useshopping.removeshop(array,item)"><img src="data:image/png;base64,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" alt="cancel--v2"></span>
            
            </div>
            
            <div v-if="item" class="mr-auto">
                <p>{{ item.price }}</p>
                <p>تومان</p>
            </div>
        </div>
     </div>
     <div class=" border-b w-full p-2 flex flex-col items-center justify-center">
      جمع کل  <p>{{ useshopping.sum }}</p> 
     </div>
       <button class="outline-none rounded-md bg-slate-400 hover:bg-slate-500 hover:text-slate-200 transition-all text-slate-100 px-7 py-1 border border-white mt-2">پرداخت</button>
    </div>
</template>
<script setup>
const useshopping = userShoppingStore()

defineProps({
    product:Object,
    show:Boolean
})
const emit = defineEmits(['close'])
</script>
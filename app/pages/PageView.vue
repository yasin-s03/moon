<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-1 gap-y-8 py-20 px-[12rem] w-full h-auto" 
  >
   <NuxtLink v-for="card in cards" :to=card.href>
    <div class="relative flex justify-center items-center flex-col font-bold text-lg rounded-lg w-[210px] h-[210px] p-1 group shadow-md shadow-blue-400 hover:shadow-lg hover:shadow-blue-50">

  <!-- عکس -->
  <img
    :src="card.img"
    class="w-[90%] h-[90%] object-cover rounded-xl"/>
    
    {{ card.name }}
  <!-- مربع زیر عکس -->
  <!-- <div
  
    class="absolute left-0 top-full w-full h-[80px]
           bg-indigo-950 rounded-b-xl
           opacity-0 translate-y-[-10px]
           group-hover:opacity-100
           group-hover:translate-y-0
           transition-all duration-300"
  >
    اسم صفحه
  </div> -->
<div class="absolute z-10 left-0 top-full w-full h-[80px]
           bg-indigo-950 rounded-b-xl
           opacity-0 translate-y-[-10px]
           group-hover:opacity-100
           group-hover:translate-y-0
           transition-all duration-300">

  <!-- فلش -->
  <div class="absolute -top-[10px] left-1/2 -translate-x-1/2
           w-0 h-0
           border-l-[20px] border-l-transparent
           border-r-[20px] border-r-transparent
           border-b-[20px] border-b-indigo-950"></div>

  <!-- باکس -->
  <div class="w-[200px] h-[80px] bg-indigo-950 rounded-xl flex justify-center items-center">
    <img :src="`${card.icon}`" alt="left--v1">
       {{ card.title }}
  </div>

</div>
</div>
   </NuxtLink>  
   </div>
</template>

<script setup>
const cards = ref([
  {href:"/",name:"بازگشت",img:"/image/navigation_svg_vectors/home.svg",icon:"/image/arrow-left-stroke.svg",title:"بازگشت به خانه"},
  {href:"/vehicles",name:"نمایشگاه ماشین",img:"/image/navigation_svg_vectors/garage.svg",icon:"/image/arrow-left-stroke.svg",title:"برای ورود کلیک کنید"},
  {href:"/real-estate",name:"املاک و مستغلات",img:"./image/navigation_svg_vectors/map.svg",icon:"/image/arrow-left-stroke.svg",title:"برای ورود کلیک کنید"},
  {href:"/black-market",name:"بازار سیاه",img:"/image/navigation_svg_vectors/weapon-house.svg",icon:"/image/arrow-left-stroke.svg",title:"برای ورود کلیک کنید"},
  {href:"/login",name:"لاگین",img:"/image/navigation_svg_vectors/profile.svg",icon:"/image/arrow-left-stroke.svg",title:"برای لاگین کلیک کنید"},
  {href:"/staff",name:"تیم مدیریت و استف",img:"/image/navigation_svg_vectors/02_team.svg",icon:"/image/arrow-left-stroke.svg",title:"برای ورود کلیک کنید"},
  {href:"/rules",name:"قوانین جامع شهر مون لایت",img:"/image/navigation_svg_vectors/01_rules.svg",icon:"/image/arrow-left-stroke.svg",title:"برای ورود کلیک کنید"},
  {href:"/leaders",name:"لیدرها",img:"/image/navigation_svg_vectors/03_crown.svg",icon:"/image/arrow-left-stroke.svg",title:"برای ورود کلیک کنید"},
  {href:"/panel",name:"پنل",img:"/image/navigation_svg_vectors/04_dashboard.svg",icon:"/image/arrow-left-stroke.svg",title:"برای ورود کلیک کنید"},
])
definePageMeta({
  layout: "default",
});
</script>


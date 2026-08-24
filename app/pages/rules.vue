<template>
  <div class="py-12 px-6">
    <div class="max-w-4xl mx-auto space-y-8">
      
      <!-- هدر صفحه -->
      <div class="text-center space-y-3">
        <h1 class="text-3xl md:text-4xl font-extrabold">قوانین جامع شهر <span class="text-rp-primary">مون لایت</span></h1>
        <p class="text-rp-muted text-sm max-w-lg mx-auto">رعایت تمامی این قوانین برای حفظ امنیت، نظم و لذت بردن از فضای رول‌پلی الزامی است.</p>
      </div>

      <!-- لیست دسته‌بندی قوانین -->
      <div class="space-y-6">
        <div v-for="(section, index) in ruleSections" :key="index" class="bg-rp-card border border-rp-border rounded-2xl p-6 shadow-lg">
          <h2 class="text-xl font-bold text-rp-primary mb-4 flex items-center gap-2">
            <span>🔹</span> {{ section.title }}
          </h2>
          <ul class="space-y-3">
            <li v-for="(rule, rIdx) in section.rules" :key="rIdx" class="flex items-start gap-3 text-sm text-rp-muted bg-rp-dark/40 p-3.5 rounded-xl border border-rp-border/40">
              <span class="text-rp-primary font-bold mt-0.5">{{ rIdx + 1 }}.</span>
              <span class="leading-relaxed text-rp-light">{{ rule }}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const ruleSections = [
  {
    title: 'قوانین عمومی رول‌پلی',
    rules: [
      'استفاده از هرگونه چیت، هک، مادمایفای غیرمجاز یا باگ‌های بازی منجر به بن دائمی بدون اخطار قبلی می‌شود.',
      'بی‌احترامی به بازیکنان دیگر، فحاشی ناموسی یا توهین به قومیت‌ها در چت صوتی و متنی ممنوع است.',
      'قانون Metagaming (استفاده از اطلاعات خارج از بازی در داخل بازی) اکیداً ممنوع است.'
    ]
  },
  {
    title: 'قوانین درگیری و تیراندازی (DM / VDM)',
    rules: [
      'تیراندازی بدون دلیل منطقی و رول‌پلی (Deathmatch) ممنوع است و پیگرد قانونی داخل بازی دارد.',
      'استفاده از خودرو به عنوان وسیله کشتن دیگران (Vehicle Deathmatch) ممنوع است.',
      'در زمان حضور در مناطق امن (Green Zone) هرگونه درگیری و تیراندازی ممنوع است.'
    ]
  },
  {
    title: 'قوانین گنگ‌ها و باندهای زیرزمینی',
    rules: [
      'حداقل تعداد نفرات آنلاین برای درگیری‌های قلمرو باید رعایت شود.',
      'گروگان‌گیری تنها با حضور حداقل تعداد مشخصی از اعضای پلیس/نیروی انتظامی مجاز است.'
    ]
  }
]

definePageMeta({ layout: 'default' })
</script>
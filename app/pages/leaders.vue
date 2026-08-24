<template>
  <div dir="rtl" class="min-h-screen bg-rp-dark text-rp-light font-sans py-12 px-6">
    <div class="max-w-5xl mx-auto space-y-8">
      
      <!-- هدر -->
      <div class="text-center space-y-3">
        <h1 class="text-3xl md:text-4xl font-extrabold">لیدرها و <span class="text-rp-primary">فرماندهان</span></h1>
        <p class="text-rp-muted text-sm max-w-lg mx-auto">مسئولین فکشن‌های دولتی، بیزینس‌ها و گنگ‌های زیرزمینی شهر مون لایت.</p>
      </div>

      <!-- لیست لیدرها -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="leader in leadersList" :key="leader.id" class="bg-rp-card border border-rp-border rounded-2xl p-6 shadow-lg flex items-center gap-5">
          <div class="w-16 h-16 rounded-2xl bg-rp-dark border border-rp-border flex items-center justify-center text-2xl flex-shrink-0">
            ⭐
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-extrabold text-base text-rp-light truncate">{{ leader.name }}</h3>
              <span class="text-[11px] bg-rp-primary/10 text-rp-primary px-2.5 py-0.5 rounded-md border border-rp-primary/20 font-bold">
                {{ leader.type }}
              </span>
            </div>
            <p class="text-sm font-bold text-rp-primary mb-1">{{ leader.faction }}</p>
            <p class="text-xs text-rp-muted truncate">{{ leader.description }}</p>
          </div>
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
const leadersList = [
  { id: 1, name: 'Siavash Alpha', faction: 'لِپارتمنت پلیس (LSPD)', type: 'دولتی', description: 'فرمانده کل نیروهای انتظامی و حفظ امنیت شهری.' },
  { id: 2, name: 'Farhad Ghost', faction: 'بیمارستان مرکزی (EMS)', type: 'دولتی', description: 'رئیس کادر پزشکی و اورژانس شهر مون لایت.' },
  { id: 3, name: 'Shahab Cartel', faction: 'مافیای کالی»،', type: 'گنگ', description: 'رهبر یکی از قدرتمندترین باندهای زیرزمینی و قاچاق.' },
  { id: 4, name: 'Reza Phantom', faction: 'مکانیکی مرکزی (Los Santos Customs)', type: 'خدماتی', description: 'مدیر ارشد تعمیرگاه و اسپرت تخصصی خودروها.' },
  { id: 5, name: 'Arman Vagos', faction: 'گنگ واگوس (Vagos)', type: 'گنگ', description: 'کنترل‌کننده قلمروهای شرق شهر و درگیری‌های خیابانی.' },
  { id: 6, name: 'Kamran News', faction: 'خبرگزاری شهر (Weazel News)', type: 'دولتی', description: 'مدیر رسانه و پوشش‌دهنده اخبار زنده و ایونت‌ها.' }
]

definePageMeta({ layout: 'default' })
</script>
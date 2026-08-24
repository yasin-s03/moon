<template>
  <div dir="rtl" class="min-h-screen bg-rp-dark text-rp-light font-sans">
    
    

    <main>
      <!-- بخش هیرو (Hero) -->
      <section id="home" class="relative px-6 pt-24 pb-16 overflow-hidden min-h-[85vh] flex flex-col justify-center items-center text-center">
        <!-- افکت‌های نوری پس‌زمینه -->
        <div class="absolute inset-0 bg-gradient-to-r from-rp-primary/10 to-transparent z-0 pointer-events-none"></div>
        <div class="absolute top-1/4 right-1/4 w-80 h-80 bg-rp-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div class="container mx-auto relative z-10 flex flex-col items-center">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rp-card border border-rp-border text-sm mb-6 shadow-sm">
            <span class="relative flex h-2.5 w-2.5">
              <span class="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span class="text-rp-muted"><span dir="ltr" class="tabular-nums font-bold text-rp-light">128</span> از <span dir="ltr" class="tabular-nums">256</span> بازیکن آنلاین</span>
          </div>

          <h1 class="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            شهر همیشه بیدار <span class="text-rp-primary drop-shadow-glow">مون لایت</span>
          </h1>
          
          <p class="text-lg md:text-xl text-rp-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            به پیشرفته‌ترین سرور رول‌پلی خوش آمدید؛ جایی که داستان زندگی‌تان را خودتان رقم می‌زنید و در بازاری پویا به قدرت می‌رسید.
          </p>

          <div class="flex flex-wrap justify-center gap-4">
            <a href="vmp://connect/moonlight.ir" class="flex items-center gap-2 bg-rp-primary text-rp-dark px-8 py-3.5 rounded-xl font-extrabold text-base transition-all transform hover:scale-105 shadow-glow-primary">
              شروع بازی (Connect)
            </a>
            <NuxtLink to="/black-market" class="bg-rp-card text-rp-light border border-rp-border px-8 py-3.5 rounded-xl font-bold text-base transition-all hover:border-rp-primary/50">
              فروشگاه و بازار سیاه
            </NuxtLink>
          </div>
        </div>

        <!-- کارت‌های آمار زنده پایین هیرو -->
        <div class="relative z-10 container mx-auto mt-16 max-w-5xl">
          <div class="rounded-2xl border border-rp-border bg-rp-card/80 backdrop-blur-md px-6 py-6 shadow-2xl">
            <div class="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-rp-border/50">
              <div class="px-4 py-2 md:py-0 text-center">
                <div class="text-2xl md:text-3xl font-extrabold text-rp-primary"><span dir="ltr" class="tabular-nums">128</span></div>
                <div class="text-xs text-rp-muted mt-1">بازیکنان آنلاین</div>
                <div class="mt-2 h-1 w-full rounded-full bg-rp-dark overflow-hidden">
                  <div class="h-full bg-rp-primary rounded-full" style="width: 50%;"></div>
                </div>
              </div>
              <div class="px-4 py-2 md:py-0 text-center">
                <div class="text-2xl md:text-3xl font-extrabold text-rp-light"><span dir="ltr" class="tabular-nums">24,840</span></div>
                <div class="text-xs text-rp-muted mt-1">شخصیت‌های ساخته‌شده</div>
              </div>
              <div class="px-4 py-2 md:py-0 text-center">
                <div class="text-2xl md:text-3xl font-extrabold text-rp-light"><span dir="ltr" class="tabular-nums">76</span></div>
                <div class="text-xs text-rp-muted mt-1">گنگ‌های فعال</div>
              </div>
              <div class="px-4 py-2 md:py-0 text-center">
                <div class="text-2xl md:text-3xl font-extrabold text-green-400">99.9%</div>
                <div class="text-xs text-rp-muted mt-1">آپ‌تایم سرور</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- بخش ویژگی‌ها (استفاده از کامپوننت مجزا) -->
      <section id="features" class="relative px-6 py-20 bg-rp-dark">
        <div class="container mx-auto max-w-7xl">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-extrabold mb-3">امکانات انحصاری <span class="text-rp-primary">مون لایت</span></h2>
            <p class="text-rp-muted max-w-xl mx-auto text-sm">هر آنچه برای یک تجربهٔ رول‌پلی عمیق، امن و حرفه‌ای نیاز دارید.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HomeFeatureCard 
              icon="💼" 
              title="اقتصاد پویا و واقعی" 
              description="معاملات امن و پیشرفته دارایی‌ها و کالاها بین بازیکنان." 
            />
            <HomeFeatureCard 
              icon="🛡️" 
              title="مشاغل قانونی و دولتی" 
              description="از کلانتری و اورژانس تا مکانیکی و مدیریت مشاغل شهری." 
            />
            <HomeFeatureCard 
              icon="⚡" 
              title="سایت‌ها و گنگ‌های زیرزمینی" 
              description="دریافت قلمرو، درگیری‌های خیابانی و بازار سیاه اختصاصی." 
            />
            <HomeFeatureCard 
              icon="🚗" 
              title="دلالی خودرو و املاک" 
              description="خرید و فروش پنت‌هاوس‌ها، ویلاها و خودروهای اسپرت سفارشی." 
            />
            <HomeFeatureCard 
              icon="🎯" 
              title="ایونت‌های هفتگی بزرگ" 
              description="مسابقات مهیج، جوایز ارزنده و همایش‌های قانونی و غیرقانونی." 
            />
            <HomeFeatureCard 
              icon="🔒" 
              title="پشتیبانی و امنیت کامل" 
              description="تیم مدیریت حرفه‌ای و سیستم ضدتقلب اختصاصی سرور." 
            />
          </div>
        </div>
      </section>

      <!-- بخش برترین‌ها (استفاده از کامپوننت‌های ردیفی) -->
      <section id="leaderboard" class="relative px-6 py-20 bg-rp-card/30 border-t border-rp-border">
        <div class="container mx-auto max-w-3xl">
          <div class="text-center mb-10">
            <h2 class="text-3xl font-extrabold mb-3">جدول <span class="text-rp-primary">برترین‌های شهر</span></h2>
            <p class="text-rp-muted text-sm">قدرتمندترین بازیکنان سرور بر اساس تجربه و لول</p>
          </div>

          <div class="rounded-2xl border border-rp-border bg-rp-card overflow-hidden shadow-2xl">
            <HomeLeaderboardItem rank="1" name="Try_Hard" xp="32,332,060" level="776" badgeClass="bg-amber-500/15 text-amber-400 border-amber-500/30" />
            <HomeLeaderboardItem rank="2" name="Pouyan_Timsar" xp="16,219,980" level="483" badgeClass="bg-gray-300/10 text-gray-300 border-gray-300/20" />
            <HomeLeaderboardItem rank="3" name="Javad_Shams" xp="13,831,790" level="432" badgeClass="bg-orange-700/15 text-orange-400 border-orange-700/30" />
            <HomeLeaderboardItem rank="4" name="Mahdi_Sadeghi" xp="10,912,500" level="365" />
            <HomeLeaderboardItem rank="5" name="Lucifer" xp="10,087,550" level="345" />
          </div>
        </div>
      </section>
    </main>


  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>
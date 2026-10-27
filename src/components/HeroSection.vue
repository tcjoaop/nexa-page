<script setup>
// Hero Section com recortes geométricos e foto com blend duotone
defineProps({
  title: {
    type: String,
    default: 'Conectando,\ninspirando e\ndesenvolvendo\njovens.'
  },
  heroImage: {
    type: String,
    default: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg'
  }
})
</script>

<template>
  <!-- ========================================== -->
  <!-- 2. HERO SECTION                            -->
  <!-- ========================================== -->
  <section class="relative bg-gradient-to-b from-brand-aqua via-brand-turquoise to-brand-aqua text-brand-white overflow-hidden pt-12 pb-24 md:py-28 px-6">
    <!-- Background Texture & Image Container with Duotone Blend -->
    <div class="absolute inset-0 z-0">
      <!-- SVG Geométrico Recorte Topo Esquerda (Asa Nexa) -->
      <div class="absolute -top-10 -left-12 z-20 w-64 h-64 md:w-96 md:h-96 text-brand-white pointer-events-none opacity-95">
        <svg class="w-full h-full drop-shadow-md" fill="currentColor" viewBox="0 0 300 240">
          <polygon points="0,0 280,30 210,130 140,80 80,180 0,220" />
        </svg>
      </div>

      <!-- SVG Geométrico Recorte Direita Meio (Estrela/Asa Nexa) -->
      <div class="absolute top-1/2 -right-8 -translate-y-1/2 z-20 w-44 h-44 md:w-72 md:h-72 text-brand-white pointer-events-none opacity-90">
        <svg class="w-full h-full" fill="currentColor" viewBox="0 0 200 200">
          <polygon points="120,0 200,90 100,100 200,160 50,130 0,200 40,80" />
        </svg>
      </div>

      <!-- SVG Geométrico Recorte Inferior Esquerdo -->
      <div class="absolute -bottom-8 -left-8 z-20 w-36 h-36 md:w-56 md:h-56 text-brand-white pointer-events-none opacity-90">
        <svg class="w-full h-full" fill="currentColor" viewBox="0 0 150 150">
          <polygon points="0,50 90,80 40,110 130,150 0,150" />
        </svg>
      </div>

      <!-- Hero Photo with Duotone overlay -->
      <div class="relative w-full h-full">
        <img
          alt="Foto da rede de jovens Nexa"
          class="w-full h-full object-cover mix-blend-multiply opacity-35 filter contrast-125"
          height="1080"
          :src="heroImage"
          width="1920"
        />
        <!-- Image Tag placeholder reserved as specified in brandbook -->
        <img
          alt="Foto da rede de jovens Nexa"
          class="hidden w-full h-full object-cover"
          height="1080"
          :src="heroImage"
          width="1920"
        />
        <div class="absolute inset-0 bg-brand-aqua/60 mix-blend-color" />
      </div>
    </div>

    <!-- Hero Content -->
    <div class="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center py-8 md:py-16">
      <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-white leading-[1.15] max-w-4xl tracking-tight drop-shadow-sm whitespace-pre-line">
        Conectando,<br />
        inspirando e<br />
        desenvolvendo<br />
        jovens.
      </h1>
    </div>
  </section>
</template>

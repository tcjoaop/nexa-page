<script setup>
defineProps({
  title: {
    type: String,
    default: 'Seja um associado da Rede Nexa'
  },
  ctaText: {
    type: String,
    default: 'FAÇA PARTE!'
  },
  ctaLink: {
    type: String,
    default: '#oportunidades'
  }
})
</script>

<template>
  <!-- ========================================== -->
  <!-- 4. SEÇÃO "SEJA UM ASSOCIADO"               -->
  <!-- ========================================== -->
  <section class="relative bg-brand-navy text-brand-white py-16 md:py-24 px-6 overflow-hidden">
    <!-- Vetor Decorativo Amarelo/Verde (Símbolo Nexa no rodapé direito) -->
    <div class="absolute -bottom-8 -right-12 md:right-0 z-0 w-72 h-72 md:w-96 md:h-96 text-brand-lime pointer-events-none opacity-90">
      <svg class="w-full h-full" fill="currentColor" viewBox="0 0 320 280">
        <polygon points="180,20 320,120 240,240 180,180 80,260 120,140 0,160" />
      </svg>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
      <!-- Coluna de Texto -->
      <div class="w-full md:w-3/5 space-y-6">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-brand-lime leading-tight tracking-tight">
          {{ title }}
        </h2>

        <div class="text-brand-white/95 text-base md:text-lg leading-relaxed space-y-3 font-normal">
          <p>
            Ser um associado da Rede Nexa é fazer parte de uma comunidade de jovens que querem crescer, se conectar e gerar impacto. 
            <strong class="font-bold text-brand-white">Para se tornar associado, é necessário já ter participado de algum programa da JA.</strong>
          </p>
          <p>
            O associado integra os núcleos estaduais, participa de eventos, projetos e experiências práticas, além de poder atuar em equipes de apoio e organização. 
            <strong class="font-bold text-brand-white">Também é um dos principais públicos das oportunidades que chegam por meio do Nexa Brasil, como capacitações, conexões, vivências e iniciativas de desenvolvimento.</strong>
          </p>
        </div>
      </div>

      <!-- Coluna de Botão CTA -->
      <div class="w-full md:w-2/5 flex justify-center md:justify-end items-center">
        <a
          :href="ctaLink"
          class="inline-flex items-center justify-center px-10 py-5 bg-brand-aqua text-brand-white text-lg md:text-xl font-extrabold uppercase rounded-full shadow-lg hover:bg-brand-turquoise hover:scale-105 active:scale-95 transition-all duration-200 tracking-wider text-center"
        >
          {{ ctaText }}
        </a>
      </div>
    </div>
  </section>
</template>

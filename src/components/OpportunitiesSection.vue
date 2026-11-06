<script setup>
defineProps({
  title: {
    type: String,
    default: 'Nossos Projetos & Oportunidades'
  },
  items: {
    type: Array,
    default: () => [
      {
        id: 'banco-de-talentos',
        href: '#banco-de-talentos',
        labelHtml: 'Banco de talentos <span class="font-normal opacity-90">Nexa Brasil</span>',
        isBoldTitle: true
      },
      {
        id: 'inspira-ja',
        href: '#inspira-ja',
        labelHtml: 'Faça o <strong class="font-extrabold text-white">Inspira JA</strong>',
        isBoldTitle: false
      },
      {
        id: 'fotos-pdcn-2026',
        href: '#fotos-pdcn-2026',
        labelHtml: 'Fotos <strong class="font-extrabold text-white">PDCN</strong> 2026',
        isBoldTitle: false
      },
      {
        id: 'atualizacao-associado',
        href: '#atualizacao-associado',
        labelHtml: 'Atualização do <strong class="font-extrabold text-white">associado</strong>',
        isBoldTitle: false
      }
    ]
  }
})
</script>

<template>
  <!-- ========================================== -->
  <!-- 5. SEÇÃO "NOSSOS PROJETOS / OPORTUNIDADES"  -->
  <!-- ========================================== -->
  <section id="projetos" class="bg-brand-lime py-16 md:py-24 px-6 text-brand-navy scroll-mt-20">
    <div class="max-w-3xl mx-auto text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider mb-4">
        <span>Iniciativas & Ações</span>
      </div>

      <!-- Título Centralizado -->
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy mb-10 md:mb-12 tracking-tight">
        Nossos Projetos & <br class="sm:hidden" /><span class="text-brand-navy">Oportunidades</span>
      </h2>

      <!-- Lista de Botões Pill Estilizados -->
      <div class="flex flex-col gap-4 sm:gap-5 items-stretch max-w-xl mx-auto">
        <a
          v-for="item in items"
          :key="item.id"
          class="block w-full py-4 sm:py-5 px-6 sm:px-8 rounded-full bg-brand-aqua hover:bg-brand-turquoise text-white text-base sm:text-lg tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg shadow-md focus:outline-none"
          :href="item.href"
        >
          <span v-html="item.labelHtml"></span>
        </a>
      </div>
    </div>
  </section>
</template>

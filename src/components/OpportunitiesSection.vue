<script setup>
defineProps({
  title: {
    type: String,
    default: 'Clique e acesse as oportunidades'
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
  <!-- 5. SEÇÃO "OPORTUNIDADES"                   -->
  <!-- ========================================== -->
  <section id="oportunidades" class="bg-brand-lime py-16 md:py-24 px-6 text-brand-navy">
    <div class="max-w-3xl mx-auto text-center">
      <!-- Título Centralizado -->
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy mb-10 md:mb-12 tracking-tight">
        Clique e acesse as <br class="sm:hidden" /><span class="text-brand-navy">oportunidades</span>
      </h2>

      <!-- Lista de Botões Pill Estilizados -->
      <div class="flex flex-col gap-4 sm:gap-5 w-full max-w-xl mx-auto">
        <a
          v-for="item in items"
          :key="item.id"
          :href="item.href"
          :class="[
            'group w-full py-4 sm:py-5 px-6 bg-brand-aqua hover:bg-brand-turquoise text-brand-white text-lg sm:text-xl rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-center tracking-normal transform hover:-translate-y-0.5',
            item.isBoldTitle ? 'font-bold' : 'font-medium'
          ]"
          v-html="item.labelHtml"
        />
      </div>
    </div>
  </section>
</template>

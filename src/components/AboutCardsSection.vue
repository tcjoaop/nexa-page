<script setup>
defineProps({
  cards: {
    type: Array,
    default: () => [
      {
        id: 'o-que-fazemos',
        title: 'O que fazemos?',
        image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
        alt: 'Jovem participando de projeto do Nexa com bandeira',
        description:
          'O Nexa desenvolve projetos, eventos e experiências práticas que ajudam jovens a aprender na prática e fortalecer o espírito empreendedor. A rede aproveita oportunidades vindas da JA e utiliza a marca da organização como selo de credibilidade. Além disso, apoia iniciativas da JA e mantém os ex-alunos conectados à missão de transformação.'
      },
      {
        id: 'a-quem-servimos',
        title: 'A quem servimos?',
        image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
        alt: 'Grupo de jovens voluntários e associados do Nexa',
        description:
          'O Nexa serve jovens de 14 a 29 anos, especialmente ex-alunos da JA que desejam continuar se desenvolvendo. É uma rede voltada para jovens inconformados, que querem crescer, aprender e gerar impacto. Também acolhe aqueles que se dispõem a participar ativamente dos núcleos e contribuir com a comunidade.'
      },
      {
        id: 'porque-existimos',
        title: 'Porque existimos?',
        image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
        alt: 'Jovem sorridente com visão de futuro',
        description:
          'O Nexa existe para desenvolver jovens engajados, fortalecendo sua jornada de amadurecimento pessoal e profissional. A rede conecta pessoas, gera oportunidades e oferece ferramentas para que os jovens saiam da zona de conforto e desenvolvam habilidades empreendedoras. Além disso, o Nexa busca fidelizar ex-alunos da JA. Mantendo viva a conexão entre rede e organização.'
      }
    ]
  }
})
</script>

<template>
  <!-- ========================================== -->
  <!-- 3. SEÇÃO DE CARDS (O que fazemos, etc.)    -->
  <!-- ========================================== -->
  <section class="relative bg-brand-aqua py-12 md:py-20 px-6 -mt-1 z-10">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 items-stretch">
        <article
          v-for="card in cards"
          :key="card.id"
          class="bg-brand-lime rounded-[1.25rem] p-6 sm:p-7 flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- Imagem do Card -->
          <div class="w-full h-44 sm:h-48 overflow-hidden rounded-xl bg-brand-navy/10 mb-6 flex-shrink-0">
            <img
              :alt="card.alt"
              class="w-full h-full object-cover rounded-xl"
              height="180"
              :src="card.image"
              width="400"
            />
            <img
              :alt="card.title"
              class="hidden w-full h-36 object-cover rounded-xl"
              height="180"
              :src="card.image"
              width="400"
            />
          </div>

          <!-- Título -->
          <h2 class="text-2xl font-black text-brand-navy mb-4 tracking-tight">
            {{ card.title }}
          </h2>

          <!-- Parágrafo descritivo -->
          <p class="text-brand-navy text-sm md:text-[0.935rem] leading-relaxed font-semibold">
            {{ card.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

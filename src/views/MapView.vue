<script setup>
import { ref, computed } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { BRAZIL_STATES } from '@/statesData.js'

const states = ref(BRAZIL_STATES)

// Estado padrão em destaque: São Paulo
const selectedState = ref(states.value.find(s => s.uf === 'SP') || states.value[0])

const activeCount = computed(() => states.value.filter(s => s.status === 'ATIVO').length)
const expandingCount = computed(() => states.value.filter(s => s.status === 'EXPANSAO').length)
const inactiveCount = computed(() => states.value.filter(s => s.status === 'INATIVO').length)

function hoverState(state) {
  selectedState.value = state
}

function selectState(state) {
  selectedState.value = state
}

function statusLabel(status) {
  if (status === 'ATIVO') return 'Núcleo Ativo'
  if (status === 'EXPANSAO') return 'Em Expansão'
  return 'Sem Núcleo'
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-brand-white text-brand-navy antialiased">
    <!-- Header Oficial da Marca Nexa -->
    <TheHeader />

    <!-- Conteúdo Principal -->
    <main class="flex-1 py-10 md:py-14 px-4 sm:px-6">
      <div class="max-w-5xl mx-auto flex flex-col items-center">
        
        <!-- Bloco de Título e Apresentação (Tipografia Montserrat oficial da marca) -->
        <section class="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lime/25 border border-brand-lime text-brand-navy text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <span class="w-2 h-2 rounded-full bg-brand-navy animate-pulse"></span>
            <span>Rede Nacional de Líderes</span>
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy tracking-tight leading-tight mb-3">
            Núcleos Nexa pelo <span class="text-brand-aqua">Brasil</span>
          </h1>
          <p class="text-base sm:text-lg font-medium text-brand-navy/75 leading-relaxed">
            Conectando, desenvolvendo e inspirando jovens líderes e empreendedores em todo o país.
          </p>
        </section>

        <!-- Card Principal do Mapa Interativo com Tokens Oficiais da Marca -->
        <section class="w-full bg-brand-white rounded-2xl border border-brand-navy/10 shadow-xl overflow-hidden flex flex-col">
          
          <!-- Barra Superior do Card: Status & Estado sob Foco -->
          <div class="px-5 py-4 md:px-8 md:py-5 border-b border-brand-navy/10 bg-gray-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            
            <!-- Indicadores em Pílulas -->
            <div class="flex items-center gap-4 sm:gap-6 flex-wrap text-xs md:text-sm">
              <div class="flex items-center gap-2">
                <span class="w-3.5 h-3.5 rounded-full bg-brand-aqua shadow-sm"></span>
                <span class="text-brand-navy/80"><strong class="text-brand-navy font-bold">{{ activeCount }}</strong> Ativos</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-3.5 h-3.5 rounded-full bg-brand-lime shadow-sm"></span>
                <span class="text-brand-navy/80"><strong class="text-brand-navy font-bold">{{ expandingCount }}</strong> Em Expansão</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-3.5 h-3.5 rounded-full bg-gray-200 border border-gray-300"></span>
                <span class="text-brand-navy/80"><strong class="text-brand-navy font-bold">{{ inactiveCount }}</strong> Sem Núcleo</span>
              </div>
            </div>

            <!-- Foco no Estado Selecionado / Hover -->
            <div class="flex items-center gap-3 bg-brand-white px-4 py-2 rounded-xl border border-brand-navy/10 shadow-sm self-stretch sm:self-auto">
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center font-black text-sm text-brand-navy shadow-inner shrink-0"
                :class="{
                  'bg-brand-aqua text-white': selectedState.status === 'ATIVO',
                  'bg-brand-lime text-brand-navy': selectedState.status === 'EXPANSAO',
                  'bg-gray-200 text-brand-navy/60': selectedState.status === 'INATIVO'
                }"
              >
                {{ selectedState.uf }}
              </div>
              <div class="flex flex-col leading-tight">
                <span class="text-sm font-bold text-brand-navy">{{ selectedState.name }}</span>
                <span class="text-xs text-brand-navy/70">
                  Região {{ selectedState.region }} • {{ statusLabel(selectedState.status) }}
                  <template v-if="selectedState.members > 0">
                    • <strong>{{ selectedState.members }}</strong> membros
                  </template>
                </span>
              </div>
            </div>
          </div>

          <!-- Área do Mapa Vetorial Proporcional Oficial do IBGE -->
          <div class="relative w-full p-4 sm:p-8 flex items-center justify-center bg-gray-50/30 select-none">
            <svg
              viewBox="0 0 800 820"
              class="w-full max-w-[620px] h-auto filter drop-shadow-md transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g class="states-layer">
                <path
                  v-for="state in states"
                  :key="state.uf"
                  :d="state.d"
                  :class="[
                    'state-polygon cursor-pointer transition-all duration-200',
                    state.status === 'ATIVO' ? 'fill-brand-aqua hover:fill-brand-turquoise' : '',
                    state.status === 'EXPANSAO' ? 'fill-brand-lime hover:fill-[#a8be44]' : '',
                    state.status === 'INATIVO' ? 'fill-gray-200 hover:fill-gray-300' : '',
                    state.uf === selectedState.uf ? 'stroke-brand-navy stroke-[2.5] filter drop-shadow-lg' : 'stroke-white stroke-[1.2]'
                  ]"
                  @mouseenter="hoverState(state)"
                  @click="selectState(state)"
                >
                  <title>{{ state.name }} ({{ state.uf }}) — {{ statusLabel(state.status) }}</title>
                </path>
              </g>
            </svg>

            <!-- Legenda Inferior Sutil com diretrizes da marca -->
            <div class="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-brand-navy/10 shadow-md flex flex-col gap-1.5 text-[11px] font-semibold text-brand-navy">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded bg-brand-aqua"></span>
                <span>Núcleo Ativo</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded bg-brand-lime"></span>
                <span>Em Expansão</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded bg-gray-200 border border-gray-300"></span>
                <span>Aberto para Mobilização</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>

    <!-- Rodapé Oficial da Marca Nexa -->
    <TheFooter />
  </div>
</template>

<style scoped>
.state-polygon {
  stroke-linejoin: round;
  stroke-linecap: round;
}

.state-polygon:hover {
  filter: brightness(1.05);
}
</style>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { BRAZIL_STATES } from '@/statesData.js'
import { STATES_CONFIG, DEFAULT_STATE_CONFIG } from '@/statesBioConfig.js'

const route = useRoute()
const ufParam = computed(() => (route.params.uf || '').toString().toUpperCase())

// Dados geográficos e de status do estado
const stateInfo = computed(() => {
  return BRAZIL_STATES.find(s => s.uf === ufParam.value) || {
    uf: ufParam.value,
    name: ufParam.value,
    region: 'Brasil',
    status: 'INATIVO',
    members: 0
  }
})

// Configuração de bio e links (faz merge dos dados específicos com os padrões)
const stateConfig = computed(() => {
  const custom = STATES_CONFIG[ufParam.value] || {}
  return {
    ...DEFAULT_STATE_CONFIG,
    ...custom,
    tagline: custom.tagline || `Núcleo de Jovens Empreendedores de ${stateInfo.value.name}`,
    links: custom.links && custom.links.length > 0 ? custom.links : DEFAULT_STATE_CONFIG.links
  }
})

function statusLabel(status) {
  if (status === 'ATIVO') return 'Núcleo Ativo'
  if (status === 'EXPANSAO') return 'Em Expansão'
  return 'Em Mobilização'
}
</script>

<template>
  <div class="min-h-screen bg-brand-white text-brand-navy antialiased flex flex-col items-center justify-between selection:bg-brand-lime selection:text-brand-navy">
    
    <!-- Barra Superior Sutil com Atalho para Home Nacional -->
    <header class="w-full max-w-md mx-auto pt-6 px-4 flex items-center justify-between">
      <router-link
        to="/"
        class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy/60 hover:text-brand-aqua transition-colors py-1.5 px-3 rounded-full bg-gray-100/70 hover:bg-gray-100"
        title="Voltar para o Portal Nacional"
      >
        <span>&larr;</span>
        <span>Portal Nexa Brasil</span>
      </router-link>

      <span
        class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border shadow-2xs"
        :class="{
          'bg-brand-aqua/10 border-brand-aqua/30 text-brand-aqua': stateInfo.status === 'ATIVO',
          'bg-brand-lime/20 border-brand-lime/50 text-brand-navy': stateInfo.status === 'EXPANSAO',
          'bg-gray-100 border-gray-200 text-brand-navy/50': stateInfo.status === 'INATIVO'
        }"
      >
        {{ statusLabel(stateInfo.status) }}
      </span>
    </header>

    <!-- Conteúdo Central: Perfil / Bio do Estado -->
    <main class="w-full max-w-md mx-auto px-4 py-8 flex flex-col items-center">
      
      <!-- Avatar / Logo do Estado -->
      <div class="relative mb-5 flex flex-col items-center">
        <!-- Moldura circular com gradiente oficial da marca -->
        <div class="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-brand-aqua to-brand-lime shadow-lg flex items-center justify-center">
          <div class="w-full h-full rounded-full bg-brand-white flex flex-col items-center justify-center overflow-hidden">
            <span class="text-xs font-black tracking-widest uppercase text-brand-aqua">nexa</span>
            <span class="text-xl font-black text-brand-navy leading-none">{{ stateInfo.uf }}</span>
          </div>
        </div>

        <!-- Mini badge de região -->
        <div class="absolute -bottom-2 bg-brand-navy text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
          {{ stateInfo.region }}
        </div>
      </div>

      <!-- Título & Tagline Oficial do Estado -->
      <div class="text-center mb-6 max-w-xs">
        <h1 class="text-2xl font-black text-brand-navy tracking-tight leading-tight">
          Nexa {{ stateInfo.name }}
        </h1>
        <p class="text-xs font-bold text-brand-aqua uppercase tracking-wider mt-0.5">
          Junior Achievement Alumni
        </p>
        <p class="text-sm font-medium text-brand-navy/75 mt-2 leading-snug">
          {{ stateConfig.bioText }}
        </p>
      </div>

      <!-- Redes Sociais Rápidas do Estado (Instagram, WhatsApp, LinkedIn, Email) -->
      <div class="flex items-center gap-3 mb-8">
        <!-- Instagram -->
        <a
          v-if="stateConfig.instagram"
          :href="stateConfig.instagram"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 rounded-full bg-gray-100 hover:bg-brand-aqua text-brand-navy hover:text-white flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-xs"
          title="Instagram"
          aria-label="Instagram"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        <!-- WhatsApp -->
        <a
          v-if="stateConfig.whatsapp"
          :href="stateConfig.whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 rounded-full bg-gray-100 hover:bg-brand-aqua text-brand-navy hover:text-white flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-xs"
          title="WhatsApp"
          aria-label="WhatsApp"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347m-4.004-2.884c-.298-.149-1.761-.868-2.034-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>

        <!-- LinkedIn -->
        <a
          v-if="stateConfig.linkedin"
          :href="stateConfig.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 rounded-full bg-gray-100 hover:bg-brand-aqua text-brand-navy hover:text-white flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-xs"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        <!-- E-mail -->
        <a
          v-if="stateConfig.email"
          :href="`mailto:${stateConfig.email}`"
          class="w-10 h-10 rounded-full bg-gray-100 hover:bg-brand-aqua text-brand-navy hover:text-white flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-xs"
          title="E-mail"
          aria-label="E-mail"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
          </svg>
        </a>
      </div>

      <!-- LISTA DE BOTÕES / LINKS DO LINKTREE -->
      <div class="w-full flex flex-col gap-3.5">
        <a
          v-for="(link, index) in stateConfig.links"
          :key="index"
          :href="link.url"
          :target="link.url.startsWith('http') ? '_blank' : '_self'"
          rel="noopener noreferrer"
          class="group relative w-full p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between shadow-xs hover:shadow-md transform hover:-translate-y-0.5"
          :class="[
            link.featured
              ? 'bg-gradient-to-r from-brand-aqua to-brand-turquoise text-white border-transparent'
              : 'bg-white hover:bg-gray-50/80 text-brand-navy border-brand-navy/10 hover:border-brand-aqua/40'
          ]"
        >
          <div class="flex items-center gap-3.5 min-w-0 pr-2">
            <!-- Ícone do Link -->
            <div
              class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-2xs"
              :class="link.featured ? 'bg-white/20 text-white' : 'bg-gray-100 group-hover:bg-brand-aqua/10 text-brand-aqua'"
            >
              <!-- Ícone Estrela / Destaque -->
              <svg v-if="link.icon === 'star'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <!-- Ícone WhatsApp -->
              <svg v-else-if="link.icon === 'whatsapp'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347m-4.004-2.884c-.298-.149-1.761-.868-2.034-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <!-- Ícone Documento / Ebook -->
              <svg v-else-if="link.icon === 'doc'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
              <!-- Ícone Evento -->
              <svg v-else-if="link.icon === 'event'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
              </svg>
              <!-- Ícone Genérico / Link -->
              <svg v-else class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
              </svg>
            </div>

            <!-- Título & Subtítulo -->
            <div class="flex flex-col text-left">
              <span class="text-sm font-bold tracking-tight leading-snug">
                {{ link.title }}
              </span>
              <span
                v-if="link.subtitle"
                class="text-xs leading-tight mt-0.5"
                :class="link.featured ? 'text-white/80' : 'text-brand-navy/60'"
              >
                {{ link.subtitle }}
              </span>
            </div>
          </div>

          <!-- Badge ou Seta -->
          <div class="shrink-0 flex items-center gap-1.5 pl-2">
            <span
              v-if="link.badge"
              class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
              :class="link.featured ? 'bg-brand-lime text-brand-navy' : 'bg-brand-aqua/10 text-brand-aqua'"
            >
              {{ link.badge }}
            </span>
            <svg
              class="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              :class="link.featured ? 'text-white' : 'text-brand-navy/40 group-hover:text-brand-aqua'"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>
      </div>

    </main>

    <!-- Rodapé Minimalista do Linktree -->
    <footer class="w-full max-w-md mx-auto py-8 px-4 flex flex-col items-center justify-center gap-2 text-center border-t border-gray-100">
      <router-link to="/" class="flex items-center gap-2 hover:opacity-90 transition-opacity">
        <img
          src="/logos/logo-nexa-horizontal.png"
          alt="Nexa Brasil"
          class="h-6 w-auto object-contain opacity-80"
        />
      </router-link>
      <p class="text-[11px] text-brand-navy/60">
        Junior Achievement Alumni Brasil • Rede Nacional
      </p>
    </footer>

  </div>
</template>

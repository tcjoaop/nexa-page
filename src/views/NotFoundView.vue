<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

const router = useRouter()
const countdown = ref(5)
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    if (countdown.value > 1) {
      countdown.value--
    } else {
      clearInterval(timer)
      router.push('/')
    }
  }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

function goHome() {
  if (timer) clearInterval(timer)
  router.push('/')
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-brand-white text-brand-navy antialiased">
    <TheHeader />

    <main class="flex-1 flex items-center justify-center py-16 px-6">
      <div class="max-w-md w-full mx-auto text-center flex flex-col items-center">
        
        <!-- Símbolo / Ilustração do Erro 404 com as cores da marca -->
        <div class="relative mb-6">
          <div class="w-28 h-28 rounded-3xl bg-gradient-to-tr from-brand-aqua/20 via-brand-lime/20 to-brand-aqua/10 flex items-center justify-center border border-brand-aqua/30 shadow-inner">
            <span class="text-4xl sm:text-5xl font-black text-brand-navy tracking-tighter">404</span>
          </div>
          <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-lime flex items-center justify-center text-brand-navy font-bold text-xs shadow-sm">
            !
          </div>
        </div>

        <!-- Título e Mensagem de UX Writing Oficial Nexa (Convidativa, Inquieta e Amigável) -->
        <h1 class="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight leading-tight mb-3">
          Ops! Página não encontrada
        </h1>

        <p class="text-sm sm:text-base font-medium text-brand-navy/75 leading-relaxed mb-6">
          O link que você tentou acessar não existe ou mudou de lugar. Mas não se preocupe, estamos te levando de volta para a página inicial!
        </p>

        <!-- Indicador de Redirecionamento Automático -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-xs font-semibold text-brand-navy/70 mb-8 border border-gray-200">
          <span class="w-2 h-2 rounded-full bg-brand-aqua animate-ping"></span>
          <span>Redirecionando em <strong class="text-brand-navy font-bold">{{ countdown }}s</strong>...</span>
        </div>

        <!-- Botão Manual para Voltar Imediatamente -->
        <button
          @click="goHome"
          class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-aqua to-brand-turquoise text-white font-bold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Voltar para a Página Inicial Agora &rarr;
        </button>

      </div>
    </main>

    <TheFooter />
  </div>
</template>

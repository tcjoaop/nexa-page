<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <!-- ========================================== -->
  <!-- HEADER INSTITUCIONAL COMPLETO              -->
  <!-- ========================================== -->
  <header class="w-full bg-brand-white/95 backdrop-blur-md sticky top-0 z-50 shadow-xs border-b border-gray-100 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
      
      <!-- 1. Logo Nexa Brasil Oficial -->
      <router-link
        to="/"
        class="flex items-center gap-3 shrink-0 group transition-opacity hover:opacity-95"
        aria-label="Página Inicial - Nexa Brasil"
      >
        <img
          src="/logos/logo-nexa-horizontal.png"
          alt="Logotipo Nexa Brasil"
          class="h-9 sm:h-11 w-auto object-contain"
        />
      </router-link>

      <!-- 2. Menu de Navegação Desktop -->
      <nav class="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-bold text-brand-navy">
        <router-link
          to="/"
          class="transition-colors hover:text-brand-aqua py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-aqua hover:after:w-full after:transition-all"
        >
          Início
        </router-link>

        <router-link
          to="/#projetos"
          class="transition-colors hover:text-brand-aqua py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-aqua hover:after:w-full after:transition-all"
        >
          Nossos Projetos
        </router-link>

        <router-link
          to="/#pessoas"
          class="transition-colors hover:text-brand-aqua py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-aqua hover:after:w-full after:transition-all"
        >
          Nossas Pessoas
        </router-link>

        <router-link
          to="/#historia"
          class="transition-colors hover:text-brand-aqua py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-aqua hover:after:w-full after:transition-all"
        >
          Nossa História
        </router-link>
      </nav>

      <!-- 3. Botão Call to Action (Parcerias) Desktop -->
      <div class="hidden md:flex items-center gap-4">
        <router-link
          to="/parcerias"
          class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-aqua to-brand-turquoise text-white text-sm font-bold shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Seja um Parceiro
        </router-link>
      </div>

      <!-- 4. Botão Menu Mobile (Hambúrguer) -->
      <button
        type="button"
        @click="toggleMobileMenu"
        class="md:hidden w-10 h-10 rounded-xl bg-gray-100 text-brand-navy flex items-center justify-center hover:bg-gray-200 transition-colors focus:outline-none"
        aria-label="Abrir menu de navegação"
      >
        <svg v-if="!isMobileMenuOpen" class="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

    </div>

    <!-- 5. Drawer / Dropdown Mobile -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-brand-white border-b border-gray-100 px-6 py-6 flex flex-col gap-4 shadow-lg"
      >
        <router-link
          to="/"
          @click="closeMobileMenu"
          class="text-base font-bold text-brand-navy hover:text-brand-aqua py-2 transition-colors border-b border-gray-100/60"
        >
          Início
        </router-link>

        <router-link
          to="/#projetos"
          @click="closeMobileMenu"
          class="text-base font-bold text-brand-navy hover:text-brand-aqua py-2 transition-colors border-b border-gray-100/60"
        >
          Nossos Projetos
        </router-link>

        <router-link
          to="/#pessoas"
          @click="closeMobileMenu"
          class="text-base font-bold text-brand-navy hover:text-brand-aqua py-2 transition-colors border-b border-gray-100/60"
        >
          Nossas Pessoas
        </router-link>

        <router-link
          to="/#historia"
          @click="closeMobileMenu"
          class="text-base font-bold text-brand-navy hover:text-brand-aqua py-2 transition-colors border-b border-gray-100/60"
        >
          Nossa História
        </router-link>

        <div class="pt-2">
          <router-link
            to="/parcerias"
            @click="closeMobileMenu"
            class="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-brand-aqua to-brand-turquoise text-white text-sm font-bold shadow-md"
          >
            Seja um Parceiro
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

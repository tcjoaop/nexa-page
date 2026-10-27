<script setup>
// Header da página Nexa Brasil
</script>

<template>
  <!-- ========================================== -->
  <!-- 1. HEADER                                  -->
  <!-- ========================================== -->
  <header class="w-full bg-brand-white py-5 px-6 sticky top-0 z-50 shadow-sm flex items-center justify-center">
    <div class="max-w-7xl mx-auto flex items-center justify-center">
      <!-- Logo Nexa Brasil -->
      <a href="#" class="flex items-center gap-3 group transition-opacity hover:opacity-95" aria-label="Ir para o topo - Nexa Brasil">
        <!-- Stylized Bird Vector Icon -->
        <svg
          class="w-8 h-8 md:w-10 md:h-10 text-brand-aqua"
          fill="none"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 14L20 4L34 14L22 18L30 36L18 24L10 32L14 18L6 14Z"
            fill="url(#logo_grad)"
          />
          <defs>
            <linearGradient
              id="logo_grad"
              x1="6"
              y1="4"
              x2="34"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00C0CA" />
              <stop offset="1" stop-color="#BBD153" />
            </linearGradient>
          </defs>
        </svg>

        <div class="flex flex-col leading-tight">
          <span class="text-xl md:text-2xl font-black tracking-tight text-brand-navy">nexa</span>
          <span class="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-aqua">Brasil</span>
        </div>
      </a>

      <!-- Placeholder Image Tag as explicitly requested in prompt specifications -->
      <img
        alt="Nexa Brasil"
        class="hidden h-8 md:h-10 w-auto"
        height="40"
        src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
        width="160"
      />
    </div>
  </header>
</template>

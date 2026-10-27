<script setup>
defineProps({
  socialLinks: {
    type: Array,
    default: () => [
      {
        name: 'Instagram Nexa Brasil',
        href: 'https://instagram.com',
        type: 'instagram'
      },
      {
        name: 'TikTok Nexa Brasil',
        href: 'https://tiktok.com',
        type: 'tiktok'
      },
      {
        name: 'LinkedIn Nexa Brasil',
        href: 'https://linkedin.com',
        type: 'linkedin'
      },
      {
        name: 'WhatsApp Nexa Brasil',
        href: 'https://whatsapp.com',
        type: 'whatsapp'
      },
      {
        name: 'Portal Nexa',
        href: '#portal',
        type: 'portal'
      }
    ]
  }
})
</script>

<template>
  <!-- ========================================== -->
  <!-- 6. FOOTER / REDES SOCIAIS                  -->
  <!-- ========================================== -->
  <footer class="bg-brand-white py-10 md:py-14 px-6 border-t border-gray-100">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Texto à esquerda -->
      <div class="text-center md:text-left">
        <h3 class="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight leading-tight">
          Acompanhe <br class="hidden sm:inline" />o Nexa
        </h3>
      </div>

      <!-- Ícones Redes Sociais Circulares -->
      <nav aria-label="Redes Sociais do Nexa" class="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
        <!-- Instagram -->
        <a
          aria-label="Instagram Nexa Brasil"
          class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-navy hover:bg-brand-aqua text-brand-white flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-sm"
          href="https://instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
        </a>

        <!-- TikTok -->
        <a
          aria-label="TikTok Nexa Brasil"
          class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-navy hover:bg-brand-aqua text-brand-white flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-sm"
          href="https://tiktok.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
            />
          </svg>
        </a>

        <!-- LinkedIn -->
        <a
          aria-label="LinkedIn Nexa Brasil"
          class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-navy hover:bg-brand-aqua text-brand-white flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-sm"
          href="https://linkedin.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />
          </svg>
        </a>

        <!-- WhatsApp -->
        <a
          aria-label="WhatsApp Nexa Brasil"
          class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-navy hover:bg-brand-aqua text-brand-white flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-sm"
          href="https://whatsapp.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347m-4.004-2.884c-.298-.149-1.761-.868-2.034-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
            />
          </svg>
        </a>

        <!-- Portal / Link / Cursor Pointer -->
        <a
          aria-label="Portal Nexa"
          class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-navy hover:bg-brand-aqua text-brand-white flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-sm"
          href="#portal"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"
            />
          </svg>
        </a>
      </nav>
    </div>
  </footer>
</template>

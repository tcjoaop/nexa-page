<script setup>
import { ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

const formSubmitted = ref(false)
const form = ref({
  nome: '',
  organizacao: '',
  email: '',
  telefone: '',
  tipo: 'Empresa Privada',
  mensagem: ''
})

function submitForm() {
  formSubmitted.value = true
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-brand-white text-brand-navy antialiased">
    <TheHeader />

    <main class="flex-1">
      
      <!-- HERO DA PÁGINA DE PARCERIAS -->
      <section class="relative bg-gradient-to-b from-brand-aqua via-brand-turquoise to-brand-navy text-white py-16 md:py-24 px-6 overflow-hidden">
        <!-- Detalhe Geométrico Oficial Nexa -->
        <div class="absolute -top-12 -right-12 w-64 h-64 md:w-96 md:h-96 text-brand-white/10 pointer-events-none">
          <svg class="w-full h-full" fill="currentColor" viewBox="0 0 300 240">
            <polygon points="0,0 280,30 210,130 140,80 80,180 0,220" />
          </svg>
        </div>

        <div class="max-w-5xl mx-auto relative z-10 text-center">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-brand-lime mb-5">
            <span class="w-2 h-2 rounded-full bg-brand-lime"></span>
            <span>Alianças Estratégicas</span>
          </div>

          <h1 class="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
            Construa o Futuro da <br class="hidden sm:inline" />
            <span class="text-brand-lime">Juventude Brasileira</span> com o Nexa
          </h1>

          <p class="text-base sm:text-lg md:text-xl font-medium text-white/90 max-w-3xl mx-auto leading-relaxed">
            Conecte sua empresa, instituição ou projeto social a milhares de jovens inquietos, talentosos e preparados para transformar a realidade através do empreendedorismo.
          </p>
        </div>
      </section>

      <!-- PILARES DE IMPACTO & NÚMEROS -->
      <section class="py-16 md:py-20 px-6 bg-gray-50/70 border-b border-gray-100">
        <div class="max-w-6xl mx-auto">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy tracking-tight mb-3">
              Por que ser um parceiro do Nexa?
            </h2>
            <p class="text-sm sm:text-base text-brand-navy/70 font-medium">
              Apoiamos empresas e instituições a gerarem impacto ESG real na educação e empregabilidade jovem.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div class="w-12 h-12 rounded-xl bg-brand-aqua/15 text-brand-aqua flex items-center justify-center font-black text-xl mb-6">
                  01
                </div>
                <h3 class="text-xl font-black text-brand-navy mb-3">Acesso a Jovens Talentos</h3>
                <p class="text-sm text-brand-navy/75 leading-relaxed">
                  Conexão direta com banco de talentos qualificados de ex-alunos da Junior Achievement com perfil empreendedor, comunicativo e proativo.
                </p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div class="w-12 h-12 rounded-xl bg-brand-lime/25 text-brand-navy flex items-center justify-center font-black text-xl mb-6">
                  02
                </div>
                <h3 class="text-xl font-black text-brand-navy mb-3">Capilaridade Nacional</h3>
                <p class="text-sm text-brand-navy/75 leading-relaxed">
                  Presença consolidada em estados de todas as 5 regiões do Brasil, possibilitando iniciativas presenciais e programas virtuais de abrangência nacional.
                </p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div class="w-12 h-12 rounded-xl bg-brand-navy/10 text-brand-navy flex items-center justify-center font-black text-xl mb-6">
                  03
                </div>
                <h3 class="text-xl font-black text-brand-navy mb-3">Selo de Credibilidade JA</h3>
                <p class="text-sm text-brand-navy/75 leading-relaxed">
                  O Nexa é o núcleo oficial de alumni da Junior Achievement Brasil, uma das maiores organizações de educação prática do planeta (indicada ao Nobel da Paz).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FORMATOS DE PARCERIA -->
      <section class="py-16 md:py-24 px-6 bg-brand-white">
        <div class="max-w-6xl mx-auto">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <h2 class="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mb-3">
              Formatos de Colaboração
            </h2>
            <p class="text-base text-brand-navy/70 font-medium">
              Desenhamos propostas conjuntas alinhadas às metas institucionais e de responsabilidade social da sua organização.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="p-8 rounded-3xl bg-brand-navy text-white flex flex-col justify-between relative overflow-hidden">
              <div class="relative z-10">
                <span class="text-xs font-bold text-brand-lime uppercase tracking-wider">Corporativo & Inovação</span>
                <h3 class="text-2xl font-black text-white mt-1 mb-4">Desafios & Hackathons</h3>
                <p class="text-sm text-white/80 leading-relaxed mb-6">
                  Crie maratonas de resolução de problemas reais da sua empresa envolvendo times multidisciplinares de associados Nexa em todo o país.
                </p>
                <ul class="text-xs text-white/90 space-y-2">
                  <li class="flex items-center gap-2">✓ Visibilidade de marca empregadora</li>
                  <li class="flex items-center gap-2">✓ Ideias disruptivas e soluções frescas</li>
                  <li class="flex items-center gap-2">✓ Mentoria com lideranças seniores</li>
                </ul>
              </div>
            </div>

            <div class="p-8 rounded-3xl bg-gradient-to-br from-brand-aqua to-brand-turquoise text-white flex flex-col justify-between relative overflow-hidden">
              <div class="relative z-10">
                <span class="text-xs font-bold text-brand-navy uppercase tracking-wider">Capacitação & Bolsas</span>
                <h3 class="text-2xl font-black text-white mt-1 mb-4">Programas & Eventos</h3>
                <p class="text-sm text-white/90 leading-relaxed mb-6">
                  Patrocine oficinas, formações e eventos imersivos de liderança jovem como o Encontro Nacional e os encontros regionais.
                </p>
                <ul class="text-xs text-white/90 space-y-2">
                  <li class="flex items-center gap-2">✓ Fortalecimento dos pilares ESG da sua empresa</li>
                  <li class="flex items-center gap-2">✓ Participação direta em palestras e bancas</li>
                  <li class="flex items-center gap-2">✓ Impacto social comprovado com métricas claras</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FORMULÁRIO DE CONTATO / PROPOSTA DE PARCERIA -->
      <section class="py-16 md:py-24 px-6 bg-gray-50 border-t border-gray-100" id="contato-parceria">
        <div class="max-w-2xl mx-auto">
          <div class="text-center mb-10">
            <h2 class="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mb-3">
              Vamos conversar?
            </h2>
            <p class="text-sm sm:text-base text-brand-navy/70">
              Preencha o formulário abaixo que nossa diretoria de parcerias entrará em contato rapidamente.
            </p>
          </div>

          <div class="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-md">
            <div v-if="formSubmitted" class="py-10 text-center flex flex-col items-center">
              <div class="w-16 h-16 rounded-full bg-brand-lime/30 text-brand-navy flex items-center justify-center font-black text-2xl mb-4">
                ✓
              </div>
              <h3 class="text-2xl font-black text-brand-navy mb-2">Mensagem Enviada!</h3>
              <p class="text-sm text-brand-navy/70 max-w-sm mb-6">
                Obrigado pelo interesse em somar com o Nexa Brasil. Nossa equipe entrará em contato nos próximos dias!
              </p>
              <button
                @click="formSubmitted = false"
                class="px-6 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-aqua transition-colors"
              >
                Enviar outra mensagem
              </button>
            </div>

            <form v-else @submit.prevent="submitForm" class="space-y-5">
              <div>
                <label class="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                  Seu Nome Completo
                </label>
                <input
                  v-model="form.nome"
                  type="text"
                  required
                  placeholder="Ex: Maria Silva"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-aqua focus:ring-2 focus:ring-brand-aqua/20 text-sm text-brand-navy"
                />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                    Empresa ou Organização
                  </label>
                  <input
                    v-model="form.organizacao"
                    type="text"
                    required
                    placeholder="Ex: Startup X / Fundação Y"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-aqua focus:ring-2 focus:ring-brand-aqua/20 text-sm text-brand-navy"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                    Tipo de Instituição
                  </label>
                  <select
                    v-model="form.tipo"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-aqua focus:ring-2 focus:ring-brand-aqua/20 text-sm text-brand-navy bg-white"
                  >
                    <option>Empresa Privada</option>
                    <option>Startup / Hub de Inovação</option>
                    <option>ONG / Terceiro Setor</option>
                    <option>Instituição de Ensino</option>
                    <option>Órgão Governamental</option>
                    <option>Outro</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                    E-mail Corporativo
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="voce@empresa.com.br"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-aqua focus:ring-2 focus:ring-brand-aqua/20 text-sm text-brand-navy"
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                    WhatsApp ou Telefone
                  </label>
                  <input
                    v-model="form.telefone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-aqua focus:ring-2 focus:ring-brand-aqua/20 text-sm text-brand-navy"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">
                  Como você imagina essa parceria?
                </label>
                <textarea
                  v-model="form.mensagem"
                  rows="4"
                  required
                  placeholder="Conte um pouco sobre sua ideia, proposta ou desafio..."
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-aqua focus:ring-2 focus:ring-brand-aqua/20 text-sm text-brand-navy resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full py-4 rounded-xl bg-gradient-to-r from-brand-aqua to-brand-turquoise text-white font-bold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Enviar Proposta de Parceria &rarr;
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>

    <TheFooter />
  </div>
</template>

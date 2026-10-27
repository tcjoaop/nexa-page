<script setup>
import TheHeader from '@/components/TheHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutCardsSection from '@/components/AboutCardsSection.vue'
import MembershipSection from '@/components/MembershipSection.vue'
import OpportunitiesSection from '@/components/OpportunitiesSection.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-1">
      <HeroSection />
      <AboutCardsSection />
      <MembershipSection />
      <OpportunitiesSection />
    </main>
    <TheFooter />
  </div>
</template>

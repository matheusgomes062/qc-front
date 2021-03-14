<template>
  <div id="app" class="container">
    <header>
      <div>
        <span id="logo">Qualicorp</span>
      </div>
    </header>

    <div class="content">
      <FormWizard />
    </div>
  </div>
</template>

<script>
import FormWizard from '@/components/FormWizard.vue';

export default {
  name: 'app',
  components: {
    FormWizard
  }
};
</script>

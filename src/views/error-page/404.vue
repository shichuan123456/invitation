<template>
  <error-content code="404" :src="src" />
</template>

<script>
import error404 from '@/assets/images/error-404.svg';
import errorContent from './ErrorContent.vue';
export default {
  name: 'error_404',
  components: {
    errorContent,
  },
  data() {
    return {
      src: error404,
    };
  },
};
</script>

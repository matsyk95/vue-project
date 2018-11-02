<template>
  <div id="app">
    <app-films></app-films>
  </div>
</template>

<script>
import Film from './pages/Films'
export default {
  data () {
    return {
    }
  },
  components: {
      'app-films': Film,
    },
}
</script>

<style>
</style>

<!--
<script>
  import HelloWorld from '@/components/HelloWorld'
  export default {
    data() {
      return {
        modal: {
          headerBg: 'dark',
          headerText: 'light',
        },
      };
    },
    name: 'app',
    components: {
      'HelloWorld': HelloWorld,
    }
  }
</script>
-->

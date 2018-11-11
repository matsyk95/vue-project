<template>
  <div id="app">
       <app-films></app-films>
    <div class="ml-auto">
        <div calss="logowanie">Logowanie</div>
<!--    </div>
     <div id="loginModal" centered size="lg" hide-footer title="Zaloguj się">
        <login-form></login-form>-->
      </div>
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
    'app-films': Film
    //     'login-form': LoginForm
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    userLoggedIn () {
      return this.$store.getters.user.loggedIn
    }
  }
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

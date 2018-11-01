<template>
  <div>
  <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">CINEMA</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/films">Filmy</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <b-dropdown-item v-if="!userLoggedIn" v-b-modal.loginModal>Logowanie</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <b-modal :header-bg-variant="modal.headerBg" :header-text-variant="modal.headerText"
        id="loginModal" centered size="lg" hide-footer title="Zaloguj się">
        <login-form></login-form>
      </b-modal>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import LoginForm from '@/components/LoginForm';
  export default {
    name: 'app',
    data() {
      return {
        modal: {
          headerBg: 'dark',
          headerText: 'light',
        },
      };
    },
  /*  created() {
      this.$store.dispatch('amILoggedIn');
    },*/
    computed: {
      user() {
        return this.$store.getters.user;
      },
      userType() {
        return this.$store.getters.user.accountType;
      },
      userLoggedIn() {
        return this.$store.getters.user.loggedIn;
      },
    },
 /*   methods: {
      logOut() {
        this.$store.dispatch('logOut');
      },
    },*/
    components: {
      'login-form': LoginForm,
    },
  };
</script>
<!--
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

-->

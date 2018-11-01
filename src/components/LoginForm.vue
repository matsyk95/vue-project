<template>
  <div>
    <b-form ref="form" @submit="onSubmit">

      <b-alert :show="dismissCountDown"
               dismissible
               variant="danger"
               @dismissed="dismissCountdown=0"
               @dismiss-count-down="countDownChanged"
               style="text-align: center">
        Nie udało się zalogować
      </b-alert>

      <b-form-group horizontal
                    id="usernameGroup"
                    label="Nazwa użytkownika:"
                    label-for="username">
        <b-form-input required
                      id="usernameInput"
                      type="text"
                      placeholder="Podaj nazwę użytkownika"
                      v-model="form.username">
        </b-form-input>
      </b-form-group>

      <b-form-group horizontal
                    id="passwordGroup"
                    label="Hasło:"
                    label-for="passwordInput">
        <b-form-input required
                      id="passwordInput"
                      type="password"
                      placeholder="Podaj hasło"
                      v-model="form.password">
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Zaloguj się</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        dismissSecs: 3,
        dismissCountDown: 0,
        form: {
          username: '',
          password: ''
        },
      };
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown;
      },
      onSubmit(evt) {
        evt.preventDefault();
        const promise = this.$store.dispatch('logIn', this.form);
        promise.then(() => {
          this.$store.dispatch('getUserType');
          this.$refs.form.reset();
          this.$root.$emit('bv::hide::modal', 'loginModal');
        }).catch(() => {
          this.dismissCountDown = this.dismissSecs;
          this.form.password = '';
        });
      },
    },
  };
</script>

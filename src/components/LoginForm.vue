<!--<template>
  <div>
    <<form>
      <label> Twój login <input type="text" v-model="username"> </label>
      <label> hasło <input type="text" v-model="password"> </label>
      <input type="submit">
    </from>
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
          password: '',
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

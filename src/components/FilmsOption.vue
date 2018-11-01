<template>
  <div class="filmss_options">
    <b-card>
      <b-row>
              <h3 class="mt-2">Znajdź film dla siebie!</h3>
            <b-input-group class="ml-5">
              <b-form-input id="filmsNameInput" placeholder="Tytuł filmu" type="text" v-model="options.searchedTitle"></b-form-input>
            </b-input-group>
      </b-row>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'FilmsOptions'
  };
</script>

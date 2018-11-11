<template>
  <div class="films">
      <b-form-group horizontal
                    label="Długość filmu:"
                    label-for="film-length">
        <b-form-input required
                      type="number"
                      v-model="films.length">
        </b-form-input>
      </b-form-group>
  </div>
</template>

<script>
</script>

<style>
.films {
  margin-top: 10px;
}
.film {
  margin-top: 10px;
}
</style>

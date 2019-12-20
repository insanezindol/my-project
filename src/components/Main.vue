<template>
  <div class="main">
    <h1>Main page</h1>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      message: 'test'
    }
  }

}
</script>

<style>
.main {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: #000000;
}
</style>

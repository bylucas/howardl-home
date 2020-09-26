<template>
<header class="header">
  <img alt="howardl logo" src="../assets/howardl-logo.png" />
  <h1>{{ msg }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: 'howardl..'
    }
  }
}
</script>

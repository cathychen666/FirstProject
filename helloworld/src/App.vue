<template>
  <div id="app">
    <div id="nav">
      <Button type="primary" to="/">Index</Button> |
      <Button type="primary" to="/home">Home</Button> |
      <Button type="primary" to="/about">About</Button>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

</style>

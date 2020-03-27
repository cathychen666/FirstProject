<template>
  <div class="Index">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="点击上面的按钮可以切换"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Index',
  components: {
    HelloWorld
  }
}
</script>

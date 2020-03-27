<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <h1 style="color: white;">My Project</h1>
        </Menu>
      </Header>
      <Layout :style="{padding: '0 50px', margin: '30px 0 0 0'}">
        <Content :style="{padding: '24px 0', minHeight: '600px', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
              <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" @on-select="selectMenu">
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    Item 1
                  </template>
                  <MenuItem name="1-1">Home</MenuItem>
                  <MenuItem name="1-2">About</MenuItem>
                  <MenuItem name="1-3">Index</MenuItem>
                </Submenu>
                <Submenu name="2">
                  <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                  </template>
                  <MenuItem name="2-1">Option 1</MenuItem>
                  <MenuItem name="2-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="3">
                  <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                  </template>
                  <MenuItem name="3-1">Option 1</MenuItem>
                  <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content :style="{padding: '24px', minHeight: '600px', background: '#fff'}">
              <router-view/>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer style="text-align: center;">2010-2020 &copy; Designed by Cathy</Footer>
    </Layout>
  </div>
</template>
<script>
  export default {
    methods: {
      selectMenu(name) {
        this.$router.push({name: `${name}`})
      },
    }
  }
</script>

<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  text-align: left;
}
</style>
<template>
  <div id="app">
    <div class="topContent">
      <router-view></router-view>
    </div>
    <mt-tabbar v-model="active">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/gouwu.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" src="./assets/liwu.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="out">
        <img slot="icon" src="./assets/xiangji.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="self">
        <img slot="icon" src="./assets/wode.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    active: "Home"
  }),
  watch: {
    active: function(val) {
      if (val === "home") {
        val = "";
      }
      // 这里就可以通过 val 的值变更来确定
      this.$router.push(`/${val}`);
    }
  }
};
</script>

<style>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}
#app .mint-tabbar {
  position: fixed;
}
</style>

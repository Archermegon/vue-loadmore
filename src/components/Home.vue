<template>
  <div class="home">
    <div class="top">
      <h2 class="top">外卖</h2>
    </div>
    <mt-loadmore ref="loadmore" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
      <ul class="listItems">
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
export default {
  name: "home1",
  data: () => ({
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    allLoaded: false
  }),
  methods: {
    loadBottom() {
      // this.$refs.loadmore.onBottomLoaded();
      setTimeout(() => {
        this.list.push(13, 14, 15, 16, 17, 18, 19, 20);
        this.allLoaded = true;
      }, 2000);
    }
  }
};
</script>

<style>
.listItems {
  list-style: none;
  flex-shrink: 1;
  margin: 0;
  padding: 0;
  padding-top: 60px;
}
.listItems > li {
  line-height: 50px;
  text-align: center;
  border-top: 1px solid #000;
}
.home {
  display: flex;
  flex-direction: column;
}
.top {
  height: 60px;
  position: fixed;
  top: 0;
  background: maroon;
  width: 100%;
  line-height: 60px;
  z-index: 100000;
}
h2 {
  margin: 0;
  padding: 0;
  color: aliceblue;
}
</style>



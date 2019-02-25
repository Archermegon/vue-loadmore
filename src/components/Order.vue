<template>
  <div class="order">
    <h2>订单</h2>
    <ul class="orderList">
      <li v-for="n in 90" :key="n">{{'订单'+n}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "order"
};
</script>

<style>
.orderList {
  padding-bottom: 60px;
}
</style>


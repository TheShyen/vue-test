<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
.btn {
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
    border-radius: 5px;
    cursor: pointer;
}

.btn:hover {
    background-color: powderblue;
    transition: 0.6s all;

}
</style>
<template>
  <div class="row">
    <slot/>
  </div>
</template>

<script>
export default {};
</script>

<style>
.row {
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
}
</style>

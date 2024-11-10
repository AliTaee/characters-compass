<script>
export default {
  props: {
    columns: {
      type: Number,
      required: true,
    },
  },
  emits: ['gridLayoutChanged'],
  methods: {
    toggleLayout() {
      const newLayout = this.columns === 1 ? 2 : 1
      this.$emit('gridLayoutChanged', newLayout)
    },
  },
}
</script>

<template>
  <UButton color="primary" variant="solid" @click="toggleLayout">
    {{ columns === 1 ? 'Grid' : 'List' }} Columns
  </UButton>
</template>

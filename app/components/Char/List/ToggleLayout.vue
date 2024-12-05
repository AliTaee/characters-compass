<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  emits: ['gridLayoutChanged'],
  methods: {
    toggleLayout() {
      const newLayout = this.type === 'grid' ? 'list' : 'grid'
      this.$emit('gridLayoutChanged', newLayout)
    },
  },
}
</script>

<template>
  <UButton color="primary" variant="solid" @click="toggleLayout">
    {{ type === 'grid' ? 'Grid' : 'List' }} Columns
  </UButton>
</template>

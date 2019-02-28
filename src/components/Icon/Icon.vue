<script>
  import dragon from './icons/dragon.svg'

  const iconMap = {
    dragon: dragon.id,
  }

  export default {
    props: {
      name: {
        type: String,
        required: true,
        validate: name => Object.keys(iconMap).includes(name),
      },
    },
    computed: {
      iconId () {
        return iconMap[this.name]
      },
    },
  }
</script>

<template>
  <svg class="icon">
    <use :xlink:href="`#${iconId}`" />
  </svg>
</template>

<style scoped>
  .icon {
    fill: currentColor;
  }
</style>
<script setup lang="ts">
const props = defineProps({
  data: {
    type: String,
    required: true,
  }
})

const replaces: any = {
  '♥': '<img src="/emoji/heart.png" width="18" height="17">',
}

const string = computed(() => {
  let result: any = props.data;
  Object.keys(replaces).forEach((key: string) => {
    return result = result.replaceAll(key, replaces[key]);
  })
  return result;
})
</script>

<template>
  <span v-html="string"></span>
</template>

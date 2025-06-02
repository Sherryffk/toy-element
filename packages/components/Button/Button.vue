<script setup lang="ts">
// Button.vue
// button.test.tsx
// types.ts
// style.css
// constants.ts
import type{  ButtonProps} from "./types";
import { ref } from "vue";

// defineOptions 直接声明组件的选项
defineOptions({
  name:'ErButton'
})
const props=withDefaults( defineProps<ButtonProps>(),{
  tag:'button',
  nativeType:'button',
})
const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()
</script>
<template>
  <component
  :is="props.tag"
  ref="_ref"
  class="er-button"
  :type="tag==='button' ? nativeType : void 0"
  :disabled="disabled || loading ? true : void 0"
  :class="{
    [`er-button--${type}`]:type,
    [`er-button--${size}`]:size,
    'is-plain':plain,
    'is-round':round,
    'is-circle':circle,
    'is-loading':loading,
    'is-disabled':disabled,
  }"
  >
  <slot> </slot>
  </component>
</template>
<style scoped>
@import "./style.css";
</style>
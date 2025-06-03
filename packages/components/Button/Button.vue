<script setup lang="ts">
// Button.vue
// button.test.tsx
// types.ts
// style.css
// constants.ts
import type{  ButtonProps,ButtonEmits,ButtonIstance} from "./types";
import { ref,computed ,inject} from "vue";
import {throttle} from 'lodash-es'
import ErIcon from "../Icon/Icon.vue";
// 把之前定义的常量引进来
import {BUTTON_GROUP_CTX_KEY}from './constants'
// 节流部分的代码

// defineOptions 直接声明组件的选项
defineOptions({
  name:'ErButton'
})
const props=withDefaults( defineProps<ButtonProps>(),{
  tag:'button',
  nativeType:'button',
  useThrottle:true,
  throttleDuration:500
})

const emits=defineEmits<ButtonEmits>()

const slots = defineSlots()
// 将上下文取到
const ctx =inject(BUTTON_GROUP_CTX_KEY,void 0)
const _ref = ref<HTMLButtonElement>()
const size=computed(()=>ctx?.size??props?.size??"")//如果不存在就是props.size
const type=computed(()=>ctx?.type??props?.type??"")
const disabled=computed(()=>ctx?.disabled||props.disabled||false) 
const iconStyle=computed(()=>({
   marginBright:slots.defult ? "6px" : "0px"
}))
// 点击事件的监听
const handleBtnClick = (e:MouseEvent) =>emits('click',e)
// 节流版本
const handleBtnClickThrottle = throttle(handleBtnClick,props.throttleDuration)

defineExpose<ButtonIstance>( {
   ref:_ref 
   })
</script>
<template>
  <component
  :is="tag"
  ref="_ref"
  class="er-button"
  :autofocus="autofocus"
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
  @click="
    (e:MouseEvent)=>
      useThrottle?handleBtnClickThrottle(e) : handleBtnClick(e)"
  >
  <!-- loading图标 -->
  <template v-if="loading">
    <slot name="loading">
      <er-icon
      class="loading-icon"
      :icon="loadingIcon??'spinner'"
      :style="iconStyle"
      size="1x"
      spin/>
    </slot>
  </template>
  <er-icon
    v-if="icon && ! loading":icon="icon"
    :style=" iconStyle"
    size="1x"
  />
  <slot> </slot>
  </component>
</template>
<style scoped>
@import "./style.css";
</style>
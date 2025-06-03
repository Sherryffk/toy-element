import type { Component } from 'vue'
import type { Ref } from 'vue'

export type ButtonType="primary"|"success"|"warning"|"danger"|"info"
export type NativeType="button"|"reset"|"submit"
export type ButtonSize ="large"|"default"|"small"

export interface ButtonProps {
  tag?: string|Component
  type?: ButtonType
  nativeType?: NativeType
  size?: ButtonSize
  disabled?: boolean
  block?: boolean
  icon?: string
  loading?: boolean
  circle?: boolean
  plain?: boolean
  round?: boolean
  loadingIcon?: string
  autofocus?: boolean
  useThrottle?: boolean
  throttleDuration?: number
}
// 将按钮组的部分定义出来
export interface ButtonGroupProps {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}
// 上下文的定义
export interface ButtonGroupContext {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}
export interface ButtonEmits{
  (e: 'click',val:MouseEvent):void
}

export interface ButtonIstance{
  ref: Ref<HTMLButtonElement | void>
}
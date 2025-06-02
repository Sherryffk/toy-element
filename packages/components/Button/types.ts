import type { Component } from 'vue'

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
}
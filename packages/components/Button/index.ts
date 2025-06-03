import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
import {withInstall} from '@toy-element/utils'
// import { ErButton } from '@toy-element/components';

export const ErButton =withInstall(Button)
export const ErButtonGroup =withInstall(ButtonGroup)
// 将所有类型导出
export * from "./types";
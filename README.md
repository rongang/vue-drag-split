## VueDragSplit
```text
基于Vue的拖拽分屏组件
```
[查看例子](https://www.baidu.com)

## 开始

安装

```shell
yarn add vue-drag-split --save
```

使用

```vue
<template>
	<VueDragSplit
		:generateWindowConfig="generateWindowConfig"
		v-model:windowListSync="windowList"
		v-model:activeTabKeySync="activeTabKey"
		@closeWindow="onCloseWindow"
		@resize="onResize"
		@dragEnd="onDragend"
	>
		<template #Tab="win">
			<p style="color: white; font-size: 12px">{{ win.label }}</p>
		</template>
		<template #TabView="win">
			<div>
				<h3>自定义内容</h3>
				win:<br />
				{{ win }}<br />
			</div>
		</template>
	</VueDragSplit>
</template>

<script setup>
import {ref} from "@vue/reactivity";

// 引入样式文件
import "vue-drag-split/style.css";
// 引入组件
import {VueDragSplit} from "vue-drag-split";

const activeTabKey = ref("");
const windowList = ref([
	{
		key: "1",
		label: "标签一",
	},
]);
function generateWindowConfig(params) {
	return {
		key: Date.now(),
		label: "标签" + Date.now(),
	};
}
function onCloseWindow(params) {
	console.log("onCloseWindow :>> ", params);
}
function onResize(params) {
	console.log("onResize :>> ", params);
}
function onDragend(params) {
	console.log("onDragend :>> ", params);
}
</script>
<script>
export default {};
</script>

<style></style>
```

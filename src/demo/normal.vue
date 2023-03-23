<template>
	<h2>
		<a
			href="https://github.com/rongang/vue-drag-split/blob/master/src/demo/normal.vue"
			target="_blank"
			rel="noopener noreferrer"
			>点击查看源码</a
		>
	</h2>
	activeTabKey：
	{{ activeTabKey }}<br />
	windowList:
	{{ windowList }}
	<VueDragSplit
		:generateWindowConfig="generateWindowConfig"
		v-model:windowListSync="windowList"
		v-model:activeTabKeySync="activeTabKey"
		@closeWindow="onCloseWindow"
		@resize="onResize"
		@dragEnd="onDragend"
	>
		<template #Tab="win">
			<p style="color: white; font-size: 12px" :title="win.label">{{ win.label }}</p>
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
import { ref } from "@vue/reactivity";
import "../../dist/style.css";
// import { VueDragSplit, splitDirectionMap } from "../../dist/vue-drag-split";
import { VueDragSplit, splitDirectionMap } from "../components/index";
const activeTabKey = ref("");
const windowList = ref(
	new Array(10)
		.fill(1)
		.map((item, index) => ({ key: index.toString(), label: `标签标签标签${index}` }))
);
function generateWindowConfig(params) {
	return {
		key: Date.now(),
		label: "标签" + Date.now()
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
<style lang="scss">
#split_window {
	border-radius: 4px;
	overflow: hidden;
	.header_item {
		width: 100px;
		border-right: 1px solid #444;
	}
}
</style>
<style>
#split_window {
	border-radius: 4px;
	overflow: hidden;
}
</style>

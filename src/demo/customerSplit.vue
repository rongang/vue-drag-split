<template>
	<h2>
		<a
			href="https://github.com/rongang/vue-drag-split/blob/master/src/demo/customerSplit.vue"
			target="_blank"
			rel="noopener noreferrer"
			>点击查看源码</a
		>
	</h2>
	<SplitWindow style="color: white; border-radius: 4px">
		<Split split="horizontal" :default-percent="50">
			<template #paneL>
				<Split split="vertical" :default-percent="30">
					<template #paneL>
						<h2>1</h2>
					</template>
					<template #paneR>
						<h2>2</h2>
					</template>
				</Split>
			</template>
			<template #paneR>
				<Split split="vertical" :default-percent="50">
					<template #paneL>
						<h2>3</h2>
					</template>
					<template #paneR>
						<h2>4</h2>
					</template>
				</Split>
			</template>
		</Split>
	</SplitWindow>
</template>
<script setup>
import { Split, SplitWindow } from "../components/index";
</script>
<script>
export default {};
</script>

<style></style>

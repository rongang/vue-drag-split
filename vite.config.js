import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from "path";
console.log("process.env :>> ", process.env.build_type);
const build =
	process.env.build_type == "lib"
		? {
				lib: {
					// Could also be a dictionary or array of multiple entry points
					entry: resolve(__dirname, "./src/components/index.js"),
					name: "VueDragSplit",
					// the proper extensions will be added
				},
				rollupOptions: {
					// 确保外部化处理那些你不想打包进库的依赖
					external: ["vue"],
					output: {
						// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
						globals: {
							vue: "Vue",
						},
					},
				},
		  }
		: {outDir: "app"};
console.log("build :>> ", build);
export default defineConfig({
	plugins: [vue()],
	build,
});

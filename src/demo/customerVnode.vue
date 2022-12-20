<template>
    activeTabKey：
    {{ activeTabKey }}<br />
    windowList:
    {{ windowList }}
    <div>
        <button @click="createNewWindow">新建窗口</button>
        <button @click="splitHorizontal">水平拆分窗口</button>
        <button @click="splitVertical">垂直拆分窗口</button>
    </div>
    <VueDragSplit
        ref="VueDragSplitRef"
        v-model:windowListSync="windowList"
        v-model:activeTabKeySync="activeTabKey"
        :generateWindowConfig="generateWindowConfig"
        :createAddBtn="createAddBtn"
        :createClose="createClose"
        :createTab="createTab"
        :createTabView="createTabView"
        @closeWindow="onCloseWindow"
        @resize="onResize"
        @dragEnd="onDragend"
    >
    </VueDragSplit>
</template>
<script setup>
import { onMounted, ref, h } from "vue-demi";

import { VueDragSplit, splitDirectionMap } from "../components/index";
import "../../dist/style.css";
// import { VueDragSplit, splitDirectionMap } from "../../dist/vue-drag-split";

const VueDragSplitRef = ref("");

const activeTabKey = ref("");
const windowList = ref([]);

function generateWindowConfig(params) {
    return {
        key: Date.now(),
        label: "标签" + Date.now(),
    };
}

function createAddBtn(win) {
    return h(
        "div",
        {
            class: "add_btn_cus",
            style: { heigth: "26px", lineHeight: "26px" },
            onClick: createNewWindow,
        },
        "+"
    );
}
function createClose(win) {
    return h(
        "div",
        {
            class: "close_inner_cus",
        },
        "x"
    );
}
function createTab(win) {
    return h(
        "span",
        { style: { color: "white", fontSize: "12px" } },
        "自定义" + win.label
    );
}
function createTabView(win) {
    return h("div", null, [h("h3", { style: { color: "#a5a5fa" } }, win.key)]);
}
function createNewWindow(params) {
    VueDragSplitRef.value.newWindow({
        key: Date.now(),
        label: "标签" + VueDragSplitRef.value.windowList.length,
        contentText: Date.now(),
    });
}
function splitHorizontal(params) {
    VueDragSplitRef.value.splitWindow(
        {
            key: Date.now(),
            label: "标签" + VueDragSplitRef.value.windowList.length,
            contentText: Date.now(),
        },
        splitDirectionMap.horizontal
    );
}
function splitVertical(params) {
    VueDragSplitRef.value.splitWindow(
        {
            key: Date.now(),
            label: "标签" + VueDragSplitRef.value.windowList.length,
            contentText: Date.now(),
        },
        splitDirectionMap.vertical
    );
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
    .close_inner_cus {
        padding: 0 5px;
        color: white;
        font-size: 14px;
        height: 18px;
        width: 18px;
        text-align: center;
        line-height: 18px;
        margin: 3px 0;
        &:hover {
            color: crimson;
            background: white;
            border-radius: 50%;
        }
    }
    .add_btn_cus {
        cursor: pointer;
        padding: 0 10px;
        background: rgb(59, 59, 59);
        color: white;
        &:hover {
            color: #008ae1;
        }
    }
}
</style>
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
        @closeWindow="onCloseWindow"
        @resize="onResize"
        @dragEnd="onDragend"
    >
        <template #Tab="win">
            <p style="color: white; font-size: 12px">自定义{{ win.label }}</p>
        </template>
        <template #CloseBtn>
            <div class="close_inner_cus">x</div>
        </template>
        <template #AddBtn>
            <div
                class="add_btn_cus"
                style="height: 26px; line-height: 26px"
                @click="createNewWindow"
            >
                +
            </div>
        </template>

        <template #TabView="win">
            <div>
                <h3>自定义内容</h3>
                win:<br />
                {{ win }}<br />
            </div>
        </template>
        <template #TabActions>
            <button @click="cusClick" style="padding: 3px 10px; margin: 0">
                自定义按钮
            </button>
        </template>
        <template #placeHolder>
            <div class="placeholder_cus">
                <h3 style="color: #a5a5fa">自定义默认视图</h3>
                <button @click="createNewWindow">新建窗口</button>
            </div>
        </template>
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
function cusClick(params) {
    alert("关闭所有窗口");
    for (const win of windowList.value) {
        VueDragSplitRef.value.closeWindow(win);
    }
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
    .placeholder_cus {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>
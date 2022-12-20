<template>
    <div class="layout">
        <div class="left">
            <h2>DragSplit Demo</h2>
            <ul class="menu">
                <li
                    class="menu_item"
                    :class="{ active: activeKey == menu.key }"
                    v-for="menu in menuList"
                    :key="menu.key"
                    @click="activeKey = menu.key"
                >
                    {{ menu.title }}
                </li>
            </ul>
        </div>
        <div class="right">
            <keep-alive>
                <component :is="activeKey"></component>
            </keep-alive>
        </div>
    </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
const activeKey = ref("normal");
const menuList = [
    {
        key: "normal",
        title: "直接使用",
    },
    {
        key: "customer",
        title: "自定义UI(slot)",
    },
    {
        key: "customerVnode",
        title: "自定义UI(VNode)",
    },
    {
        key: "customerSplit",
        title: "自定义拆分(无拖动)",
    },
];
</script>
<script>
import normal from "./normal.vue";
import customer from "./customer.vue";
import customerVnode from "./customerVnode.vue";
import customerSplit from "./customerSplit.vue";
export default {
    components: {
        normal,
        customer,
        customerVnode,
        customerSplit,
    },
};
</script>

<style lang="scss">
.layout {
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: stretch;
    padding: 10px;
    overflow: hidden;
    display: flex;
    gap: 20px;
    background-color: #eef;
    .left {
        .menu {
            margin: 20px 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            .menu_item {
                cursor: pointer;
                text-align: center;
                padding: 10px 20px;
                border: 1px solid rgb(237, 237, 253);
                border-radius: 4px;
                transition: all 0.2s ease-out;
                color: rgb(109, 109, 109);
                background-color: #fff;
                &:hover {
                    background: rgb(165, 165, 250);
                    border: 1px solid rgb(165, 165, 250);
                    color: white;
                }
            }
            .active {
                color: white;
                background: rgb(165, 165, 250);
                border: 1px solid rgb(165, 165, 250);
            }
        }
    }
    .right {
        flex: 1;
        display: flex;
        overflow: hidden;
        gap: 10px;
        flex-direction: column;
        button {
            background-color: white;
            outline: none;
            border: none;
            margin-right: 10px;
            padding: 10px 20px;
            cursor: pointer;
            transition: all 0.2s ease-out;
            &:hover {
                background: rgb(165, 165, 250);
                color: white;
            }
        }
    }
}
</style>

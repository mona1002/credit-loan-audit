<template>
    <div>
        <el-submenu v-if="item.children && item.children.length" :index="navIndex"> 
            <!-- 创建父级菜单 -->
            <template slot="title">{{ item.resName }}</template>
            <!-- 创建子菜单 -->
            <nav-item 
                v-for="(subItem,i) in item.children" 
                :key="navIndex+'-'+i" 
                :navIndex="navIndex+'-'+i"
                :item="subItem" >
            </nav-item>
        </el-submenu>

        <el-menu-item @click="clickMenu(item)" v-else :index="item.resUrl">{{ item.resName }}</el-menu-item>
    <!-- <div>{{navIndex}}</div> -->
    </div>
</template>
<script>
    export default {
        // 递归组件必须有name
        name: 'navItem',
        data(){
            return{

            }
        },
        methods:{
            clickMenu(e){
                console.log(e);
            },
        },
        props: ['item','navIndex']
    }
</script>
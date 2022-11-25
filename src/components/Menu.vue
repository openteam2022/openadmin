<template>
    <div class="menu">
        <div class="menu-brand">OpenAdmin</div>
        <OpenMenu>
            <open-menu-item link="/">
                    <OpenIcon>
                         <i class="iconfont icon-shouyefill"></i>
                    </OpenIcon>
                    <span>首页</span>
                </open-menu-item>
             <open-sub-menu>
                    <template #title>
                        <OpenIcon>
                            <i class="iconfont icon-zujian"></i>
                        </OpenIcon>
                        <span>组件</span>
                    </template>
                    <open-menu-item link="/form">表单</open-menu-item>
                    <open-menu-item link="/table">表格</open-menu-item>
                </open-sub-menu>
                <open-sub-menu>
                    <template #title>
                        <OpenIcon>
                            <i class="iconfont icon-biaodanyemian2"></i>
                        </OpenIcon>
                        <span>页面</span>
                    </template>
                    <open-menu-item link="/register">注册</open-menu-item>
                    <open-menu-item link="/logins">登录</open-menu-item>
                    <open-menu-item link="/forgot">忘记密码</open-menu-item>
                    <open-menu-item link="/404">404页面</open-menu-item>
                    <open-menu-item link="/list">列表</open-menu-item>
                </open-sub-menu>
                <open-sub-menu>
                    <template #title>
                        <OpenIcon>
                          <i class="iconfont icon-jurassic_user"></i>
                        </OpenIcon>
                        <span>用户</span>
                    </template>
                    <open-menu-item link="/user">用户</open-menu-item>
                    <open-menu-item link="/admin">管理员</open-menu-item>
                    <open-menu-item link="/role">角色管理</open-menu-item>
                </open-sub-menu>
                <open-sub-menu>
                    <template #title>
                        <OpenIcon>
                            <i class="iconfont icon-shezhi"></i>
                        </OpenIcon>
                        <span>设置</span>
                    </template>
                    <open-menu-item link="/profile">个人中心</open-menu-item>
                </open-sub-menu>
        </OpenMenu>
    </div>
</template>

<script setup lang="ts">
    import OpenMenu from '../open/components/Menu/open_menu.vue' 
    import OpenMenuItem from '../open/components/Menu/open_menu_item.vue' 
    import OpenSubMenu from '../open/components/Menu/open_sub_menu.vue' 
    import OpenIcon from '../open/components/Icon/open_icon.vue'
</script>

<style scoped>
    .menu{
        width: 100%;
        height: 100%;
        padding-bottom: 30px;
        overflow-y: scroll;
        box-sizing: border-box;
        background: var(--menu-bg-color);
    }
    .menu-brand{
        width: 100%;
        box-sizing: border-box;
        padding: 15px 20px;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
    }
    .iconfont{
        position: relative;
        top: -2px;
        right: 1px;
    }
    ::-webkit-scrollbar{
        display: none;
    }
</style>
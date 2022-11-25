<template>
    <div class="navbar">
        <div class="navbar-tool">
            <span>
                <router-link to="/">首页</router-link>
            </span>
            <span class="navbar-tool-icon">/</span>
            <span>
                
            </span>
        </div>
        <ul class="navbar-list">
            <li class="navbar-list-item">
                <div class="navbar-list-item-title">
                    <i class="iconfont icon-zhutise"></i>
                </div>
                <ul class="navbar-list-item-down">
                    <li @click="changeTheme(1)">linght</li>
                    <li @click="changeTheme(2)">draw</li>
                </ul>
            </li>
            <li class="navbar-list-item">
               <div class="navbar-list-item-title">
                    <i class="iconfont icon-xiaoxi"></i>
                </div>
            </li>
            <li class="navbar-list-item">
               <div class="navbar-list-item-title" @click="changeScreen">
                   <i class="iconfont icon-quanping"></i>
               </div>
            </li>
            <li class="navbar-list-item">
                <div class="navbar-list-item-title">
                    <span>admin</span>
                    <span class="nlit-icon">
                       <i class="iconfont icon-xiala"></i>
                    </span>
                </div>
                <ul class="navbar-list-item-down">
                    <li><router-link to="/profile">个人中心</router-link></li>
                    <li><router-link to="/login"> 退出登录</router-link></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import ChangeTheme from '../open/theme/changeTheme.js'
    let scressMark = false; 

    const changeScreen = ()=>{
        if(!scressMark){
            openFullscreen()
            scressMark = true;
        }else{
            exitFullscreen()
            scressMark = false;
        }
    }
    const openFullscreen = () => {
         /* 获取(<html>)元素以全屏显示页面 */
        const full = document.getElementById('app')
        if (full.RequestFullScreen) {
            full.RequestFullScreen()
            //兼容Firefox
        } else if (full.mozRequestFullScreen) {
            full.mozRequestFullScreen()
            //兼容Chrome, Safari and Opera等
        } else if (full.webkitRequestFullScreen) {
            full.webkitRequestFullScreen()
            //兼容IE/Edge
        } else if (full.msRequestFullscreen) {
            full.msRequestFullscreen()
        }
    }
    const exitFullscreen = () => {
        if(document.exitFullScreen) {
            document.exitFullScreen();
        //兼容Firefox
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        //兼容Chrome, Safari and Opera等
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        //兼容IE/Edge
        } else if(element.msExitFullscreen) {
            element.msExitFullscreen();
        }
    }

    const changeTheme = (index:number):void=>{
        ChangeTheme(index);
    }

</script>

<style scoped>
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 0 50px 0 20px;
        background: var(--nav-bg-color);
        min-width: 469px;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    a{
        color: var(--font-color-deep);
    }
    .navbar-tool{
        font-size: 13.4px;
        color: var(--font-color-deep);
        font-weight: 500;
    }
    .navbar-tool a{
        color: var(--font-color-deep);
    }
    .navbar-tool a:hover{
        color: var(--app-color);
    }
    .navbar-tool-icon{
        margin: 0 5px;
    }
    .navbar-list{
        display: flex;
        height: 100%;
    }
    .navbar-list-item{
        height: 100%;
        padding: 0 10px;
        margin-left: 20px;
        font-size: 14px;
        color: var(--font-color-deep);
        position: relative;
    }
    .navbar-list-item:hover .navbar-list-item-down{
        display: block;
        opacity: 1;
    }
    .navbar-list-item-title{
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .nlit-icon{
        position: relative;
        top: 3px;
    }
    .icon-xiala{
        position: relative;
        top: -3px;
    }
    .navbar-list-item-title:hover{
        color: var(--app-color);
    }
    .navbar-list-item-down{
        list-style: none;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 95%;
        right: 0px;
        transition: all 0.5s;
        padding: 7px 0px!important;
        width: 90px;
        display: none;
        opacity: 0;
        background: var(--nav-bg-color);
        font-size: 13px;
        box-shadow: 1px 2px 7px var(--box-shadow-color);
    }
    .navbar-list-item-down li{
        padding: 7px 15px;
        cursor: pointer;
        text-align: center;
    }
    .navbar-list-item-down li:hover{
        color: var(--app-color);
        background: var(--app-bg-color);
    }
</style>
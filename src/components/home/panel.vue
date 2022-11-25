<template>
    <div class="panel">
        <ul class="panel-list">
            <li class="panel-list-item" v-for="item in data">
               <div class="panel-list-item-wrapper">
                    <div class="pliw-title">
                        <span>访问量</span>
                        <span>周</span>
                    </div>
                    <div class="pliw-data">
                        <h2>999</h2>
                        <p>
                            <span>最近一个月</span>
                            <span class="pliw-data-icon">
                                <span>15%</span>
                                <span >
                                    <i class="iconfont icon-smail"></i>
                                </span>
                            </span>
                        </p>
                    </div>
               </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    const data = 4;
</script>

<style scoped>
    .panel{
        padding: 15px 10px 0 10px;
    }
    .panel-list{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .panel-list-item{
        width: 25%;
        box-sizing: border-box;
        padding: 0 5px;
    }
    .panel-list-item-wrapper{
        background: var(--bg-color-white);
        border-radius: 4px;
    }
    .pliw-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px var(--border-color) solid;
        padding: 12px;
        font-size: 0.85rem;
        color: var(--font-color-deep);
    }
    .pliw-title span:nth-child(2){
        display: inline-block;
        padding: 2px 10px 3px 10px;
        border-radius: 3px;
        color: var(--font-color-white);
        font-size: 0.65rem;
        background: var(--app-color);
    }
    .pliw-data{
        box-sizing: border-box;
        padding: 0 15px;
        padding-bottom: 15px;
    }
    .pliw-data h2{
        font-size: 2.5rem;
        margin: 15px 0;
        font-weight: 400;
        color: var(--font-color-deep);
    }
    .pliw-data p{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.85rem;
        margin: 10px 0 0 0;
        color: var(--font-color-base);
    }
    .pliw-data-icon span:nth-child(2){
        position: relative;
        top: 3px;
        margin-left: 5px;
    }
    @media (max-width: 959px){
        .panel-list-item{
            width: 50%;
            margin-bottom: 12px;
        }
    }
     @media (max-width: 719px){
        .panel-list-item{
            width: 100%;
            margin-bottom: 12px;
        }
    }
</style>
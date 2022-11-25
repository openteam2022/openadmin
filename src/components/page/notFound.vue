<template>
    <div class="not-found">
        <MainTitle>404</MainTitle>
        <div class="not-found-wrapper">
            <div class="not-found-box">
                <div class="not-found-box-title">
                    404
                </div>
                <div class="not-found-box-message">哦，NO！页面不见了</div>
                <div class="not-found-box-btn" @click="goHome">返回首页</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import MainTitle from '../MainTitle.vue'
    import { useRouter } from 'vue-router'

    const router = useRouter();
    const goHome = ()=>{
        router.push({path:'/'})
    }
</script>

<style scoped>
    .not-found{
        background: var(--bg-color-white);
        margin: 10px;
        height: 100%;
        box-sizing: border-box;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
    }
    .not-found-wrapper{
        flex: 1;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .not-found-box{
        transform: translateY(-30%);
        text-align: center;
    }
    .not-found-box-title{
        font-size: 4rem;
        color: #ccc;
    }
    .not-found-box-message{
        padding: 25px 0;
        font-size: 1.5rem;
        color: #555;
    }
    .not-found-box-btn{
        display: inline-block;
        padding: 0 20px;
        font-size: 0.9rem;
        border: 1px #ccc solid;
        line-height: 30px;
        border-radius: 15px;
        cursor: pointer;
        color: var(--font-color-deep);
    }
    .not-found-box-btn:hover{
        color: #1890ff;
        border: 1px #1890ff solid;
    }

</style>
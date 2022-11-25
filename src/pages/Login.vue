<template>
    <div class="login">
        <div class="login-wrapper">
            <div class="login-brand">
                <p>OpenAdmin1.0账号登录</p>
            </div>
            <OpenForm labelWidth="120">
                <OpenFormItem label="手机：">
                    <OpenInput> </OpenInput>
                </OpenFormItem>
                <OpenFormItem label="密码：">
                    <OpenInput pro > </OpenInput>
                </OpenFormItem>
                <OpenFormItem label="">
                    <div class="login-btn" @click="onClick">登录</div>
                </OpenFormItem>
            </OpenForm>
        </div>
    </div>
</template>

<script setup lang="ts">
    import OpenForm from '../open/components/Form/open_form.vue'
    import OpenFormItem from '../open/components/Form/open_form_item.vue'
    import OpenInput from '../open/components/Input/open_input.vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const onClick = ():void=>{
        router.push({path: '/'})
    }
</script>

<style scoped>
    .login{
        background: var(--bg-color-white);
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
    .login-wrapper{
        width: 300px;
        margin: auto;
        transform: translate(-50px,-30%);
    }
    .login-brand{
        text-align: center;
        line-height: 60px;
        transform: translateX(40px);
    }
    .login-btn{
        line-height: 35px;
        background: #1890ff;
        width: 100%;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        font-size: 0.8rem;
        cursor: pointer;
    }
</style>
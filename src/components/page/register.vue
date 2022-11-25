<template>
    <div class="register">
        <MainTitle>注册</MainTitle>
        <div class="register-wrapper">
            <div class="register-brand">
                <p>OpenAdmin1.0账号注册</p>
            </div>
            <OpenForm labelWidth="120">
                <OpenFormItem label="手机：">
                    <OpenInput> </OpenInput>
                </OpenFormItem>
                <OpenFormItem label="验证码：">
                    <OpenInput> </OpenInput><Code>  </Code>
                </OpenFormItem>
                 <OpenFormItem label="密码：">
                    <OpenInput pro > </OpenInput>
                </OpenFormItem>
                 <OpenFormItem label="确认密码：">
                    <OpenInput pro > </OpenInput>
                </OpenFormItem>
                <OpenFormItem label="">
                    <div class="register-btn">注册</div>
                </OpenFormItem>
            </OpenForm>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref,onMounted,onUnmounted } from 'vue'
    import type{ Ref } from 'vue'
    import OpenForm from '../../open/components/Form/open_form.vue'
    import OpenFormItem from '../../open/components/Form/open_form_item.vue'
    import OpenInput from '../../open/components/Input/open_input.vue'
    import MainTitle from '../MainTitle.vue'
    import Code from '../Code.vue'
    
</script>

<style scoped>
    .register{
        background: var(--bg-color-white);
        margin: 10px;
        height: 100%;
    }
    .register-wrapper{
        width: 300px;
        margin: auto;
        transform: translateX(-50px);
    }
    .register-brand{
        text-align: center;
        line-height: 60px;
        transform: translateX(40px);
        color: var(--font-color-deep);
    }
    .register-btn{
        line-height: 35px;
        background: #1890ff;
        width: 100%;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        font-size: 0.8rem;
        cursor: pointer;
    }
     .register-btn:hover{
        opacity: 0.7;
    }
</style>
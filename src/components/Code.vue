<template>  
    <div class="open-form-code" :style="{cursor: cursor,opacity: opacity}" @click="getCode">{{code}}</div>
</template> 

<script setup lang="ts">
    import { ref,onMounted,onUnmounted } from 'vue'
    import type{ Ref } from 'vue'

    const codeText = '发送验证码';
    const code:Ref<string|number> = ref(codeText);
    const cursorText = 'pointer';
    const cursor:Ref<string> = ref(cursorText);
    const opacityText = 1;
    const opacity:Ref<number> = ref(opacityText);
    let timer;

    const emit = defineEmits(['onClick']);
    const getCode = ()=>{
        emit('onClick');
        let number = 5;
        cursor.value = 'not-allowed';
        opacity.value = 0.5;
        timer = setInterval(()=>{
            if(number < 0){
                clearInterval(timer)
                code.value = codeText;
                cursor.value = cursorText;
                opacity.value = opacityText;
                console.log(code.value)
            }else{
                code.value = `${number --}秒`;
            }
        },1000)
        return false;
    }

    onMounted(()=>{
        if(timer){
            clearInterval(timer)
        }
    })
    onUnmounted(()=>{
        if(timer){
            clearInterval(timer)
        }
    })
</script>

<style scoped>
    .open-form-code{
        display: inline-block;
        margin-left: 10px;
        line-height: 30px;
        font-size: 0.7rem;
        width: 140px;
        box-sizing: border-box;
        padding: 0 10px;
        background: #1890ff;
        text-align: center;
        color: white;
        border-radius: 4px;
        transition: all 0.5s;
    }
</style>
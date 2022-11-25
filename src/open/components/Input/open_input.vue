<template>
    <input
    class="open-input"
    :value="modelValue"
    :type="type"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    />
</template>

<script>
    export default {
        name: 'OpenInput',
        props: {
            modelValue: {
                type: String,
                default: ''
            },
            error: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type:String,
                default: ''
            }
        },
        emits: ['update:modelValue'],
        data() {
            return {
                borColor: [
                    {
                        defa: '#ddd',
                        hover: '#ccc',
                        error: '#1890ff'
                    },
                    {
                        defa: '#fc5531',
                        hover: '#fc5531',
                        error: '#fc5531'
                    }

                ],
                borderColor:{
                    defa: '#ddd',
                    error: '#1890ff'
                }
                
            }
        },
        mounted(){
            this.setColor();
        },
        methods:{
            setColor(){
                if(this.error){
                    this.borderColor = this.borColor[1];
                }else{
                    this.borderColor = this.borColor[0];
                }
            }
        }

    }
</script>

<style scoped>
    .open-input{
        background:none;
        outline:none;
        border:none;
        border: 1px v-bind(borderColor.defa) solid;
        height: 30px;
        box-sizing: border-box;
        padding: 5px 10px;
        border-radius: 4px;
        width: 100%;
        box-shadow: 0px 0px 1px v-bind(borderColor.defa);
    }
     .open-input:hover{
        border: 1px v-bind(borderColor.hover) solid;
    }
    .open-input:focus{
        border: 1px v-bind(borderColor.error) solid;
    }
    
</style>
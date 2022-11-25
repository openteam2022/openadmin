<template>
    <div class="form">
        <MainTitle>表单</MainTitle>
        <div class="form-wrapper">
            <OpenForm labelWidth="150">
                <OpenFormItem label="输入框：">
                    <OpenInput> </OpenInput>
                </OpenFormItem>
                 <OpenFormItem required label="星号框：">
                    <OpenInput > </OpenInput>
                </OpenFormItem>
                <OpenFormItem error="提示消息" label="提示框：">
                    <OpenInput :error="true"> </OpenInput>
                </OpenFormItem>
                <OpenFormItem label="单选框：">
                    <OpenRadioGroup v-model="radio" @change="change">
                        <OpenRadio label="1">男</OpenRadio>
                        <OpenRadio label="2">女</OpenRadio>
                    </OpenRadioGroup>
                </OpenFormItem>
                <OpenFormItem label="复选框：">
                    <OpenCheckboxGroup v-model="checkbox" @change="change"> 
                        <OpenCheckbox label="1">读书</OpenCheckbox>
                        <OpenCheckbox label="2">运动</OpenCheckbox>
                        <OpenCheckbox label="3">美食</OpenCheckbox>
                    </OpenCheckboxGroup> 
                </OpenFormItem>
                <OpenFormItem label="开关：">
                    <OpenSwitch @change="change"></OpenSwitch> 
                </OpenFormItem>
                <OpenFormItem label="选择框：">
                    <OpenSelect v-model="select" @change="change">
                        <OpenOption value="A"></OpenOption>
                        <OpenOption value="B"></OpenOption>
                        <OpenOption value="C" disabled></OpenOption>
                    </OpenSelect>
                </OpenFormItem>
                <OpenFormItem label="选择日期：">  
                    <OpenDatePicker></OpenDatePicker>
                </OpenFormItem>         
            </OpenForm>
        </div>
    </div>
</template>

<script setup lang="ts">
    import MainTitle from '../MainTitle.vue'
    import OpenForm from '../../open/components/Form/open_form.vue'
    import OpenFormItem from '../../open/components/Form/open_form_item.vue'
    import OpenInput from '../../open/components/Input/open_input.vue'
    import OpenRadio from '../../open/components/Radio/open_radio.vue'
    import OpenRadioGroup from '../../open/components/Radio/open_radio_group.vue'
    import OpenCheckbox from '../../open/components/Checkbox/open_checkbox.vue'
    import OpenCheckboxGroup from '../../open/components/Checkbox/open_checkbox_group.vue'
    import OpenSwitch from '../../open/components/Switch/open_switch.vue'
    import OpenSelect from '../../open/components/Select/open_select.vue'
    import OpenOption from '../../open/components/Select/open_option.vue'
    import OpenDatePicker from '../../open/components/DatePicker/open_date_picker.vue'
</script>

<style scoped> 
    .form{
        box-sizing: border-box;
        margin: 10px;
        background: var(--bg-color-white);
        height: 100%;
        overflow-y: scroll;
    }
    .form-title{
    
    }
    .form-wrapper{
        width: 50%;
        min-width: 500px;
        box-sizing: border-box;
        padding: 30px 50px 30px 0;
    }
    @media (max-width:  959px){
        .form-wrapper{
            width: 100%;
        }
    }
</style>
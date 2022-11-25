<template>
    <div class="profile">
        <div class="profile-box">
            <div class="profile-box-header">
                 <MainTitle>个人中心</MainTitle>
                <div class="profile-box-header-info">
                    <img src="../../assets/open.png" alt=""><span>openadmin</span>
                </div>
            </div>
            <div class="profile-box-content">
                <MainTitle>基本信息</MainTitle>
                <OpenForm class="form" labelWidth="90">
                    <OpenFormItem label="昵称：">
                       <span>openadmin</span>
                    </OpenFormItem>
                    <OpenFormItem label="id：">
                       <span>oadjfoa089389328</span>
                    </OpenFormItem>
                    <OpenFormItem label="性别：">
                       <span>男</span>
                    </OpenFormItem>
                     <OpenFormItem label="角色：">
                       <span>管理员</span>
                    </OpenFormItem>
                    <OpenFormItem label="地区：">
                       <span>广东深圳</span>
                    </OpenFormItem>
                </OpenForm>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import MainTitle from '../MainTitle.vue'
     import OpenForm from '../../open/components/Form/open_form.vue'
    import OpenFormItem from '../../open/components/Form/open_form_item.vue'
</script>

<style scoped>
    .profile{
        box-sizing: border-box;
        margin: 10px;
        height: 100%;
        overflow-y: scroll;
    }
    .profile-box{
        box-sizing: border-box;
    }
    .profile-box-header{
         background: var(--bg-color-white);
         margin-bottom: 10px;
    }
    .profile-box-header-info{
        display: flex;
        align-items: center;
        padding: 30px 20px;
    }
    .profile-box-header img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px var(--border-color) solid;
        margin-right: 20px;
    }
    .profile-box-header span{
        font-size: 1.2rem;
        color: var(--font-color-deep);
    }
    .profile-box-content{
         background: var(--bg-color-white);
    }
    .profile-box-content span{
        font-size: 0.9rem;
        color: var(--font-color-deep);
    }
    .form{
        padding: 30px 0;
    }
</style>
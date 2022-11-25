<template>
    <div class="admin">
        <MainTitle>管理员</MainTitle>
        <div class="admin-search">
            <div class="admin-search-item"><OpenInput placeholder="订单号"></OpenInput></div>
            <div class="admin-search-item"><OpenInput placeholder="用户名"></OpenInput></div>
            <div class="admin-search-item"><vxe-button status="primary" size="mini">搜索</vxe-button></div>
        </div>
        <div class="admin-wrapper">
            <vxe-table round stripe max-height="400" :data="tableData">
                <vxe-column type="checkbox" width="60"></vxe-column>
                <vxe-column field="name" title="订单号">
                </vxe-column>
                <vxe-column field="sex" title="商品名"></vxe-column>
                <vxe-column field="age" title="金额"></vxe-column>
                <vxe-column field="address" title="顾客地址"></vxe-column>
                <vxe-column field="status" title="订单状态"></vxe-column>
                <vxe-column >
                    <template #header>
                      <span>操作</span>
                    </template>
                    <template #default="{ row }">
                      <vxe-button size="mini">编辑</vxe-button>
                      <vxe-button status="danger" size="mini">删除</vxe-button>
                    </template>
                  </vxe-column>
            </vxe-table>
            <OpenPagination 
           :totalData="2000" 
           @changePage="changePage"
           >
           </OpenPagination>
        </div>  
    </div>
</template>

<script setup lang="ts">
    import MainTitle from '../MainTitle.vue'
    import { defineComponent, ref, reactive } from 'vue'
    import { VxeGridProps } from 'vxe-table'
    import OpenPagination from '../../open/components/Pagination/open_pagination.vue'
    import OpenInput from '../../open/components/Input/open_input.vue'
    interface UserVO {
      id: number;
      name: string;
      role: string;
      sex: string;
      age: number;
      address: string;
    }

        
    const tableData = ref<UserVO[]>([
      { id: 10001, name: 'Ab1232321323213231', sex: '1921新青年报一份', age: 28.00, address: '北京三里屯', status: "已付款"},
      { id: 10002, name: 'Ab1232321323213232', sex: '1921新青年报一份', age: 22.00, address: '北京三里屯', status: "已付款"},
      { id: 10003, name: 'Ab1232321323213233', sex: '1921新青年报一份', age: 32.00, address: '北京三里屯', status: "已付款"},
      { id: 10004, name: 'Ab1232321323213234', sex: '1921新青年报一份', age: 24.00, address: '北京三里屯', status: "已付款"},
      { id: 10005, name: 'Ab1232321323213234', sex: '1921新青年报一份', age: 24.00, address: '北京三里屯', status: "已付款"},
      { id: 10006, name: 'Ab1232321323213234', sex: '1921新青年报一份', age: 24.00, address: '北京三里屯', status: "已付款"},
      { id: 10007, name: 'Ab1232321323213234', sex: '1921新青年报一份', age: 24.00, address: '北京三里屯', status: "已付款"},
      { id: 10008, name: 'Ab1232321323213234', sex: '1921新青年报一份', age: 24.00, address: '北京三里屯', status: "已付款"},
      { id: 10009, name: 'Ab1232321323213234', sex: '1921新青年报一份', age: 24.00, address: '北京三里屯', status: "已付款"},
    ])


</script>

<style scoped> 
    .admin{
        margin: 10px;
        background: var(--bg-color-white);
        box-sizing: border-box;
        height: 100%;
        overflow-y: scroll;
    }
    .admin-wrapper{
        box-sizing: border-box;
        padding: 30px 20px;
    }
    .admin-search{
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding-top: 30px;
    }
    .admin-search-item{
        box-sizing: border-box;
        padding-right: 10px;
    }
</style>
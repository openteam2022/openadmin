<template>
    <div class="table">
        <MainTitle>表格</MainTitle>
        <div class="table-wrapper">
            <vxe-table stripe :data="tableData">
                <vxe-column type="seq" width="60"></vxe-column>
                <vxe-column field="name" title="Name">
                </vxe-column>
                <vxe-column field="sex" title="Sex"></vxe-column>
                <vxe-column field="age" title="Age"></vxe-column>
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
    interface UserVO {
      id: number;
      name: string;
      role: string;
      sex: string;
      age: number;
      address: string;
    }

        
    const tableData = ref<UserVO[]>([
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
      { id: 10005, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
      { id: 10006, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
      { id: 10007, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
      { id: 10008, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
      { id: 10009, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
    ])


</script>

<style scoped> 
    .table{
        margin: 10px;
        background: var(--bg-color-white);
        box-sizing: border-box;
        height: 100%;
        overflow-y: scroll;
    }
    .table-wrapper{
        box-sizing: border-box;
        padding: 30px 20px;
    }
</style>
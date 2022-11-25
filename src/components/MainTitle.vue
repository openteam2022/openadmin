<template>  
    <div class="main-title">   
        <slot>标题</slot>
    </div>
</template> 

<style scoped> 
.main-title{
     font-size: 0.9rem;
    color: var(--font-color-deep);
    line-height: 50px;
    margin: 0 15px;
    border-bottom: 1px var(--border-color) solid;
}
</style>
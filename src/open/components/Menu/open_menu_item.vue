<template>
    <li class="open-menu-item" ref="openmenuitem">
        <div class="open-menu-item-title open-menu-title" @click="onMenu($event)"><slot></slot></div>
    </li>
</template>

<script>
    export default {
        name: 'OpenMenuItem',
        props: {
            link: {
                type: String,
                default: '/'
            }
        },
        data() {
            return {
                paddingLeft: '20px'
            }
        },
        mounted(){
            let el = this.$refs.openmenuitem;
            let pel = el.parentNode;
            if(pel.getAttribute('class') == 'open-sub-menu-list'){
                this.paddingLeft = '45px'
            }
            let ppel = pel.parentNode.parentNode;
            if(ppel.getAttribute('class') == 'open-sub-menu-list'){
                this.paddingLeft = '65px'
            }
        },
        methods:{
            onMenu($event){
                const li = document.getElementsByClassName('open-menu-title');
                for (let i = 0; i < li.length ; i ++) {
                    li[i].className = 'open-menu-item-title open-menu-title'
                }
                $event.target.className = 'open-menu-item-title open-menu-title active'
                this.$router.push({path: this.link})
            }
        }
    }
</script>

<style scoped>
    .open-menu-item{
        width: inherit;
    }
    .open-menu-item-title{
        width: inherit;
        box-sizing: border-box;
        padding: 0 20px 0 v-bind(paddingLeft);
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        color: #aaa;
        font-size: 13.4px;
        transition: all 0.5s;
    }
    .open-menu-item-title:hover{
        background: #333;
        color: #1890ff;
    }
    .active{
        color: #1890ff;
        background: #303030;
    }
</style>
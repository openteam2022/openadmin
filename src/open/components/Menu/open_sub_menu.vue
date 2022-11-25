<template>
    <li class="open-sub-menu" ref="opensubmenu">
        <div class="open-sub-menu-title" @click="toggleMenu">
            <div><slot name="title"></slot></div>
            <span class="osmt-icon" ref="openmenuicon">
               <svg t="1669173197746" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3789" width="15" height="15">
                    <path d="M320 885.333333c-8.533333 0-17.066667-4.266667-23.466667-10.666666-12.8-12.8-10.666667-34.133333 2.133334-44.8L654.933333 512 298.666667 194.133333c-12.8-10.666667-14.933333-32-2.133334-44.8 10.666667-12.8 32-14.933333 44.8-2.133333l384 341.333333c6.4 6.4 10.666667 14.933333 10.666667 23.466667 0 8.533333-4.266667 17.066667-10.666667 23.466667l-384 341.333333c-6.4 6.4-12.8 8.533333-21.333333 8.533333z" p-id="3790" fill="#aaaaaa"></path>
                </svg>
            </span>
        </div>
        <ul class="open-sub-menu-list" ref="opensubmenulist">
            <slot>
            </slot>
        </ul>
    </li>
</template>

<script>
    import Open from '../../utils/open_comm.js'
    export default {
        name: 'OpenSubMenu',
        props: {
            // title: {
            //     type: String,
            //     default: '菜单'
            // }
        },
        data() {
            return {
                height: 0,
                isShow: false,
                element: '',
                paddingLeft: '20px'
            }
        },
        mounted() {
            this.element = this.$refs.opensubmenulist;
            this.height = this.element.scrollHeight;
            this.element.style.height = '0px';
            let el = this.$refs.opensubmenu;
            let pel = el.parentNode;
            if(pel.getAttribute('class') == 'open-sub-menu-list'){
                this.paddingLeft = '45px'
            }
        },
        methods: {
            toggleMenu(){
                this.isShow ? this.isShow = false : this.isShow = true;
                if(this.isShow){
                    this.iconRotateUp(this)
                    this.heightUp();
                }else{
                    this.iconRotateDown(this);
                    this.heightDown();
                }
            },
            iconRotateUp(self){
                let el = self.$refs.openmenuicon;
                el.style.transform = 'rotate(90deg)';
            },
            iconRotateDown(self){
                let el = self.$refs.openmenuicon;
                el.style.transform = 'rotate(-0deg)';
            },
            // 打开菜单
            heightUp(){
                let height = this.height;
                let h = 0;
                let time;
                time = setInterval(()=>{
                    h += 5;
                    if(h >= height){
                        clearInterval(time);
                        this.element.style.height = '';
                    }else{
                        this.element.style.height = h + 'px';
                    }
                },5)
            },
            // 收起菜单
            heightDown(){
                let height = this.height;
                let time;
                time = setInterval(()=>{
                    height -= 5;
                    if(height <= 0){
                        this.element.style.height = 0 + 'px'
                        clearInterval(time);
                    }else{
                        this.element.style.height = height + 'px';
                    }
                },5)
            }
        }
    }
</script>

<style scoped>
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .open-sub-menu{
        width: inherit;
    }
    .open-sub-menu-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: inherit;
        box-sizing: border-box;
        padding: 0 20px 0 v-bind(paddingLeft);
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        color: #aaa;
        font-size: 13.4px;
    }
    .open-sub-menu-title:hover{
        background: #333;
        color: #1890ff;
    }
    .open-sub-menu-list{
        max-height: auto;
        overflow: hidden;
    }
    .osmt-icon{
        display: inline-block;
        height: 20px;
        line-height: 20px;
        width: 20px;
        text-align: center;
        font-size: 12px;
        transition: all 0.3s;
    }
</style>
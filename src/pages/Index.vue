<template>
    <div class="index">
        <Container>
            <Aside>
                <Menu></Menu>
            </Aside>
            <Main>
                <Header>
                    <Navbar></Navbar>
                </Header>
                <Main class="main">
                    <router-view></router-view>
                </Main>
            </Main>
        </Container>
    </div>
</template>

<script setup lang="ts">
    import Container from '../components/layout/Container.vue'
    import Aside from '../components/layout/Aside.vue'
    import Main from '../components/layout/Main.vue'
    import Header from '../components/layout/Header.vue'
    import Menu from '../components/Menu.vue'
    import Navbar from '../components/Navbar.vue'
</script>

<style scoped>
    .index{
        width: 100%;
        height: 100%;
        background: var(--app-bg-color);
    }
    .main{
        overflow: hidden;
        overflow-y: scroll;
    }
    ::-webkit-scrollbar{
        display: none;
    }
</style>
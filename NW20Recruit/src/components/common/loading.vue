<template>
    <div class="loading">
        <div class="bg">
            <img src="@/assets/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'loading'
}
</script>

<style scoped>
.loading {
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: #000000;
    position: fixed;
}
img{
    width: 60%;
    display: block;
    left: 0;
    right: 0;
    margin: auto;
    top: 300px;
    position: relative;
}
.bg{
    width: 100%;
    height: 100%;
    background: #000;
}
</style>
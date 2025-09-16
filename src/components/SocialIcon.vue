<script setup>
    const props = defineProps({
        img: String,
        link: String,
        alt: String
    })
</script>

<template>
    <a :href="props.link" target="_blank">
        <img class="social-img" :src="`/src/assets/${props.img}.svg`" :alt="props.alt">
    </a>
</template>

<style scoped>
    .social-img {
    /* ce filter permet de modifier la couleur de mon logo d'origine */     
        filter: 
            grayscale(100%) 
            brightness(70%) 
            contrast(250%)
            opacity(0.8);
        margin-right: 10px;
        width: 35px;
    }

    .social-img:hover {
        filter: none;
        transform: rotateY(360deg);
        transition: 0.5s ease;
    }
</style>
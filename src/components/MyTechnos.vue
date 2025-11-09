<script setup>

</script>

<template>
    <section id="skills">
        <h2 class="text-highlight-1 section-title ">Technos utilisées</h2>
        <div id="icons-list">
            <div class="techno-container"><i class="techno-icon devicon-php-plain colored"></i></div>
            <div class="techno-container"><i class="techno-icon devicon-html5-plain colored"></i></div>
            <div class="techno-container"><i class="techno-icon devicon-java-plain colored"></i></div>
            <div class="techno-container"><i class="techno-icon devicon-css3-plain colored"></i></div>
            <div class="techno-container"><i class="techno-icon devicon-javascript-plain colored"></i></div>
            <div class="techno-container"><i class="techno-icon devicon-symfony-original colored"></i></div>
            <div class="techno-container"><i class="techno-icon devicon-vuejs-plain colored"></i></div>
            <div class="techno-container"><i class="techno-icon devicon-mysql-original colored"></i></div>
            <div class="techno-container"><i class="techno-icon devicon-git-plain colored"></i></div>
            <div class="techno-container"><i class="techno-icon devicon-jquery-plain colored"></i></div>
        </div>
    </section>
</template>

<style scoped>
    #skills {
        margin-top: 60px;
    }

    #icons-list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 5px;
        grid-row-gap: 50px;
        margin-top: 35px;
    }

    .techno-container {
        text-align: center;
        color: var(--vt-c-custom-text-1);
        transition: transform 0.5s;
    }

    .techno-container:hover {
        transform: rotate(15deg);
        color: var(--vt-c-custom-text-2);
    }

    .techno-icon {
        font-size: 80px;
        margin: 0 auto;
    }

    @media screen and (max-width : 905px) {
        #icons-list {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, 1fr);
            grid-column-gap: 5px;
            grid-row-gap: 40px;
        }
    }

    @media screen and (max-width : 450px) {
        #icons-list {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(5, 1fr);
            grid-column-gap: 5px;
            grid-row-gap: 20px;
        }
    }

</style>
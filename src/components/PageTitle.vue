<script setup>
    import SocialIcon from './SocialIcon.vue';
</script>

<template>
    <section id="top-line">
        <img id="profile-img" src="../assets/myPicture.png" alt="my picture" width="300px" height="300px"/> 
        <div id="line">
            <p>Je suis <span class="text-highlight-1">Axel Hayalian</span>, 
                Développeur Web </p>
        </div>
        <div id="social">
            <SocialIcon img="in50" alt="Linkedin" link="https://www.linkedin.com/in/axel-hayalian/"/>
            <SocialIcon img="git50" alt="GitHub" link="https://github.com/dashboard"/>
        </div>
    </section>
</template>

<style scoped>
    #top-line {
        margin-top: 50px;
        width: 100%;
        height: 300px;
    }   

    #top-line #profile-img {
        float: left;
        margin-right: 50px;
    }

    #top-line #lin  {
        float: left;
        transform: translateY(40%);
        text-align: center;
    }

    #top-line p {
        font-size: 42px;
        line-height: 60px;
    }

    #top-line p span {
        font-weight: bold;
    }
    
    @media screen and (max-width: 905px) {
        #top-line #profile-img {
            display: none;
        }

        #top-line #line {
            float: none;
            transform: translateY(0%);
        }

        #top-line p {
            font-size: 36px;
        }
    }
</style>
<script setup>
    import { ref }  from 'vue';


    // variable pour stocker l'onglet active de la société
    let activeBloc = ref(0);

    let experiences = ref([
        {
            title: "Groupe Royer",
            date: "15 Avril 2024 / 07 Juin 2024",
            lines: [
                "Développement logiciel",
                "Gestion de Projets",
            ],
        },
        {
            title: "Formation DWWM, L'ENI",
            date: "Octobre 2023 /  Avril 2024",
            lines: [
                "Développement de site Web",
                "Gestion de projets en équipe",
                "Découverte de langage et Framework Back et Front-end",
            ], 
        },
        {
            title: "Educateur Adjoint d'Angers",
            date: "Novembre 2022 / Août 2023",
            lines: [
                "Construction de projet éducatif et en équipe",
                "Accompagnement d'enfants en difficulté",
            ], 
        },
        {
            title: "Intérime",
            date: "Novembre 2021 / Juillet 2022",
            lines: [
                "Diverse entreprise ",
                "Diverse mission",
            ],
        },
        {
            title: "Opticien-Lunettier",
            date: "Septembre 2018 / Août 2020",
            lines: [
                "Recherche des besoins du client",
                "Conseil et vente de produits selon les clients",
                "prise de mesure et adaptation",
            ],
        },
    ]);

    const showXP = (id) => {
        activeBloc.value = id;
    };

    

</script>

<template>
    <section id="xp-containe">
        <h2 class="text-highlight-1 section-title">Expériences</h2>
        <div id="xp-container">
            <div id="left-cards">
                <div id="company-card">
                    <div :class="activeBloc === 0 ? 'active' : ''" class="company fw600" @click="showXP(0)">{{ experiences[0].title }}
                        <div class="tiles">
                            <div class="tile tile-1"></div>
                            <div class="tile tile-2"></div>
                            <div class="tile tile-3"></div>
                            <div class="tile tile-4"></div>
                            <div class="tile tile-5"></div>
                            <div class="tile tile-6"></div>
                            <div class="tile tile-7"></div>
                            <div class="tile tile-8"></div>
                            <div class="tile tile-9"></div>
                            <div class="tile tile-10"></div>
                        </div>
                    </div>
                </div>
                <div id="company-card">
                    <div :class="activeBloc === 1 ? 'active' : ''" class="company fw600" @click="showXP(1)">Formation avec L'ENI                
                        <div class="tiles">
                            <div class="tile tile-1"></div>
                            <div class="tile tile-2"></div>
                            <div class="tile tile-3"></div>
                            <div class="tile tile-4"></div>
                            <div class="tile tile-5"></div>
                            <div class="tile tile-6"></div>
                            <div class="tile tile-7"></div>
                            <div class="tile tile-8"></div>
                            <div class="tile tile-9"></div>
                            <div class="tile tile-10"></div>
                        </div>
                    </div>
                </div>
                <div id="company-card">
                    <div :class="activeBloc === 2 ? 'active' : ''" class="company fw600" @click="showXP(2)">Educateur Adjoint d'Angers
                        <div class="tiles">
                            <div class="tile tile-1"></div>
                            <div class="tile tile-2"></div>
                            <div class="tile tile-3"></div>
                            <div class="tile tile-4"></div>
                            <div class="tile tile-5"></div>
                            <div class="tile tile-6"></div>
                            <div class="tile tile-7"></div>
                            <div class="tile tile-8"></div>
                            <div class="tile tile-9"></div>
                            <div class="tile tile-10"></div>
                        </div>
                    </div>
                </div>
                <div id="company-card">
                    <div :class="activeBloc === 3 ? 'active' : ''" class="company fw600" @click="showXP(3)">Intérime
                        <div class="tiles">
                            <div class="tile tile-1"></div>
                            <div class="tile tile-2"></div>
                            <div class="tile tile-3"></div>
                            <div class="tile tile-4"></div>
                            <div class="tile tile-5"></div>
                            <div class="tile tile-6"></div>
                            <div class="tile tile-7"></div>
                            <div class="tile tile-8"></div>
                            <div class="tile tile-9"></div>
                            <div class="tile tile-10"></div>
                        </div>
                    </div>
                </div>
                <div id="company-card">
                    <div :class="activeBloc === 4 ? 'active' : ''" class="company fw600" @click="showXP(4)">Opticien-Lunettier
                        <div class="tiles">
                            <div class="tile tile-1"></div>
                            <div class="tile tile-2"></div>
                            <div class="tile tile-3"></div>
                            <div class="tile tile-4"></div>
                            <div class="tile tile-5"></div>
                            <div class="tile tile-6"></div>
                            <div class="tile tile-7"></div>
                            <div class="tile tile-8"></div>
                            <div class="tile tile-9"></div>
                            <div class="tile tile-10"></div>
                        </div>
                    </div>
                </div>               
            </div>
            <!--<div id="left-cards">
                <p :class="activeBloc === 0 ? 'active' : ''" class="company fw600" @click="showXP(0)">Ecole Numérique et de l'Informatique (ENI)</p>
                <p :class="activeBloc === 1 ? 'active' : ''" class="company fw600" @click="showXP(1)">Ecole Numérique et de l'Informatique (ENI)</p>
                <p :class="activeBloc === 2 ? 'active' : ''" class="company fw600" @click="showXP(2)">Groupe Royer</p>
            </div>
            -->
            <div id="right-cards">
                <ul>
                    <li v-for="line in experiences[activeBloc].lines" :key="line">
                        {{ line }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style>
    #xp-container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
    }

    #left-cards {
        flex: 0 0 300px;
    }
    
    .company {
        background-color: rgba(24, 24, 27, 0.781);
        padding: 1em;
        margin: 1em 0;
        border-radius: 10px;
        z-index: 1;
        cursor: pointer;
        transition: all 0.3s ease-in-out; /* pour changer la vitesse: lent-départ rapide-milieu et lent-fin */
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.699);
        position: relative; /* important pour positionner les effet lumineux (tiles)*/ 
        overflow: hidden; /* pour cacher les tiles en dehors du conteneur */
        border-left-style: solid;
        border-left-color: transparent;
        border-left-width: 5px;

        &::before {
            content: '';
            width: 150%;
            padding-bottom: 150%;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            bottom: 55%;
            filter : blur(35px);
            opacity: .1;
            transform: translateX(-50%);
            background-image: conic-gradient(
                from 205deg at 50% 50%, 
            rgba(16, 185, 129, 0) 0deg, 
            #10B981 25deg, 
            rgba(52, 211, 153, 0.18) 295deg,
            rgba(16, 185, 129, 0) 
            360deg
            );
        }
    }

    .tiles {
        position: absolute;
        inset: 0;
        pointer-events: none; /* pour que les tiles ne bloquent pas les clics */

        .tile {
            position : absolute;
            background-color: rgba(29, 172, 124, 0.164);
            opacity : 0;
            filter : blur(2px);
            animation-name: tile;
            animation-duration: 8s;
            animation-iteration-count: infinite;
        }

        .tile-1 { top: 0; left: 0; height: 10%; width: 22.5%; }
        .tile-2 { top: 0; left: 22.5%; height: 10%; width: 27.5%; animation-delay: -6s; }
        .tile-3 { top: 0; left: 50%; height: 10%; width: 27.5%; animation-delay: -4s; }
        .tile-4 { top: 0; left: 77.5%; height: 10%; width: 22.5%; animation-delay: -2s; }
        .tile-5 { top: 10%; left: 0; height: 22.5%; width: 22.5%; animation-delay: -4s; }
        .tile-6 { top: 10%; left: 22.5%; height: 22.5%; width: 27.5%; animation-delay: -2s; }
        .tile-7 { top: 10%; left: 50%; height: 22.5%; width: 27.5%; }
        .tile-8 { top: 10%; left: 77.5%; height: 22.5%; width: 22.5%; animation-delay: -4s; }
        .tile-9 { top: 32.5%; left: 50%; height: 22.5%; width: 27.5%; animation-delay: -6s; }
        .tile-10 { top: 32.5%; left: 77.5%; height: 22.5%; width: 22.5%; animation-delay: -2s; }
    }

    

    .company:hover  {
       box-shadow: 0 0 1em #e27e7f;
       border-radius: 10px;
    }

    .company.active {
       background-color: #6c7099;
       border-left-color: #e27e7f;
       .tile {
        display: none;
       }
    }

    #right-cards {
        flex: 2 ; /* le 2 correspond à 2x l'espèce qu'il prend*/
        background-color: rgba(24, 24, 27, 0.781);  /* Même que .company pour la cohérence */
        border-radius: 10px;
        margin-left: 15%;
        padding: 1em;

        ul {
            list-style: none;
            padding: 1.5em;

            li {
                margin-bottom: 1em;
                position: relative;
                
                    &::before {
                        content: '\2B17';
                        color: #e27e7f;
                        position: absolute;
                        left: -1.5em;
                        
                    }
            }
        }

    }

    @keyframes tile {
        0%, 12.5%, 100% { opacity: 1; } /* visible de 0 à 12,5% et de 82,5% à 100% du temps */
        25%, 82.5% { opacity: 0; } /* invisible de 25% à 82,5% du temps */
    }

</style>
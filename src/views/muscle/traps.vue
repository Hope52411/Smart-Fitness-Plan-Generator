<template>
    <div class="muscle-page">
        <h1>🏋️ Front Traps</h1>
        <p class="intro">
            The front part of the trapezius, also known as the upper traps, plays a crucial role in shoulder elevation,
            neck support, and posture alignment. Strengthening this muscle improves stability in pressing movements and
            prevents neck and shoulder strain during lifting or carrying tasks.
        </p>

        <div class="selectors">
            <div class="selector-block">
                <label>Select Gender:</label>
                <select v-model="selectedGender">
                    <option disabled value="">Please select</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>

            <div class="selector-block">
                <label>Select Equipment:</label>
                <select v-model="selectedEquipment">
                    <option disabled value="">Please select</option>
                    <option>Dumbbell</option>
                    <option>Barbell</option>
                    <option>Bodyweight</option>
                    <option>Resistance Band</option>
                    <option>Other</option>
                </select>
            </div>

            <button @click="loadRecommendations" :disabled="!canRecommend">Show Recommended Exercises</button>
        </div>

        <div v-if="recommendations.length" class="recommendations">
            <h3>🎯 Recommended Exercises:</h3>
            <ul>
                <li v-for="(item, index) in recommendations" :key="index">
                    <h4>{{ item.name }}</h4>
                    <p>{{ item.description }}</p>
                    <img :src="item.gif" alt="exercise demo" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedGender: '',
            selectedEquipment: '',
            recommendations: []
        };
    },
    computed: {
        canRecommend() {
            return this.selectedGender && this.selectedEquipment;
        }
    },
    methods: {
        loadRecommendations() {
            const data = {
                Dumbbell: {
                    Male: [
                        {
                            name: 'Dumbbell Shrugs',
                            description: 'Lift shoulders straight up while holding dumbbells to target upper traps.',
                            gif: 'https://i.pinimg.com/originals/36/1d/5c/361d5cc869dfda52383556ef9cab1934.gif'
                        },
                        {
                            name: "Dumbbell Farmer's Carry",
                            description: 'Walk with heavy dumbbells to build trap and grip strength.',
                            gif: 'https://barbend.com/wp-content/uploads/2024/02/farmers-carry-with-dumbbells-barbend-movement-gif-masters.gif'
                        }
                    ],
                    Female: [
                        {
                            name: 'Light Dumbbell Shrug',
                            description: 'Controlled shrug to improve posture and trap tension.',
                            gif: 'https://global-uploads.webflow.com/5d1d0d3f53ced35a29dbe169/5e4bf302ebbd887a08b94be0_speed-front-shrugs-dumbbells-exercise-anabolic-aliens.gif'
                        }
                    ]
                },
                Barbell: {
                    Male: [
                        {
                            name: 'Barbell Shrugs',
                            description: 'Classic mass-building trap exercise with a loaded barbell.',
                            gif: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/03/Barbell-Shrug.gif'
                        },
                        {
                            name: 'Upright Row',
                            description: 'Pull barbell up to collarbone level, engaging upper traps and delts.',
                            gif: 'https://cdn.shopify.com/s/files/1/0449/8453/3153/files/How_to_Do_Upright_Rows_480x480.gif?v=1689923129'
                        }
                    ],
                    Female: [
                        {
                            name: 'Barbell Upright Row',
                            description: 'Lightweight version for shoulder and trap toning.',
                            gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Barbell-Upright-Row.gif'
                        }
                    ]
                },
                Bodyweight: {
                    Male: [
                        {
                            name: 'Wall Handstand Hold',
                            description: 'Engages upper traps and delts for shoulder stability.',
                            gif: 'https://bodyweighttrainingarena.com/wp-content/uploads/2023/09/Wall-handstand-chest-facing.gif'
                        }
                    ],
                    Female: [
                        {
                            name: 'Scapular Push-Up',
                            description: 'Push-up variation focusing on scapula movement and trap activation.',
                            gif: 'https://static1.squarespace.com/static/5ea57caad08f387b2e9827bd/61c7ae9bf497521cde72e756/6436b8be9b5bbc065a0da2eb/1695380423923/Scapular+Push+Ups.png?format=1500w'
                        }
                    ]
                },
                'Resistance Band': {
                    Male: [
                        {
                            name: 'Band Shrug',
                            description: 'Step on the band and lift shoulders for a resistance trap workout.',
                            gif: 'https://musclemagfitness.com/wp-content/uploads/shrugs-with-bands-exercise.gif'
                        }
                    ],
                    Female: [
                        {
                            gif: 'https://www.shutterstock.com/image-vector/coming-soon-speechbubble-advertising-megaphone-600nw-2511768889.jpg'
                        }
                    ]
                },
                Other: {
                    Male: [
                        {
                            gif: 'https://www.shutterstock.com/image-vector/coming-soon-speechbubble-advertising-megaphone-600nw-2511768889.jpg'
                        }
                    ],
                    Female: [
                        {
                            gif: 'https://www.shutterstock.com/image-vector/coming-soon-speechbubble-advertising-megaphone-600nw-2511768889.jpg'
                        }
                    ]
                }
            };

            this.recommendations =
                data[this.selectedEquipment]?.[this.selectedGender] || [];
        }
    }
};
</script>

<style scoped>
.muscle-page {
    max-width: 800px;
    margin: 40px auto;
    padding: 40px;
    background: rgba(255, 255, 255, 0.92);
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    font-family: 'Segoe UI', sans-serif;
    max-height: 700px;
    overflow-y: auto;
    overflow-x: hidden;
}

.muscle-page h1 {
    font-size: 28px;
    color: #1f2937;
    margin-bottom: 10px;
    text-align: center;
}

.intro {
    margin-bottom: 30px;
    font-size: 18px;
    color: #4b5563;
    text-align: center;
    line-height: 1.6;
}

.selectors {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
}

.selector-block {
    display: flex;
    flex-direction: column;
    font-size: 16px;
}

.selector-block label {
    margin-bottom: 8px;
    font-weight: bold;
}

.selector-block select {
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
    background-color: #f9fafb;
}

button {
    margin-top: 10px;
    align-self: flex-start;
    background-color: #10b981;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
}

button:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
}

button:hover:enabled {
    background-color: #059669;
}

.recommendations {
    margin-top: 40px;
}

.recommendations h3 {
    font-size: 22px;
    margin-bottom: 20px;
    color: #111827;
}

.recommendations ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

.recommendations li {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.recommendations li h4 {
    margin-bottom: 10px;
    font-size: 18px;
    color: #1f2937;
}

.recommendations li p {
    font-size: 15px;
    color: #4b5563;
    margin-bottom: 10px;
}

.recommendations img {
    width: 500px;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #ddd;
}
</style>
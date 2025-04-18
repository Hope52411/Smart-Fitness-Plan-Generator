<template>
    <div class="muscle-page">
        <h1>✊ Hands / Grip Strength</h1>
        <p class="intro">
            Strong hands and grip are essential for everyday tasks like carrying groceries, opening jars, and lifting
            weights. This area includes the muscles of the fingers, palms, and forearms that control grasp, pinch, and
            wrist stability. Strengthening your grip boosts overall performance and injury prevention.
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
                            name: 'Dumbbell Wrist Curl',
                            description: 'Sit and curl the dumbbell with your wrist, palm facing up, to train forearm flexors.',
                            gif: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2021/01/Dumbbell-Wrist-Curl.gif'
                        },
                        {
                            name: 'Dumbbell Finger Roll',
                            description: 'Let dumbbell roll down fingers and curl back up—targets grip control.',
                            gif: 'https://burnfit.io/wp-content/uploads/2023/11/DB_WRIST_CURL.gif'
                        }
                    ],
                    Female: [
                        {
                            name: 'Light Dumbbell Wrist Rotation',
                            description: 'Gently rotate wrist holding dumbbell for mobility and strength.',
                            gif: 'https://www.onlinearcheryacademy.com/wp-content/uploads/2019/05/Recurve-Archery-Strength-Exercises-Wrist-Rotations.gif'
                        }
                    ]
                },
                Barbell: {
                    Male: [
                        {
                            name: 'Barbell Hold',
                            description: 'Hold heavy barbell as long as possible to test grip endurance.',
                            gif: 'https://godsofgrip.com/cdn/shop/articles/barbell-holds.jpg?v=1618048778&width=1500'
                        }
                    ],
                    Female: [
                        {
                            name: 'Barbell Wrist Curl',
                            description: 'Use barbell to do wrist curl on a bench for grip and forearm development.',
                            gif: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2021/01/Barbell-Wrist-Curl.gif'
                        }
                    ]
                },
                Bodyweight: {
                    Male: [
                        {
                            name: 'Dead Hang',
                            description: 'Hang from a pull-up bar to develop finger and hand strength.',
                            gif: 'https://media.self.com/photos/66d8d85193bb7784d44be577/master/w_1600%2Cc_limit/Landyn-active-hang-pull-up-bar%2520(1).gif'
                        }
                    ],
                    Female: [
                        {
                            gif: 'https://www.shutterstock.com/image-vector/coming-soon-speechbubble-advertising-megaphone-600nw-2511768889.jpg'
                        }
                    ]
                },
                'Resistance Band': {
                    Male: [
                        {
                            name: 'Band Finger Spread',
                            description: 'Loop band around fingers and spread outward to work hand extensors.',
                            gif: 'https://www.stylecraze.com/wp-content/uploads/2019/01/Finger-Stretches.gif'
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
                            name: 'Grip Crusher Squeeze',
                            description: 'Use hand gripper tool for explosive grip repetitions.',
                            gif: 'https://www.nerdfitness.com/wp-content/uploads/2019/06/improve-grip-strength-with-grip-crushers.gif'
                        }
                    ],
                    Female: [
                        {
                            name: 'Soft Ball Squeeze',
                            description: 'Squeeze soft ball for wrist strength and finger control—good for rehab.',
                            gif: 'https://i.pinimg.com/originals/1f/f1/3c/1ff13c32ebeff49f7c3ee4bd2063369b.gif'
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
    width: 400px;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #ddd;
}
</style>
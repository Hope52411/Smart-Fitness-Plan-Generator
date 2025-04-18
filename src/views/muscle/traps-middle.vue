<template>
    <div class="muscle-page">
        <h1>🏋️ Middle Traps</h1>
        <p class="intro">
            The middle traps are located between the shoulder blades and are responsible for scapular retraction and
            posture support. Strengthening these muscles improves upper back definition, posture, and pulling
            performance in exercises like rows and deadlifts.
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
                            name: 'Dumbbell Reverse Fly',
                            description: 'Bend forward and pull dumbbells out to side, squeeze shoulder blades.',
                            gif: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/dumbbellreversefly-1456949026.gif?crop=1xw:1xh;center,top&resize=1200:*'
                        }
                    ],
                    Female: [
                        {
                            name: 'Seated Reverse Fly',
                            description: 'Sit and raise light dumbbells behind to build scapular control.',
                            gif: 'https://www.garagegymreviews.com/wp-content/uploads/seated-dumbbell-reverse-fly.gif'
                        }
                    ]
                },
                Barbell: {
                    Male: [
                        {
                            name: 'Barbell Row (Underhand)',
                            description: 'Use underhand grip and pull bar to midsection, squeezing traps.',
                            gif: 'https://burnfit.io/wp-content/uploads/2023/11/REV_BB_ROW.gif'
                        }
                    ],
                    Female: [
                        {
                            name: 'Smith Machine Row',
                            description: 'Fixed machine for guided horizontal rowing.',
                            gif: 'https://burnfit.io/wp-content/uploads/2023/11/SM_ROW.gif'
                        }
                    ]
                },
                Bodyweight: {
                    Male: [
                        {
                            name: 'Wall Scapular Slide',
                            description: 'Stand against wall and slide arms up/down while pinching shoulder blades.',
                            gif: 'https://i.pinimg.com/736x/cd/c4/42/cdc4423551a4d38f02b442709196dde1.jpg'
                        }
                    ],
                    Female: [
                        {
                            name: 'Prone Y Raise',
                            description: 'Lie on stomach and raise arms in “Y” shape to activate mid traps.',
                            gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/10/dumbbell-incline-y-raise.gif'
                        }
                    ]
                },
                'Resistance Band': {
                    Male: [
                        {
                            name: 'Band Face Pull',
                            description: 'Pull band toward face with elbows wide to engage rear delts & mid traps.',
                            gif: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/12/bandfacepull-1480628546.gif'
                        }
                    ],
                    Female: [
                        {
                            name: 'Band Pull-Apart',
                            description: 'Stretch band across chest to strengthen upper back and posture.',
                            gif: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/12/bandpullapart-1480689234.gif'
                        }
                    ]
                },
                Other: {
                    Male: [
                        {
                            name: 'Cable Face Pull',
                            description: 'Use rope attachment, pull to forehead with external rotation.',
                            gif: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147505025/images/cbe6a1d-25a4-aba6-cbe0-1eb8c8a8d351_cable-face-pull.gif'
                        }
                    ],
                    Female: [
                        {
                            name: 'Machine Rear Delt / Trap Row',
                            description: 'Use reverse pec deck machine to isolate mid traps.',
                            gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/cable-rear-delt-row.gif'
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
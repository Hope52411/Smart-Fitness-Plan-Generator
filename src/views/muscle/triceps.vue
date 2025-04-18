<template>
    <div class="muscle-page">
        <h1>💪 Triceps</h1>
        <p class="intro">
            The triceps are located at the back of the upper arm and are responsible for elbow extension. They play a
            major role in pushing movements such as pressing and straightening the arm. Strong triceps enhance arm
            definition and support strength in chest and shoulder exercises.
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
                            name: 'Dumbbell Overhead Extension',
                            description: 'Raise dumbbell overhead and extend arm to train the long head of the triceps.',
                            gif: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/dumbbelloverheadtricepsextension-1456956005.gif'
                        },
                        {
                            name: 'Dumbbell Kickback',
                            description: 'Bend forward and extend elbow back—isolates triceps nicely.',
                            gif: 'https://media.tenor.com/PZjMZqyfPgcAAAAM/db-tricep-kickback.gif'
                        }
                    ],
                    Female: [
                        {
                            name: 'Seated Dumbbell Extension',
                            description: 'Seated version with lighter weight for more control.',
                            gif: 'https://i.pinimg.com/originals/74/9e/16/749e16f31b7a2df19ac09f5fcdcfcdf7.gif'
                        }
                    ]
                },
                Barbell: {
                    Male: [
                        {
                            name: 'Close-Grip Barbell Bench Press',
                            description: 'Hands close together, pushing through triceps instead of chest.',
                            gif: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2017/10/narrowgripbenchpress-1509458862.gif?resize=640:*'
                        },
                        {
                            name: 'EZ Bar Skull Crusher',
                            description: 'Lower bar to forehead, extend to target all 3 heads of triceps.',
                            gif: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2017/10/skullcrusher-1509462325.gif?resize=640:*'
                        }
                    ],
                    Female: [
                        {
                            name: 'EZ Bar Overhead Extension',
                            description: 'More ergonomic grip for safer overhead triceps training.',
                            gif: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/04/cable-rope-overhead-triceps-extension.gif'
                        }
                    ]
                },
                Bodyweight: {
                    Male: [
                        {
                            name: 'Diamond Push-Up',
                            description: 'Hands in diamond shape, focusing tension on triceps.',
                            gif: 'https://images.ctfassets.net/6ilvqec50fal/3hTY3FIEwYdNloN5V3HL7G/26e28de169b01e5e79332e5418803470/Diamond_Push-Up_GIF.gif'
                        },
                        {
                            name: 'Triceps Bench Dips',
                            description: 'Lower body off bench using arms to push back up.',
                            gif: 'https://miro.medium.com/v2/resize:fit:720/0*sgzAqPZZtES4o21t.gif'
                        }
                    ],
                    Female: [
                        {
                            name: 'Knee Triceps Push-Up',
                            description: 'Modified push-up with focus on elbow extension.',
                            gif: 'https://media.post.rvohealth.io/wp-content/uploads/sites/2/2020/08/GRT-1.18.TricepPushupOnKnees.gif'
                        }
                    ]
                },
                'Resistance Band': {
                    Male: [
                        {
                            name: 'Band Triceps Pushdown',
                            description: 'Simulate cable pushdown with anchored band.',
                            gif: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif'
                        }
                    ],
                    Female: [
                        {
                            name: 'Overhead Band Extension',
                            description: 'Extend arms upward with band for long head isolation.',
                            gif: 'https://media.tenor.com/BiD98h7-kf0AAAAM/banded-tricep.gif'
                        }
                    ]
                },
                Other: {
                    Male: [
                        {
                            name: 'Cable Pushdown',
                            description: 'Use cable pulley to push handle down with triceps power.',
                            gif: 'https://cdn.shopify.com/s/files/1/0618/9462/3460/files/ezgif_com-gif-maker-1.gif'
                        }
                    ],
                    Female: [
                        {
                            name: 'Rope Pushdown',
                            description: 'Cable rope attachment allows for full triceps extension.',
                            gif: 'https://www.verywellfit.com/thmb/9287vIQF11Yafj48oAzFuyHBnL4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/52-3498613-Triceps-Pushdown-GIF-04bb16783f5543a8be193ff64861111d.gif'
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
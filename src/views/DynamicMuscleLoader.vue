<template>
  <div>
    <!-- ✅ 调试信息展示 -->
    <div v-if="!AsyncComponent" style="color: red; text-align: center; margin-top: 60px;">
      ❌ 页面未找到：{{ part }}
    </div>

    <!-- ✅ 正常加载组件 -->
    <component v-else :is="AsyncComponent" />
  </div>
</template>

<script>
const muscleComponents = {
  'back-calves': () => import('@/views/muscle/back-calves.vue'),
  'back-thigh': () => import('@/views/muscle/back-thigh.vue'),
  'back-traps': () => import('@/views/muscle/back-traps.vue'),
  'belly-side': () => import('@/views/muscle/belly-side.vue'),
  'belly': () => import('@/views/muscle/belly.vue'),
  'chest': () => import('@/views/muscle/chest.vue'),
  'foreshoulder': () => import('@/views/muscle/foreshoulder.vue'),
  'front-arms': () => import('@/views/muscle/front-arms.vue'),
  'front-calves': () => import('@/views/muscle/front-calves.vue'),
  'forearm': () => import('@/views/muscle/forearm.vue'),
  'front-thigh': () => import('@/views/muscle/front-thigh.vue'),
  'front-traps': () => import('@/views/muscle/front-traps.vue'),
  'glutes': () => import('@/views/muscle/glutes.vue'),
  'hands': () => import('@/views/muscle/hands.vue'),
  'lats': () => import('@/views/muscle/lats.vue'),
  'lowerback': () => import('@/views/muscle/lowerback.vue'),
  'rear-shoulders': () => import('@/views/muscle/rear-shoulders.vue'),
  'traps-middle': () => import('@/views/muscle/traps-middle.vue'),
  'triceps': () => import('@/views/muscle/triceps.vue')
};

export default {
  name: 'DynamicMuscleLoader',
  props: ['part'],
  data() {
    return {
      AsyncComponent: null
    };
  },
  created() {
    console.log('✅ 收到路由参数 part：', this.part);
    const loader = muscleComponents[this.part];
    if (loader) {
      // 异步加载对应组件
      loader().then(module => {
        this.AsyncComponent = module.default || module;
      }).catch(err => {
        console.error('❌ 加载 muscle 页面失败:', err);
      });
    } else {
      console.warn('⚠️ 未找到匹配页面组件:', this.part);
    }
  }
};
</script>

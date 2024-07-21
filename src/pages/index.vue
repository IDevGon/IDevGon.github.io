<script setup lang="ts">
import dayjs from 'dayjs';

defineOptions({
  name: 'HomePage',
});

useHead({
  title: 'Home',
});

const career = computed(() => dayjs().diff('2020-03-02', 'year'));
</script>

<template>
  <div class="home-container">
    <NuxtImg loading="lazy" width="150" height="150" src="https://avatars.githubusercontent.com/u/106735547?v=4" alt="devGon 사진" />
    <h1>
      안녕하세요, dev<em>G</em>on 이에요! 👋🏻
      <br />
      저는 만 <em>{{ career }}</em> 년차 Front-End 개발자에요.
    </h1>
    <p>이 블로그에서는 제가 공부한 것들을 정리하고, 제가 경험한 것들을 공유하려고 해요. 📚</p>
    <div class="career">
      <p class="present">
        현재 <NuxtLink to="https://m.pet-friends.co.kr">펫프렌즈</NuxtLink> 에서 커머스 개발 및 그로스 개발을 하고 있어요.
        <br />
      </p>
      <p>이전에는, <NuxtLink to="http://epiens.com/">이피엔스</NuxtLink> 에서 v-커머스 개발을 경험했어요.</p>
    </div>
    <p>저는 <em class="react">React</em>, <em class="next">Next.js</em>, <em class="ts">TypeScript</em>, <em class="vue">Vue</em>, <em class="nuxt">Nuxt</em> 등을 할 수 있어요.</p>
    <p>제가 궁금하신가요? 🤗</p>
  </div>
</template>

<style scoped lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-32);

  h1 {
    margin: 0;
    line-height: 1.4;

    em {
      padding: 0;
      font-size: inherit;
      font-weight: inherit;
      color: var(--color-primary);
    }
  }

  img {
    border-radius: var(--size-half);
    border: var(--size-1) solid var(--color-border);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .career {
    p,
    a {
      line-height: 1.6;
    }

    p.present,
    p.present a {
      font-size: var(--size-20);
    }

    p.present a {
      font-weight: var(--weight-medium);
    }
  }

  em {
    color: var(--color-light);
    padding: var(--size-4) var(--size-6);
    border-radius: var(--size-6);
    font-weight: var(--weight-medium);

    &.react {
      background: var(--color-react);
    }

    &.next {
      background: var(--color-next);
    }

    &.ts {
      background: var(--color-ts);
    }

    &.vue {
      background: var(--color-vue);
    }

    &.nuxt {
      background: var(--color-nuxt);
    }
  }
}
</style>

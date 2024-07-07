<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <a href="/">DevGon</a>
      <ul>
        <li>
          <a href="/">홈</a>
        </li>
        <li>
          <a href="/resume">이력서</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <slot />
    <button class="btn-top">
      <i class="fa-solid fa-chevron-up" />
    </button>
  </main>
  <footer>
    <p>© 2024 DevGon</p>
  </footer>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
  }
}

main {
  max-width: 800px;
  min-height: 90vh;
  margin: 0 auto;

  .btn-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #333;
    color: #fff;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>

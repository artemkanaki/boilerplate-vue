<template>
  <div id="app" class="app">
    <navigation></navigation>
    <transition name="router" mode="out-in">
      <router-view class="view router-view"></router-view>
    </transition>
    <footer-block></footer-block>
  </div>
</template>

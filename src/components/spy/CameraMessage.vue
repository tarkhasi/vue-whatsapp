<template>
  <p v-if="messageVisible" class="message">{{ currentMessage }}</p>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';

const messages = [
  'Ahaaan!',
  'Nice one!',
  "What’s next?",
  'Okie dokie!',
  'That’s a yes!',
  'Waiting for the next!',
  'Got it!',
  'Cool beans!',
  "Ready for the next one!",
  'Yup, gotcha!',
  'Sweet!',
  'Roger that!',
  "Let’s go!",
  "Hit me with the next!",
  'Alrighty then!',
  'Boom! Done.',
  'On it!',
  "Keep ’em coming!",
  'Nailed it!',
  'Great stuff!',
  'Copy that!',
  'All set!',
  'Cheers!',
  'Good job!',
  'Perfecto!',
  "Bring it on!",
  "I’m waiting!",
  "Next, please!",
  "Show me more!",
  "Onwards!",
];

const messageVisible = ref(false);
let currentIndex = 0;

const currentMessage = ref(messages[currentIndex]);

function onClick() {
  messageVisible.value = true;
  currentMessage.value = messages[currentIndex];
  currentIndex = (currentIndex + 1) % messages.length;

  setTimeout(() => {
    messageVisible.value = false;
  }, 2000);
}

onMounted(() => {
  window.addEventListener('click', onClick);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', onClick);
});
</script>

<style scoped>
.message {
  position: fixed;
  top: 20px;
  right: 0;
  transform: translateX(-50%);
  background: #333;
  color: white;
  font-size: 12px;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  user-select: none;
  pointer-events: none;
  z-index: 1000;
  opacity: 0.9;
}
</style>

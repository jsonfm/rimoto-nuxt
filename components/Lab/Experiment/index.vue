<template>
    <NuxtLink :to="experimentURL" class="tw-w-full tw-h-48 tw-card tw-overflow-hidden">
        <img
            src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            class="tw-w-full tw-h-full tw-object-cover"
        />
    </NuxtLink>
</template>

<script setup lang="ts">
import { ref } from "vue";
const experimentURL = ref(`/panel/experiments/2132/preview`);
</script>

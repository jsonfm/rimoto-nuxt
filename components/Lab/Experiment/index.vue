<template>
    <NuxtLink :to="experimentURL" class="tw-w-full tw-h-36 md:tw-h-48 tw-card tw-overflow-hidden">
        <img :src="experiment?.image_url" class="tw-w-full tw-h-full tw-object-cover" />
    </NuxtLink>
</template>

<script setup lang="ts">
const { experiment } = defineProps<{
    experiment: any;
}>();
import { ref } from "vue";
const experimentURL = ref(`/panel/experiments/${experiment?.objectId}/preview`);
</script>

<template>
    <section>
        <div class="tw-min-h-screen"></div>
        <div class="tw-flex tw-flex-col tw-gap-4 tw-fixed tw-bottom-16 tw-right-4">
            <NuxtLink :to="experimentURL">
                <button class="tw-btn tw-btn-primary tw-btn-circle tw-btn-outline">
                    <Icon name="heroicons-outline:home" />
                </button>
            </NuxtLink>
            <!-- <button class="tw-btn tw-btn-primary tw-btn-circle">[]</button> -->
        </div>
    </section>
</template>

<script setup lang="ts">
const experimentURL = `/panel/experiments/1/preview`;
</script>

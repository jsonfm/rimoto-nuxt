<template>
    <section>
        <div class="tw-min-h-screen"></div>
        <div class="tw-flex tw-items-center tw-justify-center tw-mb-12">
            <NuxtLink :to="experimentURL">
                <Button> Volver </Button>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
const experimentURL = `/panel/experiments/1/preview`;
</script>

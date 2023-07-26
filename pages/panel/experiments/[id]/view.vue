<template>
    <section>
        <div class="tw-min-h-screen"></div>
        <div class="tw-flex tw-flex-col tw-gap-4 tw-fixed tw-bottom-12 tw-right-4 tw-w-16 tw-border">
            <NuxtLink :to="experimentURL">
                <Button :circle="true">V</Button>
            </NuxtLink>
            <Button> [] </Button>
        </div>
    </section>
</template>

<script setup lang="ts">
const experimentURL = `/panel/experiments/1/preview`;
</script>

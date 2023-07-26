<template>
    <section>
        <div class="tw-container">
            <div class="tw-w-full md:tw-w-3/4 tw-grid tw-grid-cols-2 md:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-4">
                <template v-for="item in [1, 2, 3, 4, 5]">
                    <LabExperiment />
                </template>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "admin",
});
</script>

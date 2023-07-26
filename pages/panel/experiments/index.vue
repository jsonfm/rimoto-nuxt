<template>
    <section>
        <div class="tw-container">
            <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
                <div class="tw-w-full md:tw-w-3/4 tw-grid tw-grid-cols-2 md:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-4">
                    <template v-for="item in [1, 2, 3, 4, 5, 6]">
                        <LabExperiment />
                    </template>
                </div>
                <div class="tw-w-full md:tw-w-1/4">
                    <div class="tw-w-32 tw-h-32 tw-card tw-drop-shadow-xl">hi</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "panel",
});
</script>

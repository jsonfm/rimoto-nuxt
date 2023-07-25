<template>
    <section>
        <div class="tw-container">
            <h4>Panel</h4>
            <div class="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-4">
                <template v-for="item in [1, 2, 3, 4, 5, 6]">
                    <LabExperiment />
                </template>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "panel",
});
</script>

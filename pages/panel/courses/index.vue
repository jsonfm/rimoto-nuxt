<template>
    <section>
        <div class="tw-container">
            <div class="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4">
                <template v-for="item in [1, 2, 3, 4]">
                    <PanelCourseCard />
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

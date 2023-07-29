<template>
    <section>
        <div class="tw-container tw-pb-20">
            <div class="tw-flex tw-items-center tw-justify-between tw-mb-10">
                <div>
                    <FormSearchInput placeholder="search..." />
                </div>
                <div class="tw-flex tw-gap-4">
                    <FilterDropDown iconName="material-symbols:date-range-rounded" />
                    <FilterDropDown iconName="material-symbols:date-range-rounded" />
                </div>
            </div>
            <div
                class="tw-grid tw-grid-cols-2 xl:tw-grid-cols-3 2xl:tw-grid-cols-4 tw-place-content-between tw-gap-y-4"
            >
                <template v-for="item in [1, 2, 3, 4, 5]">
                    <AdminPaperCard />
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

<template>
    <section>
        <div class="tw-container">
            <div class="tw-flex tw-items-center tw-justify-between tw-mb-10">
                <div>
                    <input type="search" class="tw-input" placeholder="name, author" />
                </div>
                <div class="tw-flex tw-gap-4">
                    <FilterDropDown />
                    <FilterDropDown />
                </div>
            </div>
            <div class="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4">
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

<template>
    <section class="pt-10 pb-12">
        <div class="tw-container">
            <h4 class="tw-font-bold tw-text-xl tw-mb-10">Users</h4>
            <AdminTableUsers />
            <div
                class="tw-mt-4 md:tw-mt-10 tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-items-center md:tw-items-end tw-justify-between"
            >
                <p class="tw-text-sm tw-text-slate-500">Mostrando 10 resultados por página</p>
                <Pagination />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "admin",
});
</script>

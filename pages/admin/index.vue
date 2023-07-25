<template>
    <section>
        <div class="tw-container">
            <div class="tw-w-full tw-flex tw-justify-between">
                <AdminCardKPI variant="primary" :loading="true" />
                <AdminCardKPI variant="secondary" :loading="true" />
                <AdminCardKPI variant="white" :loading="true" />
                <AdminCardKPI variant="success" :loading="true" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "admin",
});
</script>

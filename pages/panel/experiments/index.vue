<template>
    <section>
        <div class="tw-container">
            <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
                <div class="tw-w-full md:tw-w-3/4 tw-grid tw-grid-cols-2 md:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-4">
                    <template v-for="item in data">
                        <LabExperiment :experiment="item" />
                    </template>
                </div>
                <div class="tw-w-full md:tw-w-1/4 tw-px-4 tw-border-l">
                    <div>hello</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useGetExperiments } from "@/hooks/experiments";

definePageMeta({
    layout: "panel",
});

const { data } = await useGetExperiments();
</script>

<template>
    <div
        class="tw-card tw-w-36 tw-h-36 md:tw-w-56 md:tw-h-32 tw-shadow-xl tw-p-4 tw-flex tw-flex-col tw-gap-2 tw-items-center tw-justify-center"
        :class="variantClassName"
    >
        <template v-if="!loading">
            <h4 class="tw-font-bold tw-uppercase">{{ title ?? "-" }}</h4>
            <p class="tw-text-2xl xl:tw-text-4xl tw-font-semibold">{{ value ?? "-" }}</p>
        </template>
        <template v-if="loading">
            <div class="tw-bg-neutral/80 tw-animate-pulse tw-h-4 tw-w-28 md:tw-w-36 xl:tw-w-48 tw-rounded-md"></div>
            <div
                class="tw-mt-2 tw-bg-neutral/80 tw-animate-pulse tw-h-8 w-28 md:tw-w-36 xl:tw-w-48 first-letter:xl:tw-w-48 tw-rounded-md"
            ></div>
        </template>
    </div>
</template>

<script setup lang="ts">
const variants = {
    primary: "tw-bg-primary tw-text-white",
    secondary: "tw-bg-secondary tw-text-white",
    error: "tw-bg-error tw-text-white",
    neutral: "tw-bg-neutral tw-text-white",
    white: "tw-bg-white tw-text-neutral",
    success: "tw-bg-success tw-text-white",
};
const { variant = "primary", loading = false } = defineProps<{
    title?: string;
    variant?: "primary" | "secondary" | "error" | "neutral" | "white" | "success";
    loading?: boolean;
    value?: number;
}>();

const variantClassName = variants[variant];
</script>

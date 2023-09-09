<template>
    <button :class="className" :type="type" :disabled="loading">
        <template v-if="loading">
            <Icon name="svg-spinners:180-ring" />
        </template>
        <slot />
    </button>
</template>

<script setup lang="ts">
//
const variants = {
    primary: "tw-btn-primary",
    secondary: "tw-btn-secondary",
    error: "tw-btn-error",
    success: "tw-btn-success",
};

const {
    variant = "primary",
    type = "button",
    loading = false,
    circle = false,
    ...attrs
} = defineProps<{
    variant?: keyof typeof variants;
    type?: "button" | "submit" | "reset" | undefined;
    loading?: boolean;
    circle?: boolean;
}>();

const variantClassName = variants[variant];
const loadingClassName = loading ? "tw-opacity-[50%]" : "";

const className = `tw-cursor-pointer tw-w-full tw-btn !tw-text-white ${loadingClassName} ${variantClassName} ${
    circle ? "tw-btn-circle" : ""
}`;
</script>

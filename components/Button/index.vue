<template>
    <button :class="className" :type="type" :disabled="loading">
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
    variant?: "primary" | "secondary" | "error" | "success";
    type?: "button" | "submit" | "reset" | undefined;
    loading?: boolean;
    circle?: boolean;
}>();

const variantClassName = variants[variant];
const className = `tw-cursor-pointer tw-w-full tw-btn !tw-text-white ${variantClassName} ${
    circle ? "tw-btn-circle" : ""
}`;
</script>

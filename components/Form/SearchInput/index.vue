<template>
    <div class="tw-flex tw-items-center tw-justify-between">
        <input :class="inputClassName" type="search" :placeholder="placeholder" />
        <Icon name="material-symbols:search" size="20" />
    </div>
</template>

<script setup lang="ts">
const { placeholder = "Search..." } = defineProps<{
    placeholder?: string;
}>();

console.log("placeholder: ", placeholder);
const inputClassName = "tw-outline-none tw-border-none tw-bg-transparent";
</script>

<template>
    <div
        class="tw-w-8 tw-h-8 tw-shadow-xl tw-flex tw-items-center tw-justify-center tw-rounded-full tw-cursor-pointer hover:tw-text-primary tw-duration-200"
    >
        <Icon :name="iconName" />
    </div>
</template>

<script setup lang="ts">
const { iconName = "material-symbols:date-range-rounded" } = defineProps<{
    iconName?: string;
}>();
</script>

<template>
    <NuxtLink :to="to" class="panel-sidebar-link" exactActiveClass="active">
        <Icon :name="iconName" />
        <p>{{ title }}</p>
    </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    to?: string;
    title?: string;
    iconName?: string;
}
const { to, title, iconName } = defineProps<Props>();
</script>

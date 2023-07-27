<template>
    <div class="tw-h-[400px]">
        <VueCal
            class="vuecal--rounded-theme vuecal--green-theme"
            active-view="month"
            :disable-views="['years', 'year', 'week']"
        />
    </div>
</template>
<script setup lang="ts">
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
</script>

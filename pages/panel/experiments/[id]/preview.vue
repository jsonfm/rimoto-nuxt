<template>
    <section>
        <div class="tw-container">
            <h4>Hello</h4>
            <NuxtLink :to="experimentURL">
                <div class="tw-w-48">
                    <Button>Ingresar</Button>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const experimentURL = `/panel/experiments/1/view`;
</script>

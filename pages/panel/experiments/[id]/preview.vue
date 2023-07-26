<template>
    <section>
        <div class="tw-container tw-pt-14">
            <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
                <div class="tw-w-full md:tw-w-1/2 md:tw-px-12">
                    <div class="md:tw-pt-10">
                        <h4 class="text-2xl tw-font-bold tw-uppercase">hello</h4>
                        <p class="tw-text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias delectus voluptatum quam.
                            Expedita illo voluptates tenetur, dolorem ipsam tempore velit ipsum cupiditate aperiam
                            repellendus nesciunt, quod assumenda repellat ducimus nam.
                        </p>
                    </div>
                    <div class="tw-mt-4">
                        <NuxtLink :to="experimentURL">
                            <div class="tw-w-48">
                                <Button>Ingresar</Button>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
                <div class="tw-w-full md:tw-w-1/2">
                    <div class="tw-h-64 md:tw-h-96 tw-card tw-overflow-hidden tw-drop-shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                            class="tw-w-full tw-h-full tw-object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const experimentURL = `/panel/experiments/1/view`;
</script>

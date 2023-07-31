<template>
    <section>
        <div class="tw-container tw-pt-14">
            <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
                <div class="tw-w-full md:tw-w-1/2 md:tw-px-12">
                    <div class="md:tw-pt-10">
                        <h4 class="text-2xl tw-font-bold tw-uppercase">hello</h4>
                        <p class="tw-text-justify tw-max-h-[200px] tw-overflow-y-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus facere
                            laboriosam magni distinctio. Eaque, ea perspiciatis. Dolore, itaque asperiores.
                        </p>
                    </div>
                    <div>
                        <span className="tw-badge tw-badge-primary">Badge</span>
                    </div>
                    <div class="tw-mt-4 tw-flex tw-items-center tw-gap-4">
                        <NuxtLink :to="experimentURL">
                            <div class="tw-w-48">
                                <Button>Ingresar</Button>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="/panel/experiments">
                            <Button variant="secondary">Volver</Button>
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
        <div class="tw-container tw-mt-32 tw-w-full">
            <Calendar />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const experimentURL = `/panel/experiments/1/view`;
</script>

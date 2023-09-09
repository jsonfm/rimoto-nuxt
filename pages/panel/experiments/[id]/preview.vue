<template>
    <section>
        <div class="tw-container tw-pt-14">
            <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
                <div class="tw-w-full md:tw-w-1/2 md:tw-px-12">
                    <div class="md:tw-pt-10">
                        <h4 class="text-2xl tw-font-bold tw-uppercase">{{ data?.name }}</h4>
                        <p class="tw-text-justify tw-max-h-[200px] tw-overflow-y-auto">
                            {{ data?.description }}
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
                        <img :src="data?.image_url" class="tw-w-full tw-h-full tw-object-cover" />
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
import { useGetExperiment } from "@/hooks/experiments";
const route = useRoute();
const experimentId = route?.params?.id as string;
const { pending, data, error } = await useGetExperiment(experimentId);
const experimentURL = `/panel/experiments/${experimentId}/view`;
</script>

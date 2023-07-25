<template>
    <section>
        <div class="tw-pt-14 tw-min-h-screen tw-px-4 tw-container">
            <div class="tw-mb-6">Crea un Experimento</div>

            <div class="tw-flex tw-gap-4 md:tw-gap-8">
                <div class="tw-w-full md:tw-w-1/2">
                    <div class="tw-flex tw-flex-col tw tw-gap-6">
                        <FormInput label="Name" />
                        <div class="tw-w-64 tw-mt-6 tw-flex tw-justify-center">
                            <Button>Guardar</Button>
                        </div>
                    </div>
                </div>
                <div class="tw-w-full md:tw-w-1/2">
                    <div class="tw-flex tw-flex-col tw-gap-4">
                        <div class="tw-h-64 md:tw-h-64">
                            <FormInputImage />
                        </div>
                        <div class="tw-flex tw-gap-4">
                            <FormInputImage />
                            <FormInputImage />
                            <FormInputImage />
                            <FormInputImage />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
console.log("hello");
</script>

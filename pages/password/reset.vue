<template>
    <NuxtLayout>
        <section class="tw-bg-primary tw-h-screen">
            <div class="tw-flex flex-col tw-items-center tw-justify-center tw-w-full tw-h-full">
                <form
                    @submit.prevent="recovery"
                    class="tw-bg-white tw-px-4 tw-py-6 tw-card tw-flex tw-flex-col tw-items-center"
                >
                    <h4 class="text-xl text-slate-500 font-semibold tw-mb-4">Introduce tu email</h4>
                    <!-- <Alert text="Correo envíado" variant="success" /> -->
                    <FormInput v-model="email" type="email" placeholder="example@email.com" />
                    <div class="tw-mt-8">
                        <Button type="submit"> Recuperar </Button>
                    </div>
                </form>
            </div>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
});

const email = ref("");

const recovery = () => {
    console.log("recovery");
};
</script>

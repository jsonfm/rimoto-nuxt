<template>
    <section class="tw-flex tw-flex-col md:tw-flex-row">
        <div
            class="tw-hidden md:tw-flex tw-w-full md:tw-w-1/2 tw-container tw-bg-white tw-text-primary tw-h-screen tw-flex-col tw-items-center tw-justify-center"
        >
            <NuxtLink to="/">
                <img src="/images/logos/logo-bg-white.jpg" class="tw-h-40 tw-object-contain" alt="logo" />
            </NuxtLink>
        </div>
        <div
            class="tw-w-full md:tw-w-1/2 tw-text-white tw-bg-neutral tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen"
        >
            <h4 class="tw-mb-12 tw-uppercase tw-hidden md:tw-flex">Bienvenido</h4>
            <NuxtLink to="/">
                <img src="/images/logos/logo-white-negative.png" class="tw-h-20 tw-mb-10 md:tw-hidden" alt="logo" />
            </NuxtLink>

            <form @submit.prevent="submit" class="tw-flex tw-flex-col tw-gap-5 tw-max-w-[300px]">
                <FormInput v-model="email" label="Email" type="email" placeholder="example@email.com" />
                <FormInput v-model="password" label="Password" type="password" placeholder="****" />
                <Button type="submit" :loading="loading"> Login </Button>
            </form>
            <div class="tw-mt-16">
                <NuxtLink to="/password/reset"> Forgot your password? </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { usersService } from "@/services/users";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const loading = ref(false);

//
const submit = async () => {
    loading.value = true;
    try {
        // await usersService.login(email.value, password.value);
        console.log("email: ", email.value, password.value);
    } catch (error) {
        console.error(error);
    }

    loading.value = false;
};
</script>

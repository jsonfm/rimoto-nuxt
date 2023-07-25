<template>
    <section class="tw-flex tw-flex-col md:tw-flex-row">
        <div
            class="tw-w-1/2 md:tw-w-full tw-container tw-bg-white tw-text-primary tw-h-screen tw-flex tw-flex-col tw-items-center tw-justify-center"
        >
            <NuxtLink to="/">
                <h4 class="tw-text-4xl">Rimoto</h4>
            </NuxtLink>
        </div>
        <div
            class="tw-w-1/2 md:tw-w-full tw-text-white tw-bg-neutral tw-flex tw-flex-col tw-items-center tw-justify-center"
        >
            <h4 class="tw-mb-12 tw-uppercase">Bienvenido</h4>
            <form class="tw-flex tw-flex-col tw-gap-5 tw-max-w-[300px]">
                <FormInput label="Email" type="email" placeholder="example@email.com" />
                <FormInput label="Password" type="password" placeholder="****" />
                <NuxtLink class="tw-mt-6" to="/panel">
                    <Button> Login </Button>
                </NuxtLink>
            </form>
            <div class="tw-mt-16">
                <NuxtLink> Forgot your password? </NuxtLink>
            </div>
        </div>
    </section>
</template>

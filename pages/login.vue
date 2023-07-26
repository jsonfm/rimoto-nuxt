<template>
    <section class="tw-flex tw-flex-col md:tw-flex-row">
        <div
            class="tw-hidden md:tw-flex tw-w-full md:tw-w-1/2 tw-container tw-bg-white tw-text-primary tw-h-screen tw-flex-col tw-items-center tw-justify-center"
        >
            <NuxtLink to="/">
                <img src="/images/logos/logo-bg-white.jpg" class="tw-h-40 tw-object-contain" />
            </NuxtLink>
        </div>
        <div
            class="tw-w-full md:tw-w-1/2 tw-text-white tw-bg-neutral tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen"
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

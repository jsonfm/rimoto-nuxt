<template>
    <div class="tw-w-48 tw-h-72 md:tw-w-64 md:tw-h-96 tw-shadow-md tw-p-4 tw-card tw-overflow-hidden tw-flex tw-gap-2">
        <h4 class="tw-font-bold tw-uppercase">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nam!
        </h4>
        <p class="tw-h-[60%] tw-overflow-y-scroll">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, ea consequuntur. Quae nisi, esse veritatis
            quidem impedit fuga aperiam accusantium!
        </p>
        <NuxtLink
            :to="paperURL"
            class="tw-flex tw-justify-center hover:tw-text-primary tw-cursor-pointer tw-duration-200"
        >
            <p class="">Read More >></p>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
const paperURL = "/admin/papers/1/view";
</script>

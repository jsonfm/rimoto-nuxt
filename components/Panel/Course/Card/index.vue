<template>
    <NuxtLink
        href="/panel/courses"
        class="tw-card tw-h-72 tw-w-64 tw-flex tw-flex-col tw-gap-2 tw-bg-white tw-drop-shadow-lg tw-overflow-hidden"
    >
        <div class="tw-overflow-hidden tw-h-[55%]">
            <img
                src="https://images.unsplash.com/photo-1580894732930-0babd100d356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                class="tw-w-full tw-h-full tw-object-cover"
            />
        </div>
        <div class="tw-px-4">
            <h5>Course tittle</h5>
            <div class="tw-flex tw-items-center">
                <div class="tw-flex tw-items-center tw-gap-2">
                    <Icon name="material-symbols:alarm-outline-rounded" />
                    <p>3h 10min</p>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts"></script>

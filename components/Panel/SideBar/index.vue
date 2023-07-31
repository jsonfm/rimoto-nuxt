<template>
    <div class="tw-flex">
        <div
            class="tw-overflow-hidden tw-fixed md:tw-static tw-top-0 tw-left-0 tw-z-[10000] tw-w-full md:tw-w-2/5 xl:tw-w-1/6 tw-bg-primary tw-text-white tw-h-screen tw-py-12 tw-duration-200 tw-flex tw-flex-col tw-items-center md:tw-items-start"
            :class="[showMenu ? showMenuClassName : '']"
        >
            <NuxtLink to="/">
                <h4 class="tw-text-xl tw-font-bold tw-uppercase tw-mb-8 md:tw-mb-10 tw-px-8 tw-h-[10%] tw-xl:h-[6%]">
                    Laboratorios Remotos
                </h4>
            </NuxtLink>

            <div class="tw-flex tw-flex-col tw-items-center md:tw-items-start tw-gap-5 tw-h-[60%] md:tw-h-[80%]">
                <PanelSideBarLink
                    @click="toggleShowMenu"
                    to="/panel"
                    title="Inicio"
                    iconName="heroicons-outline:home"
                />
                <PanelSideBarLink
                    @click="toggleShowMenu"
                    to="/panel/experiments"
                    title="Experimentos"
                    iconName="mdi:microscope"
                />
                <PanelSideBarLink
                    @click="toggleShowMenu"
                    to="/panel/courses"
                    title="Cursos"
                    iconName="material-symbols:photo-library-outline-rounded"
                />
                <PanelSideBarLink
                    @click="toggleShowMenu"
                    to="/panel/exams"
                    title="Evaluaciones"
                    iconName="heroicons-outline:building-library"
                />
            </div>
            <div class="tw-h-[10%] tw-flex tw-flex-col gap-4" :click="logout">
                <PanelSideBarLink to="/admin" title="Admin" iconName="heroicons-outline:arrow-right-on-rectangle" />
                <PanelSideBarLink to="/login" title="Logout" iconName="heroicons-outline:arrow-right-on-rectangle" />
            </div>
        </div>
        <div
            class="tw-w-full md:tw-w-4/5 xl:tw-w-5/6 tw-h-screen tw-overflow-x-hidden tw-overflow-y-auto tw-bg-neutral/10"
        >
            <PanelHeader />
            <main class="tw-py-12">
                <slot />
            </main>
        </div>
        <div
            @click="toggleShowMenu"
            class="tw-fixed tw-bottom-16 tw-right-4 tw-z-[10006] md:tw-hidden tw-bg-primary tw-text-white tw-p-2 tw-rounded-full tw-cursor-pointer tw-hover:scale-105 tw-duration-200"
            :class="[!showMenu ? 'tw-bg-white tw-text-primary' : 'tw-bg-primary tw-text-white']"
        >
            <template v-if="showMenu">
                <Icon size="24px" name="material-symbols:side-navigation" />
            </template>
            <template v-else>
                <Icon size="28px" name="material-symbols:side-navigation" class="tw-text-primary" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const showMenu = ref(true);
const toggleShowMenu = () => (showMenu.value = !showMenu.value);
const showMenuClassName = ref("tw-left-full tw-overflow-hidden");

const logout = () => {
    navigateTo("/login");
};
</script>

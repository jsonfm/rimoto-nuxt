<template>
    <div class="tw-flex tw-flex-col tw-gap-2">
        <label class="tw-font-semibold">{{ label }}</label>

        <template v-if="type !== 'password'">
            <input
                :placeholder="placeholder"
                :type="type"
                :class="className"
                :value="modelValue"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            />
        </template>

        <template v-if="type === 'password'">
            <div :class="classNamePassword">
                <input
                    :placeholder="placeholder"
                    :type="showPassword ? 'text' : 'password'"
                    class="tw-outline-none tw-border-none tw-duration-200 tw-bg-transparent tw-w-full"
                    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                />
                <div class="tw-cursor-pointer tw-text-primary" @click="toggleShowPassword">
                    <template v-if="showPassword">
                        <Icon name="ph:eye-slash" size="20" />
                    </template>
                    <template v-if="!showPassword">
                        <Icon name="ph:eye-light" size="20" />
                    </template>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const showPassword = ref(false);
const toggleShowPassword = () => (showPassword.value = !showPassword.value);
const className =
    "tw-w-72 tw-px-4 tw-py-2 tw-rounded-full tw-drop-shadow-sm tw-border tw-outline-none tw-focus:outline tw-focus:outline-primary tw-duration-200 tw-text-black";
const classNamePassword =
    "tw-text-primary tw-w-72 tw-flex tw-items-center tw-justify-between tw-outline-none tw-px-4 tw-py-2 tw-rounded-full tw-border tw-focus:border-primary tw-focus:outline tw-focus:outline-primary tw-bg-white";

defineProps<{
    label?: string;
    type?: string;
    placeholder?: string;
    modelValue?: string;
}>();
</script>

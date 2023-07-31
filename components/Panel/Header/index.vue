<template>
    <header class="tw-z-[1000] tw-full">
        <div class="tw-navbar tw-container">
            <div class="tw-flex-1">
                <!-- <div>
                    <input type="search" />
                </div> -->

                <img src="/images/logos/logo-horizontal.png" class="tw-h-8 md:tw-h-10" />
            </div>
            <div class="tw-flex tw-gap-2 tw-flex-items-center">
                <div>
                    <label>
                        <div
                            class="tw-w-10 tw-h-10 tw-shadow-xl tw-rounded-full tw-flex tw-items-center tw-justify-center"
                        >
                            <Icon name="ic:outline-notifications" :size="22" />
                        </div>
                    </label>
                </div>
                <div class="tw-dropdown tw-dropdown-end">
                    <label
                        tabindex="0"
                        class="tw-flex tw-items-center tw-justify-between tw-btn tw-btn-ghost !tw-px-0 md:!tw-px-4"
                    >
                        <div class="tw-w-10 tw-h-10 tw-rounded-full tw-border-4 tw-border-primary tw-overflow-hidden">
                            <img
                                src="https://img.freepik.com/premium-vector/muzzle-funny-cute-cat-glasses-vector-flat-illustration-portrait-clever-feline-character-isolated-white-background-avatar-cheerful-furry-domestic-animal-adorable-pet-face_198278-9811.jpg"
                                class="tw-w-full tw-h-full tw-object-cover"
                            />
                        </div>
                        <div class="tw-hidden md:tw-flex">
                            <p class="tw-font-bold">Robert</p>
                        </div>
                    </label>
                    <ul
                        tabindex="0"
                        class="tw-menu tw-menu-sm tw-dropdown-content tw-mt-3 tw-z-[1000] tw-p-2 tw-shadow tw-bg-base-100 tw-rounded-box tw-w-52"
                    >
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

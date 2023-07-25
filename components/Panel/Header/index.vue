<template>
    <header class="">
        <div class="tw-navbar tw-bg-base-100 tw-drop-shadow-lg">
            <div class="tw-flex-1">
                <a class="tw-btn tw-btn-ghost tw-normal-case tw-text-xl">Inicio</a>
            </div>
            <div class="tw-flex-none">
                <div class="tw-dropdown tw-dropdown-end">
                    <label tabindex="0" class="tw-btn tw-btn-ghost tw-btn-circle tw-avatar">
                        <div class="tw-w-10 tw-rounded-full">
                            <img
                                src="https://img.freepik.com/premium-vector/muzzle-funny-cute-cat-glasses-vector-flat-illustration-portrait-clever-feline-character-isolated-white-background-avatar-cheerful-furry-domestic-animal-adorable-pet-face_198278-9811.jpg"
                            />
                        </div>
                    </label>
                    <ul
                        tabindex="0"
                        class="tw-menu tw-menu-sm tw-dropdown-content tw-mt-3 tw-z-[1] tw-p-2 tw-shadow tw-bg-base-100 tw-rounded-box tw-w-52"
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

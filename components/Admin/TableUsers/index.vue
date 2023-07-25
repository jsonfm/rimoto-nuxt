<template>
    <div class="tw-overflow-x-auto tw-bg-white tw-rounded-md tw-card tw-shadow-md tw-py-4 tw-px-4">
        <table class="tw-table tw-table-zebra">
            <thead>
                <tr class="tw-text-primary tw-text-center">
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="item in [1, 2, 3, 4]">
                    <tr class="tw-text-center">
                        <td class="tw-font-bold">asf9adldsa9fasfk0</td>
                        <td class="tw-flex tw-justify-center">
                            <Avatar />
                        </td>
                        <td>
                            <p>email@example.com</p>
                        </td>
                        <td>Indigo</td>
                        <th>
                            <div class="tw-flex tw-justify-center gap-2">
                                <button class="tw-btn tw-btn-primary tw-btn-xs">Editar</button>
                                <button class="tw-btn tw-btn-error tw-btn-xs">Eliminar</button>
                            </div>
                        </th>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

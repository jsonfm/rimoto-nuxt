<template>
    <section>
        <div class="tw-min-h-screen">
            <div v-html="html" />
        </div>
        <div class="tw-flex tw-flex-col tw-gap-4 tw-fixed tw-bottom-16 tw-right-4">
            <NuxtLink :to="experimentURL">
                <button class="tw-btn tw-btn-primary tw-btn-circle tw-btn-outline">
                    <Icon name="heroicons-outline:home" />
                </button>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useGetExperiment } from "@/hooks/experiments";
import { parseHTML } from "@/utils/html";
import { useDownloadScriptsSourcesFromHTMLString, evaluateScripts } from "@/utils/scripts";

const route = useRoute();
const experimentId = route?.params?.id as string;
const experimentURL = `/panel/experiments/${experimentId}/preview`;
const { pending, data, error } = await useGetExperiment(experimentId);
const html = parseHTML({
    head: data?.value?.header_libraries || "",
    body: data?.value?.html_code || "",
    footer: data?.value?.footer_libraries || "",
});
const {
    pending: pendingScripts,
    data: scripts,
    error: errorScripts,
} = await useDownloadScriptsSourcesFromHTMLString({ html });

const readyToEval = !pendingScripts?.value && !errorScripts?.value && !!scripts?.value;

if (readyToEval) {
    let s: string[] = [];
    s.push(...(scripts?.value || []));
    s.push(data?.value?.js_constants || "");
    s.push(data?.value?.js_utils || "");
    s.push(data?.value?.js_code || "");

    evaluateScripts({
        scripts: s,
    });
}
</script>

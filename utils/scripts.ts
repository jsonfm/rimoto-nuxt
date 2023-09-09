import { ofetch } from "ofetch";

export const parseString = (text: string) => {
    const result = text.replace(/\s+/g, "").trim();
    return result;
};

export const ObtainListOfScriptTags = (input: string) => {
    const text = parseString(input);
    const firstScriptIndex = text.search("<script");
    const subText = input.substring(firstScriptIndex);
    const scripts = subText.split("</script>");
    return scripts;
};

export const findUrlOnString = (input: string) => {
    const text = input.replace("'", '"').trim();
    const urlStartIndex = text?.search("https://") ?? text.search("http://");
    //
    const subText = text.substring(urlStartIndex);
    const missing = text.length - subText.length;
    //
    const urlEndIndex = subText?.search('"') + missing;
    const url = text.substring(urlStartIndex, urlEndIndex);
    return url;
};

export const downloadScriptSource = async (scriptTag: string) => {
    const cleanString = parseString(scriptTag);
    if (!cleanString.includes("src=")) return "";
    const url = findUrlOnString(cleanString);

    try {
        const response = await ofetch(url);
        const code = await new Response(response).text();
        return code;
    } catch (error) {
        console.log(error);
        return "";
    }
};

export const downloadListOfScripts = async (scripts: string[]) => {
    let codes: string[] = [];
    for (const script of scripts) {
        const code = await downloadScriptSource(script);
        codes.push(code);
    }
    return codes;
};

export const downloadScriptSourcesFromHTMLString = async (html: string) => {
    const scripts = ObtainListOfScriptTags(html);
    const codes = await downloadListOfScripts(scripts);
    return codes;
};

export const useDownloadScriptsSourcesFromHTMLString = async ({ html = "" } = {}) => {
    const result = await useAsyncData("/experiments/scripts", () => downloadScriptSourcesFromHTMLString(html));
    return result;
};

export const evaluateScript = (script: string) => {
    try {
        if (script?.length > 0) {
            eval(script);
        }
    } catch (error) {
        console.error(error);
    }
};

//
export const evaluateListOfScripts = (scripts: string[]) => {
    scripts?.map((script) => {
        evaluateScript(script);
    });
};

export const evaluateConcatenedScripts = (scripts: string[]) => {
    let superScript = ``;
    scripts?.map((script) => {
        superScript += `\n ${script}`;
    });
    evaluateScript(superScript);
};

interface EvaluateScriptsProps {
    scripts: string[];
    delay?: number;
    callback?: null | (() => void);
}

export const evaluateScripts = ({ scripts = [], delay = 3000, callback = null }: EvaluateScriptsProps) => {
    let timeout;
    clearInterval(timeout);
    timeout = setTimeout(() => {
        evaluateConcatenedScripts(scripts);
        if (!!callback) {
            callback();
        }
    }, delay);
};

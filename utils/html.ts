export const parseHTML = ({ body = "", head = "", footer = "" } = {}) => {
    const html = `
        ${head}
        ${body}
        ${footer}
    `;
    return html;
};

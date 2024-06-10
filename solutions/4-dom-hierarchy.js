// BEGIN
export const array_of_paragraphs = (documentElement) => {
    const paragraphs = [];

    function is_p(node) {
        if (node.tagName === 'P') {
            paragraphs.push(node.textContent.trim());
        }

        node.childNodes.forEach(child => is_p(child));
    }

    is_p(documentElement.querySelector('body'));

    return paragraphs;
}

export default array_of_paragraphs;
// END
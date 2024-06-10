// BEGIN
export const prettify = (document) => {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.childNodes.forEach(child => {
            if (child instanceof Text && child.textContent.trim()) {
                const p = document.createElement('p');
                p.textContent = child.textContent.trim();
                child.replaceWith(p);
            }
        });
    });
}

export default prettify;
// END
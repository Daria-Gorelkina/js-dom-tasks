import camelCase from 'lodash/camelCase';

// BEGIN
export const normalize = (document) => {
    const elements = document.body.getElementsByTagName('*');
    for (let element of elements) {
        const classList = element.classList;
        const newClassNames = [];
        for (let className of classList) {
            const parts = className.split('-');
            const camelCaseName = parts[0] + parts.slice(1).map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
            newClassNames.push(camelCaseName);
        }
        element.className = newClassNames.join(' ');
    }
}

export default normalize;
// END
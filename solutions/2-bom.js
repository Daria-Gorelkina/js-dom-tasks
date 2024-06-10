// BEGIN
export const solution = (url) => {
    let information = navigator.userAgent.match(/Mozilla\/\d\.\d/)[0];
    location.assign(url);
    return `${information} ${url}`;
}

export default solution;

// END
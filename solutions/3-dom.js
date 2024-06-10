// BEGIN
export const paragraphs = () => {
    let lines_body = document.body.innerHTML.trim().split('\n');
    let lines_body_in_p = lines_body.map(line => `<p>${line.trim()}</p>`).join('');
    document.body.innerHTML = lines_body_in_p;
}

paragraphs()
// END
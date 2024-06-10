export default (document) => {
  // BEGIN
    let titleElement = document.querySelector('.content h1');
    let descriptionElement = document.querySelector('.content .description');
    let articleElements = document.querySelectorAll('.content .links > div');
    let title = titleElement.textContent.trim();
    let description = descriptionElement.textContent.trim();
    let items = Array.from(articleElements).map(articleElement => {
        let articleTitle = articleElement.querySelector('h2 a').textContent.trim();
        let articleDescription = articleElement.querySelector('p').textContent.trim();
        return { title: articleTitle, description: articleDescription };
    });
    return { title, description, items };
  // END
};

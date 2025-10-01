function samePage(currentPage, target) {
    return currentPage.origin === target.origin
        && currentPage.pathname === target.pathname
}

const links = document.querySelectorAll('.fr-skiplinks a[href]')
links.forEach(link => link.addEventListener('click', event => {
    const targetURL = new URL(event.currentTarget.href)
    if (!samePage(location, targetURL)) return;

    const target = document.querySelector(targetURL.hash)
    if (target == null) return;

    event.preventDefault()
    if (target.getAttribute('tabindex') == undefined)
        target.setAttribute('tabindex', '-1')
    target.focus()
}))

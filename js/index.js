$(document).ready(() => {
    const nav = $("#nav-container");
    const sections = $("#sections-container").children().toArray();
    sections.forEach(section => {
        const id = section.id;
        const title = $(`#${id} h1`)[0].innerText;

        nav.append(
            `<li><a href="#${id}" class="nav-link" >${title}</a></li>`
        );
    });
    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });
})
import 'hammerjs'
document.body.addEventListener('click', ev => {
    const menu = document.querySelector('.nav');

    if (!menu)
        return;

    if (!menu.classList.contains('active'))
        return;

    if (ev.target === menu || menu.contains(ev.target))
        return;

    menu.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', () => {
    delete Hammer.defaults.cssProps.userSelect;
    const button = document.querySelector('.js-open-menu')
    const menu = document.querySelector('.nav');
    const hammer = new Hammer(document.body);

    hammer.on('panleft', () => {
        menu.classList.add('active');
    })

    button.addEventListener('click', () => {
        menu.classList.add('active');
    });
})


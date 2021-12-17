
const openMenu = (nav, active) => {
    nav.classList.add(active);
};

const closeMenu  = (nav, active) => {
    nav.classList.remove(active);
}

const slideMenu = ({openBtn, menu, classActive, closeTriger}) => {

    const burgerBtn = document.querySelector(openBtn);
    const navigation = document.querySelector(menu);
    const navigationClose = document.querySelectorAll(closeTriger);

    burgerBtn.addEventListener('click', () => {
        openMenu(navigation, classActive);
        }
    )

    navigationClose.forEach((item) => {
        item.addEventListener('click', () => {
            closeMenu(navigation, classActive);
        })
    })


};

export default slideMenu;
function toggleMenu() {
    const toggleMenu=document.querySelector(".toggleMenu");
    const navigation=document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");


}

function toggleContact() {
    const toggleContact=document.querySelector(".toggleContact");
    const contactMenu=document.querySelector(".contactMenu");
    toggleContact.classList.toggle("c-active");
    contactMenu.classList.toggle("c-active");


}
document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("menu");
    const menu = document.getElementById("togglemenu");

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            menu.classList.add("visible");
        } else {
            menu.classList.remove("visible");
        }
    });
});

window.addEventListener('scroll', () => {
    const fadeBg = document.querySelector('.superheader');
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the opacity based on scroll position
    let opacity = scrollTop / maxScroll*4;

    // Ensure opacity is between 0 and 1
    opacity = Math.min(Math.max(opacity, 0), 1);

    // Set the background color with the new opacity
    fadeBg.style.backgroundColor = `rgba(101, 113, 83, ${opacity})`;
});

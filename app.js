const tabItems = document.querySelectorAll(".side-nav__item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e) {
    removeActive();
    removeShow();
    // Add border to current tab
    this.classList.add("side-nav__item--active");
    // Grab content item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add("show");
}

function removeActive() {
    tabItems.forEach(item => item.classList.remove("side-nav__item--active"));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove("show"));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));

const terms = document.querySelector("#terms-and-conditions");
const acceptBtn = document.querySelector(".accept");

function obCallBack(payload) {
    if (payload[0].intersectionRatio == 1) {
        acceptBtn.disabled = false;
    } else if (payload[0].intersectionRatio == 0) {
        acceptBtn.disabled = true;
    }
    // ob.unobserve(terms.lastElementChild) for button to stay active
}

const ob = new IntersectionObserver(obCallBack, { root: terms, threshold: 1 });
ob.observe(terms.lastElementChild);

function e() {

document.addEventListener("DOMContentLoaded", () => {
    function calculateDistance(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();
        
        const x1 = rect1.left + rect1.width / 2;
        const y1 = rect1.top + rect1.height / 2;
        const x2 = rect2.left + rect2.width / 2;
        const y2 = rect2.top + rect2.height / 2;

        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return distance;
    }

    const div1 = document.querySelector('.div-1');
    const div2 = document.querySelector('.div-2');
    const div3 = document.querySelector('.div-3');
    const div4 = document.querySelector('.div-4');

    const divs = [div1, div2, div3, div4];

    setInterval(() => {
        for (let i = 0; i < divs.length; i++) {
            for (let j = i + 1; j < divs.length; j++) {
                const distance = calculateDistance(divs[i], divs[j]);
                console.log(`Distance between Div ${i + 1} and Div ${j + 1}: ${distance.toFixed(2)} px`);
            }
        }
    }, 100);
});
}

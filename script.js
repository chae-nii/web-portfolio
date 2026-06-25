// AOS 초기화 AOS 라이브러리를 실행시키는 명령어입니다.
AOS.init({
    duration: 1000,
    once: false,
})

//커스텀 커서
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
})

//메뉴에 마우스를 올리면 커서 확대
const menuItems = document.querySelectorAll(".menu a,.contact btn,.contact_button");
menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
    })

    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
    })
})

//숫자 카운트
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
    const target = Number(counter.dataset.target);
    let count = 0;

    const speed = 20;
    const increment = target / 50;

    const updateCount = () => {
        count += increment;

        if (count < target) {
            counter.textContent = Math.floor(count);
            setTimeout(updateCount, speed);
        } else {
            counter.textContent = target;
        }
    };

    updateCount();
});
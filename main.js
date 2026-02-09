const recommendBtn = document.getElementById('recommendBtn');
const menuEl = document.getElementById('menu');
const categoryButtons = document.querySelectorAll('.category-btn');

const menus = {
    korean: ['김치찌개', '된장찌개', '삼겹살', '족발', '보쌈', '떡볶이', '부대찌개', '곱창'],
    chinese: ['짜장면', '짬뽕', '탕수육', '마라탕', '양꼬치'],
    japanese: ['초밥', '라멘', '돈까스', '우동', '소바'],
    western: ['파스타', '피자', '스테이크', '햄버거', '리조또']
};

let activeCategory = 'korean'; // Default category

function setActiveCategory(category) {
    activeCategory = category;
    categoryButtons.forEach(btn => {
        if (btn.id === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
     // Clear the menu text when category changes
    menuEl.textContent = '';
    menuEl.style.opacity = 0;
}

categoryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        setActiveCategory(e.target.id);
    });
});

recommendBtn.addEventListener('click', () => {
    const currentMenus = menus[activeCategory];
    if (!currentMenus || currentMenus.length === 0) {
        menuEl.textContent = '추천할 메뉴가 없습니다!';
        return;
    }

    menuEl.style.opacity = 0;
    menuEl.style.transform = 'translateY(20px)';

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * currentMenus.length);
        const selectedMenu = currentMenus[randomIndex];
        menuEl.textContent = `오늘은 '${selectedMenu}' 어떠세요?`;
        menuEl.style.opacity = 1;
        menuEl.style.transform = 'translateY(0)';
    }, 300);
});

// Initial setup
menuEl.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
// Set default active category on load
setActiveCategory('korean');
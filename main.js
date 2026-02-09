// --- Dark Mode Logic ---
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Apply saved dark mode state on page load
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    if(darkModeToggle) darkModeToggle.checked = true;
}

if(darkModeToggle) {
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}


// --- Menu Recommendation Logic (Only for index.html) ---
const recommendBtn = document.getElementById('recommendBtn');
const menuEl = document.getElementById('menu');
const categoryButtons = document.querySelectorAll('.category-btn');

if (recommendBtn && menuEl && categoryButtons.length > 0) {
    const menus = {
        korean: ['김치찌개', '된장찌개', '삼겹살', '비빔밥', '불고기', '떡볶이', '부대찌개', '곱창', '순대국', '감자탕', '해물파전', '잡채', '설렁탕', '갈비찜'],
        chinese: ['짜장면', '짬뽕', '탕수육', '마라탕', '양꼬치', '꿔바로우', '마파두부', '동파육', '깐풍기', '유린기'],
        japanese: ['초밥', '라멘', '돈까스', '우동', '소바', '카레라이스', '오코노미야끼', '타코야끼', '규동', '가츠동'],
        western: ['파스타', '피자', '스테이크', '햄버거', '리조또', '시저 샐러드', '클램 차우더', '비프 스트로가노프', '라자냐', '에그 베네딕트']
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
}
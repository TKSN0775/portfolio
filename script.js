
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ページのスクロール位置に応じてボタンを表示/非表示
    window.addEventListener("scroll", function() {
        var backToTopButton = document.getElementById("backToTop");
        if (window.scrollY > 300) { // 300px以上スクロールしたら表示
            backToTopButton.style.display = "flex";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // ボタンクリックでページトップにスムーズスクロール
    document.getElementById("backToTop").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // 滑らかにスクロール
        });
    });
});

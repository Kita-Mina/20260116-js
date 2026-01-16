// ローディング画面を操作する
const loadingScreen = document.getElementById('loading');
const mainContent = document.getElementById('main');

// ページ全体の読み込みが完了したら、ローディング画面を消す
window.addEventListener('load', () => {
  // Let the spinner stay for 4 seconds before starting the fade-out
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    
    // After the fade-out (1s), show the main content
    setTimeout(() => {
      mainContent.style.display = 'block';
    }, 1000); // fade-out takes 1s
  }, 4000); // Spinner stays for 4 seconds before fade-out begins
});

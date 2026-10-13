const allProducts = [
  // ホットティー系
  { category: 'ホットティー (いずれも M or S)', name: 'ホットストレートティー (S)', required: ['ティーバッグ', 'シュガー', 'マドラー'], note: 'ティーバッグ / シュガー / マドラー' },
  { category: 'ホットティー (いずれも M or S)', name: 'ホットレモンティー (S)', required: ['ティーバッグ', 'シュガー', 'マドラー', 'リキッドレモン'], note: 'ティーバッグ / シュガー / マドラー / リキッドレモン' },
  { category: 'ホットティー (いずれも M or S)', name: 'ホットミルクティー (S)', required: ['ティーバッグ', 'シュガー', 'マドラー', 'ミルク'], note: 'ティーバッグ / シュガー / マドラー / ミルク' },
  { category: 'ホットティー (いずれも M or S)', name: 'ホットストレートティー (M)', required: ['ティーバッグ', 'ティーバッグ', 'シュガー', 'マドラー'], note: 'ティーバッグ2個 / シュガー / マドラー (※Mはティーバッグ2個)' },
  { category: 'ホットティー (いずれも M or S)', name: 'ホットレモンティー (M)', required: ['ティーバッグ', 'ティーバッグ', 'シュガー', 'マドラー', 'リキッドレモン'], note: 'ティーバッグ2個 / シュガー / マドラー / リキッドレモン (※Mはティーバッグ2個)' },
  { category: 'ホットティー (いずれも M or S)', name: 'ホットミルクティー (M)', required: ['ティーバッグ', 'ティーバッグ', 'シュガー', 'マドラー', 'ミルク'], note: 'ティーバッグ2個 / シュガー / マドラー / ミルク (※Mはティーバッグ2個)' },
  
  // アイスティー系
  { category: 'アイスティー (いずれも L or M or S)', name: 'アイスストレートティー (M)', required: ['ガムシロップ', 'マドラー'], note: 'ガムシロ / マドラー' },
  { category: 'アイスティー (いずれも L or M or S)', name: 'アイスレモンティー (M)', required: ['ガムシロップ', 'マドラー', 'リキッドレモン'], note: 'ガムシロ / マドラー / リキッドレモン' },
  { category: 'アイスティー (いずれも L or M or S)', name: 'アイスミルクティー (M)', required: ['ガムシロップ', 'マドラー', 'ミルク'], note: 'ガムシロ / マドラー / ミルク' },

  // コーヒー・ラテ系
  { category: 'アイスコーヒー (L or M or S)', name: 'アイスコーヒー (M)', required: ['マドラー', 'ミルク', 'ガムシロップ'], note: 'マドラー / ミルク / ガムシロ' },
  { category: 'ホットコーヒー (M or S)', name: 'ホットコーヒー (M)', required: ['シュガー', 'マドラー', 'ミルク'], note: 'シュガー / マドラー / ミルク' },
  { category: 'ホットカフェラテ (M or S)', name: 'ホットカフェラテ (M)', required: ['シュガー', 'マドラー'], note: 'シュガー / マドラー' },
  { category: 'ホットキャラメルラテ (M or S)', name: 'ホットキャラメルラテ (M)', required: ['マドラー'], note: 'マドラーのみ' },
  { category: 'アイスカフェラテ (M or S)', name: 'アイスカフェラテ (M)', required: ['ガムシロップ', 'ストロー'], note: 'ガムシロ / ストロー' },
  { category: 'アイスキャラメルラテ (M or S)', name: 'アイスキャラメルラテ (M)', required: ['ストロー'], note: 'ストローのみ' },

  // 特殊ドリンク
  { category: 'マックシェイク・フロート', name: 'マックシェイク バニラ (M)', required: ['ストロー'], note: 'ストロー' },
  { category: 'マックシェイク・フロート', name: 'マックフロート (Mの容器)', required: ['スプーンストロー'], note: 'スプーンストロー' },

  // サイド・フード
  { category: 'サイド・フード', name: 'サイドサラダ', required: ['フォーク', 'ごまドレッシング'], note: 'フォーク / ゴマドレッシング' },
  { category: 'サイド・フード', name: 'えだまめコーン', required: ['スプーン'], note: 'スプーン' },
  { category: 'サイド・フード', name: 'チキンナゲット 5ピース', required: ['ナゲットソース'], note: 'ナゲットソース（1つ）' },
  { category: 'サイド・フード', name: 'チキンナゲット 15ピース', required: ['ナゲットソース', 'ナゲットソース', 'ナゲットソース'], note: 'ナゲットソース（3つ）' },
  { category: 'サイド・フード', name: 'プチパンケーキ', required: ['フォーク', 'りんご＆クリーム'], note: 'フォーク / りんご&クリーム' },
  { category: 'サイド・フード', name: 'シャカチキ', required: ['チェダーチーズ味粉末'], note: 'チェダーチーズ味粉末' },
  { category: 'サイド・フード', name: 'ホットケーキ', required: ['ナイフ＆フォーク', 'バター', 'ホットケーキシロップ'], note: 'ナイフ&フォーク / バター / ホットケーキシロップ' }
];

const noCondimentsProducts = [
  { category: 'コールドドリンク (L or M or S)', name: 'コールドドリンク各種', required: [], note: '基本そのまま（付属品なし）' },
  { category: 'ハッピーセット用ドリンク (S)', name: 'ハッピーセット用コールドドリンク (S)', required: ['フレキシブルストロー'], note: 'フレキシブルストローをつける' }
];

let currentProduct = null;
let selectedCondiments = [];
let questionIndex = 0;
let score = 0;
let timeLimit = 0;
let timer = null;
let timeLeft = 0;
let sessionQuestions = [];
let wrongItems = []; // 間違えた問題の詳細を保持
let isMarathon = false;
let marathonStreak = 0;

function startGame(level) {
  isMarathon = false;
  if (level === 0) timeLimit = 0;
  if (level === 1) timeLimit = 15;
  if (level === 2) timeLimit = 10;
  if (level === 3) timeLimit = 7;
  if (level === 4) timeLimit = 5;

  questionIndex = 0;
  score = 0;
  wrongItems = [];
  generateSessionQueue(5);

  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'none';
  
  startReadyCountdown();
}

function startMarathonMode() {
  isMarathon = true;
  timeLimit = 10;
  marathonStreak = 0;
  wrongItems = [];

  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'none';
  
  loadNextMarathonQuestion();
  startReadyCountdown();
}

function generateSessionQueue(count) {
  sessionQuestions = [];
  const noCondimentCount = Math.floor(Math.random() * 2) + 1;
  const withCondimentCount = count - noCondimentCount;

  let shuffledWith = [...allProducts].sort(() => 0.5 - Math.random());
  for (let i = 0; i < withCondimentCount; i++) {
    sessionQuestions.push(shuffledWith[i % shuffledWith.length]);
  }

  let shuffledNo = [...noCondimentsProducts].sort(() => 0.5 - Math.random());
  for (let i = 0; i < noCondimentCount; i++) {
    sessionQuestions.push(shuffledNo[i % shuffledNo.length]);
  }

  sessionQuestions.sort(() => 0.5 - Math.random());
}

function loadNextMarathonQuestion() {
  const pool = [...allProducts, ...noCondimentsProducts];
  currentProduct = pool[Math.floor(Math.random() * pool.length)];
}

function startReadyCountdown() {
  document.getElementById('game-screen').style.display = 'none';
  document.getElementById('ready-screen').style.display = 'block';
  
  if (isMarathon) {
    document.getElementById('ready-question-num').textContent = `連続正解数: ${marathonStreak} 問`;
  } else {
    document.getElementById('ready-question-num').textContent = `第 ${questionIndex + 1} 問 / 全5問`;
  }

  let count = 3;
  document.getElementById('ready-countdown').textContent = count;

  let cdTimer = setInterval(() => {
    count--;
    if (count > 0) {
      document.getElementById('ready-countdown').textContent = count;
    } else {
      clearInterval(cdTimer);
      document.getElementById('ready-screen').style.display = 'none';
      document.getElementById('game-screen').style.display = 'block';
      nextProduct();
    }
  }, 800);
}

function nextProduct() {
  clearInterval(timer);
  timeLeft = timeLimit;
  updateTimerDisplay();

  if (isMarathon) {
    loadNextMarathonQuestion();
  } else {
    currentProduct = sessionQuestions[questionIndex];
  }

  document.getElementById('product-name').textContent = currentProduct.name;
  
  clearSelection();
  const resultDiv = document.getElementById('result-message');
  resultDiv.className = 'result-area';
  resultDiv.textContent = '';

  if (timeLimit > 0) {
    timer = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timer);
        timeOut();
      }
    }, 1000);
  }
}

function updateTimerDisplay() {
  if (timeLimit === 0) {
    document.getElementById('timer-display').textContent = `制限時間: 無制限`;
  } else {
    document.getElementById('timer-display').textContent = `残り時間: ${timeLeft}秒`;
  }

  if (isMarathon) {
    document.getElementById('streak-counter').textContent = `連続正解: ${marathonStreak}`;
  } else {
    document.getElementById('streak-counter').textContent = `問題: ${questionIndex + 1} / 5`;
  }
}

function timeOut() {
  if (isMarathon) {
    const resultDiv = document.getElementById('result-message');
    resultDiv.className = 'result-area result-error';
    resultDiv.innerHTML = `⏰ **時間切れ！ゲームオーバー！**<br>【正解の基準】: ${currentProduct.note}`;
    setTimeout(() => {
      showFinalResult();
    }, 2000);
  } else {
    wrongItems.push(currentProduct);
    const resultDiv = document.getElementById('result-message');
    resultDiv.className = 'result-area result-error';
    resultDiv.innerHTML = `⏰ **時間切れ！**<br>【正解の基準】: ${currentProduct.note}`;
    proceedToNext();
  }
}

function toggleCondiment(name) {
  selectedCondiments.push(name);
  updateUI();
}

function updateUI() {
  const listDiv = document.getElementById('selected-list');
  if (selectedCondiments.length === 0) {
    listDiv.textContent = '（選択されていません）';
  } else {
    listDiv.textContent = selectedCondiments.join(' 、 ');
  }
}

function clearSelection() {
  selectedCondiments = [];
  updateUI();
}

function checkAnswer() {
  clearInterval(timer);
  const resultDiv = document.getElementById('result-message');

  if (!currentProduct) return;

  let isCorrect = true;
  let reason = '';

  const required = currentProduct.required;
  let reqCopy = [...required];
  let selCopy = [...selectedCondiments];

  for (let item of selectedCondiments) {
    const reqIdx = reqCopy.indexOf(item);
    if (reqIdx !== -1) {
      reqCopy.splice(reqIdx, 1);
      const selIdx = selCopy.indexOf(item);
      selCopy.splice(selIdx, 1);
    }
  }

  if (reqCopy.length > 0 || selCopy.length > 0) {
    isCorrect = false;
    reason = '付属品の過不足または不要なアイテムがあります。';
  }

  if (isCorrect) {
    score++;
    if (isMarathon) {
      marathonStreak++;
    }
    resultDiv.className = 'result-area result-success';
    resultDiv.innerHTML = `✨ **正解！**<br>【規定ルール】: ${currentProduct.note}`;
    
    setTimeout(() => {
      if (isMarathon) {
        startReadyCountdown();
      } else {
        proceedToNext();
      }
    }, 1500);

  } else {
    wrongItems.push(currentProduct);
    resultDiv.className = 'result-area result-error';
    resultDiv.innerHTML = `⚠️ **不合格**<br>理由: ${reason}<br>【正解の基準】: ${currentProduct.note}`;
    
    setTimeout(() => {
      if (isMarathon) {
        showFinalResult();
      } else {
        proceedToNext();
      }
    }, 2000);
  }
}

function proceedToNext() {
  questionIndex++;
  setTimeout(() => {
    if (questionIndex >= 5) {
      showFinalResult();
    } else {
      startReadyCountdown();
    }
  }, 500);
}

function showFinalResult() {
  document.getElementById('game-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'block';

  const weaknessDiv = document.getElementById('weakness-text');

  if (isMarathon) {
    document.getElementById('result-title').textContent = '🏃‍♂️ マラソンモード終了！';
    document.getElementById('score-text').textContent = `連続正解記録: ${marathonStreak} 問！`;
    
    if (marathonStreak >= 10) {
      weaknessDiv.innerHTML = '素晴らしい集中力です！現場のプロとして完璧なスピードと正確性を持っています！';
    } else if (marathonStreak >= 5) {
      weaknessDiv.innerHTML = 'いい調子です！コンディメントの組み合わせがかなり体に染みついてきていますね。';
    } else {
      weaknessDiv.innerHTML = 'お疲れ様でした！「勉強用モード」でルールを見直して、さらに記録を伸ばしていきましょう！';
    }
  } else {
    document.getElementById('score-text').textContent = `5 問 中 ${score} 問 正解！`;

    if (score === 5) {
      document.getElementById('result-title').textContent = '🎉 全問正解！完璧です！';
      weaknessDiv.innerHTML = '素晴らしい精度です！すべてのコンディメントルールを完璧にマスターしています。';
    } else {
      document.getElementById('result-title').textContent = 'ゲーム終了！';
      
      let adviceHTML = '<strong>【❌ 間違えた問題と正解の確認】</strong><br><div style="margin-top: 8px; text-align: left;">';
      wrongItems.forEach((item, idx) => {
        adviceHTML += `<div style="background: #fff5f5; border-left: 4px solid #da291c; padding: 8px; margin-bottom: 8px; border-radius: 4px;">`;
        adviceHTML += `<strong>Q${idx + 1}. ${item.name}</strong><br>`;
        adviceHTML += `<span style="color: #2e7d32;">✔ 正解: ${item.note}</span>`;
        adviceHTML += `</div>`;
      });
      adviceHTML += '</div>';

      weaknessDiv.innerHTML = adviceHTML;
    }
  }
}

function returnToTitle() {
  clearInterval(timer);
  document.getElementById('game-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('start-screen').style.display = 'block';
}

function openStudyModal() {
  const modalBody = document.getElementById('study-list');
  modalBody.innerHTML = '';

  const combined = [...allProducts, ...noCondimentsProducts];
  
  const grouped = {};
  combined.forEach(prod => {
    if (!grouped[prod.category]) {
      grouped[prod.category] = [];
    }
    grouped[prod.category].push(prod);
  });

  for (let cat in grouped) {
    const block = document.createElement('div');
    block.className = 'study-category-block';
    
    let html = `<div class="study-category-title">📁 ${cat}</div>`;
    if (cat.includes('コールドドリンク')) {
      html += `<div class="study-item-row">・コーラ、スプライト、ファンタ、Qoo、爽健美茶、野菜生活、オレンジ等： 基本そのまま</div>`;
    } else {
      grouped[cat].forEach(item => {
        html += `<div class="study-item-row">・${item.name}： ${item.note}</div>`;
      });
    }
    
    block.innerHTML = html;
    modalBody.appendChild(block);
  }

  document.getElementById('study-modal').style.display = 'flex';
}

function closeStudyModal() {
  document.getElementById('study-modal').style.display = 'none';
}
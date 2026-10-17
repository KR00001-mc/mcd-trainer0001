// --- 実際のメニュー構成に基づく全商品データ ---

const coldDrinksLMS = [
  'コカ・コーラ',
  'コカ・コーラ ゼロ',
  'スプライト',
  'ファンタ メロン',
  'ファンタ グレープ',
  'Qoo すっきり白ぶどう',
  '爽健美茶',
  '野菜生活100'
];
const coldDrinkSizes = ['L', 'M', 'S'];

// ハッピーセット用：紙パック商品はストロー付きのためコンディメントなし、カップ商品はフレキシブルストロー
const happySetPaperCartonDrinks = [
  'ハッピーセット ミルク',
  'ハッピーセット ミニッツメイド アップル'
];
const happySetCupDrinks = [
  'ハッピーセット 爽健美茶',
  'ハッピーセット ミニッツメイド オレンジ',
  'ハッピーセット 野菜生活100'
];

const hotTeaProducts = [
  { name: 'ホットストレートティー (S)', category: 'ホットティー', required: ['ティーバッグ', 'シュガー', 'マドラー'], note: 'ティーバッグ / シュガー / マドラー' },
  { name: 'ホットレモンティー (S)', category: 'ホットティー', required: ['ティーバッグ', 'シュガー', 'マドラー', 'リキッドレモン'], note: 'ティーバッグ / シュガー / マドラー / リキッドレモン' },
  { name: 'ホットミルクティー (S)', category: 'ホットティー', required: ['ティーバッグ', 'シュガー', 'マドラー', 'ミルク'], note: 'ティーバッグ / シュガー / マドラー / ミルク' },
  { name: 'ホットストレートティー (M)', category: 'ホットティー', required: ['ティーバッグ', 'ティーバッグ', 'シュガー', 'マドラー'], note: 'ティーバッグ2個 / シュガー / マドラー' },
  { name: 'ホットレモンティー (M)', category: 'ホットティー', required: ['ティーバッグ', 'ティーバッグ', 'シュガー', 'マドラー', 'リキッドレモン'], note: 'ティーバッグ2個 / シュガー / マドラー / リキッドレモン' },
  { name: 'ホットミルクティー (M)', category: 'ホットティー', required: ['ティーバッグ', 'ティーバッグ', 'シュガー', 'マドラー', 'ミルク'], note: 'ティーバッグ2個 / シュガー / マドラー / ミルク' }
];

const iceTeaTypes = [
  { base: 'アイスストレートティー', required: ['ガムシロップ', 'マドラー'], note: 'ガムシロップ / マドラー' },
  { base: 'アイスレモンティー', required: ['ガムシロップ', 'マドラー', 'リキッドレモン'], note: 'ガムシロップ / マドラー / リキッドレモン' },
  { base: 'アイスミルクティー', required: ['ガムシロップ', 'マドラー', 'ミルク'], note: 'ガムシロップ / マドラー / ミルク' }
];
const iceTeaSizes = ['L', 'M', 'S'];

const iceCoffeeSizes = ['L', 'M', 'S'];
const hotCoffeeSizes = ['M', 'S'];

const latteProducts = [
  { base: 'ホットカフェラテ', required: ['シュガー', 'マドラー'], note: 'シュガー / マドラー' },
  { base: 'ホットキャラメルラテ', required: ['マドラー'], note: 'マドラーのみ' },
  { base: 'アイスカフェラテ', required: ['ガムシロップ', 'ストロー'], note: 'ガムシロップ / ストロー' },
  { base: 'アイスキャラメルラテ', required: ['ストロー'], note: 'ストローのみ' }
];

const specialDrinkProducts = [
  { name: 'マックシェイク バニラ (S)', category: 'マックシェイク・フロート', required: ['ストロー'], note: 'ストローのみ' },
  { name: 'マックシェイク バニラ (M)', category: 'マックシェイク・フロート', required: ['ストロー'], note: 'ストローのみ' },
  { name: 'マックシェイク ストロベリー (S)', category: 'マックシェイク・フロート', required: ['ストロー'], note: 'ストローのみ' },
  { name: 'マックシェイク ストロベリー (M)', category: 'マックシェイク・フロート', required: ['ストロー'], note: 'ストローのみ' },
  { name: 'マックシェイク チョコレート (S)', category: 'マックシェイク・フロート', required: ['ストロー'], note: 'ストローのみ' },
  { name: 'マックシェイク チョコレート (M)', category: 'マックシェイク・フロート', required: ['ストロー'], note: 'ストローのみ' },
  { name: 'マックフロート コーラ', category: 'マックシェイク・フロート', required: ['スプーンストロー'], note: 'スプーンストローのみ' },
  { name: 'マックフロート コーヒー', category: 'マックシェイク・フロート', required: ['スプーンストロー'], note: 'スプーンストローのみ' }
];

const foodProducts = [
  { name: 'サイドサラダ', category: 'サイド・フード', required: ['フォーク', 'ごまドレッシング'], note: 'フォーク / ごまドレッシング' },
  { name: 'えだまめコーン', category: 'サイド・フード', required: ['スプーン'], note: 'スプーンのみ' },
  { name: 'チキンナゲット 5ピース', category: 'サイド・フード', required: ['ナゲットソース'], note: 'ナゲットソースのみ' },
  { name: 'チキンナゲット 15ピース', category: 'サイド・フード', required: ['ナゲットソース', 'ナゲットソース', 'ナゲットソース'], note: 'ナゲットソース / ナゲットソース / ナゲットソース' },
  { name: 'プチパンケーキ', category: 'サイド・フード', required: ['フォーク', 'りんご＆クリーム'], note: 'フォーク / りんご＆クリーム' },
  { name: 'シャカチキ', category: 'サイド・フード', required: ['チェダーチーズ味粉末'], note: 'チェダーチーズ味粉末のみ' },
  { name: 'ホットケーキ', category: 'サイド・フード', required: ['ナイフ＆フォーク', 'バター', 'ホットケーキシロップ'], note: 'ナイフ＆フォーク / バター / ホットケーキシロップ' }
];

let currentProduct = null;
let selectedCondiments = [];
let questionIndex = 0;
let score = 0;
let timeLimit = 0;
let timer = null;
let timeLeft = 0;
let sessionQuestions = [];
let wrongItems = [];
let isMarathon = false;
let marathonStreak = 0;

let recentProductNames = new Set();
let marathonPool = [];

function getAllPossibleProducts() {
  let list = [];

  // コールドドリンク (LMS)
  coldDrinksLMS.forEach(base => {
    coldDrinkSizes.forEach(size => {
      list.push({ name: `${base} (${size})`, category: 'コールドドリンク', required: [], note: 'コンディメントなし' });
    });
  });
  list.push({ name: 'ミニッツメイド オレンジ (S)', category: 'コールドドリンク', required: [], note: 'コンディメントなし' });

  // ハッピーセット（紙パック＝付属品なし、カップ＝フレキシブルストロー）
  happySetPaperCartonDrinks.forEach(base => {
    list.push({ name: `${base} (S)`, category: 'ハッピーセット用ドリンク', required: [], note: 'コンディメントなし' });
  });
  happySetCupDrinks.forEach(base => {
    list.push({ name: `${base} (S)`, category: 'ハッピーセット用ドリンク', required: ['フレキシブルストロー'], note: 'フレキシブルストローのみ' });
  });

  // ホットティー
  hotTeaProducts.forEach(p => list.push(p));

  // アイスティー
  iceTeaTypes.forEach(tea => {
    iceTeaSizes.forEach(size => {
      list.push({ name: `${tea.base} (${size})`, category: 'アイスティー', required: tea.required, note: tea.note });
    });
  });

  // アイスコーヒー
  iceCoffeeSizes.forEach(size => {
    list.push({ name: `アイスコーヒー (${size})`, category: 'アイスコーヒー', required: ['マドラー', 'ミルク', 'ガムシロップ'], note: 'マドラー / ミルク / ガムシロップ' });
  });

  // ホットコーヒー
  hotCoffeeSizes.forEach(size => {
    list.push({ name: `ホットコーヒー (${size})`, category: 'ホットコーヒー', required: ['シュガー', 'マドラー', 'ミルク'], note: 'シュガー / マドラー / ミルク' });
  });

  // カフェラテ
  latteProducts.forEach(item => {
    ['M', 'S'].forEach(size => {
      list.push({ name: `${item.base} (${size})`, category: 'カフェラテ', required: item.required, note: item.note });
    });
  });

  // シェイク・フロート
  specialDrinkProducts.forEach(p => list.push(p));

  // フード
  foodProducts.forEach(p => list.push(p));

  return list;
}

function generateSessionQueue(count) {
  let allMaster = getAllPossibleProducts();
  
  let available = allMaster.filter(p => !recentProductNames.has(p.name));
  if (available.length < count) {
    recentProductNames.clear();
    available = allMaster;
  }

  available.sort(() => 0.5 - Math.random());

  let noCondiCandidates = available.filter(p => p.required.length === 0);
  let withCondiCandidates = available.filter(p => p.required.length > 0);

  sessionQuestions = [];
  const needNoCondi = Math.random() < 0.6 && noCondiCandidates.length > 0;
  const noCondiCount = needNoCondi ? 1 : 0;
  const withCondiCount = count - noCondiCount;

  for (let i = 0; i < withCondiCount && withCondiCandidates.length > 0; i++) {
    sessionQuestions.push(withCondiCandidates.pop());
  }
  for (let i = 0; i < noCondiCount && noCondiCandidates.length > 0; i++) {
    sessionQuestions.push(noCondiCandidates.pop());
  }

  while (sessionQuestions.length < count && available.length > 0) {
    sessionQuestions.push(available.pop());
  }

  sessionQuestions.sort(() => 0.5 - Math.random());

  recentProductNames.clear();
  sessionQuestions.forEach(p => recentProductNames.add(p.name));
}

function getNextMarathonProduct() {
  if (marathonPool.length === 0) {
    marathonPool = getAllPossibleProducts();
    marathonPool.sort(() => 0.5 - Math.random());
  }
  return marathonPool.pop();
}

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
  marathonPool = [];

  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'none';
  
  currentProduct = getNextMarathonProduct();
  startReadyCountdown();
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
    currentProduct = getNextMarathonProduct();
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
    wrongItems = [{ qNum: 1, product: currentProduct }];
    const resultDiv = document.getElementById('result-message');
    resultDiv.className = 'result-area result-error';
    resultDiv.innerHTML = `時間切れ！ゲームオーバー<br>正解: ${currentProduct.note}`;
    setTimeout(() => {
      showFinalResult();
    }, 2000);
  } else {
    wrongItems.push({ qNum: questionIndex + 1, product: currentProduct });
    const resultDiv = document.getElementById('result-message');
    resultDiv.className = 'result-area result-error';
    resultDiv.innerHTML = `時間切れ<br>正解: ${currentProduct.note}`;
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
    listDiv.textContent = selectedCondiments.join(' / ');
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
    resultDiv.innerHTML = `正解！<br>正解: ${currentProduct.note}`;
    
    setTimeout(() => {
      if (isMarathon) {
        startReadyCountdown();
      } else {
        proceedToNext();
      }
    }, 1500);

  } else {
    wrongItems.push({ qNum: questionIndex + 1, product: currentProduct });
    resultDiv.className = 'result-area result-error';
    resultDiv.innerHTML = `不合格<br>理由: ${reason}<br>正解: ${currentProduct.note}`;
    
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
  document.getElementById('ready-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'block';

  const weaknessDiv = document.getElementById('weakness-text');

  if (isMarathon) {
    document.getElementById('result-title').textContent = 'マラソンモード終了';
    document.getElementById('score-text').textContent = `連続正解記録: ${marathonStreak} 問`;
    
    let adviceHTML = '';
    if (wrongItems.length > 0) {
      adviceHTML += '間違えてしまった問題の正解<br><div style="margin-top: 8px; text-align: left; margin-bottom: 15px;">';
      wrongItems.forEach((item) => {
        adviceHTML += `<div style="background: #fff5f5; border-left: 4px solid #da291c; padding: 8px; margin-bottom: 8px; border-radius: 4px;">`;
        adviceHTML += `<strong>${item.product.name}</strong><br>`;
        adviceHTML += `<span style="color: #2e7d32;">正解: ${item.product.note}</span>`;
        adviceHTML += `</div>`;
      });
      adviceHTML += '</div>';
    }

    if (marathonStreak >= 10) {
      adviceHTML += '素晴らしい集中力です。現場のプロとして完璧なスピードと正確性を持っています。';
    } else if (marathonStreak >= 5) {
      adviceHTML += 'いい調子です。コンディメントの組み合わせがかなり体に染みついてきています。';
    } else {
      adviceHTML += 'お疲れ様でした。勉強用モードでルールを見直して、さらに記録を伸ばしていきましょう。';
    }
    weaknessDiv.innerHTML = adviceHTML;

  } else {
    document.getElementById('score-text').textContent = `5 問 中 ${score} 問 正解`;

    if (score === 5) {
      document.getElementById('result-title').textContent = '全問正解！完璧です';
      weaknessDiv.innerHTML = '素晴らしい精度です。すべてのコンディメントルールを完璧にマスターしています。';
    } else {
      document.getElementById('result-title').textContent = 'ゲーム終了';
      
      let adviceHTML = '間違えた問題と正解の確認<br><div style="margin-top: 8px; text-align: left;">';
      wrongItems.forEach((item) => {
        adviceHTML += `<div style="background: #fff5f5; border-left: 4px solid #da291c; padding: 8px; margin-bottom: 8px; border-radius: 4px;">`;
        adviceHTML += `<strong>Q${item.qNum}. ${item.product.name}</strong><br>`;
        adviceHTML += `<span style="color: #2e7d32;">正解: ${item.product.note}</span>`;
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
  document.getElementById('ready-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('home-confirm-modal').style.display = 'none';
  document.getElementById('start-screen').style.display = 'block';
}

function confirmReturnHome() {
  clearInterval(timer);
  document.getElementById('home-confirm-modal').style.display = 'flex';
}

function closeHomeConfirmModal() {
  document.getElementById('home-confirm-modal').style.display = 'none';
  if (document.getElementById('game-screen').style.display === 'block' && timeLimit > 0 && timeLeft > 0) {
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

function executeReturnHome() {
  document.getElementById('home-confirm-modal').style.display = 'none';
  returnToTitle();
}

function openStudyModal() {
  const modalBody = document.getElementById('study-list');
  modalBody.innerHTML = '';

  const categories = [
    {
      title: 'ホットティー',
      items: [
        'ホットストレートティー (S) : ティーバッグ / シュガー / マドラー',
        'ホットレモンティー (S) : ティーバッグ / シュガー / マドラー / リキッドレモン',
        'ホットミルクティー (S) : ティーバッグ / シュガー / マドラー / ミルク',
        'ホットストレートティー (M) : ティーバッグ2個 / シュガー / マドラー',
        'ホットレモンティー (M) : ティーバッグ2個 / シュガー / マドラー / リキッドレモン',
        'ホットミルクティー (M) : ティーバッグ2個 / シュガー / マドラー / ミルク'
      ]
    },
    {
      title: 'アイスティー',
      items: [
        'アイスストレートティー : ガムシロップ / マドラー',
        'アイスレモンティー : ガムシロップ / マドラー / リキッドレモン',
        'アイスミルクティー : ガムシロップ / マドラー / ミルク'
      ]
    },
    {
      title: 'アイスコーヒー',
      items: [
        'アイスコーヒー : マドラー / ミルク / ガムシロップ'
      ]
    },
    {
      title: 'ホットコーヒー',
      items: [
        'ホットコーヒー : シュガー / マドラー / ミルク'
      ]
    },
    {
      title: 'ホットカフェラテ',
      items: [
        'ホットカフェラテ : シュガー / マドラー'
      ]
    },
    {
      title: 'ホットキャラメルラテ',
      items: [
        'ホットキャラメルラテ : マドラーのみ'
      ]
    },
    {
      title: 'アイスカフェラテ',
      items: [
        'アイスカフェラテ : ガムシロップ / ストロー'
      ]
    },
    {
      title: 'アイスキャラメルラテ',
      items: [
        'アイスキャラメルラテ : ストローのみ'
      ]
    },
    {
      title: 'マックシェイク・フロート',
      items: [
        'マックシェイク : ストローのみ',
        'マックフロート : スプーンストローのみ'
      ]
    },
    {
      title: 'サイド・フード',
      items: [
        'サイドサラダ : フォーク / ごまドレッシング',
        'えだまめコーン : スプーンのみ',
        'チキンナゲット 5ピース : ナゲットソースのみ',
        'チキンナゲット 15ピース : ナゲットソース / ナゲットソース / ナゲットソース',
        'プチパンケーキ : フォーク / りんご＆クリーム',
        'シャカチキ : チェダーチーズ味粉末のみ',
        'ホットケーキ : ナイフ＆フォーク / バター / ホットケーキシロップ'
      ]
    },
    {
      title: 'コールドドリンク',
      items: [
        'コーラ、スプライト、ファンタ、Qoo、爽健美茶、野菜生活等 (L, M, S) : コンディメントなし',
        'ミニッツメイド オレンジ (S) : コンディメントなし'
      ]
    },
    {
      title: 'ハッピーセット用ドリンク',
      items: [
        'ハッピーセット 爽健美茶 / オレンジ / 野菜生活100 (S) : フレキシブルストローのみ',
        'ハッピーセット ミルク / アップル (S) : コンディメントなし（紙パックのためストロー付属）'
      ]
    }
  ];

  categories.forEach(cat => {
    const block = document.createElement('div');
    block.className = 'study-category-block';
    
    let html = `<div class="study-category-title">📁 ${cat.title}</div>`;
    cat.items.forEach(item => {
      html += `<div class="study-item-row">・${item}</div>`;
    });
    
    block.innerHTML = html;
    modalBody.appendChild(block);
  });

  document.getElementById('study-modal').style.display = 'flex';
}

function closeStudyModal() {
  document.getElementById('study-modal').style.display = 'none';
}
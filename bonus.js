/* BONUS_V37_MIGRATION_START */
(()=>{const rules={"04": {"product": {"hash": "964932e0", "value": "コーヒーのお試し購入（架空の紹介案件A・計算練習）"}, "reward": {"hash": "4a8827ab", "value": "承認1件あたり3,000円という練習設定。"}, "conversion": {"hash": "3b585bdd", "value": "この練習では新しい買い手の初回購入を成果地点にする。実践では案件の紹介料の対象になる条件を確認する。"}, "target": {"hash": "7e088054", "value": "練習設定：初めて購入する人。実践では適用対象を確認する。"}, "approval": {"hash": "354da00c", "value": "取消・返品など、承認されない条件を確認する。"}, "purchase": {"hash": "485339cc", "value": "送料・購入回数・継続・解約など、販売ページの条件を確認する。"}, "source": {"hash": "23f24c7e", "value": "これは練習例。実際に使うときは、条件の確認元URLと確認日へ置き換える。"}, "unknown": {"hash": "03325774", "value": "実際の成果地点、対象者、承認時期、購入条件。"}, "accountMemo": {"hash": "e128e2d6", "value": "紹介内容と案内先が合い、自分の紹介として計測するリンクを使っているかを確認する。"}}, "09": {"entryRoute": {"hash": "4881d841", "value": "first"}, "searchMemo": {"hash": "c9179868", "value": "架空の旅行収納の検索メモ。衣類をまとめたい質問と、着用済みを分けたい質問があると設定。実践ではURL・日付・同用途の紹介も残す。"}, "aProduct": {"hash": "dda330c8", "value": "衣類収納ポーチ（架空の比較例A）"}, "aScene": {"hash": "6a81613b", "value": "旅行の荷物を一つにまとめ、出し入れする形を見たい人。"}, "aFacts": {"hash": "24084727", "value": "練習設定：荷物をまとめたいという質問があり、詰め方の参考も多い。似た紹介も多いが、自分で入れる前後を見せられる。商品の仕様は別途確認する。"}, "aTerms": {"hash": "a6930a7c", "value": "実商品の紹介料の対象になる条件・購入条件・案内先は確認してから使う。"}, "aUnknown": {"hash": "4bc36902", "value": "実商品の仕様、確認元、使える素材、現在の販売の動きと競合の状況。"}, "bProduct": {"hash": "016d06aa", "value": "着用済み衣類の分別用ポーチ（架空の比較例B）"}, "bScene": {"hash": "96081d22", "value": "帰りの荷物で、未使用と着用済みの衣類を分けたい人。"}, "bFacts": {"hash": "7041b216", "value": "練習設定：分けたいという質問はあるが、その用途の紹介例は少ない。制作できる段階なら、実商品の仕様で分別を示せるか調べる。"}, "bTerms": {"hash": "21fbe470", "value": "実商品の紹介料の対象になる条件・購入条件・案内先は確認してから使う。"}, "bUnknown": {"hash": "e1f2884f", "value": "質問の根拠と日付、実際の販売の動き、競合を調べた範囲、仕様と用意できる素材。"}, "testHypothesis": {"hash": "c4a27eeb", "value": "初めてならAで入れる前後の比較を一本作る。制作できるならBの需要と仕様を再確認し、未使用／着用済みを分ける動きを試す。"}, "reviewDate": {"hash": "37aa0d8b", "value": "実際の検索日と、公開から同じ日数で数字を見直す日を残す。"}, "next": {"hash": "cc7b6691", "value": "初めてならA。需要の手掛かりと見本があり、自分の素材で一本作れるから。制作できるならBも候補へ。ただし紹介が少ないだけで選ばず、実際の販売の動き・仕様・素材・条件を調べてから試す。"}}};const hash=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return (h>>>0).toString(16).padStart(8,'0')};for(const [n,fields] of Object.entries(rules)){try{const key='secret-bonus-v15-volume-'+n;const saved=JSON.parse(localStorage.getItem(key)||'null');if(!saved?.fields)continue;let changed=false;for(const [name,rule] of Object.entries(fields))if(typeof saved.fields[name]==='string'&&hash(saved.fields[name])===rule.hash){saved.fields[name]=rule.value;changed=true;}if(changed)localStorage.setItem(key,JSON.stringify(saved));}catch{}}})();
/* BONUS_V37_MIGRATION_END */
(()=>{'use strict';
const PREFIX='secret-bonus-v15-';
const store={get(k){try{return JSON.parse(localStorage.getItem(PREFIX+k)||'null')}catch{return null}},set(k,v){try{localStorage.setItem(PREFIX+k,JSON.stringify(v));return true}catch{return false}},remove(k){try{localStorage.removeItem(PREFIX+k)}catch{}}};
document.querySelectorAll('[data-print]').forEach(b=>b.addEventListener('click',()=>window.print()));
document.querySelectorAll('[data-quiz-answer]').forEach(b=>b.addEventListener('click',()=>{const group=b.closest('fieldset');group.querySelectorAll('button').forEach(x=>{x.classList.remove('is-correct','is-incorrect');x.setAttribute('aria-pressed','false')});b.classList.add(b.dataset.quizAnswer==='true'?'is-correct':'is-incorrect');b.setAttribute('aria-pressed','true');group.querySelector('.quiz-feedback').textContent=(b.dataset.quizAnswer==='true'?'その通りです。':'もう一度、図へ戻ると見えてきます。')+b.dataset.feedback;}));
const yen=n=>Math.round(n).toLocaleString('ja-JP')+'円';
const num=v=>v===''||v==null?null:(Number.isFinite(Number(v))?Number(v):null);
const calculator=document.querySelector('[data-reward-calculator]');
if(calculator){
 const fields=[...calculator.querySelectorAll('input')];const saved=store.get('reward-calculator');if(saved)fields.forEach(x=>{if(Object.hasOwn(saved,x.name))x.value=saved[x.name]});
 const update=()=>{const data=Object.fromEntries(fields.map(x=>[x.name,x.value]));const u=num(data.unit),o=num(data.occurred),a=num(data.approved),c=num(data.cost);const status=calculator.querySelector('[data-calc-status]');
  const invalid=[u,o,a,c].some(x=>x==null||x<0)||!Number.isInteger(o)||!Number.isInteger(a)||a>o;
  status.classList.toggle('error',invalid);status.textContent=invalid?'0以上の数値を入力してください。件数は整数、承認件数は発生件数以下にします。':'発生額と確定額を分けて表示しています。';
  const values={occurred:invalid?null:u*o,approved:invalid?null:u*a,balance:invalid?null:u*a-c};
  for(const [k,v] of Object.entries(values))calculator.querySelector('[data-calc="'+k+'"]').textContent=v==null?'—':yen(v);store.set('reward-calculator',data);
 };calculator.addEventListener('input',update);update();
}
const form=document.querySelector('form[data-tool]');if(!form)return;
const volume=form.dataset.volume,kind=form.dataset.tool,key='volume-'+volume;
const outputPanel=form.querySelector('.output-panel'),output=form.querySelector('[data-output]'),status=form.querySelector('[data-tool-status]');
let promptKind=0;
const common={"product": "携帯ブラシA・Bの長さ比較（説明用の架空例）", "audience": "有効な長さ11cmのポーチへ、ブラシをまっすぐ収納したい人", "scene": "外出前。ケース込みの長さで、AとBのどちらが長さ条件を満たすか選びたい。", "facts": "説明用の架空設定：ポーチの有効な長さ11cm。Aはケース込み12cm、Bはケース込み9cm。幅・厚み・開口部は未確認。実商品の仕様や本人実測ではない。", "source": "この教材の説明用設定。自分の商品では同じ型番の確認ページと日付、収納する側の有効寸法へ替える。", "reason": "同じ目盛りで比べるとAは1cm超え、Bは2cm余る。まっすぐ収納する長さ条件ならB。ただし幅・厚み・開口部を満たすかは未確認なので、実際に入るとは断定しない。", "destination": "幅・厚み・開口部を含む寸法と購入条件を、紹介する商品のページで確認してもらう。"};
const examples={"10": {"aPeriod": "公開から7日間という比較の例", "aViews": "500", "aClicks": "10", "aApproved": "9000", "aCost": "", "bPeriod": "公開から7日間という比較の例", "bViews": "1500", "bClicks": "15", "bApproved": "12000", "bCost": "", "same": "この架空例は、各動画の公開から7日間だけの件数。紹介リンクのクリックも各動画の分とする練習設定。実際に分けられなければ空欄にする。", "changed": "練習例では制作で何を変えたかは不明。クリック率低下だけで売上の原因を決めない。", "next": "目的は承認された紹介料。今回の見せ方をすぐ捨てず、同じ商品・リンク先・公開後期間で、最後のリンク案内のセリフだけを試す。クリック率と承認紹介料の両方を確認する。", "reviewDate": "記入例：次回も公開から7日後に同じ指標を記録する。"}, "02": {"slot": "水曜日、夕食のあとに20分", "finish": "ポーチ11cmとケース込みA12cm・B9cmを同じ目盛りで示し、長さ条件ならBと答える4場面の動画を一本作る。", "materials": "説明用の長さ比較図。実商品ではポーチ有効寸法、ケース込み寸法の確認ページと、自分で撮る映像。", "restart": "架空の反応例：ケース込みの長さか質問が残った。出した動画の字幕と音声を照合し、混在していれば「ケース込み」に統一。すでにそろっていれば同じ修正はせず、分かりにくい箇所を調べる。実際は同じ動画・同じ期間の反応を確認し、売上の原因と即断しない。", "observed": "新しい動画の軽さ訴求は重さの根拠がないため採らない。古い寸法比較動画には数字が字幕で隠れる弱点があり、比較の役割を取り入れて直せる。", "whyChange": "買い手の疑問は、11cmのポーチにまっすぐ収納する長さか。同じ目盛りの比較を残し、数字が見える位置へ字幕を移す。新しさだけで選ばない。", "ownChange": "1｜このポーチ、使える長さは11cm。／映すもの：ポーチの有効な長さ11cmを示す説明図。\n2｜Aはケースごとで12cm。まっすぐには収まりません。／映すもの：ケースに入れたAの12cmと、ポーチの11cmを同じ目盛りで示す。\n3｜Bは9cm。長さに2cm余裕があります。／映すもの：ケースに入れたBの9cmと、残る長さ2cmを同じ目盛りで示す。\n4｜長さで選ぶならB。幅・厚みと購入条件は商品ページで確認してください。／映すもの：長さ以外に確認する幅・厚み・開口部と、購入条件の案内。", "confirmedFacts": "説明用の架空設定：ポーチの有効な長さ11cm。Aはケース込み12cm、Bはケース込み9cm。幅・厚み・開口部は未確認。実商品の仕様や本人実測ではない。", "watchUrl": "架空の参考比較。実践では参考URL・投稿日・調べた日を残す。"}, "04": {"product": "コーヒーのお試し購入（架空の紹介案件A・計算練習）", "reward": "承認1件あたり3,000円という練習設定。", "conversion": "架空の設定では、新しい購入者の初回購入が紹介料の対象になる。実商品では、報酬欄に書かれた購入・申込などの条件を読む。", "target": "練習設定：初めて購入する人。実践では適用対象を確認する。", "approval": "取消・返品など、購入が記録されても報酬の対象外になる条件を確認する。", "purchase": "送料・購入回数・継続・解約など、販売ページの条件を確認する。", "source": "これは練習例。実際に使うときは、条件の確認元URLと確認日へ置き換える。", "unknown": "紹介料の対象になる行動と人、報酬の確認が終わる時期、購入条件。", "accountMemo": "紹介サービスを利用できる状態か、自分専用リンクの商品と紹介内容が一致するかを確認する。"}, "05": {"product": "携帯ブラシA・Bの長さ比較（説明用の架空例）", "audience": "有効な長さ11cmのポーチへ、ブラシをまっすぐ収納したい人", "scene": "外出前。ケース込みの長さで、AとBのどちらが長さ条件を満たすか選びたい。", "facts": "説明用の架空設定：ポーチの有効な長さ11cm。Aはケース込み12cm、Bはケース込み9cm。幅・厚み・開口部は未確認。実商品の仕様や本人実測ではない。", "source": "この教材の説明用設定。自分の商品では同じ型番の確認ページと日付、収納する側の有効寸法へ替える。", "reason": "同じ目盛りで比べるとAは1cm超え、Bは2cm余る。まっすぐ収納する長さ条件ならB。ただし幅・厚み・開口部を満たすかは未確認なので、実際に入るとは断定しない。", "destination": "幅・厚み・開口部を含む寸法と購入条件を、紹介する商品のページで確認してもらう。", "speech1": "このポーチ、使える長さは11cm。", "speech2": "Aはケースごとで12cm。まっすぐには収まりません。", "speech3": "Bは9cm。長さに2cm余裕があります。", "speech4": "長さで選ぶならB。幅・厚みと購入条件は商品ページで確認してください。", "shot1": "ポーチの有効な長さ11cmを示す説明図。", "shot2": "ケースに入れたAの12cmと、ポーチの11cmを同じ目盛りで示す。", "shot3": "ケースに入れたBの9cmと、残る長さ2cmを同じ目盛りで示す。", "shot4": "長さ以外に確認する幅・厚み・開口部と、購入条件の案内。"}, "06": {"stage0": true, "stage1": true, "stage2": true, "stage3": false, "stage4": false, "blocker": "今試す：仕様・手持ち映像・紹介条件と自分用リンクがそろうスタンド。原稿と映像の編集、公開前の照合はまだ。", "next": "4場面の映像を並べ、セリフ・映像・商品名と型番・自分用リンクを照合してから公開する。", "setupMemo": "架空の判断例：紹介サービスの掲載条件、購入など報酬の対象になる条件、自分用リンクを確認済み。実商品では自分で確認したページと日付へ替える。", "referenceMemo": "架空例：手持ちスタンドと同じ型番の商品ページで、折りたたみ・角度調整の仕様を確認。開く・角度を変える・たたむ動きを自分で撮影した映像がある。", "firstOutline": "机でスマホを立てて使いたいなら。／使う映像：机・スマホ・スタンドを並べた映像\nスタンドを開き、スマホを立てる角度を変えます。／使う映像：スタンドを開き、角度を変える映像\nスタンドを折りたたんだときの厚さです。／使う映像：折りたたんだスタンドを横から映した映像\n対応するスマホの寸法と購入条件は、商品ページで確認してください。／使う映像：対応サイズと購入条件が書かれた商品ページ", "reviewDate": "練習例：公開日と公開7日後に、動画表示回数・紹介リンクのクリック数・購入の記録・報酬承認件数を記録する。"}, "07": {"min0": "15", "task0": "手持ちの携帯ブラシの商品ページで、ケースの外寸を確認してメモする。", "min2": "", "task2": "", "min5": "", "task5": "", "min6": "", "task6": "", "restart": "商品ページと寸法メモを開き、ブラシを折りたたんでケースに入れる映像を撮る。", "request": "", "materials": "", "fixed": "", "delivery": "", "min1": "", "min3": "", "min4": "", "task1": "", "task3": "", "task4": ""}, "08": {"product": "携帯ブラシA・Bの長さ比較（説明用の架空例）", "audience": "有効な長さ11cmのポーチへ、ブラシをまっすぐ収納したい人", "scene": "外出前。ケース込みの長さで、AとBのどちらが長さ条件を満たすか選びたい。", "facts": "説明用の架空設定：ポーチの有効な長さ11cm。Aはケース込み12cm、Bはケース込み9cm。幅・厚み・開口部は未確認。実商品の仕様や本人実測ではない。", "source": "この教材の説明用設定。自分の商品では同じ型番の確認ページと日付、収納する側の有効寸法へ替える。", "reason": "同じ目盛りで比べるとAは1cm超え、Bは2cm余る。まっすぐ収納する長さ条件ならB。ただし幅・厚み・開口部を満たすかは未確認なので、実際に入るとは断定しない。", "destination": "幅・厚み・開口部を含む寸法と購入条件を、紹介する商品のページで確認してもらう。", "script": "このポーチ、使える長さは11cm。\nAはケースごとで12cm。まっすぐには収まりません。\nBは9cm。長さに2cm余裕があります。\n長さで選ぶならB。幅・厚みと購入条件は商品ページで確認してください。", "timing": "", "shot1": "ポーチの有効な長さ11cmを示す説明図。", "shot2": "ケースに入れたAの12cmと、ポーチの11cmを同じ目盛りで示す。", "shot3": "ケースに入れたBの9cmと、残る長さ2cmを同じ目盛りで示す。", "shot4": "長さ以外に確認する幅・厚み・開口部と、購入条件の案内。"}, "09": {"aProduct": "そのまま洗える衣類ケース／帰宅後の移し替えを減らす用途（候補A）", "aScene": "旅行から帰り、着用済みの服を収納袋から洗濯ネットへ移す手間を減らしたい人。", "aFacts": "公開の要望とメーカー公式の洗濯用途が対応。見せる比較は「収納袋から服を出して洗濯ネットへ移す」工程と「洗濯対応ケースに入れたまま洗濯へ」の違い。自分が同じ型番の商品と使える映像を持つかは未確認。", "aTerms": "同じ型番の商品について紹介サービスの掲載可否、購入などの報酬条件、自分用リンクを確認する。", "aUnknown": "制作する題材として採る。現行商品の型番・洗濯条件、自分で撮る比較映像を確認。紹介サービスで同じ商品を検索し、掲載可否・報酬条件・自分用リンクを確認してから制作・公開へ。", "bProduct": "圧縮して、そのまま洗う用途（保留する比較例）", "bScene": "旅行中は衣類を圧縮し、帰宅後はケースから移さず洗いたい人。", "bFacts": "圧縮しながら洗濯に使うという要望はあるが、圧縮する当該商品の洗濯対応は未確認。メーカーの同じ型番の仕様が必要。", "bTerms": "商品型番と紹介可能な掲載条件が未確認。", "bUnknown": "圧縮する商品の洗濯可否と洗濯条件。未確認のため保留。防臭・密閉の訴求は根拠がないため外す。", "next": "候補Aの現行型番・洗濯条件・映像利用可否・紹介条件を確かめ、比較する一場面を用意する。", "testHypothesis": "収納袋から洗濯ネットへ移す工程と、衣類ケースに入れたまま洗濯する用途を比べ、帰宅後の手間の違いを伝える。", "entryRoute": "first", "searchMemo": "2026年11月10日確認。公開要望 https://idea.muji.net/request/detail/98213 と公式用途 https://www.muji.com/jp/ja/shop/045589/articles/muji-staff/1613056 。市場規模・競合の少なさ・収益性は未確認。", "reviewDate": "実際の検索日と、公開から同じ日数で数字を見直す日を残す。", "aCheckScene": "ready", "aCheckFacts": "missing", "aCheckTerms": "unknown", "aCheckDestination": "unknown", "bCheckScene": "ready", "bCheckFacts": "missing", "bCheckTerms": "unknown", "bCheckDestination": "unknown"}};
const controls=()=>[...form.elements].filter(x=>x.name&&['INPUT','TEXTAREA','SELECT'].includes(x.tagName));
const read=()=>Object.fromEntries(controls().map(x=>[x.name,x.type==='checkbox'?x.checked:x.value]));
const value=n=>(form.elements.namedItem(n)?.value||'').trim();
const setValues=data=>controls().forEach(x=>{if(Object.hasOwn(data,x.name)){if(x.type==='checkbox')x.checked=Boolean(data[x.name]);else x.value=data[x.name]??'';}});
const note=(s,error=false)=>{status.textContent=s;status.classList.toggle('error',error)};
const saved=store.get(key);if(saved?.fields){setValues(saved.fields);promptKind=Number.isInteger(saved.promptKind)?saved.promptKind:0;}
const persist=()=>store.set(key,{fields:read(),promptKind});
function update(){

 if(kind==='week'){const total=Array.from({length:7},(_,i)=>num(value('min'+i))||0).reduce((a,b)=>a+b,0);form.querySelector('[data-week-total]').textContent=total+'分';}
 if(kind==='metrics'){
  const a=ratio('a'),b=ratio('b');const box=form.querySelector('.metrics-live');box.textContent='';
  for(const [label,rate,k] of [['前回',a,'a'],['今回',b,'b']]){if(k==='a'&&!['aViews','aClicks'].some(n=>value(n)!==''))continue;const p=document.createElement('p');p.textContent=label+'のクリック率：'+(rate==null?(num(value(k+'Views'))===0?'動画の表示回数が0のため算出しません。':'表示数とクリック数を入力すると計算します。'):rate.toFixed(2)+'%');box.append(p);}
  if(a!=null&&b!=null){const p=document.createElement('p');p.textContent='差：'+(b-a>=0?'+':'')+(b-a).toFixed(2)+'ポイント。理由は、条件や変更点と一緒に考えます。';box.append(p);}
 }
 if(kind==='prompts'){
  form.querySelectorAll('[data-prompt-kind]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.promptKind)===promptKind)));
  form.querySelector('.prompt-materials').hidden=promptKind>=4;
  form.querySelector('.prompt-script').hidden=promptKind<3;
  form.querySelector('.prompt-timing').hidden=promptKind!==5;
 }
}
function ratio(k){const v=num(value(k+'Views')),c=num(value(k+'Clicks'));return v!=null&&v>0&&c!=null?100*c/v:null;}
update();form.addEventListener('input',()=>{update();note(persist()?'入力を保存しました。':'端末へ保存できません。内容をまとめてテキストで保存してください。',false)});
form.querySelector('[data-example]')?.addEventListener('click',()=>{controls().forEach(x=>{if(x.type==='checkbox')x.checked=false;else x.value=''});setValues(examples[volume]||{});outputPanel.hidden=true;update();persist();note('記入例を入れました。自分の内容へ置き換えて使ってください。');});
form.querySelector('[data-clear]')?.addEventListener('click',()=>{controls().forEach(x=>{if(x.type==='checkbox')x.checked=false;else x.value=''});output.value='';outputPanel.hidden=true;store.remove(key);update();note('このページの入力を空にしました。');});
form.querySelectorAll('[data-prompt-kind]').forEach(b=>b.addEventListener('click',()=>{promptKind=Number(b.dataset.promptKind);update();persist();note('「'+window.BONUS_PROMPTS[promptKind][0]+'」の指示を選びました。');}));
const line=(label,name)=>label+'：'+(value(name)||'［未記入］');
function build(){
 if(kind==='consult')return ['面談の準備・行動メモ',line('いまの状況','current'),line('面談で確かめたいこと','question'),'面談後に決めた作業：'+(value('action')||'［面談後に記入］')].join('\n\n');
 if(kind==='plan')return ['次の一回の作業メモ',line('制作する曜日と時間','slot'),line('その作業時間で終わらせること','finish'),line('先に用意するもの','materials'),line('次回の始め方','restart')].join('\n\n');
 if(kind==='offer')return ['案件条件の確認メモ',...['product','reward','conversion','target','approval','purchase','source','unknown'].map((k,i)=>line(['案件・商品','報酬','紹介料の対象になる行動と条件','対象者','承認・取消の条件','購入条件','参照した場所と確認日','まだ確認すること'][i],k))].join('\n\n');
 if(kind==='design')return ['収益化の原稿と映す場面メモ',...['product','audience','scene','facts','source','reason','destination'].map((k,i)=>line(['商品','相手','使う場面','確認した事実','仕様を調べたページ','相手に関係する理由','案内先で確かめること'][i],k)),'紹介の順番','1. '+(value('scene')||'［使う場面］')+'\n2. '+(value('facts')||'［商品の事実］')+'\n3. '+(value('reason')||'［相手に関係する理由］')+'\n4. '+(value('destination')||'［案内先］')].join('\n\n');
 if(kind==='route'){const names=['条件を確認','商品を使う人と場面を決める','素材を準備','紹介動画を一本制作','結果を記録'];return ['最初の一回・進行メモ',...names.map((s,i)=>(form.elements.namedItem('stage'+i).checked?'✓ ':'□ ')+s),line('いま止まっていること','blocker'),line('次に終わらせる一つ','next')].join('\n\n');}
 if(kind==='week'){const days=['月','火','水','木','金','土','日'],rows=['次回から使う作業予定'];for(let i=0;i<7;i++){const m=value('min'+i),t=value('task'+i);if(m!==''||t!=='')rows.push(days[i]+'｜'+(m||'時間未記入')+(m?'分':'')+'｜'+(t||'終える作業は未記入'));}rows.push(form.querySelector('.week-total').textContent,line('次回、最初に開いてすること','restart'));if(['request','materials','fixed','delivery'].some(k=>value(k)))rows.push('依頼メモ',line('お願いする作業','request'),line('渡す原稿・映像・字幕の見本','materials'),line('変えないセリフ・順序','fixed'),line('納期・形式・確認範囲','delivery'));return rows.join('\n\n');}
 if(kind==='prompts'){
  if((promptKind===0||promptKind===3)&&!value('facts'))throw new Error('確認した商品の事実を入力してください。');
  if((promptKind===1||promptKind===2)&&(!value('audience')||!value('facts')))throw new Error('商品を見る人と、確認した仕様を入力してください。');
  if(promptKind>=3&&!value('script'))throw new Error('この工程では原稿を入力してください。');
  if(promptKind===5&&!value('timing'))throw new Error('字幕形式にするには、実音声で確認した開始・終了時刻を入力してください。');
  const task=window.BONUS_PROMPTS[promptKind];const rules='入力にない体験・効果・価格・数値・実績を足さないでください。未確認のことは、本文と分けて「確認すること」に残してください。';
  const keys=(promptKind===0||promptKind===3)?['facts','source']:['audience','scene','facts','source','reason','destination'];
  const names={audience:'相手',scene:'使う場面',facts:'確認した商品の事実',source:'仕様を確認したページ・資料',reason:'相手に関係する理由',destination:'案内先'};
  const materials=promptKind<4?keys.map(k=>line(names[k],k)).join('\n'):'';
  return [task[1],rules,materials,promptKind>=3?line('原稿','script'):'',promptKind===5?line('字幕を出す開始時刻・消す終了時刻','timing'):''].filter(Boolean).join('\n\n');
 }
 if(kind==='research')return ['候補の比較メモ',...['a','b'].map((k,i)=>['候補'+(i?'B':'A'),...['Product','Scene','Facts','Terms','Unknown'].map((name,j)=>line(['商品名','商品を使う人と場面','需要・参考・商品の仕様と使える映像','案件条件・案内先','不足している情報'][j],k+name))].join('\n')),line('次に調べる候補と理由','next')].join('\n\n');
 if(kind==='metrics')return ['数字と改善の比較メモ',...['a','b'].map((k,i)=>{const rate=ratio(k),a=num(value(k+'Approved')),c=num(value(k+'Cost'));return [(i?'今回':'前回'),line('集計期間',''+k+'Period'),'動画の表示回数：'+(num(value(k+'Views'))?.toLocaleString('ja-JP')??'未記入'),'クリック数：'+(num(value(k+'Clicks'))?.toLocaleString('ja-JP')??'未記入'),'クリック率：'+(rate==null?'算出しない':rate.toFixed(2)+'%'),'確定額：'+(a==null?'未記入':yen(a)),'記入した費用：'+(c==null?'未記入':yen(c)),'確定額 − 記入費用：'+(a==null||c==null?'両方の数値を入力すると計算':yen(a-c))].join('\n')}),line('比較の条件','same'),line('前回から変えたこと','changed'),line('次の動画で変えるセリフや映像','next')].join('\n\n');
 return '';
}
form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;
 try{if(!controls().some(x=>x.type==='checkbox'?x.checked:x.value.trim()))throw new Error('記入例を入れるか、自分の内容を入力してください。');output.value=build();outputPanel.hidden=false;persist();note(kind==='prompts'?'AIへ貼り付ける指示文を作りました。':'入力した内容をまとめました。コピー・保存して使えます。');}catch(error){note(error.message,true);}
});
form.querySelector('[data-copy]')?.addEventListener('click',async()=>{if(!output.value)return;try{await navigator.clipboard.writeText(output.value);note('コピーしました。')}catch{output.focus();output.select();note('文章を選択しました。コピーして使ってください。');}});
form.querySelector('[data-download]')?.addEventListener('click',()=>{if(!output.value)return;const url=URL.createObjectURL(new Blob(['\ufeff'+output.value],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='特典'+volume+'_実践メモ.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);note('保存用のテキストファイルを作りました。');});
})();

/* 既存v15の入力と保存キーを保ち、完成確認と段階別の読み取りを追加。 */
(()=>{'use strict';
 const form=document.querySelector('form[data-tool]');
 document.querySelectorAll('[data-select-prompt]').forEach(b=>b.addEventListener('click',()=>{
  const target=document.querySelector('[data-prompt-kind="'+b.dataset.selectPrompt+'"]');
  if(target){target.click();target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});target.focus({preventScroll:true});}
 }));
 if(!form)return;
 const kind=form.dataset.tool,volume=form.dataset.volume;
 const get=n=>(form.elements.namedItem(n)?.value||'').trim();
 const number=n=>get(n)===''?null:Number(get(n));
 const text=(tag,value)=>{const x=document.createElement(tag);x.textContent=value;return x};
 const rate=(a,b)=>a==null||b==null?'未入力':b===0?'算出しない（母数0）':(100*a/b).toFixed(2)+'%';
 const labels={Scene:'商品を使う人と場面',Facts:'商品の仕様と使える映像',Terms:'案件条件',Destination:'案内先'};
 function update(){

  if(kind==='metrics'){
   const box=form.querySelector('[data-funnel-live]');box.replaceChildren(text('h3','クリックの先も、段階を分ける。'));
   const hasA=['Period','Views','Clicks','Occurred','ApprovedCount','Approved','Cost'].some(s=>get('a'+s)!=='');box.classList.toggle('single-period',!hasA);const row=(a,b,c)=>{const r=document.createElement('div');r.className='funnel-row';r.append(text('span',a));if(hasA)r.append(text('strong',b));r.append(text('strong',c));box.append(r)};
   row('段階','前回','今回');
   for(const [label,n,d] of [['クリック率','Clicks','Views'],['クリック→発生','Occurred','Clicks'],['発生→承認','ApprovedCount','Occurred']]){if(n!=='Clicks'&&!['a','b'].some(k=>number(k+n)!=null))continue;row(label,rate(number('a'+n),number('a'+d)),rate(number('b'+n),number('b'+d)));}
   let invalid=false;
   for(const k of ['a','b']){
    const occured=number(k+'Occurred'),approved=number(k+'ApprovedCount');
    if(occured!=null&&approved!=null&&approved>occured){const p=text('p',(k==='a'?'前回':'今回')+'：承認件数は発生件数以下にしてください。');p.className='error';box.append(p);invalid=true;}
   }
   box.append(text('p',invalid?'入力の件数を確認してください。':'未確認の件数は空欄で構いません。0件と、未確認を分けて残します。'));
   const clicks=number('bClicks'),occurred=number('bOccurred'),views=number('bViews');
   let suggestion='比較期間・相手・案内先などの条件と、今回変えた箇所を一緒に確認します。';
   if(views===0)suggestion='動画の表示回数が0件です。計測期間と公開状態を先に確認します。';
   else if(clicks===0&&views>0)suggestion='表示はあり、クリックは0件。案内が見える位置・言葉・リンクが開くかを確認します。';
   else if(clicks>0&&occurred===0)suggestion='クリックはあり、発生は0件。案内内容と行き先の一致、紹介料の対象になる条件、計測期間を確認します。';
   box.append(text('p','次に確認する場所：'+suggestion));
  }
 }
 update();form.addEventListener('input',update);form.addEventListener('change',update);
 form.querySelector('[data-example]')?.addEventListener('click',()=>{
  if(kind==='metrics'){
   for(const [name,v] of Object.entries({aOccurred:'5',aApprovedCount:'3',bOccurred:'5',bApprovedCount:'4',aApproved:'',bApproved:'',aCost:'',bCost:''})){form.elements.namedItem(name).value=v;}
  }
  if(kind==='research')for(const k of ['a','b'])for(const suffix of Object.keys(labels))form.elements.namedItem(k+'Check'+suffix).value='unknown';
  form.dispatchEvent(new Event('input',{bubbles:true}));
 });
 form.querySelector('[data-clear]')?.addEventListener('click',update);
 form.addEventListener('submit',event=>{
  form.querySelector('.output-panel').hidden=true;
  if(kind==='metrics')for(const k of ['a','b']){
   const occurred=number(k+'Occurred'),approved=number(k+'ApprovedCount');
   if(occurred!=null&&approved!=null&&approved>occurred){
    event.preventDefault();event.stopImmediatePropagation();
    const status=form.querySelector('[data-tool-status]');status.textContent='承認件数は発生件数以下にしてください。';status.classList.add('error');return;
   }
  }
 },true);
 form.addEventListener('submit',()=>{
  if(!form.reportValidity())return;
  const output=form.querySelector('[data-output]');const panel=form.querySelector('.output-panel');
  if(panel.hidden||!output.value)return;
  const review=form.querySelector('[data-result-review]');review.replaceChildren();review.hidden=false;
  let checks=[];
  if(kind==='design')checks=[['audience','相手'],['scene','使う場面'],['facts','商品の事実'],['source','仕様を調べたページ'],['reason','相手が選ぶ理由'],['destination','案内先']];
  if(kind==='offer')checks=[['reward','報酬'],['conversion','紹介料の対象になる条件'],['approval','承認条件'],['purchase','購入条件'],['source','確認先と日付']];
  if(kind==='plan')checks=[['slot','作業枠'],['finish','完成物'],['materials','先に開くもの'],['restart','次の作業']];
  if(kind==='week')checks=[['restart','試した後の確認と次の作業']];
  const missing=checks.filter(([n])=>!get(n)).map(([,label])=>label);
  review.append(text('strong',missing.length?'次に埋める材料':'完成したメモの使い方'));
  review.append(text('p',missing.length?missing.join('・')+'を追加すると、次の工程へ進めます。':({'design':'話すセリフと映す場面を照合し、原稿を確定できます。','offer':'未確認の条件は公式ページで確かめ、わからないまま紹介を始めません。','plan':'決めた時間になったら、記入した資料から始めます。','week':'次回の作業時間では「再開する場所」を先に開きます。','route':'このページの準備例を見て、未完了の作業を一つ終えます。','prompts':'AIへ貼り付け、出力例と照らしてから採る案を選びます。','research':'不足がある候補は、先に確認する材料を一つ決めます。','metrics':'次の動画で変えるセリフや映像と、比較する期間を決めて記録します。'}[kind]||'記録した内容を次の一回に使います。')));
  if(kind==='research'){
   let addition='\n\n着手する材料の確認';
   for(const k of ['a','b']){
    addition+='\n候補'+k.toUpperCase();
    for(const [suffix,label] of Object.entries(labels))addition+='\n'+label+'：'+({ready:'確認済み',missing:'不足あり',unknown:'未確認'}[get(k+'Check'+suffix)]||'未確認');
   }
   output.value+=addition;
   review.append(text('p','確認済みの項目が多いことは、売上の予測ではありません。自分で着手できる材料として比較します。'));
  }
  if(kind==='metrics'){
   let addition='\n\n段階別の割合';
   for(const k of ['a','b'])addition+='\n'+(k==='a'?'前回':'今回')+'｜クリック→発生：'+rate(number(k+'Occurred'),number(k+'Clicks'))+'｜発生→承認：'+rate(number(k+'ApprovedCount'),number(k+'Occurred'));
   output.value+=addition;
  }
 });
})();

/* BONUS_V32_START */
(()=>{'use strict';
const examples=window.BONUS_V32_EXAMPLES||{};
const form=document.querySelector('form[data-tool]');
if(form){
 const volume=form.dataset.volume,kind=form.dataset.tool;
 const value=n=>(form.elements.namedItem(n)?.value||'').trim();
 const extra=[...form.querySelectorAll('[data-v32-field]')];
 const routeNames=['条件・登録・承認・リンクの確認','商品を使う人と場面の原稿と映す場面','使う素材の準備','原稿・映像・案内先の照合','公開日と見直す日の記録'];
 function updateRoute(){}
 updateRoute();form.addEventListener('input',updateRoute);form.addEventListener('change',updateRoute);
 form.querySelector('[data-clear]')?.addEventListener('click',updateRoute);
 form.querySelector('[data-example]')?.addEventListener('click',()=>{
  for(const [name,v] of Object.entries(examples[volume]||{})){const field=form.elements.namedItem(name);if(field)field.value=v;}
  form.dispatchEvent(new Event('input',{bubbles:true}));
 });
 form.addEventListener('submit',()=>{
  const panel=form.querySelector('.output-panel'),output=form.querySelector('[data-output]');
  if(panel.hidden||!output.value)return;
  if(extra.length)output.value+='\n\n'+({'02':'観察から改善へ','04':'報酬設定の確認','06':'最初の一本の制作メモ','09':'今回の参入ルート','10':'次の比較'}[volume]||'追加メモ')+'\n'+extra.map(x=>x.dataset.v32Field+'：'+(x.tagName==='SELECT'?(x.selectedOptions[0]?.textContent||'未選択'):(value(x.name)||'［未記入］'))).join('\n\n');
  const review=form.querySelector('[data-result-review]');
  if(volume==='02'&&review){review.replaceChildren();const p=document.createElement('p');p.textContent=value('ownChange')?'観察した事実と理由を読み、自分の素材で変える一つから制作を始めます。':'参考・判断理由・自分の変更点を埋めると、時間割だけでなく制作の判断を再開できます。';review.append(p);review.hidden=false;}
  if(volume==='06'&&review){review.replaceChildren();const p=document.createElement('p');p.textContent='初期設定の状態を自分の管理画面で確かめ、未完了の一段階から進めます。このメモは承認やリンク計測の成否を自動判定するものではありません。';review.append(p);review.hidden=false;}
 });
}

const caption=document.querySelector('[data-caption-tool]');if(!caption)return;
const key='secret-bonus-v32-caption',input=caption.elements.namedItem('captionRows'),status=caption.querySelector('[data-caption-status]'),panel=caption.querySelector('[data-caption-panel]'),out=caption.querySelector('[data-caption-output]');
const note=(message,error=false)=>{status.textContent=message;status.classList.toggle('error',error)};
try{const saved=localStorage.getItem(key);if(saved!==null)input.value=saved;}catch{}
const persist=()=>{try{localStorage.setItem(key,input.value);return true}catch{return false}};
input.addEventListener('input',()=>{panel.hidden=true;note(persist()?'入力を保存しました。時刻と字幕を確認してから作成してください。':'端末へ保存できません。必要な入力はコピーして残してください。')});
caption.querySelector('[data-caption-example]').addEventListener('click',()=>{input.value="0 | 3 | このポーチ、使える長さは11cm。\n3 | 7 | Aはケースごとで12cm。まっすぐには収まりません。\n7 | 11 | Bは9cm。長さに2cm余裕があります。\n11 | 18 | 長さで選ぶならB。幅・厚みと購入条件は\\n商品ページで確認してください。";panel.hidden=true;persist();note('作例を入れました。自分の音声で確認した時刻と字幕へ置き換えてください。');});
caption.querySelector('[data-caption-clear]').addEventListener('click',()=>{input.value='';out.value='';panel.hidden=true;try{localStorage.removeItem(key)}catch{}note('この字幕欄の入力を空にしました。');});
const time=ms=>{const hour=Math.floor(ms/3600000),min=Math.floor(ms%3600000/60000),sec=Math.floor(ms%60000/1000),msec=ms%1000;return [hour,min,sec].map(x=>String(x).padStart(2,'0')).join(':')+','+String(msec).padStart(3,'0')};
caption.addEventListener('submit',event=>{event.preventDefault();panel.hidden=true;out.value='';
 try{
  const lines=input.value.split(/\r?\n/).map((line,i)=>({line:line.trim(),i:i+1})).filter(x=>x.line);
  if(!lines.length)throw new Error('秒数と字幕を一行以上入力してください。');
  let previousEnd=0;const entries=[];
  for(const {line,i} of lines){
   const parts=line.split('|');if(parts.length<3)throw new Error(i+'行目：開始秒 | 終了秒 | 字幕 の順に入力してください。');
   const first=parts.shift().trim(),last=parts.shift().trim(),text=parts.join('|').trim().replace(/\\n/g,'\n');
   if(!/^\d+(?:\.\d{1,3})?$/.test(first)||!/^\d+(?:\.\d{1,3})?$/.test(last))throw new Error(i+'行目：秒数は0以上、小数点以下3桁までの数値にしてください。');
   const start=Math.round(Number(first)*1000),end=Math.round(Number(last)*1000);
   if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||end<=start)throw new Error(i+'行目：終了は開始より後の時刻にしてください。');
   if(start<previousEnd)throw new Error(i+'行目：前の字幕の終了と重なっています。音声で確認し、時刻を直してください。');
   if(!text||text.split('\n').some(x=>!x.trim()))throw new Error(i+'行目：字幕本文を入力し、空の改行を除いてください。');
   entries.push(entries.length+1+'\n'+time(start)+' --> '+time(end)+'\n'+text);previousEnd=end;
  }
  out.value=entries.join('\n\n')+'\n';panel.hidden=false;persist();note(entries.length+'件のSRTを作りました。保存して、編集ソフトで全編を照合してください。');
 }catch(error){note(error.message,true);}
});
caption.querySelector('[data-caption-copy]').addEventListener('click',async()=>{if(!out.value)return;try{await navigator.clipboard.writeText(out.value);note('SRTの内容をコピーしました。')}catch{out.focus();out.select();note('コピーできませんでした。選択した内容を手動でコピーしてください。',true)}});
caption.querySelector('[data-caption-download]').addEventListener('click',()=>{if(!out.value)return;const url=URL.createObjectURL(new Blob(['\ufeff'+out.value],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='字幕.srt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);note('字幕.srtの保存を開始しました。編集ソフトで読み込み、音声と照合してください。');});
})();
/* BONUS_V32_END */

/* BONUS_V37_START */
(()=>{'use strict';
const examples={"05": {"shot1": "ポーチの有効な長さ11cmを示す説明図。", "shot2": "ケースに入れたAの12cmと、ポーチの11cmを同じ目盛りで示す。", "shot3": "ケースに入れたBの9cmと、残る長さ2cmを同じ目盛りで示す。", "shot4": "長さ以外に確認する幅・厚み・開口部と、購入条件の案内。", "speech1": "このポーチ、使える長さは11cm。", "speech2": "Aはケースごとで12cm。まっすぐには収まりません。", "speech3": "Bは9cm。長さに2cm余裕があります。", "speech4": "長さで選ぶならB。幅・厚みと購入条件は商品ページで確認してください。", "product": "携帯ブラシA・Bの長さ比較（説明用の架空例）", "audience": "有効な長さ11cmのポーチへ、ブラシをまっすぐ収納したい人", "scene": "外出前。ケース込みの長さで、AとBのどちらが長さ条件を満たすか選びたい。", "facts": "説明用の架空設定：ポーチの有効な長さ11cm。Aはケース込み12cm、Bはケース込み9cm。幅・厚み・開口部は未確認。実商品の仕様や本人実測ではない。", "source": "この教材の説明用設定。自分の商品では同じ型番の確認ページと日付、収納する側の有効寸法へ替える。", "reason": "同じ目盛りで比べるとAは1cm超え、Bは2cm余る。まっすぐ収納する長さ条件ならB。ただし幅・厚み・開口部を満たすかは未確認なので、実際に入るとは断定しない。", "destination": "幅・厚み・開口部を含む寸法と購入条件を、紹介する商品のページで確認してもらう。"}, "08": {"shot1": "ポーチの有効な長さ11cmを示す説明図。", "shot2": "ケースに入れたAの12cmと、ポーチの11cmを同じ目盛りで示す。", "shot3": "ケースに入れたBの9cmと、残る長さ2cmを同じ目盛りで示す。", "shot4": "長さ以外に確認する幅・厚み・開口部と、購入条件の案内。", "facts": "説明用の架空設定：ポーチの有効な長さ11cm。Aはケース込み12cm、Bはケース込み9cm。幅・厚み・開口部は未確認。実商品の仕様や本人実測ではない。", "product": "携帯ブラシA・Bの長さ比較（説明用の架空例）", "audience": "有効な長さ11cmのポーチへ、ブラシをまっすぐ収納したい人", "scene": "外出前。ケース込みの長さで、AとBのどちらが長さ条件を満たすか選びたい。", "source": "この教材の説明用設定。自分の商品では同じ型番の確認ページと日付、収納する側の有効寸法へ替える。", "reason": "同じ目盛りで比べるとAは1cm超え、Bは2cm余る。まっすぐ収納する長さ条件ならB。ただし幅・厚み・開口部を満たすかは未確認なので、実際に入るとは断定しない。", "destination": "幅・厚み・開口部を含む寸法と購入条件を、紹介する商品のページで確認してもらう。", "script": "このポーチ、使える長さは11cm。\nAはケースごとで12cm。まっすぐには収まりません。\nBは9cm。長さに2cm余裕があります。\n長さで選ぶならB。幅・厚みと購入条件は商品ページで確認してください。"}, "04": {"product": "コーヒーのお試し購入（架空の紹介案件A・計算練習）", "reward": "承認1件あたり3,000円という練習設定。", "conversion": "架空の設定では、新しい購入者の初回購入が紹介料の対象になる。実商品では、報酬欄に書かれた購入・申込などの条件を読む。", "target": "練習設定：初めて購入する人。実践では適用対象を確認する。", "approval": "取消・返品など、購入が記録されても報酬の対象外になる条件を確認する。", "purchase": "送料・購入回数・継続・解約など、販売ページの条件を確認する。", "source": "これは練習例。実際に使うときは、条件の確認元URLと確認日へ置き換える。", "unknown": "紹介料の対象になる行動と人、報酬の確認が終わる時期、購入条件。", "accountMemo": "紹介サービスを利用できる状態か、自分専用リンクの商品と紹介内容が一致するかを確認する。"}, "09": {"entryRoute": "first", "searchMemo": "2026年11月10日確認。公開要望 https://idea.muji.net/request/detail/98213 と公式用途 https://www.muji.com/jp/ja/shop/045589/articles/muji-staff/1613056 。市場規模・競合の少なさ・収益性は未確認。", "aProduct": "そのまま洗える衣類ケース／帰宅後の移し替えを減らす用途（候補A）", "aScene": "旅行から帰り、着用済みの服を収納袋から洗濯ネットへ移す手間を減らしたい人。", "aFacts": "公開の要望とメーカー公式の洗濯用途が対応。見せる比較は「収納袋から服を出して洗濯ネットへ移す」工程と「洗濯対応ケースに入れたまま洗濯へ」の違い。自分が同じ型番の商品と使える映像を持つかは未確認。", "aTerms": "同じ型番の商品について紹介サービスの掲載可否、購入などの報酬条件、自分用リンクを確認する。", "aUnknown": "制作する題材として採る。現行商品の型番・洗濯条件、自分で撮る比較映像を確認。紹介サービスで同じ商品を検索し、掲載可否・報酬条件・自分用リンクを確認してから制作・公開へ。", "bProduct": "圧縮して、そのまま洗う用途（保留する比較例）", "bScene": "旅行中は衣類を圧縮し、帰宅後はケースから移さず洗いたい人。", "bFacts": "圧縮しながら洗濯に使うという要望はあるが、圧縮する当該商品の洗濯対応は未確認。メーカーの同じ型番の仕様が必要。", "bTerms": "商品型番と紹介可能な掲載条件が未確認。", "bUnknown": "圧縮する商品の洗濯可否と洗濯条件。未確認のため保留。防臭・密閉の訴求は根拠がないため外す。", "testHypothesis": "収納袋から洗濯ネットへ移す工程と、衣類ケースに入れたまま洗濯する用途を比べ、帰宅後の手間の違いを伝える。", "reviewDate": "実際の検索日と、公開から同じ日数で数字を見直す日を残す。", "next": "候補Aの現行型番・洗濯条件・映像利用可否・紹介条件を確かめ、比較する一場面を用意する。", "aCheckScene": "ready", "aCheckFacts": "missing", "aCheckTerms": "unknown", "aCheckDestination": "unknown", "bCheckScene": "ready", "bCheckFacts": "missing", "bCheckTerms": "unknown", "bCheckDestination": "unknown"}, "02": {"observed": "新しい動画の軽さ訴求は重さの根拠がないため採らない。古い寸法比較動画には数字が字幕で隠れる弱点があり、比較の役割を取り入れて直せる。", "whyChange": "買い手の疑問は、11cmのポーチにまっすぐ収納する長さか。同じ目盛りの比較を残し、数字が見える位置へ字幕を移す。新しさだけで選ばない。", "ownChange": "1｜このポーチ、使える長さは11cm。／映すもの：ポーチの有効な長さ11cmを示す説明図。\n2｜Aはケースごとで12cm。まっすぐには収まりません。／映すもの：ケースに入れたAの12cmと、ポーチの11cmを同じ目盛りで示す。\n3｜Bは9cm。長さに2cm余裕があります。／映すもの：ケースに入れたBの9cmと、残る長さ2cmを同じ目盛りで示す。\n4｜長さで選ぶならB。幅・厚みと購入条件は商品ページで確認してください。／映すもの：長さ以外に確認する幅・厚み・開口部と、購入条件の案内。", "confirmedFacts": "説明用の架空設定：ポーチの有効な長さ11cm。Aはケース込み12cm、Bはケース込み9cm。幅・厚み・開口部は未確認。実商品の仕様や本人実測ではない。", "finish": "ポーチ11cmとケース込みA12cm・B9cmを同じ目盛りで示し、長さ条件ならBと答える4場面の動画を一本作る。", "materials": "説明用の長さ比較図。実商品ではポーチ有効寸法、ケース込み寸法の確認ページと、自分で撮る映像。", "watchUrl": "架空の参考比較。実践では参考URL・投稿日・調べた日を残す。", "restart": "架空の反応例：ケース込みの長さか質問が残った。出した動画の字幕と音声を照合し、混在していれば「ケース込み」に統一。すでにそろっていれば同じ修正はせず、分かりにくい箇所を調べる。実際は同じ動画・同じ期間の反応を確認し、売上の原因と即断しない。"}, "06": {"setupMemo": "架空の判断例：紹介サービスの掲載条件、購入など報酬の対象になる条件、自分用リンクを確認済み。実商品では自分で確認したページと日付へ替える。", "referenceMemo": "架空例：手持ちスタンドと同じ型番の商品ページで、折りたたみ・角度調整の仕様を確認。開く・角度を変える・たたむ動きを自分で撮影した映像がある。", "firstOutline": "机でスマホを立てて使いたいなら。／使う映像：机・スマホ・スタンドを並べた映像\nスタンドを開き、スマホを立てる角度を変えます。／使う映像：スタンドを開き、角度を変える映像\nスタンドを折りたたんだときの厚さです。／使う映像：折りたたんだスタンドを横から映した映像\n対応するスマホの寸法と購入条件は、商品ページで確認してください。／使う映像：対応サイズと購入条件が書かれた商品ページ", "blocker": "今試す：仕様・手持ち映像・紹介条件と自分用リンクがそろうスタンド。原稿と映像の編集、公開前の照合はまだ。", "next": "4場面の映像を並べ、セリフ・映像・商品名と型番・自分用リンクを照合してから公開する。", "reviewDate": "練習例：公開日と公開7日後に、動画表示回数・紹介リンクのクリック数・購入の記録・報酬承認件数を記録する。", "stage0": true, "stage1": true, "stage2": true, "stage3": false, "stage4": false}, "10": {"changed": "練習例では制作で何を変えたかは不明。クリック率低下だけで売上の原因を決めない。", "next": "目的は承認された紹介料。今回の見せ方をすぐ捨てず、同じ商品・リンク先・公開後期間で、最後のリンク案内のセリフだけを試す。クリック率と承認紹介料の両方を確認する。", "aApproved": "9000", "bApproved": "12000", "aCost": "", "bCost": "", "same": "この架空例は、各動画の公開から7日間だけの件数。紹介リンクのクリックも各動画の分とする練習設定。実際に分けられなければ空欄にする。", "reviewDate": "記入例：次回も公開から7日後に同じ指標を記録する。"}, "01": {"current": "商品紹介動画は未投稿。手持ちの折りたたみブラシなら開閉する映像を撮れる。", "question": "最初の一本ではブラシのどの動きを見せるか、何から始めるかを確かめたい。", "action": ""}, "07": {"min0": "15", "min1": "", "min2": "", "min3": "", "min4": "", "min5": "", "min6": "", "task0": "手持ちの携帯ブラシの商品ページで、ケースの外寸を確認してメモする。", "task1": "", "task2": "", "task3": "", "task4": "", "task5": "", "task6": "", "restart": "商品ページと寸法メモを開き、ブラシを折りたたんでケースに入れる映像を撮る。", "request": "", "materials": "", "fixed": "", "delivery": ""}};
const form=document.querySelector('form[data-tool]');
const get=n=>(form?.elements.namedItem(n)?.value||'').trim();
const show=(message)=>{const s=form?.querySelector('[data-tool-status]');if(s)s.textContent=message;};
function openTarget(hash){
 if(!hash||hash.length<2)return;
 const target=document.getElementById(decodeURIComponent(hash.slice(1)));if(!target)return;
 for(let p=target.parentElement;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;
}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>openTarget(a.hash)));
openTarget(location.hash);
document.querySelectorAll('[data-v35-copy-target]').forEach(b=>b.addEventListener('click',async()=>{
 const text=document.getElementById(b.dataset.v35CopyTarget)?.textContent||'';
 const status=b.parentElement.querySelector('[data-v35-copy-status]');
 try{await navigator.clipboard.writeText(text);if(status)status.textContent=b.dataset.copySuccess||'依頼文をコピーしました。自分の材料へ置き換えて使えます。';}
 catch{if(status)status.textContent='依頼文を選択してコピーしてください。';}
}));
if(!form)return;
const n=form.dataset.volume,kind=form.dataset.tool;
form.querySelector('[data-example]')?.addEventListener('click',()=>{
 for(const [name,value] of Object.entries(examples[n]||{})){const x=form.elements.namedItem(name);if(x)x.value=value;}
 form.dispatchEvent(new Event('input',{bubbles:true}));
});

form.addEventListener('submit',()=>{
 const panel=form.querySelector('.output-panel'),output=form.querySelector('[data-output]');
 if(panel.hidden||!output.value)return;
 if(kind==='design'||kind==='prompts'&&[1,2].includes(Number(form.querySelector('[data-prompt-kind][aria-pressed="true"]')?.dataset.promptKind))){
  output.value+='\n\n四場面の素材割当\n'+['01 場面','02 事実','03 理由','04 案内'].map((label,i)=>label+'：'+(get('shot'+(i+1))||'［素材は未記入］')).join('\n');
 }
 if(kind==='design'){
  const missing=[1,2,3,4].filter(i=>!get('shot'+i));
  const review=form.querySelector('[data-result-review]');
  if(missing.length&&review){const p=document.createElement('p');p.textContent='素材が未記入の場面：'+missing.join('・')+'。使う素材と出所を確認して追加してください。';review.append(p);}
 }
 if(kind==='metrics'){
  output.value+='\n\n発生・承認の元件数\n'+['a','b'].map((key,i)=>(i?'今回':'前回')+'｜発生件数：'+(get(key+'Occurred')||'［未確認］')+'｜承認件数：'+(get(key+'ApprovedCount')||'［未確認］')).join('\n');
 }
});
})();
/* BONUS_V37_END */

/* BONUS_V38_START */
(()=>{'use strict';
const form=document.querySelector('form[data-tool]');
document.querySelector('[data-v38-design-example]')?.addEventListener('click',async()=>{
 const text="このポーチ、使える長さは11cm。\nAはケースごとで12cm。まっすぐには収まりません。\nBは9cm。長さに2cm余裕があります。\n長さで選ぶならB。幅・厚みと購入条件は商品ページで確認してください。";
 const status=document.querySelector('[data-v38-example-status]');
 try{await navigator.clipboard.writeText(text);status.textContent='原稿をコピーしました。練習例なので、自分の商品に合わせて使ってください。';}catch{status.textContent='コピーできない場合は、4場面の原稿を選択してコピーしてください。';}
});
if(!form)return;
const kind=form.dataset.tool;
const value=n=>(form.elements.namedItem(n)?.value||'').trim();
if(kind==='prompts'){
 const help=form.querySelector('[data-v38-stage-help]');
 const tips=['商品の仕様と調べたページを入れ、確認した仕様と、まだ確認することを分けます。','商品名・使う人と場面・仕様を入れ、紹介動画で話す順序を考えます。','同じ商品を見る人と仕様から、最初に話すセリフを3案比べます。','商品ページの仕様と原稿を入れ、根拠のない効果・体験・数値がないか確認します。','確定した原稿を入れ、語句を変えずに字幕一行ごとの意味の切れ目で分けます。','確定原稿と、字幕を出す開始秒・消す終了秒から、SRT書式を整えます。'];
 const update=()=>{
  const n=Number(form.querySelector('[data-prompt-kind][aria-pressed="true"]')?.dataset.promptKind||0);
  const minimal=n===0||n===3;
  for(const key of ['audience','scene','reason','destination'])form.elements.namedItem(key)?.closest('label')?.toggleAttribute('hidden',minimal);
  const shots=form.elements.namedItem('shot1')?.closest('details');if(shots)shots.hidden=minimal;
  if(help)help.textContent=tips[n];
 };
 update();form.querySelectorAll('[data-prompt-kind]').forEach(b=>b.addEventListener('click',update));
 form.addEventListener('input',update);form.querySelector('[data-example]')?.addEventListener('click',update);
}

if(kind==='metrics'){
 const number=n=>value(n)===''?null:Number(value(n));
 const update=()=>{
  const box=form.querySelector('[data-v38-next-check]');if(!box)return;
  const v=number('bViews'),c=number('bClicks'),o=number('bOccurred'),a=number('bApprovedCount');
  let text='今回の件数を入れると、次に確認する場所の候補を表示します。';
  if(v===0)text='最初に確認：集計期間と、表示数を取った場所。表示0だけで、商品の良し悪しを決めません。';
  else if(v>0&&c===0)text='次の確認候補：リンクが開くか、案内の位置・言葉が分かるか。';
  else if(c>0&&o===0)text='次の確認候補：案内した内容とリンク先の一致、紹介料の対象になる条件、集計期間。';
  else if(o>0&&a!=null&&a<o)text='次の確認候補：承認待ちか、否認があるか。条件と集計期間を確認します。';
  else if(v>0&&c!=null)text='次の確認候補：前回と同じ指標・期間・案内先かをそろえ、変える箇所を一つ決めます。';
  box.textContent=text;
 };
 update();form.addEventListener('input',update);form.querySelector('[data-example]')?.addEventListener('click',update);
}
})();
/* BONUS_V38_END */

/* BONUS_V39_START */
(()=>{'use strict';
function openWorkbench(hash){
 const id=decodeURIComponent((hash||'').replace(/^#/,''));
 if(!id)return;const target=document.getElementById(id);if(!target)return;
 for(let p=target;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;
 target.querySelector('details.d39-workbench')?.setAttribute('open','');
}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>openWorkbench(a.hash)));
openWorkbench(location.hash);
})();
/* BONUS_V39_END */

/* V40: Output the selected decision lens without changing learner inputs. */
(()=>{const f=document.querySelector('form[data-tool="research"]');if(!f)return;
f.addEventListener('submit',()=>{const p=f.querySelector('.output-panel'),o=f.querySelector('[data-output]');if(p.hidden||!o.value)return;
const experienced=f.elements.namedItem('entryRoute')?.value==='experienced';
o.value+='\n\n今回の着手判断\n'+(experienced?'制作できる段階：需要の手掛かりがあり、同用途の紹介で答えが足りない疑問を選ぶ。参考が少ない理由と、自分で一本作れるかを確認する。':'初めての一本：需要の手掛かりと見本があり、自分の素材で一本を作れる候補を選ぶ。人気や投稿数だけで売上を予測しない。');
});})();

/* V41: Keep original fields and learner edits; make the saved memo match the reading goal. */
(()=>{const f=document.querySelector('form[data-tool]');if(!f)return;const n=f.dataset.volume;if(!['02','09'].includes(n))return;
const get=k=>(f.elements.namedItem(k)?.value||'').trim();const line=(label,k)=>label+'：'+(get(k)||'［未確認］');
const hasB=()=>['Product','Scene','Facts','Terms','Unknown'].some(s=>get('b'+s))||['Scene','Facts','Terms','Destination'].some(s=>get('bCheck'+s)&&get('bCheck'+s)!=='unknown');
if(n==='09'){const d=f.querySelector('details[data-v35-group="bProduct"]');const reveal=()=>{if(hasB()&&d)d.open=true;};reveal();let savedB={};const button=f.querySelector('[data-example]');button?.addEventListener('click',()=>{savedB=Object.fromEntries([...f.elements].filter(x=>/^b[A-Z]/.test(x.name||'')).map(x=>[x.name,x.value]));},true);button?.addEventListener('click',()=>{for(const [k,v] of Object.entries(savedB))f.elements.namedItem(k).value=v;if(d)d.open=hasB();f.dispatchEvent(new Event('input',{bubbles:true}));});f.querySelector('[data-v41-example-b]')?.addEventListener('click',()=>{for(const [k,v] of Object.entries(window.BONUS_V32_EXAMPLES?.['09']||{}))if(/^b[A-Z]/.test(k)&&f.elements.namedItem(k))f.elements.namedItem(k).value=v;if(d)d.open=true;f.dispatchEvent(new Event('input',{bubbles:true}));});}
f.addEventListener('submit',()=>{const panel=f.querySelector('.output-panel'),out=f.querySelector('[data-output]');if(panel.hidden||!out.value)return;
if(n==='02'){const rows=['訴求の採否と、試す紹介動画のメモ',line('参考URL・投稿日・確認日','watchUrl'),line('参考・訴求を採る／外す理由','observed'),line('自分の商品で確認した事実と出所','confirmedFacts'),line('残す理由・変える理由','whyChange'),line('撮る場面と合わせる言葉','ownChange')];for(const [k,label] of [['slot','制作する曜日と時間'],['finish','その作業時間で残すもの'],['materials','先に用意するもの'],['restart','試した後の確認と次の作業']])if(get(k))rows.push(line(label,k));out.value=rows.join('\n\n');}
if(n==='09'){const rows=['紹介候補の調査メモ','今の制作段階：'+(f.elements.namedItem('entryRoute').selectedOptions[0]?.textContent||'未選択'),line('確認元・日付と観察した情報','searchMemo')];for(const k of ['a','b']){if(k==='b'&&!hasB())continue;rows.push('候補'+k.toUpperCase());for(const [suffix,label] of [['Product','商品名'],['Scene','相手と使う場面'],['Facts','需要・参考・商品の仕様と使える映像'],['Terms','紹介条件と案内先'],['Unknown','次に確かめる情報']])rows.push(line(label,k+suffix));for(const [suffix,label] of [['Scene','商品を使う人と場面'],['Facts','商品の仕様と使える映像'],['Terms','紹介条件'],['Destination','案内先']])rows.push(label+'：'+({'ready':'確認済み','missing':'不足あり','unknown':'未確認'}[get(k+'Check'+suffix)]||'未確認'));}rows.push(line('一本で確かめる仮説','testHypothesis'),line('次に調べる候補と理由','next'));if(get('reviewDate'))rows.push(line('見直す日','reviewDate'));out.value=rows.join('\n\n');}
});})();

/* V42 standalone completion; existing local-storage fields are retained. */
(()=>{const f=document.querySelector('form[data-tool]');if(!f)return;const n=f.dataset.volume,get=k=>(f.elements.namedItem(k)?.value||'').trim();
if(n==='06'){const update=()=>{const count=[0,1,2,3,4].filter(i=>f.elements.namedItem('stage'+i).checked).length;f.querySelector('[data-route-count]').textContent=count+' / 5';f.querySelector('progress').value=count;const i=[0,1,2,3,4].find(i=>!f.elements.namedItem('stage'+i).checked);const box=f.querySelector('[data-route-next]');box.replaceChildren();const title=document.createElement('strong');title.textContent=i==null?'初投稿の準備を確認しました。':'次に確かめる準備：'+['報酬条件と自分専用リンク','商品を使う人と場面','セリフと映す映像','投稿前の照合','公開日と数字を調べる日'][i];const a=document.createElement('a');a.href='#prep-'+((i??4)+1);a.textContent='このページの説明を開く';box.append(title,a);};update();for(const e of ['input','change'])f.addEventListener(e,update);for(const key of ['[data-example]','[data-clear]'])f.querySelector(key)?.addEventListener('click',update);}
f.addEventListener('submit',()=>{const p=f.querySelector('.output-panel'),out=f.querySelector('[data-output]');if(p.hidden||!out.value)return;
if(n==='05'){const lines=[1,2,3,4].map(i=>get('speech'+i));const missing=lines.some(x=>!x);const rows=[missing?'紹介原稿の途中（空欄のセリフを記入）':'紹介動画の原稿',lines.map(x=>x||'［ここで話すセリフを記入］').join('\n'),'映す4場面',...[1,2,3,4].map(i=>i+'｜'+(get('shot'+i)||'［映すものを確認］')),'商品の確認メモ',...['product','audience','scene','facts','source','reason','destination'].map((k,i)=>['商品','使う人','使う場面','確認した仕様','仕様を調べたページ','選ぶ理由','最後の案内'][i]+'：'+(get(k)||'［未確認］'))];out.value=rows.join('\n\n');const r=f.querySelector('[data-result-review]');if(r){r.replaceChildren();const t=document.createElement('p');t.textContent=missing?'話すセリフの空欄を埋めてから、映像と合わせます。':'4行を読み、各行に映すものがあるか、商品情報と違う表現がないかを確かめます。';r.append(t);r.hidden=false;}}
if(n==='06'){out.value='初投稿までの準備\n\n'+[0,1,2,3,4].map((i)=>(f.elements.namedItem('stage'+i).checked?'確認済み：':'未完了：')+['報酬条件と自分専用リンク','商品を使う人と場面','セリフと映す映像','投稿前の照合','公開日と数字を調べる日'][i]).join('\n')+'\n\n入力した補足（チェックの変更では自動更新されません。架空の例文は、自分の商品で使う前に置き換えます）\n\n'+['setupMemo','referenceMemo','firstOutline','reviewDate','blocker','next'].map((k,i)=>['条件の確認','商品と使う場面','一本のセリフと映すもの','公開日と数字を調べる日','止まっていること','次に終える作業'][i]+'：'+(get(k)||'［未確認］')).join('\n\n');}
});})();
(()=>{function open(hash){const t=document.getElementById((hash||'').slice(1));if(t?.tagName==='DETAILS')t.open=true;}document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(a)open(a.hash);});addEventListener('hashchange',()=>open(location.hash));open(location.hash);})();

/* V43: edit one scene; choose from facts without duplicate readiness questions. */
(()=>{'use strict';const f=document.querySelector('form[data-tool]');if(!f)return;const n=f.dataset.volume,get=k=>(f.elements.namedItem(k)?.value||'').trim();
if(n==='06'){f.querySelector('[data-example]')?.addEventListener('click',()=>{for(const k of ['stage0','stage1','stage2','stage3','stage4'])f.elements.namedItem(k).checked=!!window.BONUS_V32_EXAMPLES?.['06']?.[k];f.dispatchEvent(new Event('input',{bubbles:true}));});}
if(n==='05'){
 const role=f.querySelector('[data-v43-role]'),speech=f.querySelector('[data-v43-speech]'),shot=f.querySelector('[data-v43-shot]'),preview=f.querySelector('[data-v43-preview]');
 const sync=()=>{speech.value=f.elements.namedItem('speech'+role.value).value;shot.value=f.elements.namedItem('shot'+role.value).value;};
  const render=()=>{preview.replaceChildren();for(let i=1;i<=4;i++){const row=document.createElement('div'),b=document.createElement('b'),p=document.createElement('p'),s=document.createElement('span');b.textContent=i+' '+['買い手の疑問','商品の特徴・根拠','選ぶ理由・使う場面','最後の案内'][i-1];p.textContent=get('speech'+i)||'［話すセリフは未記入］';s.textContent='映すもの：'+(get('shot'+i)||'［未確認］');row.append(b,p,s);preview.append(row);}};
 role.addEventListener('change',sync);speech.addEventListener('input',()=>{f.elements.namedItem('speech'+role.value).value=speech.value;f.dispatchEvent(new Event('input',{bubbles:true}));});shot.addEventListener('input',()=>{f.elements.namedItem('shot'+role.value).value=shot.value;f.dispatchEvent(new Event('input',{bubbles:true}));});f.addEventListener('input',render);
 for(const selector of ['[data-example]','[data-clear]'])f.querySelector(selector)?.addEventListener('click',()=>{sync();render();});sync();render();
}
if(n==='09'){
 const primary=['entryRoute','aProduct','aScene','aFacts','aUnknown'],archive=f.querySelector('[data-v43-archive]'),include=f.querySelector('[data-v43-include]');let preserved={};
 const legacy=()=>[...f.elements].filter(x=>x.name&&!primary.includes(x.name));
 const remember=f.querySelector('[data-example]');remember?.addEventListener('click',()=>{preserved=Object.fromEntries(legacy().map(x=>[x.name,x.value]));},true);
 const stateText=()=>{const p=f.querySelector('[data-v43-old-status]');if(!p)return;const rows=[];for(const k of ['a','b']){const states=['Scene','Facts','Terms','Destination'].map((s,i)=>['相手','商品の仕様と使える映像','紹介条件','案内先'][i]+'＝'+({'ready':'確認済み','missing':'不足あり','unknown':'未確認'}[get(k+'Check'+s)]||'未確認'));if(states.some(x=>!x.endsWith('未確認')))rows.push('以前の候補'+k.toUpperCase()+'：'+states.join('／'));}p.textContent=rows.join('\n')||'以前の確認状態は、入力値のまま保持しています。今回の候補判断へ自動で流用しません。';const hasNotes=['searchMemo','testHypothesis','reviewDate','next','aTerms','bTerms'].some(k=>get(k));archive.querySelector('summary').textContent=hasNotes||rows.length?'以前の詳細な入力を確認する（保存済み）':'確認元・紹介条件なども詳しく残す（任意）';};
 remember?.addEventListener('click',()=>{for(const [k,v]of Object.entries(preserved))f.elements.namedItem(k).value=v;stateText();f.dispatchEvent(new Event('input',{bubbles:true}));});f.addEventListener('input',stateText);f.addEventListener('change',stateText);f.querySelector('[data-clear]')?.addEventListener('click',stateText);stateText();
 f.addEventListener('submit',()=>{const panel=f.querySelector('.output-panel'),out=f.querySelector('[data-output]');if(panel.hidden||!out.value)return;const rows=[get('aProduct')&&get('aScene')&&get('aFacts')?'紹介候補の調査メモ（未確認は次の調査へ）':'紹介候補の調査途中','今の経験：'+(f.elements.namedItem('entryRoute').selectedOptions[0]?.textContent||'未選択')];
 for(const k of ['a','b']){if(k==='b'&&!['Product','Scene','Facts','Unknown'].some(s=>get(k+s)))continue;rows.push('候補'+k.toUpperCase());for(const [s,label]of [['Product','商品名'],['Scene','使う人の困りごと'],['Facts','答えられる仕様・見せる素材'],['Unknown','先に確かめること']])rows.push(label+'：'+(get(k+s)||'［未確認］'));}
 if(include.checked){rows.push('以前の詳細な入力（そのまま）');for(const [k,label]of [['searchMemo','確認元と日付'],['aTerms','候補Aの紹介条件'],['bTerms','候補Bの紹介条件'],['testHypothesis','以前の仮説'],['next','以前の次の作業'],['reviewDate','見直す日']])if(get(k))rows.push(label+'：'+get(k));rows.push(f.querySelector('[data-v43-old-status]').textContent);}
 rows.push('今回の選び方：'+(get('entryRoute')==='experienced'?'需要の手掛かりがあり、既存の紹介で答えが足りない疑問を調べる。参考が少ないだけで穴場と決めず、自分の素材で答えられるか確かめる。':'需要の手掛かりと見本があり、自分の素材で一本を作れる候補から調べる。人気だけで決めず、仕様と紹介条件を確かめる。'));rows.push('次の判断：困りごとに対応する仕様と映像・紹介条件がそろえば制作へ。未確認の仕様があるなら保留。根拠のない効果は訴求から外す。採用は制作テーマの判断で、売上や市場優位の保証ではない。');out.value=rows.join('\n\n');const r=f.querySelector('[data-result-review]');if(r){r.replaceChildren();const p=document.createElement('p');p.textContent='入力した事実と未確認点を分けて残しました。記入した項目数や以前のチェック数から、売れる商品と判定していません。';r.append(p);r.hidden=false;}
 });
}
})();


/* Open the local prerequisite explanation, including its optional parent. */
(()=>{function reveal(hash){let x=document.getElementById((hash||'').slice(1));while(x){if(x.tagName==='DETAILS')x.open=true;x=x.parentElement;}}document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(a)reveal(a.hash);});addEventListener('hashchange',()=>reveal(location.hash));reveal(location.hash);})();
/* V47: optional entries do not create invented data or mandatory extra work. */
(()=>{const f=document.querySelector('form[data-tool]');if(!f)return;const n=f.dataset.volume,get=k=>(f.elements.namedItem(k)?.value||'').trim();
f.addEventListener('submit',()=>{const panel=f.querySelector('.output-panel'),out=f.querySelector('[data-output]');if(panel.hidden||!out.value)return;
if(n==='01'){const r=f.querySelector('[data-result-review]');if(r){r.replaceChildren();const p=document.createElement('p');p.textContent='面談前は確かめたいことを一つに。面談後は、実際に決めた作業を追記して保存します。';r.append(p);r.hidden=false;}}
if(n==='10'){const raw=k=>get(k),num=k=>raw(k)===''?null:Number(raw(k)),rows=['紹介動画の数字と、次の確認メモ','集計の単位：同じ動画・同じ期間の件数だけを使う。全投稿合計しか分からない項目は未確認のままにする。'];for(const k of ['a','b']){const any=['Period','Views','Clicks','Occurred','ApprovedCount','Approved','Cost'].some(s=>raw(k+s)!=='');if(k==='a'&&!any)continue;rows.push(k==='a'?'前回の動画':'今回の動画','集計期間：'+(raw(k+'Period')||'［未確認］'),'表示回数：'+(raw(k+'Views')||'［未確認］'),'リンクのクリック数：'+(raw(k+'Clicks')||'［未確認］'));const v=num(k+'Views'),c=num(k+'Clicks');rows.push('クリック率：'+(v!=null&&v>0&&c!=null?(c/v*100).toFixed(2)+'%':v===0?'表示0のため計算しない':'［未計算］'));for(const[s,label]of[['Occurred','購入などの記録'],['ApprovedCount','報酬の承認件数'],['Approved','承認された紹介料（円）'],['Cost','この動画の費用（円）']])if(raw(k+s)!=='')rows.push(label+'：'+raw(k+s));}for(const[k,label]of[['same','そろえた条件と違い'],['changed','制作で変えたセリフや映像'],['reviewDate','次に数字を見る日']])if(get(k))rows.push(label+'：'+get(k));rows.push('次に確認すること：'+(get('next')||'［入力した数字から、一つ選ぶ］'),'判断：目的の指標まで見る。クリック率だけで収益の増減を決めず、費用不明なら利益と言わない。一度の差で原因を決めず、次は一つ変えて確かめる。');out.value=rows.join('\n\n');}
});})();
/* A checked AI answer is pasted by the reader. This form does not call an AI. */
document.querySelectorAll('form[data-tool="scriptnote"]').forEach(f=>{const field=f.elements.namedItem('finalScript'),out=f.querySelector('[data-output]'),panel=f.querySelector('.output-panel'),status=f.querySelector('[data-tool-status]'),key='secret-bonus-v15-volume-'+f.dataset.volume;const note=t=>{status.textContent=t;};try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(typeof saved?.fields?.finalScript==='string')field.value=saved.fields.finalScript;}catch{}
const save=()=>{try{localStorage.setItem(key,JSON.stringify({fields:{finalScript:field.value}}));}catch{}};field.addEventListener('input',save);f.querySelector('[data-example]')?.addEventListener('click',()=>{field.value=window.BONUS_V32_EXAMPLES?.['08-final']?.finalScript||'';save();note('確認後の4行の練習例を入れました。');});f.querySelector('[data-clear]')?.addEventListener('click',()=>{field.value='';out.value='';panel.hidden=true;save();note('原稿欄を空にしました。');});f.addEventListener('submit',e=>{e.preventDefault();if(!field.value.trim()){panel.hidden=true;note('AIの返答を仕様と比べて直し、読むセリフをこの欄へ貼り付けてください。');return;}out.value=field.value;panel.hidden=false;save();note('入力した原稿を表示しました。AIの自動生成ではありません。');});f.querySelector('[data-copy]')?.addEventListener('click',async()=>{if(!out.value)return;try{await navigator.clipboard.writeText(out.value);note('紹介原稿をコピーしました。');}catch{out.focus();out.select();note('原稿を選択しました。コピーして使えます。');}});f.querySelector('[data-download]')?.addEventListener('click',()=>{if(!out.value)return;const url=URL.createObjectURL(new Blob(['\ufeff'+out.value],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='特典08_確認後の紹介原稿.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);note('紹介原稿のTXTを作りました。');});});

/* V50: generated text belongs to the current inputs, including optional tools. */
(()=>{'use strict';
 document.querySelectorAll('form[data-tool], form[data-caption-tool]').forEach(form=>{
  const output=form.querySelector('[data-output], [data-caption-output]');
  const panel=form.querySelector('.output-panel, [data-caption-panel]');
  if(!output||!panel)return;
  const status=form.querySelector('[data-tool-status], [data-caption-status]');
  const signature=()=>JSON.stringify({fields:[...form.querySelectorAll('input,textarea,select')].filter(e=>e!==output).map(e=>[e.name||e.id||e.dataset.v43Role||'',e.type==='checkbox'?e.checked:e.value]),prompt:form.querySelector('[data-prompt-kind][aria-pressed="true"]')?.dataset.promptKind});
  let generatedFrom=null,needsRegeneration=false;
  const invalidate=()=>{
   if(!output.value&&panel.hidden&&!needsRegeneration)return;
   output.value='';panel.hidden=true;generatedFrom=null;needsRegeneration=true;
   const review=form.querySelector('[data-result-review]');if(review)review.hidden=true;
   if(status){status.classList.remove('error');status.textContent='入力を変更しました。作成ボタンをもう一度押すと、変更後の内容をコピー・保存できます。';}
  };
  for(const event of ['input','change'])form.addEventListener(event,e=>{if(e.target!==output)invalidate();});
  form.addEventListener('click',e=>{
   const button=e.target.closest('button');if(!button)return;
   if(button.matches('[data-example], [data-v41-example-b], [data-prompt-kind], [data-caption-example]'))invalidate();
   if(button.matches('[data-clear], [data-caption-clear]'))needsRegeneration=false;
  });
  form.addEventListener('submit',()=>{generatedFrom=!panel.hidden&&output.value?signature():null;if(generatedFrom)needsRegeneration=false;});
  form.addEventListener('click',e=>{
   const button=e.target.closest('[data-copy], [data-download], [data-caption-copy], [data-caption-download]');
   if(button&&(!generatedFrom||generatedFrom!==signature()||panel.hidden)){
    e.preventDefault();e.stopImmediatePropagation();invalidate();
    if(status)status.textContent='入力した内容を作成ボタンで表示してから、コピー・保存してください。';
   }
  },true);
 });
})();

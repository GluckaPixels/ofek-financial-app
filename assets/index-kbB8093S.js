(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const H=document.querySelector("#app");H.innerHTML=`
  <header class="topbar">
    <a class="brand" href="#top" aria-label="אופק, דף הבית">
      <span class="brand-mark">א</span>
      <span>אופק</span>
    </a>
    <nav aria-label="ניווט ראשי">
      <a href="#check">בדיקת הוצאה</a>
      <a href="#plan">התוכנית שלי</a>
      <button class="icon-button" id="themeToggle" aria-label="החלפת מצב תצוגה">◐</button>
      <button class="avatar" aria-label="אזור אישי">ט</button>
    </nav>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow"><i></i> כסף עם כיוון</span>
        <h1>האם ההוצאה הזאת<br><em>באמת שווה לך?</em></h1>
        <p>לפני שקונים, רואים איך ההחלטה של היום משפיעה על החופש הכלכלי של המשפחה בעוד 10 שנים.</p>
        <div class="hero-actions">
          <a class="button primary" href="#check">בדיקת הוצאה חדשה <span>←</span></a>
          <a class="text-link" href="#how">איך זה עובד?</a>
        </div>
        <div class="trust-row">
          <span>בלי שיפוטיות</span><b>•</b><span>חישוב שקוף</span><b>•</b><span>המידע נשמר במכשיר</span>
        </div>
      </div>
      <div class="hero-visual" aria-label="התקדמות ליעד">
        <div class="arch arch-1"></div><div class="arch arch-2"></div><div class="arch arch-3"></div>
        <div class="sun"><span>10</span><small>שנים לחופש</small></div>
        <div class="float-card">
          <small>היעד המשפחתי</small>
          <strong>₪2.40M</strong>
          <div class="mini-progress"><i></i></div>
          <span>24% כבר בדרך</span>
        </div>
      </div>
    </section>

    <section class="dashboard" id="plan">
      <div>
        <span class="section-kicker">תמונת מצב</span>
        <h2>הדרך שלך לחופש</h2>
      </div>
      <div class="metrics">
        <article><span class="metric-icon coral">↗</span><div><small>שיעור חיסכון חודשי</small><strong id="savingRate">22%</strong></div></article>
        <article><span class="metric-icon mint">◒</span><div><small>הון נוכחי</small><strong id="currentCapital">₪580,000</strong></div></article>
        <article><span class="metric-icon yellow">⌁</span><div><small>הכנסה פסיבית</small><strong id="passiveMetric">₪1,200</strong><small>בחודש</small></div></article>
        <article class="progress-card"><div><small>התקדמות ליעד</small><strong id="goalProgress">24%</strong></div><div class="ring" style="--progress:24"><span>24%</span></div></article>
      </div>
    </section>

    <section class="checker" id="check">
      <div class="checker-copy">
        <span class="section-kicker">רגע לפני שקונים</span>
        <h2>בואי נבדוק את ההוצאה</h2>
        <p>כמה פרטים פשוטים, ותקבלי תשובה שמחוברת ליעד האמיתי שלך.</p>

        <form id="expenseForm">
          <div class="field full">
            <label for="expenseName">מה רוצים לקנות?</label>
            <input id="expenseName" value="מכונת קפה חדשה" placeholder="למשל: חופשה, רכב, מנוי..." />
          </div>
          <div class="field">
            <label for="expenseAmount">כמה זה עולה?</label>
            <div class="money-input"><span>₪</span><input id="expenseAmount" type="number" min="0" value="2800" /></div>
          </div>
          <div class="field">
            <label for="frequency">תדירות</label>
            <select id="frequency"><option value="once">חד־פעמית</option><option value="monthly">כל חודש</option><option value="yearly">כל שנה</option></select>
          </div>
          <div class="field">
            <label for="category">קטגוריה</label>
            <select id="category"><option value="want">פנאי ונוחות</option><option value="need">צורך חיוני</option><option value="growth">בריאות / התפתחות</option><option value="debt">החזר חוב יקר</option></select>
          </div>
          <div class="field">
            <label for="importance">כמה זה חשוב לך? <b id="importanceValue">7</b>/10</label>
            <input id="importance" type="range" min="1" max="10" value="7" />
          </div>
          <details open>
            <summary>הפרופיל המשפחתי שעליו תתבסס ההמלצה</summary>
            <div class="profile-grid">
              <label>מבוגרים במשק הבית<select id="adults"><option>1</option><option selected>2</option><option>3</option></select></label>
              <label>ילדים התלויים במשפחה<select id="children"><option selected>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></label>
              <label>הכנסה נטו חודשית<input id="income" type="number" value="22000"></label>
              <label>הוצאות חודשיות<input id="monthlyExpenses" type="number" value="16000"></label>
              <label>חסכונות והשקעות כיום<input id="capital" type="number" value="580000"></label>
              <label>כסף נזיל למקרי חירום<input id="emergency" type="number" value="55000"></label>
              <label>הכנסה פסיבית חודשית<input id="passive" type="number" value="1200"></label>
              <label>הוצאות שנתיות שאינן בחישוב<input id="annualIrregular" type="number" value="12000"></label>
              <label>הוצאה חודשית רצויה בחופש<input id="targetSpend" type="number" value="12000"></label>
              <label>תשואה שנתית משוערת (%)<input id="returnRate" type="number" step="0.1" value="4"></label>
              <label>מצב הדיור<select id="housing"><option value="rent">שכירות</option><option value="mortgage" selected>משכנתה</option><option value="owned">דירה ללא משכנתה</option></select></label>
              <label>יציבות ההכנסה<select id="stability"><option value="stable">יציבה מאוד</option><option value="medium" selected>די יציבה</option><option value="variable">משתנה / עצמאית</option></select></label>
              <label>חוב יקר (לא כולל משכנתה)<select id="highDebt"><option value="no" selected>אין</option><option value="yes">יש</option></select></label>
              <label>מה חשוב לשמור גם בדרך?<select id="lifestyle"><option value="balanced" selected>איזון ונוחות יומיומית</option><option value="experiences">חוויות וחופשות</option><option value="home">בית ומשפחה</option><option value="fast">להגיע ליעד מהר ככל האפשר</option></select></label>
            </div>
          </details>
          <button class="button primary submit" type="submit">בדקי בשבילי <span>←</span></button>
        </form>
      </div>

      <aside class="result-card" id="result" aria-live="polite">
        <div class="result-top"><span class="result-icon">?</span><span class="result-label">מוכנה לבדיקה</span></div>
        <h3>ההחלטה הבאה שלך,<br>עם המספרים מול העיניים.</h3>
        <p>מלאי את פרטי ההוצאה ולחצי על “בדקי בשבילי”.</p>
        <div class="empty-illustration"><span>₪</span></div>
      </aside>
    </section>

    <section class="how" id="how">
      <div><span class="section-kicker">פשוט, אבל לא פשטני</span><h2>איך אופק מחליטה?</h2></div>
      <div class="steps">
        <article><b>01</b><h3>מבינה את ההוצאה</h3><p>עלות, תדירות, חשיבות והאם מדובר בצורך או ברצון.</p></article>
        <article><b>02</b><h3>בודקת מול התוכנית</h3><p>ההשפעה על החיסכון, הריבית דריבית וההון הדרוש בעוד 10 שנים.</p></article>
        <article><b>03</b><h3>מציעה החלטה טובה</h3><p>תשובה ברורה, הסבר וחלופה שמכבדת גם את החיים של היום.</p></article>
      </div>
    </section>
  </main>

  <footer><span class="brand"><span class="brand-mark">א</span><span>אופק</span></span><p>כלי תכנון והמחשה בלבד — אינו תחליף לייעוץ פיננסי, פנסיוני או השקעות אישי.</p><span>© 2026</span></footer>
`;const a=t=>document.getElementById(t),v=t=>new Intl.NumberFormat("he-IL",{style:"currency",currency:"ILS",maximumFractionDigits:0}).format(Math.round(t)),n=t=>Number(a(t).value)||0;function P(t,o,l){return t*Math.pow(1+o/100,l)}function E(t,o,l){const i=o/100/12,e=l*12;return i?t*((Math.pow(1+i,e)-1)/i):t*e}function k(){const t=n("income"),o=n("monthlyExpenses")+n("annualIrregular")/12,l=n("passive"),i=n("capital"),e=n("targetSpend"),s=Math.max(0,(e-l)*12*25),c=t?Math.max(0,(t-o)/t*100):0,p=s?Math.min(100,i/s*100):100;a("savingRate").textContent=`${Math.round(c)}%`,a("currentCapital").textContent=v(i),a("passiveMetric").textContent=v(l),a("goalProgress").textContent=`${Math.round(p)}%`;const x=document.querySelector(".ring");x.style.setProperty("--progress",p),x.querySelector("span").textContent=`${Math.round(p)}%`}function z(t){t.preventDefault();const o=a("expenseName").value.trim()||"ההוצאה הזו",l=n("expenseAmount"),i=a("frequency").value,e=a("category").value,s=n("importance"),c=n("income"),p=n("monthlyExpenses")+n("annualIrregular")/12,x=n("capital"),D=n("passive"),O=n("targetSpend"),u=n("returnRate"),A=n("adults"),M=n("children"),T=n("emergency"),$=a("stability").value,S=a("highDebt").value==="yes",I=a("lifestyle").value,b=Math.max(0,c-p),N=Math.max(0,(O-D)*12*25);let m,h;i==="monthly"?(m=E(l,u,10),h=l):i==="yearly"?(m=E(l/12,u,10),h=l/12):(m=P(l,u,10),h=l/12);const C=P(x,u,10)+E(b,u,10),q=Math.max(0,C-m),j=Math.max(0,N-C),R=Math.max(0,N-q)-j;let r=(b>0?h/b:1)*55+(s<=5?18:0)+(i==="monthly"?12:0);(e==="need"||e==="debt")&&(r-=28),e==="growth"&&s>=7&&(r-=14);const w=p?T/p:0,L=$==="variable"?9:$==="medium"?6:4;w<L&&e!=="need"&&(r+=20),S&&e!=="debt"&&e!=="need"&&(r+=22),M>0&&i!=="once"&&(r+=Math.min(8,M*2)),I==="fast"&&e==="want"&&(r+=12),I==="experiences"&&e==="want"&&s>=8&&(r-=7);let g,y,d,f;l?r<20?(g="מתאים לתוכנית",y=`אפשר לבחור ב${o} בלב שקט`,d="good",f=e==="need"?"זו הוצאה חיונית והשפעתה על התוכנית סבירה.":"ההשפעה על היעד מוגבלת ביחס לחשיבות שנתת לה."):r<52?(g="כדאי לחשוב שוב",y=`${o} אפשרית — עם התאמה קטנה`,d="warn",f=i==="monthly"?`נסי למצוא חלופה זולה בכ־20%, או לקזז ${v(h)} מהוצאה חודשית אחרת.`:"אם תחסכי עבורה מראש במשך 3 חודשים, היא לא תנגוס בחיסכון השוטף בבת אחת."):(g="פוגע משמעותית ביעד",y=`כרגע עדיף לדחות את ${o}`,d="bad",f="כדאי להמתין, לבחור חלופה זולה יותר או לקבוע תקציב ייעודי שלא יבוא מהחיסכון לעצמאות כלכלית."):(g="חסר סכום",y="כדי לבדוק, צריך להזין מחיר",d="neutral",f="הזיני את עלות ההוצאה ונסי שוב.");const F=b>0?Math.min(120,Math.ceil(m/b)):120;a("result").className=`result-card has-result ${d}`;const V=[`${A+M} נפשות בבית`,w<L?`כרית חירום של ${w.toFixed(1)} חודשים — היעד הוא ${L}`:"כרית חירום מספקת",S?"קיים חוב יקר שעדיף לצמצם":"אין חוב יקר",$==="variable"?"הכנסה משתנה דורשת מרווח ביטחון":"הכנסה יציבה יחסית"];a("result").innerHTML=`
    <div class="result-top"><span class="result-icon">${d==="good"?"✓":d==="warn"?"!":"×"}</span><span class="result-label">${g}</span></div>
    <h3>${y}</h3>
    <p>${f}</p>
    <div class="impact-grid">
      <div><small>העלות העתידית בעוד 10 שנים</small><strong>${v(m)}</strong><span>כולל תשואה משוערת שלא תיצבר</span></div>
      <div><small>השפעה אפשרית על היעד</small><strong>${F>=120?"משמעותית":`עד ${F} חודשים`}</strong><span>המחשה, לא תחזית מובטחת</span></div>
    </div>
    <div class="goal-line"><span>הון חזוי אחרי ההוצאה</span><strong>${v(q)}</strong></div>
    <div class="family-basis"><small>מה בפרופיל המשפחתי השפיע על ההמלצה</small><div>${V.map(G=>`<span>${G}</span>`).join("")}</div></div>
    ${R>0?`<div class="tip"><b>הצעד החכם:</b> כדי לסגור את הפער החדש, הוסיפי כ־${v(R/120)} לחיסכון החודשי.</div>`:'<div class="tip"><b>חדשות טובות:</b> לפי הנתונים שהזנת, התוכנית עדיין נשארת על המסלול.</div>'}
    <button class="secondary-button" id="resetResult">בדיקת הוצאה נוספת</button>
    <small class="disclaimer">החישוב מניח תשואה קבועה של ${u}% ואינו כולל מס, אינפלציה או שינוי בהכנסות.</small>
  `,a("resetResult").addEventListener("click",()=>{a("expenseName").focus(),window.location.hash="check"}),k()}a("importance").addEventListener("input",t=>a("importanceValue").textContent=t.target.value);a("expenseForm").addEventListener("submit",z);["income","monthlyExpenses","capital","passive","targetSpend","annualIrregular"].forEach(t=>a(t).addEventListener("input",k));a("themeToggle").addEventListener("click",()=>document.body.classList.toggle("dark"));k();

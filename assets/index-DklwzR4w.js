(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();const k=document.querySelector("#app"),h=["city","adults","children","currentAge","partnerAge","independenceYears","retirementAge","stability","income","monthlyExpenses","housingCost","annualIrregular","passive","targetSpend","housing","lifestyle","capital","emergency","pensionCapital","pensionContribution","expectedPension","oldAgeBenefit","mortgageBalance","expensiveDebt","returnRate","insurance"];k.innerHTML=`
  <header class="app-header">
    <button class="brand" data-route="plan" aria-label="אופק — התוכנית שלי">
      <span class="brand-mark">א</span><span>OFÉK</span><small>Family wealth</small>
    </button>
    <nav aria-label="ניווט ראשי">
      <button data-route="plan">התוכנית שלי</button>
      <button data-route="check">בדיקת הוצאה</button>
      <button data-route="profile">מפת המשפחה</button>
    </nav>
    <div class="header-actions">
      <button class="theme-button" id="themeToggle" aria-label="החלפת מצב תצוגה">◐</button>
      <button class="avatar" data-route="profile" aria-label="פרופיל משפחתי">ט</button>
    </div>
  </header>

  <main>
    <section class="page plan-page" data-page="plan">
      <div class="page-heading">
        <div><span class="eyebrow">התוכנית המשפחתית</span><h1>בוקר טוב, <em>העתיד נראה ברור יותר.</em></h1><p id="planSubtitle">תמונה אחת שמחברת את החיים היום עם החופש הכלכלי של מחר.</p></div>
        <button class="primary-button" data-route="check">בדיקת הוצאה חדשה <span>←</span></button>
      </div>

      <div class="hero-bento">
        <article class="goal-card">
          <div class="card-top"><span>היעד לעצמאות כלכלית</span><span class="live-pill"><i></i> מחושב מהפרופיל</span></div>
          <strong id="goalCapital">₪2,050,000</strong>
          <div class="goal-track"><i id="goalTrack"></i><span id="goalMarker"></span></div>
          <div class="goal-labels"><span>היום <b id="todayCapital">₪580K</b></span><span>בעוד <b id="horizonLabel">10 שנים</b></span></div>
          <div class="goal-status" id="goalStatus">בדרך הנכונה, אבל עדיין קיים פער לסגירה.</div>
        </article>
        <article class="dial-card">
          <div class="dial" id="coverageDial"><span id="coverageValue">78%</span><small>כיסוי חזוי</small></div>
          <p id="coverageText">מההון הדרוש צפוי להיות זמין במועד היעד.</p>
        </article>
        <article class="age-card">
          <span class="mini-label">ציר הזמן</span>
          <div class="age-number"><strong id="targetAge">51</strong><small>גיל היעד</small></div>
          <div class="age-line"><i></i></div>
          <div><span>היום <b id="ageToday">41</b></span><span>פרישה <b id="retirementLabel">65</b></span></div>
        </article>
      </div>

      <div class="metric-grid">
        <article><span class="metric-icon coral">↗</span><div><small>חיסכון אפקטיבי</small><strong id="savingRate">23%</strong><span>מההכנסה נטו</span></div></article>
        <article><span class="metric-icon mint">◒</span><div><small>הון נזיל</small><strong id="currentCapital">₪580,000</strong><span>לא כולל פנסיה</span></div></article>
        <article><span class="metric-icon yellow">⌁</span><div><small>הכנסה פסיבית</small><strong id="passiveMetric">₪1,200</strong><span>בחודש</span></div></article>
        <article><span class="metric-icon lilac">◎</span><div><small>כרית חירום</small><strong id="emergencyMetric">3.2</strong><span>חודשי מחיה</span></div></article>
      </div>

      <div class="plan-grid">
        <article class="forecast-card">
          <div class="section-title"><div><span class="eyebrow">תחזית</span><h2>הגשר עד גיל הפרישה</h2></div><span class="outline-pill" id="cityBadge">עיר טרם הוגדרה</span></div>
          <div class="bridge-visual">
            <div class="bridge-item"><i>1</i><div><strong>היום</strong><span id="bridgeToday">בניית הון נזיל וכרית ביטחון</span></div></div>
            <div class="bridge-line"></div>
            <div class="bridge-item"><i>2</i><div><strong id="bridgeFreedomTitle">עצמאות בגיל 51</strong><span id="bridgeFreedomText">ההון הנזיל מממן את השנים שלפני הפנסיה</span></div></div>
            <div class="bridge-line"></div>
            <div class="bridge-item"><i>3</i><div><strong id="bridgeRetirementTitle">פרישה בגיל 65</strong><span>פנסיה וקצבה מצמצמות את התלות בחסכונות</span></div></div>
          </div>
        </article>
        <article class="action-card">
          <span class="eyebrow">הצעד הבא</span><h2 id="nextActionTitle">לחזק את כרית החירום</h2><p id="nextActionText">הפרופיל מצביע על נקודה אחת שכדאי לטפל בה לפני הגדלת הוצאות.</p>
          <div class="action-amount"><small>תוספת חודשית מומלצת ליעד</small><strong id="monthlyGap">₪1,850</strong></div>
          <button class="text-button" data-route="profile">עדכון התוכנית <span>←</span></button>
        </article>
      </div>
    </section>

    <section class="page check-page" data-page="check">
      <div class="page-heading compact">
        <div><span class="eyebrow">Decision studio</span><h1>האם ההוצאה הזאת <em>באמת שווה לכם?</em></h1><p>החלטה אחת, בתוך התמונה המשפחתית המלאה.</p></div>
        <div class="context-pill"><span id="checkCity">עיר טרם הוגדרה</span><b>•</b><span id="checkHorizon">10 שנים ליעד</span></div>
      </div>
      <div class="checker-layout">
        <form id="expenseForm" class="expense-card">
          <div class="step-label"><span>01</span> פרטי ההוצאה</div>
          <label class="field full">מה רוצים לקנות?<input id="expenseName" value="מכונת קפה חדשה" placeholder="למשל: חופשה, רכב או מנוי" /></label>
          <label class="field">כמה זה עולה?<div class="money-input"><span>₪</span><input id="expenseAmount" type="number" min="0" value="2800" /></div></label>
          <label class="field">תדירות<select id="frequency"><option value="once">חד־פעמית</option><option value="monthly">כל חודש</option><option value="yearly">כל שנה</option></select></label>
          <label class="field">קטגוריה<select id="category"><option value="want">פנאי ונוחות</option><option value="need">צורך חיוני</option><option value="growth">בריאות / התפתחות</option><option value="debt">החזר חוב יקר</option></select></label>
          <label class="field importance-field">כמה זה חשוב? <b id="importanceValue">7</b>/10<input id="importance" type="range" min="1" max="10" value="7" /></label>
          <div class="profile-context"><span>הבדיקה מבוססת על מפת המשפחה</span><button type="button" data-route="profile">עריכה</button></div>
          <button class="primary-button full" type="submit">נתחו את ההוצאה <span>←</span></button>
        </form>
        <aside class="result-card" id="result" aria-live="polite">
          <div class="result-top"><span class="result-icon">?</span><span class="result-label">מוכנים לבדיקה</span></div>
          <h2>החלטה טובה מתחילה<br>בהקשר הנכון.</h2>
          <p>הזינו את ההוצאה ותקבלו תשובה שמחוברת לתזרים, לכרית הביטחון ולשנים עד הפרישה.</p>
          <div class="empty-orbit"><span>₪</span></div>
        </aside>
      </div>
    </section>

    <section class="page profile-page" data-page="profile">
      <div class="page-heading compact">
        <div><span class="eyebrow">מפת המשפחה</span><h1>ככל שנכיר יותר, <em>נמליץ טוב יותר.</em></h1><p>הפרטים נשמרים רק בדפדפן הזה ומשמשים לחישובי ההדגמה.</p></div>
        <div class="profile-score"><span>שלמות הפרופיל</span><strong id="profileCompleteness">92%</strong><div><i id="profileBar"></i></div></div>
      </div>

      <form id="profileForm" class="profile-form">
        <fieldset>
          <legend><span>01</span><div>משפחה וציר זמן<small>מי אתם ומתי תרצו להגיע לחופש</small></div></legend>
          <div class="profile-grid">
            <label>עיר מגורים<input id="city" value="" placeholder="למשל: חיפה"></label>
            <label>מבוגרים במשק הבית<select id="adults"><option>1</option><option selected>2</option><option>3</option></select></label>
            <label>הגיל שלך<input id="currentAge" type="number" min="18" max="90" value="35"></label>
            <label>גיל בן/בת הזוג<input id="partnerAge" type="number" min="18" max="90" value="36"></label>
            <label>ילדים או תלויים<select id="children"><option>0</option><option selected>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></label>
            <label class="horizon-field">בעוד כמה שנים תרצו חופש כלכלי?<select id="independenceYears"><option value="5">5 שנים</option><option value="7">7 שנים</option><option value="10" selected>10 שנים</option><option value="12">12 שנים</option><option value="15">15 שנים</option><option value="20">20 שנים</option><option value="25">25 שנים</option><option value="30">30 שנים</option></select><small>היעד נפרד מגיל הפרישה הרשמי</small></label>
            <label>גיל פרישה מתוכנן<input id="retirementAge" type="number" min="50" max="75" value="65"><small><a href="https://www.btl.gov.il/benefits/old_age/Pages/RetirementCalculation.aspx" target="_blank" rel="noreferrer">בדיקת גיל פרישה רשמי ↗</a></small></label>
            <label>יציבות ההכנסה<select id="stability"><option value="stable">יציבה מאוד</option><option value="medium" selected>די יציבה</option><option value="variable">משתנה / עצמאית</option></select></label>
          </div>
        </fieldset>

        <fieldset>
          <legend><span>02</span><div>תזרים וסגנון חיים<small>איך נראים החיים בפועל, לא רק על הנייר</small></div></legend>
          <div class="profile-grid">
            <label>הכנסה נטו חודשית<input id="income" type="number" value="24000"></label>
            <label>הוצאות חודשיות שוטפות<input id="monthlyExpenses" type="number" value="17000"></label>
            <label>עלות דיור מתוך ההוצאות<input id="housingCost" type="number" value="6200"></label>
            <label>הוצאות שנתיות נוספות<input id="annualIrregular" type="number" value="15000"></label>
            <label>הכנסה פסיבית חודשית<input id="passive" type="number" value="500"></label>
            <label>רמת חיים רצויה בחופש<input id="targetSpend" type="number" value="14000"></label>
            <label>מצב הדיור<select id="housing"><option value="rent">שכירות</option><option value="mortgage" selected>משכנתה</option><option value="owned">דירה ללא משכנתה</option></select></label>
            <label>מה חשוב לשמור בדרך?<select id="lifestyle"><option value="balanced" selected>איזון ונוחות יומיומית</option><option value="experiences">חוויות וחופשות</option><option value="home">בית ומשפחה</option><option value="fast">להגיע ליעד מהר ככל האפשר</option></select></label>
          </div>
        </fieldset>

        <fieldset>
          <legend><span>03</span><div>הון, פנסיה והגנות<small>מה זמין לפני הפרישה ומה ייפתח אחריה</small></div></legend>
          <div class="profile-grid">
            <label>חסכונות והשקעות נזילים<input id="capital" type="number" value="320000"><small>ללא פנסיה</small></label>
            <label>כסף נזיל למקרי חירום<input id="emergency" type="number" value="70000"></label>
            <label>חיסכון פנסיוני כיום<input id="pensionCapital" type="number" value="420000"></label>
            <label>הפקדה חודשית לפנסיה<input id="pensionContribution" type="number" value="4000"></label>
            <label>קצבה חודשית צפויה בפרישה<input id="expectedPension" type="number" value="6500"></label>
            <label>קצבת אזרח ותיק צפויה<input id="oldAgeBenefit" type="number" value="2750"><small>הערכה בלבד</small></label>
            <label>יתרת משכנתה<input id="mortgageBalance" type="number" value="700000"></label>
            <label>חובות יקרים אחרים<input id="expensiveDebt" type="number" value="0"></label>
            <label>תשואה שנתית משוערת<input id="returnRate" type="number" step="0.1" value="4"><small>לפני מס ואינפלציה</small></label>
            <label>כיסוי ביטוחי למשפחה<select id="insurance"><option value="full">חיים, בריאות ואובדן כושר</option><option value="partial" selected>כיסוי חלקי</option><option value="none">לא ידוע / אין</option></select></label>
          </div>
        </fieldset>
        <div class="save-bar"><div><strong>הפרופיל הוא בסיס ההמלצות</strong><span>שינוי כאן יעדכן מיד את התוכנית ובדיקת ההוצאות.</span></div><button class="primary-button" type="submit">שמירת הפרופיל <span>←</span></button></div>
      </form>
    </section>
  </main>

  <footer><span>OFÉK — Family wealth intelligence</span><p>כלי תכנון והמחשה בלבד. אינו תחליף לייעוץ פיננסי, פנסיוני, מס או השקעות אישי.</p><span>© 2026</span></footer>
  <div class="toast" id="toast">הפרופיל נשמר והתוכנית עודכנה</div>
`;const e=t=>document.getElementById(t),s=t=>Number(e(t)?.value)||0,d=(t,a=!1)=>new Intl.NumberFormat("he-IL",{style:"currency",currency:"ILS",maximumFractionDigits:0,notation:a?"compact":"standard"}).format(Math.round(t||0));function E(t,a,i){return t*Math.pow(1+a/100,Math.max(0,i))}function $(t,a,i){const l=a/100/12,n=Math.max(0,i*12);return l?t*((Math.pow(1+l,n)-1)/l):t*n}function S(){const t=s("income"),a=s("monthlyExpenses")+s("annualIrregular")/12,i=s("passive"),l=s("targetSpend"),n=Math.max(1,s("independenceYears")),o=s("currentAge"),r=o+n,v=Math.max(r,s("retirementAge")),p=Math.max(0,v-r),m=Math.max(0,l-i)*12,A=Math.max(0,l-i-s("expectedPension")-s("oldAgeBenefit"))*12,x=m*p+A*25,g=t-a,C=E(s("capital"),s("returnRate"),n)+$(Math.max(0,g),s("returnRate"),n),M=Math.max(0,x-C),c=M?M/Math.max(1,n*12):0;return{income:t,expenses:a,passive:i,targetSpend:l,years:n,age:o,targetAge:r,retirementAge:v,bridgeYears:p,goal:x,saving:g,projected:C,gap:M,requiredMonthly:c}}function w(){const t=S(),a=t.goal?Math.min(100,s("capital")/t.goal*100):100,i=t.goal?Math.min(140,t.projected/t.goal*100):100,l=t.expenses?s("emergency")/t.expenses:0,n=t.income?Math.max(-99,t.saving/t.income*100):0,o=e("city").value.trim()||"העיר שלכם";e("goalCapital").textContent=d(t.goal),e("todayCapital").textContent=d(s("capital"),!0),e("horizonLabel").textContent=`${t.years} שנים`,e("goalTrack").style.width=`${a}%`,e("goalMarker").style.right=`${Math.min(96,a)}%`,e("coverageDial").style.setProperty("--coverage",Math.min(100,i)),e("coverageValue").textContent=`${Math.round(i)}%`,e("coverageText").textContent=i>=100?"התוכנית הנוכחית מכסה את היעד החזוי.":"מההון הדרוש צפוי להיות זמין במועד היעד.",e("goalStatus").textContent=i>=100?"המסלול הנוכחי צפוי לעמוד ביעד.":i>=80?"היעד קרוב — התאמה חודשית קטנה יכולה לסגור את הפער.":"קיים פער שדורש שינוי בחיסכון, בזמן או ברמת ההוצאה.",e("targetAge").textContent=t.targetAge,e("ageToday").textContent=t.age,e("retirementLabel").textContent=t.retirementAge,e("savingRate").textContent=`${Math.round(n)}%`,e("currentCapital").textContent=d(s("capital")),e("passiveMetric").textContent=d(t.passive),e("emergencyMetric").textContent=l.toFixed(1),e("cityBadge").textContent=o,e("bridgeFreedomTitle").textContent=`עצמאות בגיל ${t.targetAge}`,e("bridgeRetirementTitle").textContent=`פרישה בגיל ${t.retirementAge}`,e("bridgeFreedomText").textContent=`${t.bridgeYears} שנים שבהן ההון הנזיל מגשר עד הפנסיה`,e("monthlyGap").textContent=t.gap?d(t.requiredMonthly):"אין פער",e("checkCity").textContent=o,e("checkHorizon").textContent=`${t.years} שנים ליעד`;const r=e("stability").value==="variable"?9:e("stability").value==="medium"?6:4;s("expensiveDebt")>0?(e("nextActionTitle").textContent="לטפל קודם בחוב היקר",e("nextActionText").textContent=`קיים חוב של ${d(s("expensiveDebt"))}. ברוב המקרים הוא קודם להגדלת השקעות או הוצאות רשות.`):l<r?(e("nextActionTitle").textContent="לחזק את כרית החירום",e("nextActionText").textContent=`ליציבות ההכנסה שהוגדרה מומלצים כ־${r} חודשי מחיה; כרגע יש ${l.toFixed(1)}.`):i<100?(e("nextActionTitle").textContent="לסגור את הפער החודשי",e("nextActionText").textContent=`תוספת של כ־${d(t.requiredMonthly)} בחודש עשויה לקרב את התוכנית ליעד, בהנחות שהוזנו.`):(e("nextActionTitle").textContent="לשמור על הקצב",e("nextActionText").textContent="התוכנית עומדת ביעד לפי ההנחות. בדקו אותה מחדש בכל שינוי משמעותי בחיים."),R()}function R(){const t=h.filter(i=>String(e(i)?.value??"").trim()!=="").length,a=Math.round(t/h.length*100);e("profileCompleteness").textContent=`${a}%`,e("profileBar").style.width=`${a}%`}function P(t){t.preventDefault();const a=S(),i=e("expenseName").value.trim()||"ההוצאה הזו",l=s("expenseAmount"),n=e("frequency").value,o=e("category").value,r=s("importance"),v=s("returnRate");let p,m;n==="monthly"?(p=$(l,v,a.years),m=l):n==="yearly"?(p=$(l/12,v,a.years),m=l/12):(p=E(l,v,a.years),m=l/12);const A=Math.max(0,a.projected-p),x=a.goal?A/a.goal*100:100,g=a.expenses?s("emergency")/a.expenses:0,C=e("stability").value==="variable"?9:e("stability").value==="medium"?6:4;let c=(a.saving>0?m/a.saving:1)*52+(r<=5?17:0)+(n==="monthly"?12:0);(o==="need"||o==="debt")&&(c-=27),o==="growth"&&r>=7&&(c-=13),g<C&&o!=="need"&&(c+=19),s("expensiveDebt")>0&&!["debt","need"].includes(o)&&(c+=22),s("children")>0&&n!=="once"&&(c+=Math.min(8,s("children")*2)),e("lifestyle").value==="fast"&&o==="want"&&(c+=12),e("lifestyle").value==="experiences"&&o==="want"&&r>=8&&(c-=7);let b,f,u,y;l?c<20?(b="מתאים לתוכנית",f=`אפשר לבחור ב${i}`,u="good",y="ההשפעה על התוכנית מוגבלת ביחס לחשיבות ולמצב המשפחתי שהוגדר."):c<52?(b="אפשרי, עם התאמה",f=`${i} דורשת איזון קטן`,u="warn",y=n==="monthly"?`כדאי לקזז ${d(m)} מהוצאה חודשית אחרת או לבחור חלופה זולה יותר.`:"כדאי לחסוך עבורה מראש ולא לקחת את הסכום מכרית החירום."):(b="לא מתאימה כרגע",f=`עדיף לדחות את ${i}`,u="bad",y="ההוצאה מגדילה פער קיים או מקטינה את מרווח הביטחון של המשפחה באופן משמעותי."):(b="חסר סכום",f="צריך להזין מחיר כדי לנתח",u="neutral",y="הזינו את עלות ההוצאה ונסו שוב.");const F=e("city").value.trim()||"עיר המגורים",L=a.saving>0?Math.min(120,Math.ceil(p/a.saving)):120;e("result").className=`result-card has-result ${u}`,e("result").innerHTML=`
    <div class="result-top"><span class="result-icon">${u==="good"?"✓":u==="warn"?"!":"×"}</span><span class="result-label">${b}</span></div>
    <h2>${f}</h2><p>${y}</p>
    <div class="impact-grid">
      <div><small>עלות עתידית במועד היעד</small><strong>${d(p)}</strong><span>כולל תשואה משוערת שלא תיצבר</span></div>
      <div><small>כיסוי היעד לאחר ההוצאה</small><strong>${Math.round(x)}%</strong><span>${L>=120?"השפעה משמעותית":`עד ${L} חודשי חיסכון`}</span></div>
    </div>
    <div class="family-basis"><small>מה השפיע על ההמלצה</small><div>
      <span>${s("adults")+s("children")} נפשות</span><span>${F}</span><span>${a.years} שנים ליעד</span>
      <span>${g.toFixed(1)} חודשי חירום</span><span>פרישה בגיל ${a.retirementAge}</span>
    </div></div>
    <div class="tip"><b>החלופה החכמה:</b> ${u==="good"?"אפשר לבצע את ההוצאה מתקציב ייעודי בלי לפגוע בחיסכון הקבוע.":`הפחתה של 20% במחיר תחסוך כ־${d(p*.2)} במונחי מועד היעד.`}</div>
    <button class="outline-button" id="resetResult">בדיקת הוצאה נוספת</button>
    <small class="disclaimer">המחשה בלבד; אינה כוללת מס, אינפלציה ושינויים עתידיים בהכנסה או בזכויות.</small>
  `,e("resetResult").addEventListener("click",()=>e("expenseName").focus())}function q(t){t?.preventDefault();const a=Object.fromEntries(h.map(i=>[i,e(i).value]));localStorage.setItem("ofek-family-profile-v2",JSON.stringify(a)),w(),e("toast").classList.add("show"),setTimeout(()=>e("toast").classList.remove("show"),2200)}function D(){try{const t=JSON.parse(localStorage.getItem("ofek-family-profile-v2"));t&&h.forEach(a=>{t[a]!==void 0&&(e(a).value=t[a])})}catch{}}function T(t){const i=["plan","check","profile"].includes(t)?t:"plan";document.querySelectorAll("[data-page]").forEach(l=>l.classList.toggle("active",l.dataset.page===i)),document.querySelectorAll("nav [data-route]").forEach(l=>l.classList.toggle("active",l.dataset.route===i)),history.replaceState(null,"",`#${i}`),window.scrollTo({top:0,behavior:"smooth"})}document.querySelectorAll("[data-route]").forEach(t=>t.addEventListener("click",()=>T(t.dataset.route)));e("importance").addEventListener("input",t=>e("importanceValue").textContent=t.target.value);e("expenseForm").addEventListener("submit",P);e("profileForm").addEventListener("submit",q);h.forEach(t=>e(t).addEventListener("input",w));e("themeToggle").addEventListener("click",()=>document.body.classList.toggle("dark"));window.addEventListener("hashchange",()=>T(location.hash.slice(1)));D();w();T(location.hash.slice(1)||"plan");

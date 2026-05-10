# Content source — bio + works

Authored from two source CVs (English short CV + Hebrew independent-creators-fund CV). Single source of truth for HE/EN content across site, EPK, CV PDFs.

Update this file first → propagate to `index.html` / `en/index.html` / `/assets/press/*`.

---

## Bio

### Short tier — HE (~3 lines, wild voice)

> עופר פנחס — מלחין, מעבד ומנהל מוזיקלי שעובד בין אולם הקונצרטים לבמת הרוק.
> בא מרקע קלאסי מוצק, חי בתוך ג׳אז, פולקלור ומוזיקה עולמית.
> מטרה אחת בכל פרויקט — מוזיקה שמזיזה את הגוף בדיוק כמו שהיא מעוררת את הראש.

### Short tier — EN (~3 lines, wild voice)

> Ofer Pinhas — composer, arranger, musical director working between the concert hall and the bandstand.
> Rooted in classical training, at home in jazz, folklore, and world music.
> One goal in every project: music that moves the body as much as it sharpens the mind.

### Long tier — HE (CV-grade)

> עופר פנחס (יליד 1987) הוא מלחין, מעבד, כותב ומנהל מוזיקלי, בוגר בית הספר למוזיקה ע"ש בוכמן-מהטה באוניברסיטת תל אביב. למד פסנתר קלאסי מגיל שש אצל ישראל קסטוריאנו ונחמה טלפז, ואת הלחנה ותזמור אצל פרופ׳ יצחק סדאי ז״ל.
>
> השפה המוזיקלית שלו נעה בין אולם הקונצרטים לצורות מוזיקה פופולריות — שילוב של תחכום של "מוזיקה גבוהה" עם העוצמה הישירה, הגופנית, של המקצב. יצירותיו בוצעו על ידי תזמורת המהפכה, תזמורת הנוער הערבית-יהודית של הגליל, אנסמבל מיתר ו-oneMusic Orchestra, בין השאר, והוא כתב מוזיקה מקורית לתיאטרון הקאמרי. בעולם הלהקות, הוא המייסד, המלחין והמנהל האמנותי של פנחס ובניו — הרכב פיוז׳ן עשירוני המחבר פולקלור, ג׳אז ומקצבים עולמיים לשירים עבריים מקוריים.
>
> בין שיתופי הפעולה שלו: שלמה גרוניך, יוני רכטר, שלומי שבן, אלון עדר, אסתר רדא, עומרי מור ודניאל זמיר.

### Long tier — EN (CV-grade)

> Ofer Pinhas (b. 1987) is a composer, arranger, songwriter and musical director, a graduate of the Buchmann-Mehta School of Music at Tel Aviv University. He studied classical piano from age six with Israel Kastoriano and Nehama Telfaz, and composition and orchestration under the late Prof. Yitzhak Sadai.
>
> His musical language moves between the concert hall and popular forms — pairing the sophistication of "high art" with the direct, bodily power of rhythm. His works have been performed by the Revolution Orchestra, the Galilee Chamber Orchestra (an Arab-Jewish youth orchestra), Ensemble Meitar, and the oneMusic Orchestra, among others, and he has composed original music for the Cameri Theatre, Tel Aviv. He is the founder, composer and artistic director of Pinhas & Sons — a ten-piece fusion ensemble that fuses folklore, jazz and world rhythms into original Hebrew songs.
>
> Selected collaborators include Shlomo Gronich, Yoni Rechter, Shlomi Shaban, Alon Eder, Ester Rada, Omri Mor and Daniel Zamir.

---

## Works (outside Pinhas & Sons)

Each entry = slug + structured fields. Categories — by ensemble/role (Avishai Cohen pattern), not genre:
- `band` — Pinhas & Sons (the named project; collabs with P&S live here)
- `orchestra` — full orchestral commissions / works
- `chamber` — chamber + contemporary-ensemble pieces
- `theater` — theater + film scores
- `arrange` — arrangements for other artists / ensembles
- `songs` — songs, songbooks, solo writing

**Schema** (Bryce Dessner pattern — concert-hall metadata block):

```
slug, title_he, title_en, year, category, role, ensemble,
commissioner, premiere (venue + date), instrumentation, duration,
note_he, note_en, pull_quote_he, pull_quote_en, quote_source,
media_links: [{type, url, label}], featured: bool
```

Card-level (works grid) shows: year + title + meta-line + note + first link.
Detail-page (T3.1) shows full block: instrumentation, duration, commissioner, premiere, full media list, pull quote.

Sort: newest first. Marked `featured: true` ride the top of the grid.

---

### 1. `main-thing-lyrics` — העיקר זה המילים

- **title_he**: העיקר זה המילים
- **title_en**: The Main Thing Is the Lyrics
- **year**: 2025
- **category**: arrange
- **role**: Composer / arranger
- **ensemble**: Revolution Orchestra (תזמורת המהפכה)
- **note_he**: עיבודים תזמורתיים ליצירותיו של יוני רכטר.
- **note_en**: Orchestral re-imaginings of Yoni Rechter's songbook.
- **media_links**:
  - https://youtu.be/hSfi9_FQAlI
  - https://youtu.be/NjwPWtKP5GM
- **featured**: true

### 2. `mi-bead` — מי בעד

- **title_he**: מי בעד
- **title_en**: All In Favor
- **year**: 2025
- **category**: theater
- **role**: Original score
- **ensemble**: The Cameri Theatre Tel Aviv (התיאטרון הקאמרי)
- **commissioner**: The Cameri Theatre, Tel Aviv
- **premiere**: Cameri Theatre, 2025
- **note_he**: מוזיקה מקורית להצגה "מי בעד" בתיאטרון הקאמרי.
- **note_en**: Original score for the play *All In Favor* at the Cameri Theatre.
- **media_links**:
  - https://youtu.be/oE0PiF970mY (trailer)
- **featured**: true

### 3. `esperanca` — אספרנסה

- **title_he**: אספרנסה
- **title_en**: Esperança
- **year**: 2025
- **category**: band
- **role**: Co-composer / arranger (with Pinhas & Sons)
- **ensemble**: Pinhas & Sons × Omri Mor
- **note_he**: פרויקט משותף עם פסנתרן הג׳אז עומרי מור.
- **note_en**: Collaborative project with international jazz pianist Omri Mor.
- **featured**: false

### 4. `hope-dies-last` — התקווה מתה אחרונה

- **title_he**: התקווה מתה אחרונה
- **title_en**: Hope Dies Last
- **year**: 2024
- **category**: chamber
- **role**: Lead composer
- **ensemble**: Ensemble Meitar
- **commissioner**: Ensemble Meitar
- **instrumentation**: Chamber ensemble + 2 actresses + electronics + video
- **premiere**: 2024
- **note_he**: מיזם רב-תחומי המבוסס על עדויות וטקסטים מ־7 באוקטובר. הפרטיטורה משלבת אנסמבל קאמרי, נרטור חי, וידאו-ארט מוקלט ואלקטרוניקה — תגובה מוזיקלית בלתי-מתפשרת לטראומה קולקטיבית.
- **note_en**: A multidisciplinary work built on video testimonies and texts from October 7th. Score integrates chamber ensemble with live narration, recorded video art, and electronics — a visceral musical response to collective trauma.
- **media_links**: (track names from Selected Works PDF — URLs TBD)
  - "Hope Dies Last"
  - "Chen Almog Goldstein"
  - "Thank God Dad isn't here"
  - "Liquid Sky"
- **featured**: true

### 5. `gronich-galilee` — גרוניך בגליל

- **title_he**: תזמורת הנוער הערבית-יהודית של הגליל מארחת את שלמה גרוניך
- **title_en**: Gronich in Galilee
- **year**: 2024
- **category**: arrange
- **role**: Orchestral arrangements
- **ensemble**: Galilee Chamber Orchestra (Arab-Jewish youth orchestra) × Shlomo Gronich
- **note_he**: עיבודים תזמורתיים למופע מחווה של תזמורת הנוער הערבית-יהודית לשלמה גרוניך.
- **note_en**: Orchestral arrangements for the Arab-Jewish youth orchestra's tribute to Shlomo Gronich.
- **featured**: false

### 6. `visa-germany` — ויזה לגרמניה

- **title_he**: ?How do I Get a) Visa to Germany)
- **title_en**: (How do I Get a) Visa to Germany
- **year**: 2023
- **category**: chamber
- **role**: Composer
- **ensemble**: oneMusic Orchestra
- **commissioner**: oneMusic Orchestra
- **instrumentation**: Chamber ensemble (multi-cultural rhapsodic work)
- **premiere**: Beethovenfest, Bonn — 2023
- **note_he**: יצירה רפסודית רב-תרבותית לאנסמבל קאמרי. הוזמנה ע"י oneMusic Orchestra והוצגה בבכורה בפסטיבל בטהובן, בון.
- **note_en**: A multi-cultural rhapsodic work for chamber ensemble. Commissioned by the oneMusic Orchestra; premiered at Beethovenfest, Bonn.
- **media_links**: "Visa to Germany — Live at BeethovenFest" (URL TBD from Ofer)
- **featured**: true

### 7. `yemeni-avant-garde` — אוונגרד תימני

- **title_he**: אוונגרד תימני
- **title_en**: Yemeni Avant-Garde
- **year**: 2023
- **category**: chamber
- **role**: Lead composer
- **ensemble**: Ensemble Meitar × Yossi Tsabari
- **instrumentation**: Chamber ensemble + spoken-word performer
- **premiere**: 2023
- **note_he**: מחזור ספוקן-וורד סאטירי-פוליטי. היצירה שוזרת מורשת ותחביר תימניים מסורתיים עם מוזיקה קאמרית בת-זמננו — חיכוך אוונגרדי בין שני העולמות.
- **note_en**: A satiric-political spoken-word cycle. Interweaves traditional Yemenite heritage and syntax with Western contemporary chamber music — an avant-garde performance built on friction between the two.
- **media_links**: (track names from Selected Works PDF — URLs TBD)
  - "Peripheral Damage"
  - "Pardon my English"
- **featured**: false

### 8. `simple-songs` — שירים (לא) פשוטים

- **title_he**: שירים (לא) פשוטים
- **title_en**: (Not So) Simple Songs
- **year**: 2023
- **category**: arrange
- **role**: Musical director / arranger
- **note_he**: מופע מחווה שמעניק פרשנות אמנותית מודרנית לקלאסיקות עבריות.
- **note_en**: A tribute show offering bold, modern-artistic re-readings of Hebrew classics.
- **featured**: false

### 9. `orphaned-land-30` — 30 שנה לאורפנד לנד

- **title_he**: 30 שנה לאורפנד לנד
- **title_en**: Orphaned Land — 30th Anniversary
- **year**: 2021
- **category**: arrange
- **role**: Arranger for orchestra and choir
- **ensemble**: Orphaned Land
- **note_he**: עיבודים לתזמורת ומקהלה למופע יום השנה ה־30 של Orphaned Land.
- **note_en**: Orchestra and choir arrangements for the band's 30-year anniversary concert.
- **featured**: false

### 10. `hopeless-songbook` — כן זה חסר סיכוי, אבל למה לא לנסות

- **title_he**: כן זה חסר סיכוי, אבל למה לא לנסות
- **title_en**: Yes, It's Hopeless, But Why Not Give It a Try?
- **year**: 2019
- **category**: songs
- **role**: Composer / author (songbook)
- **note_he**: ספר התוים הראשון של פנחס ובניו — אוסף שירים בעיבודים לפסנתר / גיטרה.
- **note_en**: Published songbook collecting Pinhas & Sons material arranged for piano / guitar.
- **featured**: false

---

## Contact

- **Email**: `pinhasymphony@gmail.com` (confirmed by Ofer 2026-05-06)
- **Phone**: +972-52-542-3189 (CV lists it; site does not publish)
- **Instagram**: https://www.instagram.com/ofer_the_pinhas/
- **Facebook**: https://www.facebook.com/ofer.pinhas
- **YouTube**: https://www.youtube.com/@oferpinhas
- **Bandcamp**: https://oferpinhas.bandcamp.com/
- **Spotify artist**: https://open.spotify.com/artist/4is8ZJ8ZOKavbLhc9M5EPt

---

## Source provenance

- `~/Downloads/Pinhas_Ofer_CV.pdf` (English, 2-page short CV, last modified 2025-04-25)
- `~/Downloads/קורות חיים עופר פנחס - קרן ליוצרים עצמאיים 2025 (1) (1).pdf` (Hebrew, independent-creators-fund application, 2025-04-25)

Any content change — update this file first, then regenerate HTML.

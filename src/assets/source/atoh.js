// AtoH.js

const AtoH = (() => {
  const KEY_MAP = {
    a: "ㅁ",
    b: "ㅠ",
    c: "ㅊ",
    d: "ㅇ",
    e: "ㄷ",
    f: "ㄹ",
    g: "ㅎ",
    h: "ㅗ",
    i: "ㅑ",
    j: "ㅓ",
    k: "ㅏ",
    l: "ㅣ",
    m: "ㅡ",
    n: "ㅜ",
    o: "ㅐ",
    p: "ㅔ",
    q: "ㅂ",
    r: "ㄱ",
    s: "ㄴ",
    t: "ㅅ",
    u: "ㅕ",
    v: "ㅍ",
    w: "ㅈ",
    x: "ㅌ",
    y: "ㅛ",
    z: "ㅋ",
    A: "ㅁ",
    B: "ㅠ",
    C: "ㅊ",
    D: "ㅇ",
    E: "ㄸ",
    F: "ㄹ",
    G: "ㅎ",
    H: "ㅗ",
    I: "ㅑ",
    J: "ㅓ",
    K: "ㅏ",
    L: "ㅣ",
    M: "ㅡ",
    N: "ㅜ",
    O: "ㅒ",
    P: "ㅖ",
    Q: "ㅃ",
    R: "ㄲ",
    S: "ㄴ",
    T: "ㅆ",
    U: "ㅕ",
    V: "ㅍ",
    W: "ㅉ",
    X: "ㅌ",
    Y: "ㅛ",
    Z: "ㅋ",
    hk: "ㅘ",
    ho: "ㅙ",
    hl: "ㅚ",
    nj: "ㅝ",
    np: "ㅞ",
    nl: "ㅟ",
    ml: "ㅢ",
    sw: "ㄵ",
    sg: "ㄶ",
    fr: "ㄺ",
    fa: "ㄻ",
    fq: "ㄼ",
    ft: "ㄽ",
    fx: "ㄾ",
    fv: "ㄿ",
    fg: "ㅀ",
    qt: "ㅄ",
  };

  const CHOSUNG = {
    ㄱ: 0,
    ㄲ: 1,
    ㄴ: 2,
    ㄷ: 3,
    ㄸ: 4,
    ㄹ: 5,
    ㅁ: 6,
    ㅂ: 7,
    ㅃ: 8,
    ㅅ: 9,
    ㅆ: 10,
    ㅇ: 11,
    ㅈ: 12,
    ㅉ: 13,
    ㅊ: 14,
    ㅋ: 15,
    ㅌ: 16,
    ㅍ: 17,
    ㅎ: 18,
  };

  const JUNGSUNG = {
    ㅏ: 0,
    ㅐ: 1,
    ㅑ: 2,
    ㅒ: 3,
    ㅓ: 4,
    ㅔ: 5,
    ㅕ: 6,
    ㅖ: 7,
    ㅗ: 8,
    ㅘ: 9,
    ㅙ: 10,
    ㅚ: 11,
    ㅛ: 12,
    ㅜ: 13,
    ㅝ: 14,
    ㅞ: 15,
    ㅟ: 16,
    ㅠ: 17,
    ㅡ: 18,
    ㅢ: 19,
    ㅣ: 20,
  };

  const JONGSUNG = {
    ㄱ: 1,
    ㄲ: 2,
    ㄳ: 3,
    ㄴ: 4,
    ㄵ: 5,
    ㄶ: 6,
    ㄷ: 7,
    ㄹ: 8,
    ㄺ: 9,
    ㄻ: 10,
    ㄼ: 11,
    ㄽ: 12,
    ㄾ: 13,
    ㄿ: 14,
    ㅀ: 15,
    ㅁ: 16,
    ㅂ: 17,
    ㅄ: 18,
    ㅅ: 19,
    ㅆ: 20,
    ㅇ: 21,
    ㅈ: 22,
    ㅊ: 23,
    ㅋ: 24,
    ㅌ: 25,
    ㅍ: 26,
    ㅎ: 27,
  };

  const isAlpha = (c) => {
    const code = c.charCodeAt(0);
    return (
      (code >= 0x0041 && code <= 0x005a) || (code >= 0x0061 && code <= 0x007a)
    );
  };

  const convert = (alpha) => {
    if (!alpha) return "";

    let hangul = "";
    let i = 0;
    let chosung, tempCho;
    let jungsung, jungsung2;
    let jongsung, jongsung1, jongsung2;
    let next;
    let cho, jung, jong;
    let c;

    while (i < alpha.length) {
      //알파벳 글자가 아닌 것은 바로 삽입한다.
      if (!isAlpha(alpha.charAt(i))) {
        hangul += alpha.charAt(i);
        i++;
        continue;
      }

      //초성찾기
      chosung = KEY_MAP[alpha.substr(i, 1)];
      if (CHOSUNG.hasOwnProperty(chosung)) i++;
      else chosung = null;

      //중성찾기
      jungsung = KEY_MAP[alpha.substr(i, 1)];
      if (JUNGSUNG.hasOwnProperty(jungsung)) {
        jungsung2 = KEY_MAP[alpha.substr(i, 2)];
        if (JUNGSUNG.hasOwnProperty(jungsung2)) {
          jungsung = jungsung2;
          i++;
        }
        i++;
      } else {
        jungsung = null;
      }

      //초성이 없는 경우 중성을 바로 삽입
      if (chosung == null && jungsung != null) {
        hangul += jungsung;
        continue;
      }

      //초성이 있는데 중성이 없는 경우는  종성이 되는지 검사해야 한다.
      //종성이 되는 않는다면 다시 초성으로 처리해야 하므로 tempCho에 저장해 둔다.
      tempCho = chosung;
      if (chosung != null && jungsung == null) {
        chosung = null;
        i--;
      }

      //종성찾기
      //종성은 2개의 자음으로 구성될 수 있고, 이때 다음 글자가 중성이 나오면
      //이 종성은 다음 글자의 초성이 되어야 하므로 jongsung1, jongsung2에 저장해 둔다.
      jongsung = null;
      jongsung1 = null;
      jongsung2 = null;

      jongsung1 = KEY_MAP[alpha.substr(i, 1)];
      if (JONGSUNG.hasOwnProperty(jongsung1)) {
        jongsung = jongsung1;

        jongsung2 = KEY_MAP[alpha.substr(i, 2)];
        if (JONGSUNG.hasOwnProperty(jongsung2)) {
          jongsung = jongsung2;
          i++;
        } else {
          jongsung2 = null;
        }
        i++;
      } else {
        jongsung1 = null;
      }

      //초성만 있으면
      if (tempCho != null && jungsung == null && jongsung == null) {
        i++;
        hangul += tempCho;
        continue;
      }

      //다음 글자가 바로 중성이 나오면 앞글자의 종성을 다음 글자 초성으로 사용해야 한다.
      if (jongsung != null) {
        next = KEY_MAP[alpha.substr(i, 1)];
        if (JUNGSUNG.hasOwnProperty(next)) {
          if (jongsung2 != null) {
            jongsung = jongsung1;
            i--;
          } else if (jongsung1 != null) {
            jongsung = null;
            i--;
          }
        }
      }

      //종성만 있으면
      if (chosung == null && jungsung == null && jongsung != null) {
        hangul += jongsung;
        continue;
      }

      //한글 조립
      cho = CHOSUNG[chosung];
      jung = JUNGSUNG[jungsung];
      jong = JONGSUNG[jongsung];

      c = 0xac00 + cho * 21 * 28 + jung * 28 + (!jong ? 0 : jong);

      hangul += String.fromCharCode(c);
    }

    return hangul;
  };

  return { convert };
})();

export default AtoH;

import cn from "./cn";
import en from "./en";
import tw from "./tw";
import id from "./id";
import fr from "./fr";
import es from "./es";
import it from "./it";
import tr from "./tr";
import jp from "./jp";
import de from "./de";
import vi from "./vi";
import ru from "./ru";
import no from "./no";
import cs from "./cs";
import ko from "./ko";
import ar from "./ar";
import bn from "./bn";
import { merge } from "../utils/merge";

import type { LocaleType } from "./cn";
export type { LocaleType, PartialLocaleType } from "./cn";

const ALL_LANGS = {
  cn,
  en,
  tw,
  jp,
  ko,
  id,
  fr,
  es,
  it,
  tr,
  de,
  vi,
  ru,
  cs,
  no,
  ar,
  bn,
};

export type Lang = keyof typeof ALL_LANGS;

export const AllLangs = Object.keys(ALL_LANGS) as Lang[];

export const ALL_LANG_OPTIONS: Record<Lang, string> = {
  cn: "简体中文",
  en: "English",
  tw: "繁體中文",
  jp: "日本語",
  ko: "한국어",
  id: "Indonesia",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  tr: "Türkçe",
  de: "Deutsch",
  vi: "Tiếng Việt",
  ru: "Русский",
  cs: "Čeština",
  no: "Nynorsk",
  ar: "العربية",
  bn: "বাংলা",
};

const LANG_KEY = "lang";
const DEFAULT_LANG = "cn";

const PLAYLANG_KEY = "playlang";
export const ALL_PLAYLANG_OPTIONS = [
  "zh-CN, XiaoxiaoNeural",
  "zh-CN, XiaoyiNeural",
  "zh-CN, YunjianNeural",
  "zh-CN, YunxiNeural",
  "zh-CN, YunxiaNeural",
  "zh-CN, YunyangNeural",
  "zh-HK, HiuGaaiNeural",
  "zh-HK, HiuMaanNeural",
  "zh-HK, WanLungNeural",
  "zh-TW, HsiaoChenNeural",
  "zh-TW, HsiaoYuNeural",
  "zh-TW, YunJheNeural",
  "ja-JP, KeitaNeural",
  "ja-JP, NanamiNeural",
  "en-US, AnaNeural",
  "en-US, AriaNeural",
  "en-US, ChristopherNeural",
  "en-US, EricNeural",
  "en-US, GuyNeural",
  "en-US, JennyNeural",
  "en-US, MichelleNeural",
  "en-US, RogerNeural",
  "en-US, SteffanNeural",
  "en-AU, NatashaNeural",
  "en-AU, WilliamNeural",
  "en-CA, ClaraNeural",
  "en-CA, LiamNeural",
  "en-GB, LibbyNeural",
  "en-GB, MaisieNeural",
  "en-GB, RyanNeural",
  "en-GB, SoniaNeural",
  "en-GB, ThomasNeural",
  "en-HK, SamNeural",
  "en-HK, YanNeural",
  "en-IE, ConnorNeural",
  "en-IE, EmilyNeural",
  "en-IN, NeerjaExpressiveNeural",
  "en-IN, NeerjaNeural",
  "en-IN, PrabhatNeural",
  "en-KE, AsiliaNeural",
  "en-KE, ChilembaNeural",
  "en-NG, AbeoNeural",
  "en-NG, EzinneNeural",
  "en-NZ, MitchellNeural",
  "en-NZ, MollyNeural",
  "en-PH, JamesNeural",
  "en-PH, RosaNeural",
  "en-SG, LunaNeural",
  "en-SG, WayneNeural",
  "en-TZ, ElimuNeural",
  "en-TZ, ImaniNeural",
  "en-ZA, LeahNeural",
  "en-ZA, LukeNeural",
  "es-AR, ElenaNeural",
  "es-AR, TomasNeural",
  "es-BO, MarceloNeural",
  "es-BO, SofiaNeural",
  "es-CL, CatalinaNeural",
  "es-CL, LorenzoNeural",
  "es-CO, GonzaloNeural",
  "es-CO, SalomeNeural",
  "es-CR, JuanNeural",
  "es-CR, MariaNeural",
  "es-CU, BelkysNeural",
  "es-CU, ManuelNeural",
  "es-DO, EmilioNeural",
  "es-DO, RamonaNeural",
  "es-EC, AndreaNeural",
  "es-EC, LuisNeural",
  "es-ES, AlvaroNeural",
  "es-ES, ElviraNeural",
  "es-ES, ManuelEsCUNeural",
  "es-GQ, JavierNeural",
  "es-GQ, TeresaNeural",
  "es-GT, AndresNeural",
  "es-GT, MartaNeural",
  "es-HN, CarlosNeural",
  "es-HN, KarlaNeural",
  "es-MX, DaliaNeural",
  "es-MX, JorgeNeural",
  "es-MX, LorenzoEsCLNeural",
  "es-NI, FedericoNeural",
  "es-NI, YolandaNeural",
  "es-PA, MargaritaNeural",
  "es-PA, RobertoNeural",
  "es-PE, AlexNeural",
  "es-PE, CamilaNeural",
  "es-PR, KarinaNeural",
  "es-PR, VictorNeural",
  "es-PY, MarioNeural",
  "es-PY, TaniaNeural",
  "es-SV, LorenaNeural",
  "es-SV, RodrigoNeural",
  "es-US, AlonsoNeural",
  "es-US, PalomaNeural",
  "es-UY, MateoNeural",
  "es-UY, ValentinaNeural",
  "es-VE, PaolaNeural",
  "es-VE, SebastianNeural",
  "af-ZA, AdriNeural",
  "af-ZA, WillemNeural",
  "am-ET, AmehaNeural",
  "am-ET, MekdesNeural",
  "ar-AE, FatimaNeural",
  "ar-AE, HamdanNeural",
  "ar-BH, AliNeural",
  "ar-BH, LailaNeural",
  "ar-DZ, AminaNeural",
  "ar-DZ, IsmaelNeural",
  "ar-EG, SalmaNeural",
  "ar-EG, ShakirNeural",
  "ar-IQ, BasselNeural",
  "ar-IQ, RanaNeural",
  "ar-JO, SanaNeural",
  "ar-JO, TaimNeural",
  "ar-KW, FahedNeural",
  "ar-KW, NouraNeural",
  "ar-LB, LaylaNeural",
  "ar-LB, RamiNeural",
  "ar-LY, ImanNeural",
  "ar-LY, OmarNeural",
  "ar-MA, JamalNeural",
  "ar-MA, MounaNeural",
  "ar-OM, AbdullahNeural",
  "ar-OM, AyshaNeural",
  "ar-QA, AmalNeural",
  "ar-QA, MoazNeural",
  "ar-SA, HamedNeural",
  "ar-SA, ZariyahNeural",
  "ar-SY, AmanyNeural",
  "ar-SY, LaithNeural",
  "ar-TN, HediNeural",
  "ar-TN, ReemNeural",
  "ar-YE, MaryamNeural",
  "ar-YE, SalehNeural",
  "az-AZ, BabekNeural",
  "az-AZ, BanuNeural",
  "bg-BG, BorislavNeural",
  "bg-BG, KalinaNeural",
  "bn-BD, NabanitaNeural",
  "bn-BD, PradeepNeural",
  "bn-IN, BashkarNeural",
  "bn-IN, TanishaaNeural",
  "bs-BA, GoranNeural",
  "bs-BA, VesnaNeural",
  "ca-ES, EnricNeural",
  "ca-ES, JoanaNeural",
  "cs-CZ, AntoninNeural",
  "cs-CZ, VlastaNeural",
  "cy-GB, AledNeural",
  "cy-GB, NiaNeural",
  "da-DK, ChristelNeural",
  "da-DK, JeppeNeural",
  "de-AT, IngridNeural",
  "de-AT, JonasNeural",
  "de-CH, JanNeural",
  "de-CH, LeniNeural",
  "de-DE, AmalaNeural",
  "de-DE, ConradNeural",
  "de-DE, KatjaNeural",
  "de-DE, KillianNeural",
  "el-GR, AthinaNeural",
  "el-GR, NestorasNeural",
  "et-EE, AnuNeural",
  "et-EE, KertNeural",
  "fa-IR, DilaraNeural",
  "fa-IR, FaridNeural",
  "fi-FI, HarriNeural",
  "fi-FI, NooraNeural",
  "fil-P, -AngeloNeural",
  "fil-P, -BlessicaNeural",
  "fr-BE, CharlineNeural",
  "fr-BE, GerardNeural",
  "fr-CA, AntoineNeural",
  "fr-CA, JeanNeural",
  "fr-CA, SylvieNeural",
  "fr-CH, ArianeNeural",
  "fr-CH, FabriceNeural",
  "fr-FR, DeniseNeural",
  "fr-FR, EloiseNeural",
  "fr-FR, HenriNeural",
  "ga-IE, ColmNeural",
  "ga-IE, OrlaNeural",
  "gl-ES, RoiNeural",
  "gl-ES, SabelaNeural",
  "gu-IN, DhwaniNeural",
  "gu-IN, NiranjanNeural",
  "he-IL, AvriNeural",
  "he-IL, HilaNeural",
  "hi-IN, MadhurNeural",
  "hi-IN, SwaraNeural",
  "hr-HR, GabrijelaNeural",
  "hr-HR, SreckoNeural",
  "hu-HU, NoemiNeural",
  "hu-HU, TamasNeural",
  "id-ID, ArdiNeural",
  "id-ID, GadisNeural",
  "is-IS, GudrunNeural",
  "is-IS, GunnarNeural",
  "it-IT, DiegoNeural",
  "it-IT, ElsaNeural",
  "it-IT, IsabellaNeural",
  "jv-ID, DimasNeural",
  "jv-ID, SitiNeural",
  "ka-GE, EkaNeural",
  "ka-GE, GiorgiNeural",
  "kk-KZ, AigulNeural",
  "kk-KZ, DauletNeural",
  "km-KH, PisethNeural",
  "km-KH, SreymomNeural",
  "kn-IN, GaganNeural",
  "kn-IN, SapnaNeural",
  "ko-KR, InJoonNeural",
  "ko-KR, SunHiNeural",
  "lo-LA, ChanthavongNeural",
  "lo-LA, KeomanyNeural",
  "lt-LT, LeonasNeural",
  "lt-LT, OnaNeural",
  "lv-LV, EveritaNeural",
  "lv-LV, NilsNeural",
  "mk-MK, AleksandarNeural",
  "mk-MK, MarijaNeural",
  "ml-IN, MidhunNeural",
  "ml-IN, SobhanaNeural",
  "mn-MN, BataaNeural",
  "mn-MN, YesuiNeural",
  "mr-IN, AarohiNeural",
  "mr-IN, ManoharNeural",
  "ms-MY, OsmanNeural",
  "ms-MY, YasminNeural",
  "mt-MT, GraceNeural",
  "mt-MT, JosephNeural",
  "my-MM, NilarNeural",
  "my-MM, ThihaNeural",
  "nb-NO, FinnNeural",
  "nb-NO, PernilleNeural",
  "ne-NP, HemkalaNeural",
  "ne-NP, SagarNeural",
  "nl-BE, ArnaudNeural",
  "nl-BE, DenaNeural",
  "nl-NL, ColetteNeural",
  "nl-NL, FennaNeural",
  "nl-NL, MaartenNeural",
  "pl-PL, MarekNeural",
  "pl-PL, ZofiaNeural",
  "ps-AF, GulNawazNeural",
  "ps-AF, LatifaNeural",
  "pt-BR, AntonioNeural",
  "pt-BR, FranciscaNeural",
  "pt-PT, DuarteNeural",
  "pt-PT, RaquelNeural",
  "ru-RU, DmitryNeural",
  "ru-RU, SvetlanaNeural",
  "ro-RO, AlinaNeural",
  "ro-RO, EmilNeural",
  "si-LK, SameeraNeural",
  "si-LK, ThiliniNeural",
  "sk-SK, LukasNeural",
  "sk-SK, ViktoriaNeural",
  "sl-SI, PetraNeural",
  "sl-SI, RokNeural",
  "so-SO, MuuseNeural",
  "so-SO, UbaxNeural",
  "sq-AL, AnilaNeural",
  "sq-AL, IlirNeural",
  "sr-RS, NicholasNeural",
  "sr-RS, SophieNeural",
  "su-ID, JajangNeural",
  "su-ID, TutiNeural",
  "sv-SE, MattiasNeural",
  "sv-SE, SofieNeural",
  "sw-KE, RafikiNeural",
  "sw-KE, ZuriNeural",
  "sw-TZ, DaudiNeural",
  "sw-TZ, RehemaNeural",
  "ta-IN, PallaviNeural",
  "ta-IN, ValluvarNeural",
  "ta-LK, KumarNeural",
  "ta-LK, SaranyaNeural",
  "ta-MY, KaniNeural",
  "ta-MY, SuryaNeural",
  "ta-SG, AnbuNeural",
  "ta-SG, VenbaNeural",
  "te-IN, MohanNeural",
  "te-IN, ShrutiNeural",
  "th-TH, NiwatNeural",
  "th-TH, PremwadeeNeural",
  "tr-TR, AhmetNeural",
  "tr-TR, EmelNeural",
  "uk-UA, OstapNeural",
  "uk-UA, PolinaNeural",
  "ur-IN, GulNeural",
  "ur-IN, SalmanNeural",
  "ur-PK, AsadNeural",
  "ur-PK, UzmaNeural",
  "uz-UZ, MadinaNeural",
  "uz-UZ, SardorNeural",
  "vi-VN, HoaiMyNeural",
  "vi-VN, NamMinhNeural",
  "zu-ZA, ThandoNeural",
  "zu-ZA, ThembaNeural",
];
const DEFAULT_PLAYLANG = "zh-CN, XiaoxiaoNeural";
export type PlayLang = typeof DEFAULT_PLAYLANG;
// export const AllPlayLangs = Object.keys(ALL_PLAYLANGS) as PlayLang[];
// export const ALL_PLAYLANG_OPTIONS: Record<PlayLang, string> = {
//   "zh-CN, XiaoxiaoNeural", "zh-CN, XiaoyiNeural", "zh-CN, YunjianNeural",
// };

const fallbackLang = cn;
const targetLang = ALL_LANGS[getLang()] as LocaleType;

// if target lang missing some fields, it will use fallback lang string
merge(fallbackLang, targetLang);

export default fallbackLang as LocaleType;

function getItem(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function getLanguage() {
  try {
    return navigator.language.toLowerCase();
  } catch {
    return DEFAULT_LANG;
  }
}

export function getLang(): Lang {
  const savedLang = getItem(LANG_KEY);

  if (AllLangs.includes((savedLang ?? "") as Lang)) {
    return savedLang as Lang;
  }

  const lang = getLanguage();

  for (const option of AllLangs) {
    if (lang.includes(option)) {
      return option;
    }
  }

  return DEFAULT_LANG;
}

export function changeLang(lang: Lang) {
  setItem(LANG_KEY, lang);
  location.reload();
}
// 增加播音员
export function getPlayLang(): PlayLang {
  const savedPlayLang = getItem(PLAYLANG_KEY);

  if (savedPlayLang && ALL_PLAYLANG_OPTIONS.includes(savedPlayLang)) {
    console.log("current savedPlayLang value:", savedPlayLang);
    return savedPlayLang as PlayLang;
  }

  console.log("current value:", DEFAULT_PLAYLANG);
  return DEFAULT_PLAYLANG;
}

export function changePlayLang(playlang: PlayLang) {
  if (ALL_PLAYLANG_OPTIONS.includes(playlang)) {
    setItem(PLAYLANG_KEY, playlang); // 假设 setItem 是你定义的函数
    location.reload();
  } else {
    console.error("Invalid playlang value:", playlang);
  }
}

export function getISOLang() {
  const isoLangString: Record<string, string> = {
    cn: "zh-Hans",
    tw: "zh-Hant",
  };

  const lang = getLang();
  return isoLangString[lang] ?? lang;
}

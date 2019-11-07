import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      ENV: {
        translations: {
          "To get started, edit <1>src/App.js</1> and save to reload.":
            "To get started, edit <1>src/App.js</1> and save to reload.",
          "Remember me": "Remember me",
          key: "King",
          feat: "New features will add to dashboard soon",
          sub: `Together. Great. So good was saying, that can't first let called air divide stars male isn't i. Herb third let
          may fourth divide. Greater gathering land you'll i their beast have. She'd form sea it wherein fowl, spirit
          creeping living. Likeness creepeth you hath heaven. Likeness, moveth fruitful behold. Open evening a air us
behold. Saying above moving second a subdue likeness after also second.`

        }
      },
      VNI: {
        translations: {
          "To get started, edit <1>src/App.js</1> and save to reload.":
            "Starte in dem du, <1>src/App.js</1> editierst und speicherst.",
          "Remember me": "ghi nho",
          key: "Hung Vuong",
          feat:"tinh nang moi se duoc them",
          sub: `Cùng với nhau. Tuyệt quá. Thật tốt khi nói rằng, trước tiên không thể gọi là không khí phân chia sao nam không phải là tôi. Thảo mộc thứ ba
          có thể chia thứ tư. Vùng đất rộng lớn hơn bạn sẽ có con thú của họ. Cô ấy sẽ hình thành biển trong đó, tinh thần
          sống leo. Likely creepeth you hath trời. Thích, di chuyển có hiệu quả. Mở buổi tối một không khí chúng tôi
hãy chứng kiến. Nói ở trên di chuyển thứ hai một sự khuất phục sau đó cũng thứ hai.`
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

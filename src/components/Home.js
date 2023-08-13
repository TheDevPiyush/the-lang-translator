
import React, { Component } from 'react'


const languageData = [
    { "code": "ab", "name": "Abkhaz", "nativeName": "аҧсуа" },
    { "code": "aa", "name": "Afar", "nativeName": "Afaraf" },
    { "code": "af", "name": "Afrikaans", "nativeName": "Afrikaans" },
    { "code": "ak", "name": "Akan", "nativeName": "Akan" },
    { "code": "sq", "name": "Albanian", "nativeName": "Shqip" },
    { "code": "am", "name": "Amharic", "nativeName": "አማርኛ" },
    { "code": "ar", "name": "Arabic", "nativeName": "العربية" },
    { "code": "an", "name": "Aragonese", "nativeName": "Aragonés" },
    { "code": "hy", "name": "Armenian", "nativeName": "Հայերեն" },
    { "code": "as", "name": "Assamese", "nativeName": "অসমীয়া" },
    { "code": "av", "name": "Avaric", "nativeName": "авар мацӀ, магӀарул мацӀ" },
    { "code": "ae", "name": "Avestan", "nativeName": "avesta" },
    { "code": "ay", "name": "Aymara", "nativeName": "aymar aru" },
    { "code": "az", "name": "Azerbaijani", "nativeName": "azərbaycan dili" },
    { "code": "bm", "name": "Bambara", "nativeName": "bamanankan" },
    { "code": "ba", "name": "Bashkir", "nativeName": "башҡорт теле" },
    { "code": "eu", "name": "Basque", "nativeName": "euskara, euskera" },
    { "code": "be", "name": "Belarusian", "nativeName": "Беларуская" },
    { "code": "bn", "name": "Bengali", "nativeName": "বাংলা" },
    { "code": "bh", "name": "Bihari", "nativeName": "भोजपुरी" },
    { "code": "bi", "name": "Bislama", "nativeName": "Bislama" },
    { "code": "bs", "name": "Bosnian", "nativeName": "bosanski jezik" },
    { "code": "br", "name": "Breton", "nativeName": "brezhoneg" },
    { "code": "bg", "name": "Bulgarian", "nativeName": "български език" },
    { "code": "my", "name": "Burmese", "nativeName": "ဗမာစာ" },
    { "code": "ca", "name": "Catalan; Valencian", "nativeName": "Català" },
    { "code": "ch", "name": "Chamorro", "nativeName": "Chamoru" },
    { "code": "ce", "name": "Chechen", "nativeName": "нохчийн мотт" },
    { "code": "ny", "name": "Chichewa; Chewa; Nyanja", "nativeName": "chiCheŵa, chinyanja" },
    { "code": "zh", "name": "Chinese", "nativeName": "中文 (Zhōngwén), 汉语, 漢語" },
    { "code": "cv", "name": "Chuvash", "nativeName": "чӑваш чӗлхи" },
    { "code": "kw", "name": "Cornish", "nativeName": "Kernewek" },
    { "code": "co", "name": "Corsican", "nativeName": "corsu, lingua corsa" },
    { "code": "cr", "name": "Cree", "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ" },
    { "code": "hr", "name": "Croatian", "nativeName": "hrvatski" },
    { "code": "cs", "name": "Czech", "nativeName": "česky, čeština" },
    { "code": "da", "name": "Danish", "nativeName": "dansk" },
    { "code": "dv", "name": "Divehi; Dhivehi; Maldivian;", "nativeName": "ދިވެހި" },
    { "code": "nl", "name": "Dutch", "nativeName": "Nederlands, Vlaams" },
    { "code": "en", "name": "English", "nativeName": "English" },
    { "code": "eo", "name": "Esperanto", "nativeName": "Esperanto" },
    { "code": "et", "name": "Estonian", "nativeName": "eesti, eesti keel" },
    { "code": "ee", "name": "Ewe", "nativeName": "Eʋegbe" },
    { "code": "fo", "name": "Faroese", "nativeName": "føroyskt" },
    { "code": "fj", "name": "Fijian", "nativeName": "vosa Vakaviti" },
    { "code": "fi", "name": "Finnish", "nativeName": "suomi, suomen kieli" },
    { "code": "fr", "name": "French", "nativeName": "français, langue française" },
    { "code": "ff", "name": "Fula; Fulah; Pulaar; Pular", "nativeName": "Fulfulde, Pulaar, Pular" },
    { "code": "gl", "name": "Galician", "nativeName": "Galego" },
    { "code": "ka", "name": "Georgian", "nativeName": "ქართული" },
    { "code": "de", "name": "German", "nativeName": "Deutsch" },
    { "code": "el", "name": "Greek, Modern", "nativeName": "Ελληνικά" },
    { "code": "gn", "name": "Guaraní", "nativeName": "Avañeẽ" },
    { "code": "gu", "name": "Gujarati", "nativeName": "ગુજરાતી" },
    { "code": "ht", "name": "Haitian; Haitian Creole", "nativeName": "Kreyòl ayisyen" },
    { "code": "ha", "name": "Hausa", "nativeName": "Hausa, هَوُسَ" },
    { "code": "he", "name": "Hebrew (modern)", "nativeName": "עברית" },
    { "code": "hz", "name": "Herero", "nativeName": "Otjiherero" },
    { "code": "hi", "name": "Hindi", "nativeName": "हिन्दी, हिंदी" },
    { "code": "ho", "name": "Hiri Motu", "nativeName": "Hiri Motu" },
    { "code": "hu", "name": "Hungarian", "nativeName": "Magyar" },
    { "code": "ia", "name": "Interlingua", "nativeName": "Interlingua" },
    { "code": "id", "name": "Indonesian", "nativeName": "Bahasa Indonesia" },
    { "code": "ie", "name": "Interlingue", "nativeName": "Originally called Occidental; then Interlingue after WWII" },
    { "code": "ga", "name": "Irish", "nativeName": "Gaeilge" },
    { "code": "ig", "name": "Igbo", "nativeName": "Asụsụ Igbo" },
    { "code": "ik", "name": "Inupiaq", "nativeName": "Iñupiaq, Iñupiatun" },
    { "code": "io", "name": "Ido", "nativeName": "Ido" },
    { "code": "is", "name": "Icelandic", "nativeName": "Íslenska" },
    { "code": "it", "name": "Italian", "nativeName": "Italiano" },
    { "code": "iu", "name": "Inuktitut", "nativeName": "ᐃᓄᒃᑎᑐᑦ" },
    { "code": "ja", "name": "Japanese", "nativeName": "日本語 (にほんご／にっぽんご)" },
    { "code": "jv", "name": "Javanese", "nativeName": "basa Jawa" },
    { "code": "kl", "name": "Kalaallisut, Greenlandic", "nativeName": "kalaallisut, kalaallit oqaasii" },
    { "code": "kn", "name": "Kannada", "nativeName": "ಕನ್ನಡ" },
    { "code": "kr", "name": "Kanuri", "nativeName": "Kanuri" },
    { "code": "ks", "name": "Kashmiri", "nativeName": "कश्मीरी, كشميري‎" },
    { "code": "kk", "name": "Kazakh", "nativeName": "Қазақ тілі" },
    { "code": "km", "name": "Khmer", "nativeName": "ភាសាខ្មែរ" },
    { "code": "ki", "name": "Kikuyu, Gikuyu", "nativeName": "Gĩkũyũ" },
    { "code": "rw", "name": "Kinyarwanda", "nativeName": "Ikinyarwanda" },
    { "code": "ky", "name": "Kirghiz, Kyrgyz", "nativeName": "кыргыз тили" },
    { "code": "kv", "name": "Komi", "nativeName": "коми кыв" },
    { "code": "kg", "name": "Kongo", "nativeName": "KiKongo" },
    { "code": "ko", "name": "Korean", "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)" },
    { "code": "ku", "name": "Kurdish", "nativeName": "Kurdî, كوردی‎" },
    { "code": "kj", "name": "Kwanyama, Kuanyama", "nativeName": "Kuanyama" },
    { "code": "la", "name": "Latin", "nativeName": "latine, lingua latina" },
    { "code": "lb", "name": "Luxembourgish, Letzeburgesch", "nativeName": "Lëtzebuergesch" },
    { "code": "lg", "name": "Luganda", "nativeName": "Luganda" },
    { "code": "li", "name": "Limburgish, Limburgan, Limburger", "nativeName": "Limburgs" },
    { "code": "ln", "name": "Lingala", "nativeName": "Lingála" },
    { "code": "lo", "name": "Lao", "nativeName": "ພາສາລາວ" },
    { "code": "lt", "name": "Lithuanian", "nativeName": "lietuvių kalba" },
    { "code": "lu", "name": "Luba-Katanga", "nativeName": "" },
    { "code": "lv", "name": "Latvian", "nativeName": "latviešu valoda" },
    { "code": "gv", "name": "Manx", "nativeName": "Gaelg, Gailck" },
    { "code": "mk", "name": "Macedonian", "nativeName": "македонски јазик" },
    { "code": "mg", "name": "Malagasy", "nativeName": "Malagasy fiteny" },
    { "code": "ms", "name": "Malay", "nativeName": "bahasa Melayu, بهاس ملايو‎" },
    { "code": "ml", "name": "Malayalam", "nativeName": "മലയാളം" },
    { "code": "mt", "name": "Maltese", "nativeName": "Malti" },
    { "code": "mi", "name": "Māori", "nativeName": "te reo Māori" },
    { "code": "mr", "name": "Marathi (Marāṭhī)", "nativeName": "मराठी" },
    { "code": "mh", "name": "Marshallese", "nativeName": "Kajin M̧ajeļ" },
    { "code": "mn", "name": "Mongolian", "nativeName": "монгол" },
    { "code": "na", "name": "Nauru", "nativeName": "Ekakairũ Naoero" },
    { "code": "nv", "name": "Navajo, Navaho", "nativeName": "Diné bizaad, Dinékʼehǰí" },
    { "code": "nb", "name": "Norwegian Bokmål", "nativeName": "Norsk bokmål" },
    { "code": "nd", "name": "North Ndebele", "nativeName": "isiNdebele" },
    { "code": "ne", "name": "Nepali", "nativeName": "नेपाली" },
    { "code": "ng", "name": "Ndonga", "nativeName": "Owambo" },
    { "code": "nn", "name": "Norwegian Nynorsk", "nativeName": "Norsk nynorsk" },
    { "code": "no", "name": "Norwegian", "nativeName": "Norsk" },
    { "code": "ii", "name": "Nuosu", "nativeName": "ꆈꌠ꒿ Nuosuhxop" },
    { "code": "nr", "name": "South Ndebele", "nativeName": "isiNdebele" },
    { "code": "oc", "name": "Occitan", "nativeName": "Occitan" },
    { "code": "oj", "name": "Ojibwe, Ojibwa", "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ" },
    { "code": "cu", "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic", "nativeName": "ѩзыкъ словѣньскъ" },
    { "code": "om", "name": "Oromo", "nativeName": "Afaan Oromoo" },
    { "code": "or", "name": "Oriya", "nativeName": "ଓଡ଼ିଆ" },
    { "code": "os", "name": "Ossetian, Ossetic", "nativeName": "ирон æвзаг" },
    { "code": "pa", "name": "Panjabi, Punjabi", "nativeName": "ਪੰਜਾਬੀ, پنجابی‎" },
    { "code": "pi", "name": "Pāli", "nativeName": "पाऴि" },
    { "code": "fa", "name": "Persian", "nativeName": "فارسی" },
    { "code": "pl", "name": "Polish", "nativeName": "polski" },
    { "code": "ps", "name": "Pashto, Pushto", "nativeName": "پښتو" },
    { "code": "pt", "name": "Portuguese", "nativeName": "Português" },
    { "code": "qu", "name": "Quechua", "nativeName": "Runa Simi, Kichwa" },
    { "code": "rm", "name": "Romansh", "nativeName": "rumantsch grischun" },
    { "code": "rn", "name": "Kirundi", "nativeName": "kiRundi" }
]
export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            InputText: null,

            targetLanguageCode: null,
            targetLanguageName: null,
            source_languageName: null,
            source_languageCode: null,
            translateResult: null
        }
    }
    componentDidMount() {
        // this.detectLanguage();
        // this.getArrayLanguages();
        // this.translateLanguage();
    }


    translateLanguage = async () => {
        const url = 'https://text-translator2.p.rapidapi.com/translate';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'ccbbb9265fmsh23310fd9f46a253p1c2e41jsn6a15149f6366',
                'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
            },
            body: new URLSearchParams({
                source_languageCode: 'en',
                target_language: this.state.targetLanguageCode,
                text: this.state.InputText
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            this.setState({ translateResult: result.data.translatedText })
            console.log(result.data.translatedText);
        } catch (error) {
            console.error(error);
        }
    }
    render() {
        return (
            <div className='super' style={{ 'height': "100vh" }}>

                <div className="some container text-center w-100">
                    <h2>
                        <strong>
                            <u>
                                All available languages in the app.
                            </u>

                        </strong>

                    </h2>
                </div>
                <div className="parent" style={{ "width": "100vw", "display": "flex", "alignItems": "baseline", "position": "relative" }}>

                    <div className="container" style={{ "height": "50vh" }}>
                        <h3>Select Source Language - {this.state.source_languageName}</h3>
                        <div className="sub" style={{ "height": "100%", "overflowY": "scroll" }}>

                            {languageData.map((items) => (
                                <div className="main bg-primary text-light fs-5" key={items.code}
                                    onClick={() => {
                                        this.setState({ source_languageCode: items.code, source_languageName: items.name })
                                        setTimeout(() => {
                                            console.log("Source Language", this.state.source_languageCode)
                                        }, 500);
                                    }}>

                                    <ul>
                                        <li style={{ "cursor": "pointer" }}>
                                            {items.name}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="container" style={{ "height": "50vh" }}>
                        <h3>Select Target Language - {this.state.targetLanguageName}</h3>
                        <div className="sub" style={{ "height": "100%", "overflowY": "scroll" }}>
                            {languageData.map((items) => (
                                <div className="main bg-success text-light fs-5" key={items.code}
                                    onClick={() => {
                                        this.setState({ targetLanguageCode: items.code, targetLanguageName: items.name })
                                        setTimeout(() => {
                                            console.log("Target Language", this.state.targetLanguageCode)
                                        }, 500);
                                    }}>

                                    <ul>
                                        <li style={{ "cursor": "pointer" }}>
                                            {items.name}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="mainInput" style={{ "position": "relative", "marginTop": "100px" }}>

                    <div className="fw-bold text-center fs-3">Enter your text</div>
                    <div className="input-group container text-center input-group-lg">
                        <input onChange={(e) => { this.setState({ InputText: e.target.value }) }} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                        <div className='btn btn-primary' onClick={this.translateLanguage} >Enter</div>
                    </div>

                    <div className="container  fw-bold my-5">
                        <h2>
                            {this.state.translateResult}
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}



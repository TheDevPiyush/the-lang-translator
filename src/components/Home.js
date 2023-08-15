
import React, { Component } from 'react'
import './Home.css'



const languageDataFrom = [
    {
        "code": "",
        "name": "Auto Detect"
    },
    {
        "code": "af",
        "name": "Afrikaans"
    },
    {
        "code": "sq",
        "name": "Albanian"
    },
    {
        "code": "am",
        "name": "Amharic"
    },
    {
        "code": "ar",
        "name": "Arabic"
    },
    {
        "code": "hy",
        "name": "Armenian"
    },
    {
        "code": "az",
        "name": "Azerbaijani"
    },
    {
        "code": "eu",
        "name": "Basque"
    },
    {
        "code": "be",
        "name": "Belarusian"
    },
    {
        "code": "bn",
        "name": "Bengali"
    },
    {
        "code": "bs",
        "name": "Bosnian"
    },
    {
        "code": "bg",
        "name": "Bulgarian"
    },
    {
        "code": "ca",
        "name": "Catalan"
    },
    {
        "code": "ceb",
        "name": "Cebuano"
    },
    {
        "code": "ny",
        "name": "Chichewa"
    },
    {
        "code": "zh-CN",
        "name": "Chinese (Simplified)"
    },
    {
        "code": "zh-TW",
        "name": "Chinese (Traditional)"
    },
    {
        "code": "co",
        "name": "Corsican"
    },
    {
        "code": "hr",
        "name": "Croatian"
    },
    {
        "code": "cs",
        "name": "Czech"
    },
    {
        "code": "da",
        "name": "Danish"
    },
    {
        "code": "nl",
        "name": "Dutch"
    },
    {
        "code": "en",
        "name": "English"
    },
    {
        "code": "eo",
        "name": "Esperanto"
    },
    {
        "code": "et",
        "name": "Estonian"
    },
    {
        "code": "tl",
        "name": "Filipino"
    },
    {
        "code": "fi",
        "name": "Finnish"
    },
    {
        "code": "fr",
        "name": "French"
    },
    {
        "code": "fy",
        "name": "Frisian"
    },
    {
        "code": "gl",
        "name": "Galician"
    },
    {
        "code": "ka",
        "name": "Georgian"
    },
    {
        "code": "de",
        "name": "German"
    },
    {
        "code": "el",
        "name": "Greek"
    },
    {
        "code": "gu",
        "name": "Gujarati"
    },
    {
        "code": "ht",
        "name": "Haitian Creole"
    },
    {
        "code": "ha",
        "name": "Hausa"
    },
    {
        "code": "haw",
        "name": "Hawaiian"
    },
    {
        "code": "iw",
        "name": "Hebrew"
    },
    {
        "code": "hi",
        "name": "Hindi"
    },
    {
        "code": "hmn",
        "name": "Hmong"
    },
    {
        "code": "hu",
        "name": "Hungarian"
    },
    {
        "code": "is",
        "name": "Icelandic"
    },
    {
        "code": "ig",
        "name": "Igbo"
    },
    {
        "code": "id",
        "name": "Indonesian"
    },
    {
        "code": "ga",
        "name": "Irish"
    },
    {
        "code": "it",
        "name": "Italian"
    },
    {
        "code": "ja",
        "name": "Japanese"
    },
    {
        "code": "jw",
        "name": "Javanese"
    },
    {
        "code": "kn",
        "name": "Kannada"
    },
    {
        "code": "kk",
        "name": "Kazakh"
    },
    {
        "code": "km",
        "name": "Khmer"
    },
    {
        "code": "rw",
        "name": "Kinyarwanda"
    },
    {
        "code": "ko",
        "name": "Korean"
    },
    {
        "code": "ku",
        "name": "Kurdish (Kurmanji)"
    },
    {
        "code": "ky",
        "name": "Kyrgyz"
    },
    {
        "code": "lo",
        "name": "Lao"
    },
    {
        "code": "la",
        "name": "Latin"
    },
    {
        "code": "lv",
        "name": "Latvian"
    },
    {
        "code": "lt",
        "name": "Lithuanian"
    },
    {
        "code": "lb",
        "name": "Luxembourgish"
    },
    {
        "code": "mk",
        "name": "Macedonian"
    },
    {
        "code": "mg",
        "name": "Malagasy"
    },
    {
        "code": "ms",
        "name": "Malay"
    },
    {
        "code": "ml",
        "name": "Malayalam"
    },
    {
        "code": "mt",
        "name": "Maltese"
    },
    {
        "code": "mi",
        "name": "Maori"
    },
    {
        "code": "mr",
        "name": "Marathi"
    },
    {
        "code": "mn",
        "name": "Mongolian"
    },
    {
        "code": "my",
        "name": "Myanmar (Burmese)"
    },
    {
        "code": "ne",
        "name": "Nepali"
    },
    {
        "code": "no",
        "name": "Norwegian"
    },
    {
        "code": "or",
        "name": "Odia (Oriya)"
    },
    {
        "code": "ps",
        "name": "Pashto"
    },
    {
        "code": "fa",
        "name": "Persian"
    },
    {
        "code": "pl",
        "name": "Polish"
    },
    {
        "code": "pt",
        "name": "Portuguese"
    },
    {
        "code": "pa",
        "name": "Punjabi"
    },
    {
        "code": "ro",
        "name": "Romanian"
    },
    {
        "code": "ru",
        "name": "Russian"
    },
    {
        "code": "sm",
        "name": "Samoan"
    },
    {
        "code": "gd",
        "name": "Scots Gaelic"
    },
    {
        "code": "sr",
        "name": "Serbian"
    },
    {
        "code": "st",
        "name": "Sesotho"
    },
    {
        "code": "sn",
        "name": "Shona"
    },
    {
        "code": "sd",
        "name": "Sindhi"
    },
    {
        "code": "si",
        "name": "Sinhala"
    },
    {
        "code": "sk",
        "name": "Slovak"
    },
    {
        "code": "sl",
        "name": "Slovenian"
    },
    {
        "code": "so",
        "name": "Somali"
    },
    {
        "code": "es",
        "name": "Spanish"
    },
    {
        "code": "su",
        "name": "Sundanese"
    },
    {
        "code": "sw",
        "name": "Swahili"
    },
    {
        "code": "sv",
        "name": "Swedish"
    },
    {
        "code": "tg",
        "name": "Tajik"
    },
    {
        "code": "ta",
        "name": "Tamil"
    },
    {
        "code": "tt",
        "name": "Tatar"
    },
    {
        "code": "te",
        "name": "Telugu"
    },
    {
        "code": "th",
        "name": "Thai"
    },
    {
        "code": "tr",
        "name": "Turkish"
    },
    {
        "code": "tk",
        "name": "Turkmen"
    },
    {
        "code": "uk",
        "name": "Ukrainian"
    },
    {
        "code": "ur",
        "name": "Urdu"
    },
    {
        "code": "ug",
        "name": "Uyghur"
    },
    {
        "code": "uz",
        "name": "Uzbek"
    },
    {
        "code": "vi",
        "name": "Vietnamese"
    },
    {
        "code": "cy",
        "name": "Welsh"
    },
    {
        "code": "xh",
        "name": "Xhosa"
    },
    {
        "code": "yi",
        "name": "Yiddish"
    },
    {
        "code": "yo",
        "name": "Yoruba"
    },
    {
        "code": "zu",
        "name": "Zulu"
    },
    {
        "code": "he",
        "name": "Hebrew"
    },
    {
        "code": "zh",
        "name": "Chinese (Simplified)"
    }
]
const languageDataTo = [
    {
        "code": "af",
        "name": "Afrikaans"
    },
    {
        "code": "sq",
        "name": "Albanian"
    },
    {
        "code": "am",
        "name": "Amharic"
    },
    {
        "code": "ar",
        "name": "Arabic"
    },
    {
        "code": "hy",
        "name": "Armenian"
    },
    {
        "code": "az",
        "name": "Azerbaijani"
    },
    {
        "code": "eu",
        "name": "Basque"
    },
    {
        "code": "be",
        "name": "Belarusian"
    },
    {
        "code": "bn",
        "name": "Bengali"
    },
    {
        "code": "bs",
        "name": "Bosnian"
    },
    {
        "code": "bg",
        "name": "Bulgarian"
    },
    {
        "code": "ca",
        "name": "Catalan"
    },
    {
        "code": "ceb",
        "name": "Cebuano"
    },
    {
        "code": "ny",
        "name": "Chichewa"
    },
    {
        "code": "zh-CN",
        "name": "Chinese (Simplified)"
    },
    {
        "code": "zh-TW",
        "name": "Chinese (Traditional)"
    },
    {
        "code": "co",
        "name": "Corsican"
    },
    {
        "code": "hr",
        "name": "Croatian"
    },
    {
        "code": "cs",
        "name": "Czech"
    },
    {
        "code": "da",
        "name": "Danish"
    },
    {
        "code": "nl",
        "name": "Dutch"
    },
    {
        "code": "en",
        "name": "English"
    },
    {
        "code": "eo",
        "name": "Esperanto"
    },
    {
        "code": "et",
        "name": "Estonian"
    },
    {
        "code": "tl",
        "name": "Filipino"
    },
    {
        "code": "fi",
        "name": "Finnish"
    },
    {
        "code": "fr",
        "name": "French"
    },
    {
        "code": "fy",
        "name": "Frisian"
    },
    {
        "code": "gl",
        "name": "Galician"
    },
    {
        "code": "ka",
        "name": "Georgian"
    },
    {
        "code": "de",
        "name": "German"
    },
    {
        "code": "el",
        "name": "Greek"
    },
    {
        "code": "gu",
        "name": "Gujarati"
    },
    {
        "code": "ht",
        "name": "Haitian Creole"
    },
    {
        "code": "ha",
        "name": "Hausa"
    },
    {
        "code": "haw",
        "name": "Hawaiian"
    },
    {
        "code": "iw",
        "name": "Hebrew"
    },
    {
        "code": "hi",
        "name": "Hindi"
    },
    {
        "code": "hmn",
        "name": "Hmong"
    },
    {
        "code": "hu",
        "name": "Hungarian"
    },
    {
        "code": "is",
        "name": "Icelandic"
    },
    {
        "code": "ig",
        "name": "Igbo"
    },
    {
        "code": "id",
        "name": "Indonesian"
    },
    {
        "code": "ga",
        "name": "Irish"
    },
    {
        "code": "it",
        "name": "Italian"
    },
    {
        "code": "ja",
        "name": "Japanese"
    },
    {
        "code": "jw",
        "name": "Javanese"
    },
    {
        "code": "kn",
        "name": "Kannada"
    },
    {
        "code": "kk",
        "name": "Kazakh"
    },
    {
        "code": "km",
        "name": "Khmer"
    },
    {
        "code": "rw",
        "name": "Kinyarwanda"
    },
    {
        "code": "ko",
        "name": "Korean"
    },
    {
        "code": "ku",
        "name": "Kurdish (Kurmanji)"
    },
    {
        "code": "ky",
        "name": "Kyrgyz"
    },
    {
        "code": "lo",
        "name": "Lao"
    },
    {
        "code": "la",
        "name": "Latin"
    },
    {
        "code": "lv",
        "name": "Latvian"
    },
    {
        "code": "lt",
        "name": "Lithuanian"
    },
    {
        "code": "lb",
        "name": "Luxembourgish"
    },
    {
        "code": "mk",
        "name": "Macedonian"
    },
    {
        "code": "mg",
        "name": "Malagasy"
    },
    {
        "code": "ms",
        "name": "Malay"
    },
    {
        "code": "ml",
        "name": "Malayalam"
    },
    {
        "code": "mt",
        "name": "Maltese"
    },
    {
        "code": "mi",
        "name": "Maori"
    },
    {
        "code": "mr",
        "name": "Marathi"
    },
    {
        "code": "mn",
        "name": "Mongolian"
    },
    {
        "code": "my",
        "name": "Myanmar (Burmese)"
    },
    {
        "code": "ne",
        "name": "Nepali"
    },
    {
        "code": "no",
        "name": "Norwegian"
    },
    {
        "code": "or",
        "name": "Odia (Oriya)"
    },
    {
        "code": "ps",
        "name": "Pashto"
    },
    {
        "code": "fa",
        "name": "Persian"
    },
    {
        "code": "pl",
        "name": "Polish"
    },
    {
        "code": "pt",
        "name": "Portuguese"
    },
    {
        "code": "pa",
        "name": "Punjabi"
    },
    {
        "code": "ro",
        "name": "Romanian"
    },
    {
        "code": "ru",
        "name": "Russian"
    },
    {
        "code": "sm",
        "name": "Samoan"
    },
    {
        "code": "gd",
        "name": "Scots Gaelic"
    },
    {
        "code": "sr",
        "name": "Serbian"
    },
    {
        "code": "st",
        "name": "Sesotho"
    },
    {
        "code": "sn",
        "name": "Shona"
    },
    {
        "code": "sd",
        "name": "Sindhi"
    },
    {
        "code": "si",
        "name": "Sinhala"
    },
    {
        "code": "sk",
        "name": "Slovak"
    },
    {
        "code": "sl",
        "name": "Slovenian"
    },
    {
        "code": "so",
        "name": "Somali"
    },
    {
        "code": "es",
        "name": "Spanish"
    },
    {
        "code": "su",
        "name": "Sundanese"
    },
    {
        "code": "sw",
        "name": "Swahili"
    },
    {
        "code": "sv",
        "name": "Swedish"
    },
    {
        "code": "tg",
        "name": "Tajik"
    },
    {
        "code": "ta",
        "name": "Tamil"
    },
    {
        "code": "tt",
        "name": "Tatar"
    },
    {
        "code": "te",
        "name": "Telugu"
    },
    {
        "code": "th",
        "name": "Thai"
    },
    {
        "code": "tr",
        "name": "Turkish"
    },
    {
        "code": "tk",
        "name": "Turkmen"
    },
    {
        "code": "uk",
        "name": "Ukrainian"
    },
    {
        "code": "ur",
        "name": "Urdu"
    },
    {
        "code": "ug",
        "name": "Uyghur"
    },
    {
        "code": "uz",
        "name": "Uzbek"
    },
    {
        "code": "vi",
        "name": "Vietnamese"
    },
    {
        "code": "cy",
        "name": "Welsh"
    },
    {
        "code": "xh",
        "name": "Xhosa"
    },
    {
        "code": "yi",
        "name": "Yiddish"
    },
    {
        "code": "yo",
        "name": "Yoruba"
    },
    {
        "code": "zu",
        "name": "Zulu"
    },
    {
        "code": "he",
        "name": "Hebrew"
    },
    {
        "code": "zh",
        "name": "Chinese (Simplified)"
    }
]


export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            InputText: "",
            targetLanguageCode: null,
            targetLanguageName: null,
            source_languageName: "Auto Detect",
            source_languageCode: "",
            translateResult: null,
            openTargetList: false,
            openSourceList: false,
            isLoading: false,
            inputEmpty: false,
            istargetlang: false,
            errormessage: false
        }
    }


    translateLanguage = async () => {
        if (this.state.InputText !== "") {
            if (this.state.targetLanguageCode !== null) {
                this.setState({ isLoading: true })
                const url = 'https://text-translator2.p.rapidapi.com/translate';
                const options = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'X-RapidAPI-Key': 'ccbbb9265fmsh23310fd9f46a253p1c2e41jsn6a15149f6366',
                        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
                    },
                    body: new URLSearchParams({
                        source_languageCode: this.state.source_languageCode,
                        target_language: this.state.targetLanguageCode,
                        text: this.state.InputText
                    })
                };

                try {
                    const response = await fetch(url, options);
                    const result = await response.json();
                    this.setState({ translateResult: result.data.translatedText, isLoading: false })
                } catch (error) {
                    this.setState({
                        isLoading: false,
                        errormessage: true
                    })
                    setTimeout(() => {
                        this.setState({ errormessage: false })

                    }, 6000);
                }

            }

            else {
                this.setState({ istargetlang: true })
                setTimeout(() => {
                    this.setState({ istargetlang: false })

                }, 3000);
            }
        }
        else {
            this.setState({ inputEmpty: true })
            setTimeout(() => {
                this.setState({ inputEmpty: false })

            }, 2000);
        }


    }

    sourceLanguage = (name, code) => {
        this.setState({ source_languageName: name, source_languageCode: code })
    }
    targetLanguage = (name, code) => {
        this.setState({ targetLanguageName: name, targetLanguageCode: code })
    }

    exchangevalue = () => {
        document.getElementById("inputt").value = this.state.translateResult
        this.setState({ translateResult: this.state.InputText, InputText: this.state.translateResult})
    }


    render() {
        return (
            <div className='super' style={{ 'height': "100vh" }}>

                <div className="headin">
                    <div className="some">
                        <div className="heading">
                            Welcome to Lang-Translator
                            <div id='sign'>
                                <u>
                                    TheDevPiyush <a href="mailto:contactpiyushhere@gmail.com">
                                        <i style={{ "cursor": "pointer" }} className="fa-solid fa-envelope mx-3 fs-3" ></i>
                                    </a>
                                </u>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="errorparent" id='emptywarning'>
                    {this.state.inputEmpty &&

                        <div className="alert alert-warning text-center my-2 container border border-success border-2" role="alert">
                            <strong>
                                Input can not be empty!
                            </strong>
                        </div>}
                    {this.state.istargetlang &&

                        <div className="alert alert-info text-center my-2 container border border-success border-2" role="alert">
                            <strong>
                                Provide a target language to translate into.
                            </strong>
                        </div>}
                    {this.state.errormessage &&

                        <div className="alert alert-danger fs-6 text-center my-2 container border border-success border-2" role="alert">
                            <strong>
                                The translation couldn't complete. There might be some server issues.
                            </strong>
                        </div>}
                </div>

                <div className="languages">

                    <div className="targetselect">
                        <div className="buttonContainer">
                            <div className="dropdown">
                                <button className="btn btn-outline-success border border-success border-2 fw-bold mx-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> <i className="fa fa-opencart" aria-hidden="true"></i>
                                    Translate To - {this.state.targetLanguageName}
                                </button>
                                <ul className="dropdown-menu bg-dark" style={{ "width": "100%" }}>
                                    {languageDataTo.map((items) => (

                                        <li key={items.code} >
                                            <a className="dropdown-item text-light custom" href='/#' onClick={() => { this.targetLanguage(items.name, items.code) }}>
                                                {items.name}
                                            </a>
                                        </li>
                                    ))
                                    }
                                </ul>

                            </div>
                        </div>

                        {this.state.translateResult === null ?
                            <div className="notice">Your translations will appear here..</div>
                            :
                            <div className="result">
                                {this.state.translateResult}
                            </div>

                        }
                    </div>


                    <div className="lrarrow">
                        <i class="fa-solid fa-arrows-left-right " onClick={this.exchangevalue}></i>
                    </div>
                    <div className="udarrow">
                        <i class="fa-solid fa-arrows-up-down" onClick={this.exchangevalue}></i>
                    </div>



                    <div className="sourceSelect">
                        <div className="buttonContainer">
                            <div className="dropdown">
                                <button className="btn btn-outline-primary border border-primary border-2 fw-bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> <i className="fa fa-opencart" aria-hidden="true"></i>
                                    Transte From - {this.state.source_languageName}
                                </button>
                                <ul className="dropdown-menu bg-dark " style={{ "width": "100%" }}>
                                    {languageDataFrom.map((items) => (

                                        <li key={items.code}>
                                            <a className="dropdown-item text-light custom" href='/#' onClick={() => { this.sourceLanguage(items.name, items.code) }}>
                                                {items.name}
                                            </a>
                                        </li>
                                    ))
                                    }
                                </ul>

                            </div>


                        </div>
                        <textarea id='inputt' onChange={(event) => { this.setState({ InputText: event.target.value }) }} placeholder='Type your text here..' cols="30" rows="10"></textarea>
                    </div>

                </div>
                <div className="enterbox">
                    <button type="button" className="btn border border-light border-2 btn-dark fw-bold text-white" disabled={this.state.isLoading} onClick={this.translateLanguage}>
                        <a href="#emptywarning" className='text-white'>
                            {this.state.isLoading ?
                                <div className="load">
                                    <div className="texttt mx-2">
                                        Translating
                                    </div>
                                    <div className="spinner-border mx-2 text-white" role="status">
                                    </div>
                                </div>
                                :

                                <div className="texttt  px-2 py-2">
                                    Translate
                                </div>
                            }
                        </a>
                    </button>
                </div>

            </div >
        )
    }
}



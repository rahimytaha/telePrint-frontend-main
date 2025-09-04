import FlyerSvg from "../public/assets/svg/products/flyer"
import FolderSvg from "../public/assets/svg/products/folder"
import FolderWf6pSvg from "../public/assets/svg/products/folder-wf-6p"
import FolderWf8pSvg from "../public/assets/svg/products/folder-wf-8p"
import BannerTransparenteSvg from "../public/assets/svg/products/banner-transparente"
import BroschuerenSvg from "../public/assets/svg/products/broschueren"
import RuckenbandbindungSvg from "../public/assets/svg/products/ruckenbandbindung"
import BuchdruckSvg from "../public/assets/svg/products/buchdruck"
import ButtonsSvg from "../public/assets/svg/products/buttons"
import DiplomarbeitSvg from "../public/assets/svg/products/diplomarbeit"
import DurchschreibebloeckeSvg from "../public/assets/svg/products/durchschreibebloecke"
import EintrittskartenSvg from "../public/assets/svg/products/eintrittskarten"
import EtikettenSvg from "../public/assets/svg/products/etiketten"
import FolderZf6pSvg from "../public/assets/svg/products/folder-zf-6p"
import FolderZf8pSvg from "../public/assets/svg/products/folder-zf-8p"
import FotokalenderSvg from "../public/assets/svg/products/fotokalender"
import FotoposterSvg from "../public/assets/svg/products/fotoposter"
import FototapetenSvg from "../public/assets/svg/products/fototapete"
import KalenderSvg from "../public/assets/svg/products/kalender"
import KeilrahmenSvg from "../public/assets/svg/products/keilrahmen"
import KlebebuchstabenSvg from "../public/assets/svg/products/klebebuchstaben"
import KlebefolienSvg from "../public/assets/svg/products/klebefolien"
import LaminiertePlakateSvg from "../public/assets/svg/products/laminierte-plakate"
import LesezeichenSvg from "../public/assets/svg/products/lesezeichen"
import LoseBlattsammlungSvg from "../public/assets/svg/products/lose-blattsammlung"
import PlakateSvg from "../public/assets/svg/products/plakate"
import PlandruckSvg from "../public/assets/svg/products/plandruck"
import PresspappeSvg from "../public/assets/svg/products/presspappe"
import RollupsSvg from "../public/assets/svg/products/rollups"
import SchaumplattenSvg from "../public/assets/svg/products/schaumplatten"
import SoftcoverBuecherSvg from "../public/assets/svg/products/softcover-buecher"
import SpiralbloeckeSvg from "../public/assets/svg/products/spiralbloecke"
import StempelSvg from "../public/assets/svg/products/stempel"
import StickerSvg from "../public/assets/svg/products/sticker"
import StofftaschenSvg from "../public/assets/svg/products/stofftaschen"
import TischkartenSvg from "../public/assets/svg/products/tischkarten"
import TshirtsSvg from "../public/assets/svg/products/tshirts"
import VisitenkartenSvg from "../public/assets/svg/products/visitenkarten"

const WerbedrucksortenData = [
  {
    id: "flyer",
    name: "Flyer",
    nameList: "Flyer",
    type: "Div. Formate",
    pic: <FlyerSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-flyer-mockup-square.webp",
    anfrage: false,
    category: "WerbedrucksortenData",
    description:
      "Auch in Zeiten des Computers und der digitalen Kommunikation, bleiben klassische Visitenkarten ein fester Bestandteil des Alltags. Das Teilen der wichtigsten Daten, E-Mail und Telefonnummer auf einer Visitenkarte nach einem kurzen Gespräch in der Bar oder auf einer Messe sind immer noch maßgeblich am erfolgreichen Vernetzen von Kontakten beteiligt. Teleprint bietet eine Vielzahl an Materialoptionen an, die von modernen Druckmaschinen und genauester Präzision bedruckt werden, um die perfekte Visitenkarte herzustellen. Falls Ihnen eine ein- oder beidseitig bedruckte Visitenkarte zu wenig ist, können Sie sich ebenfalls für eine Klappvisitenkarte (quadratische Karte) entscheiden. olor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    detailDescription: {
      div: [
        "Der Flyer (das Flugblatt) ist nach wie vor eines der beliebtesten und effektivsten Werbemittel. Das schnelle und einfache Austeilen von Flyern mit Ihrem individuellen Design ist einer der attraktivsten und kostengünstigsten Wege, Werbung zu betreiben. Flyer kommen in allen möglichen Formen und Formaten, einseitig oder doppelseitig, glänzend oder matt, als Handout oder als Postwurfsendung.",
        "Um mit Ihrem Flyer zu beeindrucken, soll sich der Flyer hochwertig anfühlen und der Inhalt sowie das Design Ihre Inhalte klar und übersichtlich wiedergeben. Je nach Ihrem Budget können Sie aus einer Vielzahl an Formaten und Größen wählen – von einfachen schwarz/weiß Flyern bis zu beidseitigem Farbdruck auf hochwertigem, 350g starken Qualitätspapier.",
        "Wir produzieren für Sie Flyer nach Ihren individuellen Wünschen in Ihrem persönlichen Design in jeder gewünschten Anzahl:"
      ],
      li: [
        {
          title: "•	Formate : ",
          text: "Hoch- oder Querformat, alle klassischen Formate von A7 bis A3, quadratische Formate und Spezialformate nach Ihren Wünschen."
        },
        {
          title: "•	Material : ",
          text: "Wir bieten Ihnen eine große Auswahl an Papieren und Papierstärken, von 80g Biotop naturweiß bis 350g Magno Gloss glänzend - und vieles mehr."
        },
        {
          title: "•	Qualität : ",
          text: "Einfache schwarz/weiß Flyer, hochwertige Cellophanierung, Recyclingpapier, Color Copy Premiumpapier – you name it!"
        },
        { title: "•	Bestellmenge : ", text: "ab 1 Stück" },
        {
          title: "•	Produktionszeiten :",
          text: "Overnight, Express, regular??????"
        },
        {
          title: "•	Einsatzbereiche : ",
          text: "Handouts, Flugblätter, Programmzettel, Preislisten, Events, Veranstaltungen, Einladungen, Eröffnungen …  "
        }
      ]
    }
  },
  {
    id: "folder-einfach-falz",
    name: "Folder",
    nameList: "Folder-Einfachfalz",
    type: "Einfachfalz",
    anfrage: false,
    pic: <FolderSvg />,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-folder-wf-4p-mockup-square.webp",
    category: "WerbedrucksortenData",
    detailDescription: {
      div: [
        "Folder sind das Multitalent unter den Drucksorten. Produktbeschreibungen, Einladungen, Programme, Preislisten … der Folder bringt Ihre Inhalte übersichtlich und elegant auf den Punkt. Der klassische Folder mit mittigem Einfachfalz gliedert Ihren Folder in vier Seiten, stellt alle Ihre Informationen gut strukturiert und handlich dar und bietet auch für große Grafiken, Listen oder Fotos ausreichend Platz.",
        "Für Ihre gestalterischen Ideen steht eine Vielzahl von Papiersorten zur Verfügung. Unser Angebot reicht vom einfachen schwarz/weiß Folder bis zum hochwertig cellophanierten Farbdruck auf 350g Colorcopy Papier.  ",
        "Unbeschränkte Gestaltungsmöglichkeiten, kompakte Info, schnell produziert:"
      ],
      li: [
        {
          text: "A4 auf A5, A3 auf A4, A5 auf A6, A6 auf A7, quadratische Formate sowie Spezialformate nach Ihren individuellen Wünschen.",
          title: "•	Formate : "
        },
        // {
        //   title: "•	LINK : ",
        //   text: "VERSCHIEDENE FALZARTEN"
        // },
        {
          title: "•	Material :",
          text: "Wir bieten Ihnen eine große Auswahl an Papierqualitäten. Vom 80 g Recyclingpapier über Biotop naturweiß in verschiedensten Stärken, Color Copy Premiumpapier oder Magno Gloss glänzend von 100g bis 350g - plus viele Spezialpapiere."
        },
        // {
        //   title: "•	LINK : ",
        //   text: "LISTE ALLE UNSERER PAPIERSORTEN"
        // },
        {
          title: "•	Extras : ",
          text: "Hochwertige Cellophanierung, hochglanz oder seidenmatt, Perforierung."
        },
        {
          title: "•	Bestellmenge : ",
          text: "ab 1 Stück"
        },
        {
          title: "•	Produktionszeiten :",
          text: "Overnight, Express, regular??????"
        },
        {
          title: "•	Einsatzbereiche : ",
          text: "Veranstaltungen, Festivalprogramme, Preislisten, Produktinformationen, Seminare, Events, Einladungen, Eröffnungen …"
        }
      ]
    },
    description:
      "Auch in Zeiten des Computers und der digitalen Kommunikation, bleiben klassische Visitenkarten ein fester Bestandteil des Alltags. Das Teilen der wichtigsten Daten, E-Mail und Telefonnummer auf einer Visitenkarte nach einem kurzen Gespräch in der Bar oder auf einer Messe sind immer noch maßgeblich am erfolgreichen Vernetzen von Kontakten beteiligt. Teleprint bietet eine Vielzahl an Materialoptionen an, die von modernen Druckmaschinen und genauester Präzision bedruckt werden, um die perfekte Visitenkarte herzustellen. Falls Ihnen eine ein- oder beidseitig bedruckte Visitenkarte zu wenig ist, können Sie sich ebenfalls für eine Klappvisitenkarte (quadratische Karte) entscheiden. olor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
  },
  {
    id: "folder-wickelfalz-sechs-seitig",
    name: "Folder",
    nameList: "Folder Wickelfalz 6-seitig",
    type: "Wickelfalz 6-seitig",
    anfrage: false,
    pic: <FolderWf6pSvg />,
    picHover: <FolderWf8pSvg />,
    image: "/assets/img/products/teleprint-folder-wf-6p-mockup-square.webp",
    category: "WerbedrucksortenData",
    description:
      "Auch in Zeiten des Computers und der digitalen Kommunikation, bleiben klassische Visitenkarten ein fester Bestandteil des Alltags. Das Teilen der wichtigsten Daten, E-Mail und Telefonnummer auf einer Visitenkarte nach einem kurzen Gespräch in der Bar oder auf einer Messe sind immer noch maßgeblich am erfolgreichen Vernetzen von Kontakten beteiligt. Teleprint bietet eine Vielzahl an Materialoptionen an, die von modernen Druckmaschinen und genauester Präzision bedruckt werden, um die perfekte Visitenkarte herzustellen. Falls Ihnen eine ein- oder beidseitig bedruckte Visitenkarte zu wenig ist, können Sie sich ebenfalls für eine Klappvisitenkarte (quadratische Karte) entscheiden. olor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    detailDescription: {
      div: [
        "Folder sind das Multitalent unter den Drucksorten. Produktbeschreibungen, Einladungen, Programme, Preislisten … der Folder bringt Ihre Inhalte übersichtlich und elegant auf den Punkt.",
        "Beim Wickelfalz wird der Folder gedrittelt und die Außenseiten jeweils nach innen geschlagen,  dadurch wird Ihr Folder in 6 Seiten gegliedert, mit einer Vorder- und Rückseite. Ideal geeignet etwa für Programmfolder, Produktbeschreibungen, Seminare etc.  Der Folder im Wickelfalz stellt auch ausführliche Informationen gut strukturiert und handlich dar und bietet auch für Listen oder Tabellen ausreichend Platz.",
        "Für Ihre gestalterischen Ideen steht eine Vielzahl von Papiersorten zur Verfügung. Unser Angebot reicht vom einfachen schwarz/weiß Folder bis zum hochwertig cellophanierten Farbdruck auf 350g Colorcopy Papier.",
        "Unbeschränkte Gestaltungsmöglichkeiten, kompakte Info, schnell produziert:"
      ],
      li: [
        {
          text: "A4 auf 9x21 cm, A3 auf 14x29,7 cm, A5 auf 7x14,8cm",
          title: "•	Formate : "
        },
        // { text: "VERSCHIEDENE FALZARTEN", title: "•	LINK : " },
        {
          text: "Wir bieten Ihnen eine große Auswahl an Papierqualitäten. Vom 80 g Recyclingpapier über Biotop naturweiß in verschiedensten Stärken, Color Copy Premiumpapier oder Magno Gloss glänzend von 100g bis 350g - plus viele Spezialpapiere.",
          title: "•	Material : "
        },
        // { text: "LISTE ALLE UNSERER PAPIERSORTEN", title: "•	LINK : " },
        {
          text: "Hochwertige Cellophanierung, hochglanz oder seidenmatt, Perforierung.",
          title: "•	Extras : "
        },
        { text: "ab 1 Stück", title: "•	Bestellmenge : " },
        {
          text: "Overnight, Express, regular??????",
          title: "• Produktionszeiten:"
        },
        {
          text: "Veranstaltungen, Preislisten, Seminare, Festivalprogramme, Produktinformationen, Events, Einladungen, Eröffnungen …  ",
          title: "•	Einsatzbereiche : "
        }
      ]
    }
  },
  {
    id: "folder-wickelfalz-acht-seitig",
    name: "Folder",
    nameList: "Folder Wickelfalz 8-seitig",
    type: "Wickelfalz 8-seitig",
    anfrage: false,
    pic: <FolderWf8pSvg />,
    picHover: <FolderWf6pSvg />,
    image: "/assets/img/products/teleprint-folder-wf-8p-mockup-square.webp",
    category: "WerbedrucksortenData",
    detailDescription: {
      div: [
        "Folder sind das Multitalent unter den Drucksorten. Produktbeschreibungen, Einladungen, Programme, Preislisten … der Folder bringt Ihre Inhalte übersichtlich und elegant auf den Punkt. ",
        "Beim achtseitigen Wickelfalz wird der Folder geviertelt und die Außenseiten jeweils fensterförmig nach innen geschlagen, dadurch wird Ihr Folder in 8 Seiten gegliedert, mit einer Außen- und Innenseite. Ideal geeignet etwa für Programmfolder, Seminare, Festivals, Produktbeschreibungen etc.  Der Folder im achtseitigen Wickelfalz stellt auch ausführliche Informationen gut strukturiert und handlich dar und bietet auch für Listen oder Tabellen ausreichend Platz.",
        "Für Ihre gestalterischen Ideen steht eine Vielzahl von Papiersorten zur Verfügung. Unser Angebot reicht vom einfachen schwarz/weiß Folder bis zum hochwertig cellophanierten Farbdruck auf 350g Colorcopy Papier.",
        "Unbeschränkte Gestaltungsmöglichkeiten, kompakte Info, schnell produziert:"
      ],
      li: [
        { title: "•	Formate : ", text: "A4 auf 7,4x21 cm, A3 auf 11x29,7 cm" },
        // { title: "•	LINK : ", text: "VERSCHIEDENE FALZARTEN" },
        {
          title: "•	Material : ",
          text: "Wir bieten Ihnen eine große Auswahl an Papierqualitäten. Vom 80 g Recyclingpapier über Biotop naturweiß in verschiedensten Stärken, Color Copy Premiumpapier oder Magno Gloss glänzend von 100g bis 350g - plus viele Spezialpapiere."
        },
        // { title: "•	LINK : ", text: "LISTE ALLE UNSERER PAPIERSORTEN" },
        {
          title: "•	Extras : ",
          text: "Hochwertige Cellophanierung, hochglanz oder seidenmatt, Perforierung."
        },
        { title: "•	Bestellmenge : ", text: ": ab 1 Stück" },
        {
          title: "• Produktionszeiten : ",
          text: "Overnight, Express, regular??????"
        },
        {
          title: "•	Einsatzbereiche : ",
          text: "Veranstaltungen, Preislisten, Seminare, Festivalprogramme, Produktinformationen, Events, Einladungen, Eröffnungen …  "
        }
      ]
    },
    description:
      "Auch in Zeiten des Computers und der digitalen Kommunikation, bleiben klassische Visitenkarten ein fester Bestandteil des Alltags. Das Teilen der wichtigsten Daten, E-Mail und Telefonnummer auf einer Visitenkarte nach einem kurzen Gespräch in der Bar oder auf einer Messe sind immer noch maßgeblich am erfolgreichen Vernetzen von Kontakten beteiligt. Teleprint bietet eine Vielzahl an Materialoptionen an, die von modernen Druckmaschinen und genauester Präzision bedruckt werden, um die perfekte Visitenkarte herzustellen. Falls Ihnen eine ein- oder beidseitig bedruckte Visitenkarte zu wenig ist, können Sie sich ebenfalls für eine Klappvisitenkarte (quadratische Karte) entscheiden. olor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
  },
  {
    id: "folder-zfalz-sechs-seitig",
    name: "Folder",
    nameList: "Folder Z-Falz 6-seitig",
    type: "Z-Falz 6-seitig",
    anfrage: false,
    pic: <FolderZf6pSvg />,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-folder-zf-6p-mockup-square.webp",
    category: "WerbedrucksortenData",
    description:
      "Auch in Zeiten des Computers und der digitalen Kommunikation, bleiben klassische Visitenkarten ein fester Bestandteil des Alltags. Das Teilen der wichtigsten Daten, E-Mail und Telefonnummer auf einer Visitenkarte nach einem kurzen Gespräch in der Bar oder auf einer Messe sind immer noch maßgeblich am erfolgreichen Vernetzen von Kontakten beteiligt. Teleprint bietet eine Vielzahl an Materialoptionen an, die von modernen Druckmaschinen und genauester Präzision bedruckt werden, um die perfekte Visitenkarte herzustellen. Falls Ihnen eine ein- oder beidseitig bedruckte Visitenkarte zu wenig ist, können Sie sich ebenfalls für eine Klappvisitenkarte (quadratische Karte) entscheiden. olor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    detailDescription: {
      div: [
        "Folder sind das Multitalent unter den Drucksorten. Produktbeschreibungen, Einladungen, Programme, Preislisten … der Folder bringt Ihre Inhalte übersichtlich und elegant auf den Punkt. ",
        "Beim Z-Falz wird der Folder gedrittelt und Z-förmig gefalzt,  dadurch wird Ihr Folder in 6 Seiten gegliedert, mit einer Vorder- und Rückseite. Ideal geeignet etwa für Programmfolder, Produktbeschreibungen, Seminare etc.  Der Folder im Z-Falz stellt auch ausführliche Informationen gut strukturiert und handlich dar und bietet auch für Listen oder Tabellen ausreichend Platz",
        "Für Ihre gestalterischen Ideen steht eine Vielzahl von Papiersorten zur Verfügung. Unser Angebot reicht vom einfachen schwarz/weiß Folder bis zum hochwertig cellophanierten Farbdruck auf 350g Colorcopy Papier.",
        "Unbeschränkte Gestaltungsmöglichkeiten, kompakte Info, schnell produziert:"
      ],
      li: [
        {
          text: "A4 auf 9x21 cm, A3 auf 14x29,7 cm, A5 auf 7x14,8cm",
          title: "•	Formate : "
        },
        // {
        //   text: "VERSCHIEDENE FALZARTEN",
        //   title: "•	LINK : "
        // },
        {
          text: "Wir bieten Ihnen eine große Auswahl an Papierqualitäten. Vom 80 g Recyclingpapier über Biotop naturweiß in verschiedensten Stärken, Color Copy Premiumpapier oder Magno Gloss glänzend von 100g bis 350g - plus viele Spezialpapiere.",
          title: "•	Material : "
        },
        // {
        //   text: "LISTE ALLE UNSERER PAPIERSORTEN",
        //   title: "•	LINK : "
        // },
        {
          text: "Hochwertige Cellophanierung, hochglanz oder seidenmatt, Perforierung.",
          title: "•	Extras : "
        },
        {
          text: "ab 1 Stück",
          title: "•	Bestellmenge : "
        },
        {
          text: "Overnight, Express, regular??????",
          title: "•	Produktionszeiten :"
        },
        {
          text: "Veranstaltungen, Preislisten, Seminare, Festivalprogramme, Produktinformationen, Events, Einladungen, Eröffnungen …  ",
          title: "•	Einsatzbereiche : "
        }
      ]
    }
  },
  {
    id: "folder-zfalz-acht-seitig",
    name: "Folder",
    nameList: "Folder Z-Falz 8-seitig",
    type: "Z-Falz 8-seitig",
    anfrage: false,
    pic: <FolderZf8pSvg />,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-folder-zf-8p-mockup-square.webp",
    category: "WerbedrucksortenData",
    description:
      "Auch in Zeiten des Computers und der digitalen Kommunikation, bleiben klassische Visitenkarten ein fester Bestandteil des Alltags. Das Teilen der wichtigsten Daten, E-Mail und Telefonnummer auf einer Visitenkarte nach einem kurzen Gespräch in der Bar oder auf einer Messe sind immer noch maßgeblich am erfolgreichen Vernetzen von Kontakten beteiligt. Teleprint bietet eine Vielzahl an Materialoptionen an, die von modernen Druckmaschinen und genauester Präzision bedruckt werden, um die perfekte Visitenkarte herzustellen. Falls Ihnen eine ein- oder beidseitig bedruckte Visitenkarte zu wenig ist, können Sie sich ebenfalls für eine Klappvisitenkarte (quadratische Karte) entscheiden. olor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    detailDescription: {
      div: [
        "Folder sind das Multitalent unter den Drucksorten. Produktbeschreibungen, Einladungen, Programme, Preislisten … der Folder bringt Ihre Inhalte übersichtlich und elegant auf den Punkt. ",
        "Beim achtseitigen Z-Falz wird der Folder geviertelt und Z-förmig gefalzt, dadurch wird Ihr Folder in 8 Seiten gegliedert, mit einer Vorder- und Rückseite. Ideal geeignet etwa für Programmfolder, Produktbeschreibungen, Seminare etc.  Der Folder mit achtseitigem Z-Falz stellt auch ausführliche Informationen gut strukturiert und handlich dar und bietet auch für Listen oder Tabellen ausreichend Platz.",
        "Für Ihre gestalterischen Ideen steht eine Vielzahl von Papiersorten zur Verfügung. Unser Angebot reicht vom einfachen schwarz/weiß Folder bis zum hochwertig cellophanierten Farbdruck auf 350g Colorcopy Papier.",
        "Unbeschränkte Gestaltungsmöglichkeiten, kompakte Info, schnell produziert:"
      ],
      li: [
        {
          text: "A4 auf 7,4x21 cm, A3 auf 11x29,7 cm",
          title: "•	Formate : "
        },
        // {
        //   text: "VERSCHIEDENE FALZARTEN",
        //   title: "•	LINK : "
        // },
        {
          text: "Wir bieten Ihnen eine große Auswahl an Papierqualitäten. Vom 80 g Recyclingpapier über Biotop naturweiß in verschiedensten Stärken, Color Copy Premiumpapier oder Magno Gloss glänzend von 100g bis 350g - plus viele Spezialpapiere",
          title: "•	Material : "
        },
        // {
        //   text: "LISTE ALLE UNSERER PAPIERSORTEN",
        //   title: "•	LINK : "
        // },
        {
          text: "Hochwertige Cellophanierung, hochglanz oder seidenmatt, Perforierung.",
          title: "•	Extras : "
        },
        {
          text: "ab 1 Stück",
          title: "•	Bestellmenge : "
        },
        {
          text: "Overnight, Express, regular??????",
          title: "•	Produktionszeiten :"
        },
        {
          text: "Veranstaltungen, Preislisten, Seminare, Festivalprogramme, Produktinformationen, Events, Einladungen, Eröffnungen …",
          title: "•	Einsatzbereiche : "
        }
      ]
    }
  },

  // Broschürenkalender, Fotokalender, Stehkalender, Taschenkalender
  {
    id: "plakate",
    name: "Plakate",
    nameList: "Plakate",
    type: "Div. Formate",
    pic: <PlakateSvg />,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-plakate-mockup-square.webp",
    anfrage: true,
    category: "WerbedrucksortenData",
    description: "Plakate - A2, A1, A0, Sonderformate – unser Mimaki Plotter schafft alles - in höchster Qualität:",
    detailDescription: {
      div: [
        "Egal ob Veranstaltungsplakate zum Affichieren auf Plakatsäulen, wetterfeste Plakate für den Außenbereich oder hochwertige Kunstdrucke auf Leinen – wir haben für all Ihre Ideen das passende Material. Wir drucken mit einem Mimaki-Plotter auf Rollenmaterial, daher können wir neben den gängigen A Formaten bis A0 (84,1x118,9cm) auch jedes beliebige Sonderformat bis zu einer Breite von 135 cm und einer Länge von 8 m anbieten. Von der Fototapete bis zum gerahmten Poster auf Fotopapier ist alles möglich! Neben den üblichen Plakatmedien drucken wir auch auf Klebefolie oder Fensterlochfolie, die sich beispielsweise für Werbung auf Auslagenscheiben eignet. Das Aufkaschieren Ihrer Vorlage auf Hartschaumplatte oder Alu-Dibond-Platte bringt eine zusätzliche Dimension an Einsatzmöglichkeiten für Ihr Poster!",
        "Keine Grenzen bei Formaten und Materialien für Ihre Plakate:"
      ],
      li: [
        {
          text: "A3, A2, A1, A0, sämtliche Wunschformate bis 135cm Breite",
          title: "•	Formate : "
        },
        {
          text: "Wir bieten Ihnen eine große Auswahl an Rollenmaterial. 125 g Blueback Plakatpapier,  mattes und glänzendes 230 g Fotopapier, wasserfeste Plane, Leinen oder transparenter Display-Film. Ebenso drucken wir auf verschiedene Selbstklebefolien sowie Lochfolien für das Bekleben von Fensterflächen.",
          title: "•	Material : "
        },
        // {
        //   text: "LISTE ALLE UNSERER PLAKATMEDIEN",
        //   title: "•	LINK : "
        // },
        {
          text: "Wetterfeste Laminierung für den dauerhaften Außeneinsatz. Kaschierung auf Hartschaumplatte, Kaschierung auf Alu-Dibond.",
          title: "• Extras : "
        },
        { text: "ab 1 Stück", title: "• Bestellmenge : " },
        { text: "Express, regular??????", title: "•	Produktionszeiten : " },
        {
          text: "Plakatierung, Schaufensterwerbung, Veranstaltungen, Präsentationen, Messen, Rahmungen,  Events… ",
          title: "•	Einsatzbereiche : "
        }
      ]
    }
  },
  {
    id: "laminierte-plakate",
    name: "Laminierte_Plakate",
    nameList: "Laminierte Plakate",
    type: "Div. Formate",
    pic: <LaminiertePlakateSvg />,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-laminierte-plakate-mockup-square.webp",
    anfrage: true,
    category: "WerbedrucksortenData",
    description: "Plakate für den Außeneinsatz: dauerhaft wetterbeständig!",
    detailDescription: {
      div: [
        "Laminierte Plakate sind dauerhaft wasserfest und daher für spezielle Einsätze im Außenbereich geeignet. Sämtliche Ihrer auf unserem Mimaki-Plotter auf Rollenmaterial in den gängigen Formaten bis A0 (84,1x118,9cm) oder in Ihrem Wunschformat produzierten Plakate können auch laminiert werden – matt oder glänzend, ganz nach Ihren Präferenzen.",
        "Auf Wunsch mit kleinen Metallösen zur Aufhängung.",
        "Wetterfest und lichtecht: Plakate für den heavy-duty Einsatz:"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A3, A2, A1, A0, ihr Wunschformat."
        },
        {
          title: "• Material : ",
          text: "Laminatfolie hochglanz oder seidenmatt."
        },
        {
          title: "• Extras : ",
          text: "wetterfest."
        },
        {
          title: "• Bestellmenge: ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        },
        {
          title: "• Einsatzbereiche : ",
          text: "Hinweisschilder, Veranstaltungen, Gastgärten, Sportevents…"
        }
      ]
    }
  },
  {
    id: "plandruck",
    name: "Plandruck",
    nameList: "Plandruck",
    type: "Div.Formate",
    pic: <PlandruckSvg />,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-plan-square.webp",
    anfrage: true,
    category: "WerbedrucksortenData",
    description: "Pläne und Konstruktionszeichnungen A3 bis A0 - oder im beliebigen Sonderformat – preisgünstig und in optimaler Qualität:",
    detailDescription: {
      div: [
        "Architekturpläne, Aufrisse und Konstruktionspläne werden auf unserem Canon PRO-4000S Plandrucker produziert. Wir drucken auf Rollenpapier mit 95 cm Rollenbreite, neben den gängigen Formaten bis A0 (84,1x118,9cm) sind auch beliebige Sonderformate bis zu einer Breite von 95 cm möglich. ",
        "Zur Auswahl steht 90 g oder 110 g Plandruckpapier, optional auch ein 140 g Papier. Auf Wunsch werden Ihre Pläne maschinell gefaltet – mit oder ohne Lochungsrand.",
        "Plandruck – schnell und effizient – schwarzweiß und in Farbe:"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A3, A2, A1, A0, sämtliche Wunschformate bis 95 cm Breite."
        },
        {
          title: "• Material : ",
          text: "90g / 110g / 140g Plandruckpapier."
        },
        // {
        //   title: "• LINK : ",
        //   text: "LISTE ALLE UNSERER PLAKATMEDIEN"
        // },
        {
          title: "• Extras : ",
          text: "Transparentpapier, maschinelles Falzen auf A4, mit oder ohne Lochungsrand."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        }
      ]
    }
  },
  {
    id: "stehkalender",
    name: "Kalender",
    nameList: "Kalender",
    type: "Stehkalender",
    pic: <KalenderSvg />,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-stehkalender-mockup-square.webp",
    category: "WerbedrucksortenData",
    anfrage: true,
    description: "",
    detailDescription: {
      div: [
        "Wandkalender – Ihre persönlicher Jahreskalender, für Sie oder als Geschenk:",
        "Ihre Lieblingsfotos, Zeichnungen oder Grafiken als Jahreskalender, komplett mit Datum und Wochentagen, gedruckt auf hochwertigem Fotopapier, Color Copy, Magno Gloss oder Biotop Papier. Für das ultimative Finish cellophanieren wir Ihren Kalender hochglanz oder seidenmatt. Auf Wunsch mit Deckblatt, mit einem zusätzlichen, 13. Motiv.",
        "Ihr Kalender wird spiralgebunden mit Metallspirale in schwarz, weiß oder silbern, komplett mit Spezial-Öse zum Aufhängen an der Wand. Wir drucken Ihren Kalender auf 350g Color Copy Qualitätspapier, hochwertiges Magno Gloss oder auf Wunsch auch auf Biotop naturweiß Papier. Neben den Standardformaten A4 hoch oder quer und A3 hoch oder quer drucken wir Ihren Kalender selbstverständlich auch in Ihrem beliebigen Wunschformat bis 32x44 cm.",
        "Zwei Möglichkeiten stehen zur Auswahl: Sie gestalten Ihren Kalender von Grund auf selbst und laden ein fertiges PDF hoch, oder sie laden einfach 12 Fotos oder Grafiken und eine Wunschfarbe für den Hintergrund hoch – wir erstellen dann für Sie das vollständige Kalenderlayout mit den Monaten und Wochentagen.",
        "Individuelle Kalender: ein persönliches Geschenk für Kunden und Geschäftspartner, Freunde oder Ihre Familie - nicht zuletzt an Sie selbst!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A4 hoch oder quer, A3 hoch oder quer, Ihr beliebiges Wunschformat."
        },
        {
          title: "• Material : ",
          text: "Color Copy Premiumpapier oder Magno Gloss glänzend 350g, Biotop naturweiß 300g – oder Ihr Wunschpapier."
        },
        {
          title: "• LINK : ",
          text: "LISTE ALLE UNSERE UNSERER PAPIERSORTEN"
        },
        {
          title: "• Extras : ",
          text: "Hochwertige Cellophanierung, hochglanz oder seidenmatt, Perforierung."
        },
        {
          title: "• Datei : ",
          text: "fertiges PDF oder 12/13 Motive plus Wunschfarbe für den Hintergrund."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten :",
          text: "Overnight, Express, regular??????"
        }
      ]
    }
  },
  {
    id: "stofftaschen",
    name: "Stofftaschen",
    nameList: "Stofftaschen",
    pic: <StofftaschenSvg />,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-totebag-mockup-square.webp",
    anfrage: true,
    category: "WerbedrucksortenData",
    description: "",
    detailDescription: {
      div: [
        "Stofftaschen – edles Werbegeschenk für Ihre Kunden oder individueller Auftritt für Sie selbst.",
        "Bedruckte Stofftaschen sind ein auffälliges Statement und ein absoluter Hingucker. Als hochwertiges Give-Away und effektvoller Werbeträger für Ihre Kunden ebenso wie als individuelles Modestatement für Sie selbst.",
        "Wir bieten verschiedene Varianten für den Textildruck: Transferdruck bis A3 für Fotos oder Zeichnungen. Flexdruck für Schriftzüge oder Logos sowie Flockdruck mit textiler Oberfläche des Aufdrucks. Ihren Ideen und  Gestaltungsmöglichkeiten sind (fast) keine Grenzen gesetzt!",
        "Wir bedrucken qualitativ hochwertige, stabile Stofftaschen aus 100% Baumwolle mit langen oder kurzen Trageriemen, in den Größen 38x42 cm. Gerne drucken wir auch auf beigestellte Textilien Ihrer Wahl.",
        "Bedruckte Stofftaschen – ein garantierter Hingucker!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "38x42 cm, mit langen oder kurzen Tragriemen."
        },
        {
          title: "• Material : ",
          text: "100% Baumwolle."
        },
        {
          title: "• Extras : ",
          text: "Ihr Schriftzug oder Logo in Goldfolie."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        },
        {
          title: "• Verwendungszweck : ",
          text: "Ladenlokal, Werbegeschenke, Messeauftritte, Geschenke, Firmenanlässe, Filmpremieren …"
        }
      ]
    }
  },
  {
    id: "t-shirts",
    name: "T-Shirts",
    nameList: "T-Shirts",
    pic: <TshirtsSvg />,
    picHover: <FlyerSvg />,
    anfrage: true,
    image: "/assets/img/products/teleprint-tshirt-mockup-square.webp",
    anfrage: true,
    category: "WerbedrucksortenData",
    description: "Bedruckte T-Shirts für den professionellen Firmenauftritt, Ihren Sportclub oder als individuelles Geschenk.",
    detailDescription: {
      div: [
        "Bedruckte T-Shirts sind unverzichtbar für Ihre Arbeitskleidung, Ihren Messeauftritt oder Ihren Sportverein. Da wir bereits ab 1 Stück produzieren, sind individuell bedruckte T-Shirts ebenso ein großartiges Geschenk oder witziges Accessoire für Polterabende.",
        "Wir bieten verschiedene Varianten für den T-Shirt Druck: Transferdruck bis A3 für Fotos oder Zeichnungen. Flexdruck für Schriftzüge oder Logos sowie Flockdruck mit textiler Oberfläche des Aufdrucks. Bei all unseren Druckverfahren kann Ihr Motiv oder Schriftzug auch auf bunte oder schwarze T-Shirts gedruckt werden. Ihren Ideen und  Gestaltungsmöglichkeiten sind (fast) keine Grenzen gesetzt!",
        "Wir bedrucken qualitativ hochwertige T-Shirts (B&C) in 100% Baumwolle mit rundem Ausschnitt in Kindergrößen ab 4 Jahren, Damen- oder Herrenschnitt XS bis XXL in schwarz oder weiß. Gerne drucken wir auch auf beigestellte Textilien Ihrer Wahl. Selbstverständlich sind auch Textilien wie Ruderleibchen, Hoodies, Arbeitsmäntel etc. für den Textildruck geeignet.",
        "Bedruckte T-Shirts – ein starkes Statement für Ihr Auftreten!"
      ],
      li: [
        { text: "T-Shirts von Kindergrößen bis XXL.", title: "•	Formate : " },
        { text: "Marken T-Shirts in 100% Baumwolle.", title: "•	Material : " },
        {
          text: "Kindergrößen. Ihr Schriftzug oder Logo in Goldfolie.",
          title: "•	Extras : "
        },
        { text: "ab 1 Stück.", title: "•	Bestellmenge : " },
        { text: "Express, regular??????", title: "•	Produktionszeiten : " },
        {
          text: "Arbeitskleidung, Messeauftritte, Geschenke, Band T-Shirts, Schulklassen, Sportanlässe, Sportvereine, Polterabende …",
          title: "•	Verwendungszweck : "
        }
      ]
    }
  }
]

const BurodrucksortenData = [
  {
    id: "briefe",
    name: "Briefe",
    nameList: "Briefe",
    type: "Div. Formate",
    pic: <PlandruckSvg />,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-briefpapier-mockup-square.webp",
    anfrage: true,
    category: "BurodrucksortenData",
    description: "",
    detailDescription: {
      div: [
        "Individuell gestaltetes Briefpapier für Ihren professionellen Auftritt!",
        "Nach Ihren individuellen Vorgaben gestaltetes, hochwertiges Briefpapier ist ein unverzichtbarer Begleiter für Ihren Büro- und Geschäftsalltag. Kein Brief und keine Rechnung ohne persönlichen Briefkopf!",
        "Wir produzieren Ihr Wunsch-Briefpapier auf einer breiten Auswahl an Papieren, auch doppelseitig bedruckt, liniert oder kariert, mit farbigem Firmenlogo, Zierrändern, Fotos oder Farbflächen – Ihren Gestaltungsmöglichkeiten sind keine Grenzen gesetzt.",
        "Individuelles Briefpapier  – für einen professionellen Firmenauftritt!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A5 bis A3."
        },
        {
          title: "• Material : ",
          text: "alle unsere Standard-Papiersorten sind möglich."
        },
        {
          title: "• LINK : ",
          text: "LISTE ALLE UNSERE PAPIERSORTEN"
        },
        {
          title: "• Extras : ",
          text: "randlose Logos, Grafiken oder Fotos."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 10 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        },
        {
          title: "• Verwendungszweck : ",
          text: "Korrespondenz, Büro, Meetings, Rechnungen …"
        }
      ]
    }
  },
  {
    id: "durchschreibeblöcke",
    name: "Durchschreibeblöcke",
    nameList: "Durchschreibeblöcke",
    type: "Div. Formate",
    pic: <DurchschreibebloeckeSvg />,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-durchschreibbloecke-mockup-square.webp",
    anfrage: true,
    category: "BurodrucksortenData",
    description: "",
    detailDescription: {
      div: [
        "Bestellungen, Lieferscheine, Rechnungen – ohne Durchschreibblock geht gar nichts!",
        "Durchschreibblöcke bzw. Durchschreibesätze sind nach wie vor unverzichtbares Hilfsmittel im Geschäftsalltag – sie sparen beim Bestellen, Fakturieren oder bei Lieferungen eine Menge unnötigen Zettelkram und somit viel Zeit ein. Individuell gestaltete Durschreibesätze sind optimal auf Ihren Firmenauftritt und den Einsatzbereich zugeschnitten.",
        "Wir drucken Ihren  Durchschreibblock mit einem oder zwei Durchschlagpapieren. Für die Durchschlagpapiere stehen die Farben gelb und rosa zur Auswahl .",
        "Durchschreibblöcke – unverzichtbares Hilfsmittel für den Geschäftsalltag!"
      ]
    },
    li: [
      {
        title: "• Formate : ",
        text: "alle Formate von A7 bis A4."
      },
      {
        title: "• Materia : ",
        text: "Durchschlagpapier 80g."
      },
      {
        title: "• Extras : ",
        text: "2 oder 3 Durchschläge."
      },
      {
        title: "• Bestellmenge : ",
        text: "ab 50 Sätze."
      },
      {
        title: "•	Produktionszeiten : ",
        text: "Express, regular??????"
      },
      {
        title: "• Verwendungszweck : ",
        text: "Lieferscheine, Bestellscheine, Rechnungen, Verträge …"
      }
    ]
  },
  {
    id: "lose-blattsammlung",
    name: "Lose_Blattsammlung",
    nameList: "Lose Blattsammlung",
    type: "Div. Formate",
    pic: <LoseBlattsammlungSvg />,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-flyer-mockup-square.webp",
    anfrage: true,
    category: "BurodrucksortenData",
    description: "",
    detailDescription: {
      div: [
        "Drucker defekt, Toner leer, keine Zeit? Wir drucken Ihre Dateien – schnell und günstig!",
        "Ihr Drucker hat keinen Toner mehr oder Sie haben nicht die Zeit, auf den Ausdruck eines umfangreichen Skriptums zu warten? Kein Problem: Laden Sie einfach die entsprechenden Dateien hoch und wir drucken Ihre Dokumente schnell, unkompliziert und günstig aus. Einseitig oder doppelseitig, schwarz-weiß oder in Farbe – ganz nach Ihren Wünschen.",
        "Wir drucken ihre Dateien auf alle unsere Standard-Papiersorten, auf Wunsch können wir Ihre Ausdrucke gerne lochen (Zweifach- oder Vierfach-Lochung) und/oder spiralbinden.",
        "Loseblattsammlung  – schneller und unkomplizierter Druckservice für Ihre Dateien!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A5 bis A3."
        },
        {
          title: "• Dateiformate : ",
          text: "PDF oder Word Dokumente."
        },
        {
          title: "• Material : ",
          text: "alle unsere Standard-Papiersorten sind möglich."
        },
        {
          title: "• LINK : ",
          text: "LISTE ALLE UNSERE PAPIERSORTEN"
        },
        {
          title: "• Extras : ",
          text: "Lochung, Spiralisierung."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        },
        {
          title: "• Verwendungszweck : ",
          text: "Skripten, Meetings, Seminare, Dokumente, Konferenzen …"
        }
      ]
    }
  },
  {
    id: "personalisierte-briefe",
    name: "Personalisierte_Briefe",
    nameList: "Personalisierte Briefe",
    type: "Div. Formate",
    pic: <PlandruckSvg />,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-briefpapier-mockup-square.webp",
    anfrage: true,
    category: "BurodrucksortenData",
    detailDescription: {
      div: [
        "Ein personalisierter Brief hat viele Einsatzmöglichkeiten, vom Jahresbericht, einer Ankündigung für Ihre Stammkunden bis zu Seminarunterlagen. ",
        "Sie bringen die Adressliste und Ihren Brief, wir produzieren einen personalisierten Brief auf Ihrem Wunschpapier für Ihre Werbeaussendung oder Vereinsmitteilung.",
        "Personalisierter Brief  – für hochwertige und effiziente Aussendungen!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A5, A4."
        },
        {
          title: "• Papier : ",
          text: "alle unsere Standard-Papiersorten sind möglich."
        },
        // {
        //   title: "• LINK : ",
        //   text: "LISTE ALLE UNSERER PAPIERSORTEN"
        // },
        {
          title: "• Extras : ",
          text: "abfallende Grafiken oder Firmenlogos."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 10 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        },
        {
          title: "• Verwendungszweck : ",
          text: "Aussendungen, Vereinsnachrichten, Preislisten, Jahresberichte, Seminarunterlagen …"
        }
      ]
    },
    description: "Personalisierter Brief – individuell gestaltete, effektive Aussendung auf Ihrem Wunschpapier!"
  },
  {
    id: "spiralbuch",
    name: "Spiralbuch",
    nameList: "Spiralbuch",
    type: "Div. Formate",
    pic: <SpiralbloeckeSvg />,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-spiralblock-mockup-square.webp",
    anfrage: true,
    category: "BurodrucksortenData",
    description: "",
    detailDescription: {
      div: [
        "Individuell gestaltete Spiralbuch – es gibt immer etwas zu notieren!",
        "Nach Ihren individuellen Vorgaben gestaltete Spiralbuch sind der praktischer Begleiter für Ihren Büro- und Geschäftsalltag. Für Meetings, Konferenzen oder als Geschenk an Ihre Kunden – die Einsatzmöglichkeiten sind fast unbeschränkt. ",
        "Wir produzieren Ihren Wunsch-Spiralblock auf einer breiten Auswahl an Papieren, mit oder ohne Rückkarton, liniert, kariert, mit farbigem Firmenlogo – Ihren Gestaltungsmöglichkeiten sind keine Grenzen gesetzt.",
        "Individuelle Spiralbuch  – für einen effektiver Firmenauftritt oder Ihr nächstes Meeting!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A7 bis A3."
        },
        {
          title: "• Material : ",
          text: "alle unsere Standard-Papiersorten sind möglich."
        },
        {
          title: "• LINK : ",
          text: "LISTE ALLE UNSERE PAPIERSORTEN"
        },
        {
          title: "• Spiralbindung : ",
          text: "Metall, Metallspirale schwarz, weiß oder silbern."
        },
        {
          title: "• Extras : ",
          text: "Abrissperforation."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        },
        {
          title: "• Verwendungszweck : ",
          text: "Büro, Meetings, Werbegeschenke, Konferenzen …"
        }
      ]
    }
  },
  {
    id: "stempel",
    name: "Stempel",
    nameList: "Stempel",
    type: "Div. Formate",
    pic: <StempelSvg />,
    anfrage: false,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-stempel-mockup-square.webp",
    category: "BurodrucksortenData",
    description: "unverzichtbar im Geschäftsalltag.",
    detailDescription: {
      div: [
        "Jedes Unternehmen braucht Stempel. Ein  Firmenstempel ist unverzichtbarer Bestandteil des Geschäftsalltags, um schnell und einfach ein Dokument zu zeichnen, das Firmenlogo auf Papier zu bringen oder Akten effizient zu nummerieren.",
        "Wir bieten Stempel von Marktführer Trodat in der Ausführung Professional, mit einem festen Handgriff aus hochwertigem Material und ausgezeichnetem Druckauftrag in neun unterschiedlichen Formaten und drei unterschiedlichen Farben.",
        "Für den normalen Einsatz bieten wir die preisgünstige Printy-Linie von Trodat in einer Vielzahl von unterschiedlichsten Formaten, die alle Einsatzmöglichkeiten abdecken.",
        "Stempel – in hochprofessioneller Qualität und in preisgünstiger Ausführung."
      ],
      li: [
        {
          title: "• Formate : ",
          text: "rund, rechteckig, schmal oder nach ihren individuellen Vorgaben."
        },
        // {
        //   title: "• LINK : ",
        //   text: "LISTE ALLE UNSERER STEMPELFORMATE"
        // },
        {
          title: "• Extras : ",
          text: "Trodat Professional für den Dauereinsatz. Datumsstempel, Nummerierungsstempel."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        }
      ]
    }
  },
  {
    id: "visitenkarten",
    name: "Visitenkarten",
    nameList: "Visitenkarten",
    type: "Div. Formate",
    pic: <VisitenkartenSvg />,
    anfrage: false,
    picHover: <FlyerSvg />,
    image: "/assets/img/products/teleprint-visitenkarten-mockup-square.webp",
    category: "BurodrucksortenData",
    description: "unverzichtbare Grundausstattung für Ihren Auftritt in vielen Erscheinungsformen",
    detailDescription: {
      div: [
        "Auch in Zeiten der digitalen Kommunikation bleibt die klassische, gedruckte Visitenkarte unverzichtbarer Bestandteil jeder Geschäftsbeziehung und jedes privaten Treffens. Das Teilen der wichtigsten persönlichen Daten wie E-Mail und Telefonnummer auf einer Visitenkarte nach einem kurzen Gespräch in der Bar oder auf einer Messe sind immer noch entscheidend für eine erfolgreiche Vernetzung Ihrer Kontakte.",
        "Umso entscheidender ist es, mit einer hochwertig produzierten Visitkarte aufzutreten. Wir bieten eine Vielzahl an Materialoptionen an, die von unseren modernen Druckmaschinen in  genauester Präzision bedruckt werden, um die perfekte Visitenkarte herzustellen. ",
        "Falls Ihnen eine ein- oder beidseitig bedruckte Visitenkarte nicht genug ist, wählen Sie eine Klappvistenkarte in Hoch- oder Querformat. Insgesamt 4 Seiten bieten deutlich mehr Platz für persönliche Informationen oder zusätzlich Werbung, und lassen mehr Spielraum für markantes Design mit einer effektvollen Grafik oder einem beeindruckenden Foto.",
        "Visitenkarten ab 10 Stück, individuell gestaltet nach Ihren persönlichen Wünschen:"
      ],
      li: [
        {
          title: "Formate : ",
          text: "Das klassische Visitenkartenformat 85 x 55 mm - hoch oder quer, Klappkarten 85 x 110 mm – hoch oder quer. Spezialformate nach Ihren Wünschen."
        },
        {
          title: "Material : ",
          text: "Wir bieten Ihnen eine große Auswahl an Papierqualitäten. Color Copy Premiumpapier, Biotop, Magno Gloss glänzend - und vieles mehr. Visitenkarten drucken wir auf 350g Papierstärke (300g bei Biotop Papier)."
        },
        {
          title: "Extras : ",
          text: "Hochwertige Cellophanierung, hochglanz oder seidenmatt, abgerundete Ecken, laminierte Visitenkarten."
        },
        {
          title: "Bestellmenge : ",
          text: "ab 20 Stück"
        },
        {
          title: "• Produktionszeiten : ",
          text: "Overnight, Express, regular??????"
        }
      ]
    }
  }
]

const BuchdruckData = [
  {
    id: "buchdruck",
    name: "Buchdruck",
    nameList: "Buchdruck",
    type: "Div. Formate",
    pic: <BuchdruckSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-buchdruck-mockup-square.webp",
    anfrage: true,
    category: "BuchdruckData",
    description: "",
    detailDescription: {
      div: [
        "Bücher individuell drucken und binden lassen – bereits ab 1 Stück!",
        "Wir setzen Ihre Buchidee in Tat um. Auf Ihrem Wunschpapier, in Ihrem Wunschformat. Gebunden als edles Taschenbuch, mit Rückenband, spiralgebunden oder mit Sattelheftung. Bereits ab einer Auflage von 1 Stück!",
        "Wir drucken Ihr Buch auf eine breite Auswahl an Papieren, mit Fotos, Farbflächen oder Grafiken, selbstverständlich auch randlos – Ihrer Inspiration und Ihren Gestaltungsideen sind keine Grenzen gesetzt.",
        "Extras wie Cellophanierung in Hochglanz oder seidenmatt für das Cover oder der Einsatz unterschiedlicher Papiersorten für den Buchkern!",
        "Individueller Buchdruck  – unbeschränkte Möglichkeiten für Ihre Buchidee!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A7 bis A3. Alle Wunschformate sind möglich."
        },
        {
          title: "• Material : ",
          text: "alle unsere Standard-Papiersorten sind möglich."
        },
        {
          title: "• LINK : ",
          text: "LISTE ALLE UNSERE PAPIERSORTEN"
        },
        {
          title: "• Bindung : ",
          text: "Taschenbuchbindung, Spiralbindung, Sattelheftung."
        },
        {
          title: "• Extras : ",
          text: "Cellophaniertes Buchcover."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        },
        {
          title: "• Verwendungszweck : ",
          text: "Kinderbücher, Geschenke, Kleinauflagen, Seminare …"
        }
      ]
    }
  },
  {
    id: "broschüren",
    name: "Broschüren",
    nameList: "Broschüren",
    type: "Div. Formate",
    pic: <BroschuerenSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-broschuere-mockup-square.webp",
    anfrage: false,
    category: "BuchdruckData",
    description: "Das passende Medium für alle, die mehr zu sagen haben.",
    detailDescription: {
      div: [
        "Die Einsatzmöglichkeiten von Broschüren sind fast unbeschränkt: Egal ob Kundenmagazin, Speisekarte, Geschäftsbericht, Ausstellungskatalog oder Vereinszeitung – wir bieten für all Ihre kreativen Ideen günstige Drucklösungen! Neben einer Vielzahl von Papieren stehen diverse Bindungen zur Auswahl: Klammerheftung (Sattelheftung), Rückenband, Taschenbuchbindung, Klebebindung, Spiralbindung mit Metall- oder Plastikspirale.",
        "Broschüren, Zeitungen oder Magazine vermitteln längere Inhalte informativ und übersichtlich. Wir drucken alle gängigen Formate, selbstverständlich ebenso Ihr beliebiges Wunschformat. Vom günstigen schwarz-weiß Druck bis zum vollfärbigen Magazin mit edlem Hochglanz-Cover ist alles möglich.    ",
        "Idealerweise ist Ihre Druckvorlage in aufsteigender Seitenreihenfolge angelegt, die korrekte Seitenabfolge für den Broschürendruck erledigt dann unser Spooler.",
        "Zahllose Möglichkeiten für Broschüren, Magazine und Kataloge – Ihre Kreativität ist das Limit!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "Hoch- oder Querformat, alle klassischen Formate von A7 bis A3, quadratische Formate und alle Spezialformate nach Ihren Wünschen."
        },
        {
          title: "• Material : ",
          text: "Wir bieten Ihnen eine große Auswahl an Papieren und Papierstärken, von 80g Biotop naturweiß bis 350g Magno Gloss glänzend - und vieles mehr."
        },
        // {
        //   title: "• LINK : ",
        //   text: "LISTE ALLE UNSERER PAPIERSORTEN"
        // },
        {
          title: "• Bindung : ",
          text: "Klammerheftung / Sattelheftung, Spiralbindung, Rückenband, Klebebindung / Magazinbindung."
        },
        {
          title: "• Extras : ",
          text: "Cover mit Cellophanierung, hochglanz oder seidenmatt, abwaschbare Laminierung für Speisekarten."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten :",
          text: "Overnight, Express, regular??????"
        },
        {
          title: "• Verwendungszweck : ",
          text: "Fotobücher, Ausstellungskataloge, Portfolios, Kunstprojekte, Diplomarbeiten, Speisekarten, Seminarmaterialien, Vereinszeitungen, Hochzeitszeitungen, Gebrauchsanleitungen …"
        }
      ]
    }
  },
  {
    id: "lesezeichen",
    name: "Lesezeichen",
    nameList: "Lesezeichen",
    type: "Div. Formate",
    anfrage: false,
    pic: <LesezeichenSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-lesezeichen-mockup-square.webp",
    category: "BuchdruckData",
    description: "persönliches Accessoire oder nettes Geschenk.",
    detailDescription: {
      div: [
        "Ein selbst gestaltetes Lesezeichen ist ein cooles Gimmik für Vielleser*innen - ebenso auch als persönliches Geschenk.",
        "Wir bieten Lesezeichen in den Formaten 55x173 mm oder 50x215 mm oder selbstverständlich auch in Ihrem Wunschformat an, gedruckt auf hochwertiges Colorcopy oder Biotop Papier – einseitig oder doppelseitig. Auf Wunsch auch laminiert oder cellophaniert.",
        "Lesezeichen – unverzichtbares Accessoire für Vielleser*innen."
      ],
      li: [
        {
          title: "• Formate : ",
          text: "55x173 oder 50x215 mm oder Wunschformat."
        },
        {
          title: "• Material : ",
          text: "hochwertiges Qualitätspapier, z.B. Colorcopy 250g oder Biotop 250g."
        },
        {
          title: "• LINK : ",
          text: "LISTE ALLE UNSERER UNSERER PAPIERSORTEN"
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        }
      ]
    }
  },
  {
    id: "rückenbandbindung",
    name: "Rueckenbandbindung",
    nameList: "Rueckenbandbindung",
    type: "Div. Formate",
    pic: <RuckenbandbindungSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-rückenbandbindung-mockup-square.webp",
    anfrage: true,
    category: "BuchdruckData",
    description: "",
    detailDescription: {
      div: [
        "Rückenbandbindung – die hochwertige und schnelle Bindung für Ihre Seminarunterlagen oder Ihre Skripten, in schwarz oder weiß!",
        "Egal ob Seminarunterlagen, Skripten, Gebrauchsanweisungen oder Jahresbericht – Rückenbandbindung ist eine schnelle, stabile und preisgünstige Lösung. Rückenband in schwarz oder weiß mit hochwertigem Leinen, bis 32 mm Stärke des Buchkerns. ",
        "Die Rückenbandbindung ist für alle von uns produzierten Drucksorten als auch für von Ihnen beigestellte Ausdrucke bis zu einer Papierstärke von 120 g für den Kern und 350g für das Cover möglich.",
        "Rückenbandbindung  – hochwertig gebunden, schnell produziert!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A4, bis 30 mm Stärke."
        },
        {
          title: "• Material : ",
          text: "Rückenband in schwarz oder weiß"
        },
        {
          title: "• Papierstärke für den Kern : ",
          text: "maximal 120g."
        },
        {
          title: "⦁	Papier : ",
          text: "alle unsere Standard-Papiersorten sind möglich."
        },
        // {
        //   title: "• LINK : ",
        //   text: "LISTE ALLE UNSERER PAPIERSORTEN"
        // },
        {
          title: "• Extras : ",
          text: "Cellophaniertes Cover."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        },
        {
          title: "•	Verwendungszweck : ",
          text: "Skripten, Gebrauchsanweisungen, Seminarunterlagen, Taschenbücher, Bachelorarbeiten, Doktorarbeiten, Hochzeitsbücher, Geburtstage …"
        }
      ]
    }
  },
  {
    id: "diplomarbeit",
    name: "Diplomarbeit",
    nameList: "Diplomarbeit",
    type: "Div. Formate",
    pic: <DiplomarbeitSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-diplomarbeit-mockup-square.webp",
    anfrage: true,
    category: "BuchdruckData",
    description: "",
    detailDescription: {
      div: [
        "Ihre Diplomarbeit professionell im Hardcover gebunden, mit oder ohne Prägung!",
        "Ihre Diplom- Master- oder Bachelorarbeit binden wir nach den Vorgaben des akademischen Betriebes in einen qualitativ hochwertigen Hardcover-Umschlag. Die Arbeit kann ein- oder doppelseitig, schwarz-weiß oder in Farbe - auch randlos - auf eine Auswahl an Papieren gedruckt werden.",
        "Prägeschrift für das Cover und den Buchrücken in Silber oder Gold. Für den besonderen Auftritt wird Ihre Arbeit in echtes Leinen gebunden, für das eine breite Farbpalette zur Auswahl steht.",
        "Diplomarbeiten  – hochwertig gebunden!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A4."
        },
        {
          title: "• Material : ",
          text: "alle unsere Standard-Papiersorten sind möglich."
        },
        {
          title: "• LINK : ",
          text: "LISTE ALLE UNSERE PAPIERSORTEN"
        },
        {
          title: "• Extras : ",
          text: "randloser Druck für Logos, Grafiken oder Fotos. Titelprägung in Gold oder Silber an Rücken und Cover. Farbiges Leinen für den Einband."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        },
        {
          title: "• Verwendungszweck : ",
          text: "Diplomarbeiten, Bachelorarbeiten, Doktorarbeiten, Hochzeitsbücher, Geburtstage …"
        }
      ]
    }
  },
  {
    id: "softcover-bücher",
    name: "Softcover_Bücher",
    nameList: "Softcover Bücher",
    type: "Div. Formate",
    pic: <SoftcoverBuecherSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-softcover-buch-mockup-square.webp",
    anfrage: true,
    category: "BuchdruckData",
    description: "Taschenbuchbindung – der professionelle Auftritt für Ihr Portfolio, Katalog oder Jahresbericht – schon ab 1 Stück!",
    detailDescription: {
      div: [
        "Portfolio, Katalog, Preisliste, Seminarunterlagen, Skriptum, Gebrauchsanweisung oder Jahresbericht – eine edle Taschenbuchbindung bringt Ihr Druckprojekt auf das nächste Level. Zu einem erstaunlich günstigen Preis!",
        "Bei der Taschenbuchbindung wird der Buchkern in ein umlaufendes Cover eingeleimt. Wir produzieren qualitativ hochwertige Taschenbuchbindungen in Ihrem Wunschformat bis zum Format A3, von 2 bis 48 mm Stärke und bereits ab einer Auflage von 1 Stück! Das durchgehende Cover ermöglicht einen Titel oder andere grafische Elemente am Buchrücken und eröffnet viele Gestaltungsmöglichkeiten. Für den besonders edlen Auftritt kann das Cover cellophaniert werden – seidenmatt oder hochglanz.",
        "Die Taschenbuchbindung ist für alle von uns produzierten Drucksorten bis zu einer Papierstärke von 160 g für den Kern und 350g für das Cover möglich, die maximale gesamte Stärke für den Buchkern beträgt 48 mm.",
        "Taschenbuchbindung – die Premiumbindung für Ihr Projekt, schon ab 1 Stück!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A7, bis A3 und jedes beliebige Wunschformat."
        },
        {
          title: "• Papierstärke für den Kern : ",
          text: "maximal 160g."
        },
        {
          title: "• Papierstärke für das Cover : ",
          text: "maximal 350g."
        },
        {
          title: "• Papier : ",
          text: "alle unsere Standard-Papiersorten sind möglich."
        },
        // {
        //   title: "• LINK : ",
        //   text: "LISTE ALLE UNSERER PAPIERSORTEN"
        // },
        {
          title: "• Extras : ",
          text: "Cellophaniertes Cover."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "• Produktionszeiten :",
          text: "Express, regular??????"
        },
        {
          title: "• Verwendungszweck : ",
          text: "Kataloge, Kunstprojekte, Gedichtbände, Portfolios, Preislisten, Seminarunterlagen, Skripten, Jahresberichte, Gebrauchsanweisungen, Seminarunterlagen, Taschenbücher, Bachelorarbeiten, Doktorarbeiten, Hochzeitsbücher, Geburtstage …"
        }
      ]
    }
  }
]

const KlebebuchstabenData = [
  {
    id: "etiketten",
    name: "Etiketten",
    nameList: "Etiketten",
    type: "Div. Formate",
    pic: <EtikettenSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-etiketten-mockup-square.webp",
    anfrage: true,
    category: "KlebebuchstabenData",
    description:
      "Auch in Zeiten des Computers und der digitalen Kommunikation, bleiben klassische Visitenkarten ein fester Bestandteil des Alltags. Das Teilen der wichtigsten Daten, E-Mail und Telefonnummer auf einer Visitenkarte nach einem kurzen Gespräch in der Bar oder auf einer Messe sind immer noch maßgeblich am erfolgreichen Vernetzen von Kontakten beteiligt. Teleprint bietet eine Vielzahl an Materialoptionen an, die von modernen Druckmaschinen und genauester Präzision bedruckt werden, um die perfekte Visitenkarte herzustellen. Falls Ihnen eine ein- oder beidseitig bedruckte Visitenkarte zu wenig ist, können Sie sich ebenfalls für eine Klappvisitenkarte (quadratische Karte) entscheiden. olor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
  },
  {
    id: "klebebuchstaben",
    name: "Klebebuchstaben",
    nameList: "Klebebuchstaben",
    type: "Div. Formate",
    pic: <KlebebuchstabenSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-klebebuchstaben-mockup-square.webp",
    anfrage: true,
    category: "KlebebuchstabenData",
    description: "Ihr Schriftzug nach individuellen Wünschen in jeder Größe.",
    detailDescription: {
      div: [
        "Ihr Werbeslogan am Schaufenster, das Firmenlogo am Auto, einfache Beschriftungen Ihrer Bürotüren, Wallstickers, Ausstellungstexte … Klebebuchstaben, Schriftzüge oder Logos auf Plotterfolie haben fast unbeschränkte Anwendungsmöglichkeiten.",
        "Unser hochpräziser Mimaki-Plotter verarbeitet Plotterfolien ab Rolle bis 135 cm, Ihr Schriftzug kann bis 135 cm hoch sein! Gespiegelte Logos und Schriften zur innenseitigen Montage auf Ihr Schaufenster oder Ihre Fensterfläche. Wir liefern Ihre Klebebuchstaben auf professioneller Transferfolie – zur einfachen und problemlosen Anbringung auf der gewünschten Fläche. Für ihre individuellen Klebebuchstaben und Logos steht eine große Auswahl an Plotterfolien zur Verfügung: von transparenten Folien im eleganten Sandstrahl-Look über edles Mattschwarz bis zur luxuriösen Goldfolie.",
        "Klebebuchstaben  – effektives Werbemittel mit unbeschränkten Möglichkeiten : "
      ],
      li: [
        {
          title: "• Formate : ",
          text: "Schriftzüge und Logos in jeder beliebigen Wunschgröße - maximale Zeichenhöhe: 135 cm!"
        },
        {
          title: "• Material : ",
          text: "hochwertige PVC Plotterfolie. Große Farbauswahl."
        },
        {
          title: "• Beidseitige Montage möglich : ",
          text: "gespiegelte Logos und Schriften zur innenseitigen Anbringung auf Fensterflächen."
        },
        {
          title: "• Kinderleichte Montage : ",
          text: "Wir liefern Ihren Schriftzug auf Transferfolie – zur einfachen und problemlosen Übertragung auf Ihre Wunschfläche."
        },
        {
          title: "• Extras : ",
          text: "Transparente Folie im Sandstrahl-Look."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "• Produktionszeiten :",
          text: "Express, regular??????"
        }
      ]
    }
  },
  {
    id: "klebefolien",
    name: "Klebefolien",
    nameList: "Klebefolien",
    type: "Div. Formate",
    pic: <KlebefolienSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-flyer-mockup-square.webp",
    anfrage: true,
    category: "KlebebuchstabenData",
    description: "Schriftzüge nach Ihren individuellen Wünschen in jeder Größe.",
    detailDescription: {
      div: [
        "Ihr Werbeslogan am Schaufenster, das Firmenlogo am Auto, einfache Beschriftungen Ihrer Bürotüren, Wallstickers, Ausstellungstexte … Klebebuchstaben, Schriftzüge oder Logos auf Plotterfolie haben fast unbeschränkte Anwendungsmöglichkeiten.",
        "Unser hochpräziser Mimaki-Plotter verarbeitet Plotterfolien ab Rolle bis 135 cm, Ihr Schriftzug kann bis 135 cm hoch sein! Gespiegelte Logos und Schriften zur innenseitigen Montage auf Ihr Schaufenster oder Ihre Fensterfläche. Wir liefern Ihre Klebebuchstaben auf professioneller Transferfolie – zur einfachen und problemlosen Anbringung auf der gewünschten Fläche. Für ihre individuellen Klebebuchstaben und Logos steht eine große Auswahl an Plotterfolien zur Verfügung: von transparenten Folien im eleganten Sandstrahl-Look über edles Mattschwarz bis zur luxuriösen Goldfolie.",
        "Klebebuchstaben – effektives Werbemittel mit unbeschränkten Möglichkeiten : "
      ],
      li: [
        {
          title: "• Formate : ",
          text: "Schriftzüge und Logos in jeder beliebigen Wunschgröße - maximale Zeichenhöhe: 135 cm!"
        },
        {
          title: "• Material : ",
          text: "hochwertige PVC Plotterfolie. Große Farbauswahl."
        },
        {
          title: "• Beidseitige Montage möglich : ",
          text: "gespiegelte Logos und Schriften zur innenseitigen Anbringung auf Fensterflächen."
        },
        {
          title: "• Kinderleichte Montage : ",
          text: "Wir liefern Ihren Schriftzug auf Transferfolie – zur einfachen und problemlosen Übertragung auf Ihre Wunschfläche."
        },
        {
          title: "• Extras : ",
          text: "Transparente Folie im Sandstrahl-Look."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        }
      ]
    }
  },
  {
    id: "sticker",
    name: "Sticker",
    nameList: "Sticker",
    type: "Div. Formate",
    pic: <StickerSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-sticker-mockup-square.webp",
    anfrage: true,
    category: "KlebebuchstabenData",
    description: "Aufkleber: Etikett, Logo oder Dekosticker - rechteckig, rund und in jeder beliebigen Form!",
    detailDescription: {
      div: [
        "Ihr Firmenlogo auf Ihren Produkten, Etiketten für Ihre Produktsortiment, originelle Werbesticker als Give-Aways, Veranstaltungen … Aufkleber sind ein unverzichtbares und effektives Werbemedium im Geschäftsalltag.",
        "Wir produzieren Ihre Aufkleber in jeder beliebigen Form: rund, oval, rechteckig, sechseckig, sternförmig oder nach ihren individuellen Vorgaben - vom Miniformat bis zum XXXL-Sticker. Ihre Sticker werden auf weiße oder transparente Klebefolie, gänzend oder matt gedruckt, sind lichtecht und wischfest. Unser Mimaki-Plotter schneidet auch komplizierteste Stanzformen in höchster Präzision.",
        "Wir produzieren auf Rollenmaterial. Produktetiketten oder Werbesticker in höheren Auflagen können wir durch optimale Materialausnutzung preisgünstig anbieten!",
        "Aufkleber für Werbung, Logos, Etiketten – schnell und preiswert? Mission possible!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "rund, oval, rechteckig, sechseckig, sternförmig oder nach ihren individuellen Vorgaben. Jedes Format und jede Größe ist möglich!"
        },
        {
          title: "• Material : ",
          text: "hochwertige abriebfeste Klebefolie, matt oder glänzend, weiß und transparent. Klebepapier."
        },
        {
          title: "• Extras : ",
          text: "Transparente Stickerfolie."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück, bei Rollenmaterial Mindestbestellmenge 25 cm."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        }
      ]
    }
  }
]

const FotodruckData = [
  {
    id: "fotokalender",
    name: "Kalender",
    nameList: "Fotokalender",
    type: "Fotokalender",
    pic: <FotokalenderSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-foto-kalender-mockup-square.webp",
    anfrage: true,
    category: "FotodruckData",
    description: "",
    detailDescription: {
      div: [
        "Fotokalender – Ihre persönlichen Erinnerungen für das ganze Jahr:",
        "Ihre Lieblingsfotos, Zeichnungen oder Grafiken als edler Jahreskalender, komplett mit Datum und Wochentagen, gedruckt auf hochwertigem Fotopapier, Colorcopy, Magno Gloss oder Biotop Papier. Für das ultimative Finish cellophanieren wir Ihren Kalender hochglänzend oder seidenmatt. Auf Wunsch mit Deckblatt, mit einem zusätzlichen, 13. Motiv.",
        "Ihren Fotokalender produzieren wir spiralgebunden mit Metallspirale in schwarz, weiß oder silbern, mit Spezial-Öse zum Aufhängen an der Wand, gedruckt auf 350g Colorcopy, Magno Gloss oder auf Wunsch auch auf Biotop naturweiß Papier. Neben den Standardformaten A4 hoch oder quer und A3 hoch oder quer drucken wir Ihren Kalender selbstverständlich auch in Ihrem beliebigen Wunschformat bis 32x44 cm.",
        "Sie könne Ihren Kalender von Grund auf selbst gestalten oder einfach Ihre 12 Lieblingsfotos und eine Wunschfarbe für den Hintergrund hochladen.  ",
        "Fotokalender: ein ganzes Jahr Freude - für Sie oder als edles Geschenk für Ihre Liebsten : "
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A4 hoch oder quer, A3 hoch oder quer, Ihr beliebiges Wunschformat."
        },
        {
          title: "• Material : ",
          text: "Color Copy Premiumpapier oder Magno Gloss glänzend 350g, Biotop naturweiß 300g – oder Ihr Wunschpapier."
        },
        {
          title: "• LINK : ",
          text: "LISTE ALLE UNSERE UNSERER PAPIERSORTEN"
        },
        {
          title: "• Extras : ",
          text: "Hochwertige Cellophanierung, hochglanz oder seidenmatt, Perforierung."
        },
        {
          title: "• Datei : ",
          text: "fertiges PDF oder 12/13 Fotos plus Wunschfarbe für den Hintergrund."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten :",
          text: "Overnight, Express, regular??????"
        }
      ]
    }
  },
  {
    id: "fotoposter",
    name: "Fotoposter",
    nameList: "Fotoposter",
    type: "Div. Formate",
    pic: <FotoposterSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-poster-2-mockup-square.webp",
    anfrage: true,
    category: "FotodruckData",
    description: "",
    detailDescription: {
      div: [
        "Seidenmatt, Fotopapier, Leinen – wir drucken Ihr Foto auf Ihr Wunschmedium. Unser Mimaki-Plotter druckt auf Rollenmaterial, so können wir neben den gängigen Formaten bis A0 (84,1x118,9cm) auch jedes von Ihnen gewünschte Sonderformat bis zu einer Breite von 135 cm und einer Länge von 8 m anbieten. Von der Fototapete bis zum gerahmten Poster auf Fotopapier ist alles möglich!",
        "Unsere Druckfarben sind wasserfest und hochgradig lichtbeständig – kein Ausbleichen der Farben im Tageslicht!",
        "Auf Wunsch drucken wir Ihr Bild auf echtes, druckfähiges Leinen, das auf einen Keilrahmen montiert werden kann. Weitere Optionen zur hochwertigen und langlebigen Veredelung Ihres Fotos sind das Aufkaschieren auf Hartschaumplatte oder Alu-Dibond-Platte!",
        "Ihr Fotoposter, gedruckt in brillanter Qualität : "
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A3, A2, A1, A0, sämtliche Wunschformate bis 135cm Breite"
        },
        {
          title: "• Material : ",
          text: "Seidenmattes und glänzendes Fotopapier, Leinen."
        },
        // {
        //   title: "• LINK : ",
        //   text: "LISTE ALLE UNSERER PLAKATMEDIEN"
        // },
        {
          title: "• Extras : ",
          text: "Wetterfeste Laminierung für eine Hängung im Außenbereich. Kaschierung auf Hartschaumplatte, Kaschierung auf Alu-Dibond. Aufspannen auf Keilrahmen."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        },
        {
          title: "• Einsatzbereiche : ",
          text: "Rahmung, Ausstellungen, Präsentationen, Messen, Events…"
        }
      ]
    }
  },
  {
    id: "fototapeten",
    name: "Fototapeten",
    nameList: "Fototapeten",
    type: "Div. Formate",
    pic: <FototapetenSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-fototapete-mockup-square.webp",
    anfrage: true,
    category: "FotodruckData",
    description: "",
    detailDescription: {
      div: [
        "Wir drucken Ihr Foto als Fototapete. Unser Mimaki-Plotter druckt auf 135 cm breites Rollenmaterial, eine oder mehrere Bahnen bis zu einer Länge von 10 m sind möglich.",
        "Unsere Druckfarben sind wasserfest und hochgradig lichtbeständig – kein Ausbleichen der Farben im Tageslicht!",
        "Auf Wunsch drucken wir Ihr Bild auch auf echtes, druckfähiges Leinen, das beispielsweise auf eine Schranktür aufgespannt werden kann.",
        "Die Fototapete – eine neue Dimension für Ihr Lieblingsfoto:"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "Rolle bis 135cm Breite, mehrere Bahnen sind möglich."
        },
        {
          title: "• Material : ",
          text: "Tapete."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        }
      ]
    }
  }
]

const WerbetechnikData = [
  {
    id: "banner-transparente",
    name: "Banner_Transparente",
    nameList: "Banner Transparente",
    type: "Div. Formate",
    pic: <BannerTransparenteSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-banner-mockup-square.webp",
    anfrage: true,
    category: "WerbetechnikData",
    description: "Ihre Botschaft im XXL-Format",
    detailDescription: {
      div: [
        "Ladenschilder, Messen, Kundgebungen, Werbebanner am Baugerüst – wir bringen Ihre Werbebotschaft ins XXL-Format. Wir drucken auf hochwertiger, wetterfester Plane auf einem Mimaki-Plotter mit farbbeständigen, lichtechten Tinten. Die Rollenbreite der Plane beträgt 135 cm, die Länge von 10 m, selbstverständlich ist auch jedes beliebige Sonderformat innerhalb dieser Maße oder ein XXXL Format mit mehreren Bahnen möglich.",
        "Befestigungsösen in zwei Stärken und in der von Ihnen gewünschten Anordnung machen das Aufhängen der Planen zum Kinderspiel.",
        "Kein Limit für die Größe Ihrer Botschaft : "
      ],
      li: [
        {
          title: "• Formate : ",
          text: "Alle Wunschformate bis 135cm Breite und 10m Länge!"
        },
        {
          title: "• Material : ",
          text: "Hochwertige, wetterfester Bannerplane. Lichtechter Druck, geeignet für den Außenbereich."
        },
        {
          title: "• Extras : ",
          text: "Ösen zur problemlosen Aufhängung."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        },
        {
          title: "• Einsatzbereiche : ",
          text: "Veranstaltungen, Präsentationen, Messen, Kundgebungen, Events …"
        }
      ]
    }
  },
  {
    id: "buttons",
    name: "Buttons",
    nameList: "Buttons",
    anfrage: false,
    type: "Div. Formate",
    pic: <ButtonsSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-buttons-mockup-square.webp",
    category: "WerbetechnikData",
    description: "Ihr Logo oder Spruch zum Anstecken.",
    detailDescription: {
      div: [
        "Ihr Firmenlogo, eine Grafik, Motto oder ein Sinnspruch zum Anstecken. Wir produzieren für Sie runde Buttons in hoher Qualität mit 24 mm bis 75 mm Durchmesser. Die Vorlagen werden im Farblaserdruck produziert – alles, was gedruckt werden kann ist auch als Button möglich!",
        "Buttons benötigen produktionsbedingt 5 mm Rand um das Motiv (wichtig bei farbigem Hintergrund!):",
        "24 mm Sichtfläche = Stanzkreis 34 mm",
        "37 mm Sichtfläche = Stanzkreis 47 mm",
        "56 mm Sichtfläche = Stanzkreis 66 mm",
        "75 mm Sichtfläche = Stanzkreis 87 mm ",
        "Buttons – effektvolle Gadgets zum Anstecken : "
      ],
      li: [
        {
          title: "• Formate : ",
          text: "24 / 37 / 56 / 75 mm, runde Sichtfläche"
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück"
        },
        {
          title: "•	Produktionszeiten :",
          text: "Overnight, Express, regular??????"
        },
        {
          title: "• Verwendungszweck :",
          text: "Messen, Gastronomie, Seminare, Spiele, Hochzeiten, Firmenevents …"
        }
      ]
    }
  },
  {
    id: "eintrittskarten",
    name: "Eintrittskarten",
    nameList: "Eintrittskarten",
    type: "Div. Formate",
    pic: <EintrittskartenSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-eintrittskarten-mockup-square.webp",
    anfrage: true,
    category: "WerbetechnikData",
    description: "",
    detailDescription: {
      div: [
        "Professionelle Eintrittskarten für Ihr Konzert oder Ihren Event.",
        "Für Ihr Konzert, Ihr Event oder Ihre Ausstellung produzieren wir Eintrittskarten nach Ihren Vorgaben, auf Wunsch komplett mit Nummerierung und Abriss.",
        "Professionelle Eintrittskarten in Ihrem Wunschformat, vom einfachen Schwarz-Weiß Druck - optional auf buntem Papier in verschiedenen Farben für verschiedene Kategorien - bis zum beidseitigem Farbdruck mit Nummerierung und Perforation für den Abriss – alles ist möglich!",
        "Eintrittskarten – der professionelle Auftritt für Ihren Auftritt!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A4 lang (9,9x21 cm), A5 lang (7x14,8 cm), beliebiges Wunschformat!"
        },
        {
          title: "• Papier : ",
          text: "Color Copy 350g, Magno Gloss glänzend 350g, Biotop naturweiß 300g, Buntpapier in verschiedenen Farben für den SW-Druck."
        },
        {
          title: "• Extras : ",
          text: "laminiert, hochglanz oder seidenmatt. Perforation für einen Abriss."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 5 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        },
        {
          title: "• Verwendungszweck : ",
          text: "Konzerte, Ausstellungen, Messen …"
        }
      ]
    }
  },

  {
    id: "keilrahmen",
    name: "Keilrahmen",
    nameList: "Keilrahmen",
    type: "Div. Formate",
    pic: <KeilrahmenSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-keilrahmen-mockup-square.webp",
    anfrage: true,
    category: "WerbetechnikData",
    description: "",
    detailDescription: {
      div: [
        "Ihr Wunschfoto oder Lieblingsbild wird auf hochwertiges Leinen ausgedruckt. Unser Mimaki-Plotter druckt auf 135 cm breites Rollenmaterial, es sind alle gängigen Formate und jedes beliebige Wunschformat möglich.",
        "Das gedruckte Motiv wird auf einen hochqualitativen Holzkeilrahmen verspannungsfrei aufmontiert. Das aufgespannte Bild kann in einem Rahmen platziert werden und ist ebenso ungerahmt ein attraktiver Blickfang.",
        "Unsere Druckfarben sind wasserfest und hochgradig lichtbeständig – kein Ausbleichen der Farben im Tageslicht!",
        "Ihr Motiv, edel aufgespannt auf einem Keilrahmen:"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "Rolle bis 135cm Breite, jedes Wunschformat ist möglich."
        },
        {
          title: "• Material : ",
          text: "Echtes Leinen."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        }
      ]
    }
  },
  {
    id: "presspappe",
    name: "Presspappe",
    nameList: "Presspappe",
    type: "Div. Formate",
    pic: <PresspappeSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-presspappe-mockup-square.webp",
    anfrage: true,
    category: "WerbetechnikData",
    description:
      "Auch in Zeiten des Computers und der digitalen Kommunikation, bleiben klassische Visitenkarten ein fester Bestandteil des Alltags. Das Teilen der wichtigsten Daten, E-Mail und Telefonnummer auf einer Visitenkarte nach einem kurzen Gespräch in der Bar oder auf einer Messe sind immer noch maßgeblich am erfolgreichen Vernetzen von Kontakten beteiligt. Teleprint bietet eine Vielzahl an Materialoptionen an, die von modernen Druckmaschinen und genauester Präzision bedruckt werden, um die perfekte Visitenkarte herzustellen. Falls Ihnen eine ein- oder beidseitig bedruckte Visitenkarte zu wenig ist, können Sie sich ebenfalls für eine Klappvisitenkarte (quadratische Karte) entscheiden. olor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
  },
  {
    id: "roll-ups",
    name: "Roll_Ups",
    nameList: "Roll Ups",
    type: "Div. Formate",
    pic: <RollupsSvg />,
    anfrage: false,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-rollup-mockup-square.webp",
    category: "WerbetechnikData",
    description: "unverzichtbares Medium für Ihre Veranstaltung und Ihren Messeauftritt.",
    detailDescription: {
      div: [
        "Egal ob Open-Air-Konzert oder Messeauftritt. Ein Rollup ist das ideale Werbebanner für Ihre Message oder Ihr Logo.",
        "Unsere Rollups sind selbststehend und kommen in einem hochwertigen Alugehäuse mit einer praktischen Tragetasche. Gedruckt auf stabiler Bannerplane sind sie stark beanspruchbar, abriebfest und lichtecht – also auch bestens für einen Außeneinsatz geeignet.",
        "Rollups bieten wir in zwei Breiten an:  100 oder 85 cm, Höhe jeweils 200 cm.",
        "Rollups - ihr Logo schnell und mobil präsentiert."
      ],
      li: [
        {
          title: "• Formate : ",
          text: "85x200 cm, 100x200 cm."
        },
        {
          title: "• Material : ",
          text: "hochwertiges Alugehäuse, gedruckt auf lichtbeständige und abriebfeste Bannerplane, inkl. handlicher Tragetasche."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        }
      ]
    }
  },
  {
    id: "schaumplatten",
    name: "Schaumplatten",
    nameList: "Schaumplatten",
    type: "Div. Formate",
    pic: <SchaumplattenSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-schaumplatten-mockup-square.webp",
    anfrage: true,
    category: "WerbetechnikData",
    description: "",
    detailDescription: {
      div: [
        "Kaschieren auf Schaumplatte: vom Poster bis zum Gutschein - hochwertig kaschiert für den perfekten Auftritt.",
        "Das Kaschieren auf Schaumplatte ist der Klassiker unter den Kaschierungen. Schaumplatten sind Verzugsfrei und absolut plan, sehr leicht und auf jedes beliebige Format zuschneidbar. Geeignet für alle Kaschierungen, vom Diplom in A5 bis zum XXXL Messe-Display!",
        "Wir bieten Schaumplatten / Kappaplatten in professioneller Qualität in 5 oder 10 mm Stärke bis zum Format 100x140 cm.",
        "Unser erfahrenes Team kaschiert Ihre Ausdrucke, egal ob Gutschein, Display, Poster oder Einladungskarte professionell und mit höchster Präzision.",
        "Kaschierung auf Schaumplatte – der Klassiker, geeignet für alle Verwendungszwecke!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "alle Formate von A7 bis 100x140 cm sind möglich!"
        },
        {
          title: "• Material : ",
          text: "Schaumplatte / Kappaplatte."
        },
        {
          title: "• Extras : ",
          text: "laminierte Oberfläche. Formate bis 100x140 cm."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        },
        {
          title: "• Verwendungszweck : ",
          text: "Messeauftritte, Poster, Rahmungen, Gutscheine, Diplome, Zeugnisse, Fotokaschierungen, Schaufensterauslagen …"
        }
      ]
    }
  },
  {
    id: "tischkarten",
    name: "Tischkarten",
    nameList: "Tischkarten",
    type: "Div. Formate",
    pic: <TischkartenSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-tischkarten-mockup-square.webp",
    anfrage: true,
    category: "WerbetechnikData",
    description: "Hingucker für die Festtafel oder den Ladentisch!",
    detailDescription: {
      div: [
        "Hingucker für die Festtafel oder den Ladentisch!",
        "Individuell bedruckte Tischkarten in verschiedenen Formaten für Ihr kommendes Geschäftsevent, Geburtstag, Familienfeste oder Ihre Hochzeit.",
        "Namen, Produktbeschreibungen, Preisschilder, mit oder ohne Firmenlogo für die Hochzeitstafel, das Geschäftsregal oder den Tresen. Gedruckt auf stabilem Qualitätspapier, auf Wusch wasserabweisend und abriebfest laminiert.",
        "Tischkarten für Events, Hochzeiten oder Geschäftslokale schnell und preiswert produziert!"
      ],
      li: [
        {
          title: "• Formate : ",
          text: "A7 bis A4 quer, 21 x 21 cm oder nach ihren individuellen Vorgaben."
        },
        {
          title: "• Material : ",
          text: "Color Copy 350g, Magno Gloss glänzend 350g, Biotop naturweiß 300g."
        },
        {
          title: "• Extras : ",
          text: "laminiert, hochglanz oder seidenmatt."
        },
        {
          title: "• Bestellmenge : ",
          text: "ab 1 Stück."
        },
        {
          title: "•	Produktionszeiten : ",
          text: "Express, regular??????"
        },
        {
          title: "• Verwendungszweck : ",
          text: "Events, Seminare, Hochzeiten, Geburtstage, Familienfeiern, Firmenfeiern, Schaufensterauslagen …"
        }
      ]
    }
  }
]

const PackageData = [
  {
    id: 41,
    name: "Visitenkarten",
    type: "100 Visitenkarte beidseitig farbe 350g 20€",
    pic: <FotokalenderSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-visitenkarten-mockup-square.webp",
    anfrage: false,
    category: "Package",
    description: "100 Visitenkarte beidseitig farbe 350g 20€."
  },
  {
    id: 42,
    name: "Package",
    type: "50 Flyer A5 Stk. Beidseitig 160g 25€",
    pic: <FotoposterSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-fotoposter-mockup-square.webp",
    anfrage: false,
    category: "Package",
    description: "50 Flyer A5 Stk. Beidseitig 160g 25€"
  },
  {
    id: 43,
    name: "Flyer",
    type: "100 Flyer A5 Stk. Beidseitig 160g 39€ ",
    pic: <FototapetenSvg />,
    picHover: <FolderSvg />,
    image: "/assets/img/products/teleprint-flyer-mockup-wide.jpg",
    anfrage: false,
    category: "Package",
    description: "100 Flyer A5 Stk. Beidseitig 160g 39€",
    detailDescription: {
      div: [
        "Flyer – Effektive Werbung zum Aktionspreis",
        "Nutzen Sie jetzt unseren exklusiven Aktionspreis für Ihre Werbematerialien! Der Flyer ist nach wie vor eines der beliebtesten und effektivsten Werbemittel. ",
        "Mit unserem aktuellen Angebot erhalten Sie 100 Stück beidseitig bedruckte Flyer auf 160g Color Copy Papier mit einem Rabatt von 30%!",
        "Unser Angebot:"
      ],
      li: [
        {
          title: "- Endformat : ",
          text: "A5"
        },
        {
          title: "- Druck : ",
          text: "4/4c"
        },
        {
          title: "- Material: ",
          text: "Hochwertiges 160g Color Copy Papier."
        },

        {
          title: "- Produktionszeiten : ",
          text: "Ein Werktag"
        },
        {
          title: "- Preis : ",
          text: "€39"
        }
      ]
    }
  }
]

const combinedData = [
  ...WerbedrucksortenData,
  ...BurodrucksortenData,
  ...BuchdruckData,
  ...KlebebuchstabenData,
  ...FotodruckData,
  ...WerbetechnikData,
  ...PackageData
]

export { WerbedrucksortenData, BurodrucksortenData, BuchdruckData, KlebebuchstabenData, FotodruckData, WerbetechnikData, combinedData, PackageData }

//POSTKARTEN;
// SKRIPTEN
// PORTFOLIOS
// SPIRALBÜCHER
// SPIRALBINDUNG
// RÜCKENBANDBINDUNG
// WELLKARTON
// TEXTILDRUCK
// KASCHIEREN
// TASCHENKALENDER

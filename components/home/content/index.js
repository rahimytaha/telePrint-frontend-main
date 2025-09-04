/** @format */

import React, { Component } from "react"
import { Button } from "rsuite"

// components
import BannerSlider from "../components/bannerSlider"
import ProductsComponent from "../components/productsComponent"

// data
import { WerbedrucksortenData, BurodrucksortenData, BuchdruckData, KlebebuchstabenData, FotodruckData, WerbetechnikData } from "../../../data"

export default class Content extends Component {
  state = {
    selectedBanner: "41",
    WerbedrucksortenSlider: {
      title: "Diplomarbeit 20,00 EUR",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      pic: "/assets/img/banner/teleprint-drucksorten-mockup-wide.webp",
      action: "Aktion",
      items: [
        {
          pic: "/assets/img/banner/teleprint-drucksorten-mockup-wide.webp",
          // id: "41",
          id: "visitenkarten",
          title: "Visitenkarten",
          // description: "100 Visitenkarte beidseitig farbe 350g 20€"
          description: "Perfekte Visitenkarten! Individuell, hochwertig. Verschiedene Formate und Materialien."
        },
        {
          pic: "/assets/img/banner/teleprint-folder-wf-6p-mockup-wide.webp",
          // id: 2,
          id: "folder-zfalz-sechs-seitig",
          title: "Folder",
          description: "Multitalent Folder: Elegante Produktbeschreibungen, Einladungen, Programme. Z-Falz, hochwertige Papiersorten, ab 1 Stück. Perfekt für Events und Präsentationen."
        },
        {
          pic: "/assets/img/banner/teleprint-poster-mockup-wide.webp",
          id: "fotoposter",
          title: "Fotoposter",
          description: "Hochwertiger Fotodruck: Seidenmatt, Fotopapier, Leinen – Formate bis 135cm Breite. Wetterfeste Farben. Extras: Laminierung, Kaschierung, Keilrahmen. Ab 1 Stück. Perfekt für Ausstellungen und Events. "
        },
        {
          pic: "/assets/img/banner/teleprint-flyer-mockup-wide.jpg",
          // id: 43,
          id: "flyer",
          title: "Flyer",
          description: "Effektive Werbung mit Flyern: Hochwertige Flyer in verschiedenen Formaten und Materialien, ab 1 Stück. Einseitig oder doppelseitig, glänzend oder matt. Perfekt für Handouts, Veranstaltungen und mehr."
        }
      ]
    },

    BurodrucksortenSlider: {
      title: "Visitenkarten",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      pic: "/assets/img/banner/teleprint-drucksorten-mockup-wide.webp",
      action: "Bestellen",
      items: [
        {
          id: "spiralbuch",
          title: "Spiralbuch",
          pic: "/assets/img/banner/teleprint-spiralblock-mockup-wide.webp",
          description: "Individuell gestaltete Spiralbücher: Perfekt für Büro, Meetings und Werbegeschenke. Verschiedene Formate und Papiersorten, ab 1 Stück. Metallspirale in Schwarz, Weiß oder Silber. Extras: Abrissperforation."
        },
        {
          id: "stempel",
          title: "Stempel",
          pic: "/assets/img/banner/teleprint-stempel-mockup-wide.webp",
          description: "Jedes Unternehmen braucht Stempel: Hochwertige Trodat-Stempel in neun Formaten und drei Farben. Für den Dauereinsatz und den normalen Gebrauch. Bestellmenge ab 1 Stück."
        }
      ]
    },

    BroschurenSlider: {
      title: "Broschüren",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      pic: "/assets/img/banner/teleprint-broschuere-mockup-wide.webp",
      action: "Bestellen",
      items: [
        {
          pic: "/assets/img/banner/teleprint-broschuere-mockup-wide.webp",
          id: "broschüren",
          title: "Broschüren",
          description: "Vielfältige Broschüren-Drucklösungen: Ideal für Kundenmagazine, Speisekarten, Geschäftsberichte und mehr. Verschiedene Formate, Papiere und Bindungen. Von schwarz-weiß bis vollfarbig, ab 1 Stück."
        },
        {
          pic: "/assets/img/banner/teleprint-lesezeichen-mockup-wide.webp",
          id: "lesezeichen",
          title: "Lesezeichen",
          description: "Individuelle Lesezeichen: Hochwertige Lesezeichen in Wunschformat. Colorcopy oder Biotop Papier, ein- oder beidseitig, optional laminiert. Ab 1 Stück."
        }
      ]
    },

    KlebebuchstabenSlider: {
      title: "Klebebuchstaben",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      pic: "/assets/img/banner/teleprint-broschuere-mockup-wide.webp",
      action: "Bestellen",
      items: [
        {
          pic: "/assets/img/banner/teleprint-etiketten-mockup-wide.webp",
          id: "etiketten",
          title: "Etiketten",
          description: "Produktetiketten: Individuell gestaltete Etiketten für Ihre Produkte. Perfekt für Flaschen und mehr. Hochwertige, lichtechte, und wischfeste Klebefolie in jedem Format. Ab 1 Stück."
        },

        {
          pic: "/assets/img/banner/teleprint-sticker-mockup-wide.webp",
          id: "sticker",
          title: "Sticker",
          description: "Individuell in jeder Form und Größe. Hochwertige, lichtechte und wischfeste Klebefolie, matt oder glänzend, weiß oder transparent. Ab 1 Stück. Perfekt für Werbung, Logos und Etiketten."
        }
      ]
    },

    FotodruckSlider: {
      title: "Fotoposter",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      pic: "/assets/img/banner/teleprint-poster-mockup-wide.webp",
      action: "Bestellen",
      items: [
        {
          pic: "/assets/img/banner/teleprint-poster-mockup-wide.webp",
          id: "fotoposter",
          title: "Fotoposter",
          description: "Hochwertiger Fotodruck: Seidenmatt, Fotopapier, Leinen – bis 135 cm Breite. Wetterfeste Farben, optional laminiert, kaschiert oder auf Keilrahmen. Ab 1 Stück. Ideal für Ausstellungen und Events."
        }
      ]
    },

    WerbetechnikSlider: {
      title: "Diplomarbeit 20,00 EUR",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      pic: "/assets/img/banner/teleprint-drucksorten-mockup-wide.webp",
      action: "Aktion",
      items: [
        {
          pic: "/assets/img/banner/teleprint-buttons-mockup-wide.webp",
          id: "buttons",
          title: "Buttons",
          description: "Buttons: Ihr Logo, Grafik oder Motto auf runden Buttons (24-75 mm). Hochwertiger Farblaserdruck, ab 1 Stück. Perfekt für Messen, Events und mehr."
        },
        {
          pic: "/assets/img/banner/teleprint-eintrittskarten-mockup-wide.webp",
          id: "eintrittskarten",
          title: "Eintrittskarten",
          description: "Eintrittskarten: Professionell für Konzerte und Events. Wunschformat, von Schwarz-Weiß bis beidseitigem Farbdruck. Optional nummeriert und perforiert. Ab 5 Stück. Perfekt für Konzerte, Ausstellungen und Messen."
        },
        {
          pic: "/assets/img/banner/teleprint-keilrahmen-mockup-wide.webp",
          id: "keilrahmen",
          title: "Keilrahmen",
          description: "Leinwanddruck: Ihr Wunschfoto auf hochwertigem Leinen, bis 135 cm Breite. Aufgespannt auf einem stabilen Keilrahmen, wasserfest und lichtbeständig. Ab 1 Stück. Perfekt als stilvoller Blickfang."
        },
        {
          title: "Roll Ups",
          description: "Rollups: Perfekt für Open-Air-Konzerte und Messen. Selbststehend, gedruckt auf abriebfester und lichtechter Bannerplane. Formate: 85x200 cm oder 100x200 cm. Inklusive Alugehäuse und Tragetasche. Ab 1 Stück.",
          pic: "/assets/img/banner/teleprint-rollup-mockup-wide.webp",
          id: "roll-ups"
        }
      ]
    }
  }

  bannerSelector = (id) => {
    this.setState({ selectedBanner: id })
  }

  render() {
    const { WerbedrucksortenSlider, BurodrucksortenSlider, BroschurenSlider, KlebebuchstabenSlider, FotodruckSlider, WerbetechnikSlider } = this.state

    return (
      <main>
        <div className="main-page">
          <div className="main-container">
            <div className="main-measurement">
              {/* ///slider Werbedrucksorten/// */}
              <BannerSlider data={WerbedrucksortenSlider} buttonName="Shop" />
              <div className="items-title-wraper">
                <div className="items-title">Werbedrucksorten</div>
              </div>
              {/* //products Werbedrucksorten// */}
              <ProductsComponent data={WerbedrucksortenData} />

              {/* ///slider Burodrucksorten/// */}
              <BannerSlider data={BurodrucksortenSlider} buttonName="Shop" />
              <div className="items-title-wraper">
                <div className="items-title">Bürodrucksorten</div>
              </div>
              {/* //products Burodrucksorten// */}
              <ProductsComponent data={BurodrucksortenData} />

              {/* ///slider Buchdruck/// */}
              <BannerSlider data={BroschurenSlider} buttonName="Shop" />
              <div className="items-title-wraper">
                <div className="items-title">Buchdruck</div>
              </div>
              {/* //products Buchdruck// */}
              <ProductsComponent data={BuchdruckData} />

              {/* ///slider Klebebuchstaben/// */}
              <BannerSlider data={KlebebuchstabenSlider} buttonName="Shop" />
              <div className="items-title-wraper multiple-items-title-wraper">
                <div className="items-title">Etiketten</div>
                <div className="items-title">Klebefolien</div>
                <div className="items-title">Sticker</div>
              </div>
              {/* //products Klebebuchstaben// */}
              <ProductsComponent data={KlebebuchstabenData} />

              {/* ///slider Fotodruck/// */}
              <BannerSlider data={FotodruckSlider} buttonName="Shop" />
              <div className="items-title-wraper">
                <div className="items-title">Fotodruck</div>
              </div>
              {/* //products Fotodruck// */}
              <ProductsComponent data={FotodruckData} />

              {/* ///slider Werbetechnik/// */}
              <BannerSlider data={WerbetechnikSlider} buttonName="Shop" />
              <div className="items-title-wraper">
                <div className="items-title">Werbetechnik</div>
              </div>
              {/* //products Werbetechnik// */}
              <ProductsComponent data={WerbetechnikData} />
            </div>
          </div>
        </div>
      </main>
    )
  }
}
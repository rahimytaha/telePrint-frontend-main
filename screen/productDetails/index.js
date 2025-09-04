/* eslint-disable react/jsx-no-undef */
/** @format */

import React, { Component } from "react"
import { Button } from "rsuite"

import Image from "next/image"

import Link from "next/link"
import Head from "next/head"
import ProductOrderFlyer from "./components/flyer"
import ProductOrderFolder from "./components/folder"
import ProductOrderFolderWickelfalz6Seiten from "./components/folderWickelfalz6Seiten"
import ProductOrderFolderWickelfalz8seiten from "./components/folderWickelfalz8seiten"
import ProductOrderFolderZfalz6Seiten from "./components/folderZfalz6Seiten"
import ProductOrderFolderZfalz8Seiten from "./components/folderZfalz8Seiten"
import ProductOrderKalenderBroschürenkalender from "./components/kalenderBroschuren"
import ProductOrderPlakateLaminiertePlakate from "./components/plakateLaminierte"
import ProductOrderPlandruck from "./components/plandruck"
import ProductOrderStofftaschen from "./components/stofftaschen"
import ProductOrderTShirts from "./components/tShirts"
import ProductOrderPlakateDivFormate from "./components/plakateDivFormate"
import ProductOrderBriefe from "./components/briefe"
import ProductOrderDurchschreibeblöcke from "./components/durchschreibeblocke"
import ProductOrderLoseBlattsammlung from "./components/loseBlattsammlung"
import ProductOrderPersonalisierteBriefe from "./components/personalisierteBriefe"
import ProductOrderSpiralbuch from "./components/spiralblocke"
import ProductOrderStempel from "./components/stempel"
import ProductOrderVisitenkarten from "./components/visitenkarten"
import ProductOrderBuchdruck from "./components/buchdruck"
import ProductOrderBroschüren from "./components/broschuren"
import ProductOrderLesezeichen from "./components/lesezeichen"
import ProductOrderRückenbandbindung from "./components/ruckenbandbindung"
import ProductOrderDiplomarbeit from "./components/diplomarbeit"
import ProductOrderSoftcoverBücher from "./components/softcoverBucher"
import ProductOrderEtiketten from "./components/etiketten"
import ProductOrderKlebebuchstaben from "./components/klebebuchstaben"
import ProductOrderKlebefolien from "./components/klebefolien"
import ProductOrderSticker from "./components/sticker"
import ProductOrderFotokalender from "./components/fotokalender"
import ProductOrderFotoposter from "./components/fotoposter"
import ProductOrderFototapeten from "./components/fototapeten"
import ProductOrderBannerTransparente from "./components/bannerTransparente"
import ProductOrderButtons from "./components/buttons"
import ProductOrderEintrittskarten from "./components/eintrittskarten"
import ProductOrderKeilrahmen from "./components/keilrahmen"
import ProductOrderPresspappe from "./components/presspappe"
import ProductOrderRollUps from "./components/rollUps"
import ProductOrderSchaumplatten from "./components/schaumplatten"
import ProductOrderTischkarten from "./components/tischkarten"
import Package from "./components/package"
export default class Product extends Component {
  state = { data: "", step: 1, meta: "", thisProduct: "" }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getData()
    }
  }

  getData = async () => {
    this.setState({ thisProduct: this.props.data, meta: this.props.meta })
  }

  setStep = (step) => {
    this.setState({ step })
  }

  render() {
    const { thisProduct, step, meta } = this.state
    let regex = new RegExp("Produktionszeiten")
    return (
      <main>
        <div className="main-page">
          {thisProduct ? (
            <div className="main-container">
              <div className="product__section1">
                <div className="main__path-title-product-responsive">
                  {thisProduct.category}/{thisProduct.name}
                  {step === 2 ? "/Datenupload" : ""}
                </div>
                {step === 1 ? (
                  <div className="product-img">
                    <Image layout="fill" src={thisProduct.image} alt={thisProduct.name} quality={100} />
                  </div>
                ) : null}
                {!thisProduct.anfrage ? (
                  <div className="product-content">
                    <div className="main__path-title-product">
                      {thisProduct.category}/{thisProduct.name}
                      {step === 2 ? "/Datenupload" : ""}
                    </div>
                    {step === 1 ? (
                      <div>
                        <h1 className="product__title">{thisProduct.name}</h1>
                        <br />
                        <h6>{thisProduct.type}</h6>
                      </div>
                    ) : null}

                    {thisProduct.id === "flyer" ? <ProductOrderFlyer setStep={this.setStep} /> : ""}
                    {thisProduct.id === "folder-einfach-falz" ? <ProductOrderFolder setStep={this.setStep} /> : ""}
                    {thisProduct.id === "folder-wickelfalz-sechs-seitig" ? <ProductOrderFolderWickelfalz6Seiten setStep={this.setStep} /> : ""}
                    {thisProduct.id === "folder-wickelfalz-acht-seitig" ? <ProductOrderFolderWickelfalz8seiten setStep={this.setStep} /> : ""}
                    {thisProduct.id === "folder-zfalz-sechs-seitig" ? <ProductOrderFolderZfalz6Seiten setStep={this.setStep} /> : ""}
                    {thisProduct.id === "folder-zfalz-acht-seitig" ? <ProductOrderFolderZfalz8Seiten setStep={this.setStep} /> : ""}
                    {thisProduct.id === "stehkalender" ? <ProductOrderKalenderBroschürenkalender setStep={this.setStep} /> : ""}
                    {thisProduct.id === "laminierte-plakate" ? <ProductOrderPlakateLaminiertePlakate setStep={this.setStep} /> : ""}
                    {thisProduct.id === "plandruck" ? <ProductOrderPlandruck setStep={this.setStep} /> : ""}
                    {thisProduct.id === "stofftaschen" ? <ProductOrderStofftaschen setStep={this.setStep} /> : ""}
                    {thisProduct.id === "t-shirts" ? <ProductOrderTShirts setStep={this.setStep} /> : ""}
                    {thisProduct.id === "plakate" ? <ProductOrderPlakateDivFormate setStep={this.setStep} /> : ""}
                    {thisProduct.id === "briefe" ? <ProductOrderBriefe setStep={this.setStep} /> : ""}
                    {thisProduct.id === "durchschreibeblöcke" ? <ProductOrderDurchschreibeblöcke setStep={this.setStep} /> : ""}
                    {thisProduct.id === "lose-blattsammlung" ? <ProductOrderLoseBlattsammlung setStep={this.setStep} /> : ""}
                    {thisProduct.id === "personalisierte-briefe" ? <ProductOrderPersonalisierteBriefe setStep={this.setStep} /> : ""}
                    {thisProduct.id === "spiralbuch" ? <ProductOrderspiralbuch setStep={this.setStep} /> : ""}
                    {thisProduct.id === "stempel" ? <ProductOrderStempel setStep={this.setStep} /> : ""}
                    {thisProduct.id === "visitenkarten" ? <ProductOrderVisitenkarten setStep={this.setStep} /> : ""}
                    {thisProduct.id === "buchdruck" ? <ProductOrderBuchdruck setStep={this.setStep} /> : ""}
                    {thisProduct.id === "broschüren" ? <ProductOrderBroschüren setStep={this.setStep} /> : ""}
                    {thisProduct.id === "lesezeichen" ? <ProductOrderLesezeichen setStep={this.setStep} /> : ""}
                    {thisProduct.id === "rückenbandbindung" ? <ProductOrderRückenbandbindung setStep={this.setStep} /> : ""}
                    {thisProduct.id === "diplomarbeit" ? <ProductOrderDiplomarbeit setStep={this.setStep} /> : ""}
                    {thisProduct.id === "softcover-bücher" ? <ProductOrderSoftcoverBücher setStep={this.setStep} /> : ""}
                    {thisProduct.id === "etiketten" ? <ProductOrderEtiketten setStep={this.setStep} /> : ""}
                    {thisProduct.id === "klebebuchstaben" ? <ProductOrderKlebebuchstaben setStep={this.setStep} /> : ""}
                    {thisProduct.id === "klebefolien" ? <ProductOrderKlebefolien setStep={this.setStep} /> : ""}
                    {thisProduct.id === "sticker" ? <ProductOrderSticker setStep={this.setStep} /> : ""}
                    {thisProduct.id === "fotokalender" ? <ProductOrderFotokalender setStep={this.setStep} /> : ""}
                    {thisProduct.id === "fotoposter" ? <ProductOrderFotoposter setStep={this.setStep} /> : ""}
                    {thisProduct.id === "fototapeten" ? <ProductOrderFototapeten setStep={this.setStep} /> : ""}
                    {thisProduct.id === "banner-transparente" ? <ProductOrderBannerTransparente setStep={this.setStep} /> : ""}
                    {thisProduct.id === "buttons" ? <ProductOrderButtons setStep={this.setStep} /> : ""}
                    {thisProduct.id === "eintrittskarten" ? <ProductOrderEintrittskarten setStep={this.setStep} /> : ""}
                    {thisProduct.id === "keilrahmen" ? <ProductOrderKeilrahmen setStep={this.setStep} /> : ""}
                    {thisProduct.id === "presspappe" ? <ProductOrderPresspappe setStep={this.setStep} /> : ""}
                    {thisProduct.id === "roll-ups" ? <ProductOrderRollUps setStep={this.setStep} /> : ""}
                    {thisProduct.id === "schaumplatten" ? <ProductOrderSchaumplatten setStep={this.setStep} /> : ""}
                    {thisProduct.id === "tischkarten" ? <ProductOrderTischkarten setStep={this.setStep} /> : ""}

                    {thisProduct.id === 41 ? <Package type="vistCard" setStep={this.setStep} /> : ""}
                    {thisProduct.id === 42 ? <Package type="A5" setStep={this.setStep} /> : ""}
                    {thisProduct.id === 43 ? <Package type="A6" setStep={this.setStep} /> : ""}
                  </div>
                ) : (
                  <div className="product-order">
                    <div className="main__path-title-product">
                      {thisProduct.category}/{thisProduct.name}
                      {step === 2 ? "/Datenupload" : ""}
                    </div>
                    {step === 1 ? (
                      <div className="product__title">
                        {thisProduct.name}
                        <br />
                        <h6>{thisProduct.type}</h6>
                      </div>
                    ) : null}

                    <div className="product__button flex-j-s">
                      <Button appearance="primary">
                        <Link href={`/anfrage?name=${thisProduct.name}`}>Anfrage</Link>
                      </Button>
                      {/* <Button>
                        <a href="#Beschreibung">Beschreibung</a>
                      </Button> */}
                    </div>
                  </div>
                )}
              </div>
              <div id="Beschreibung" className="product__section2">
                <div className="product-content">
                  <div className="describe-product__title"> Beschreibung </div>
                  {meta && meta.content ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: meta.content
                      }}
                    ></div>
                  ) : (
                    <>
                      {thisProduct?.detailDescription ? (
                        <>
                          {thisProduct?.detailDescription &&
                            thisProduct?.detailDescription.div.map((x, i) => {
                              return (
                                <div className="describe-product__text" key={i}>
                                  {x}
                                </div>
                              )
                            })}
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center"
                            }}
                          >
                            <ul style={{ width: "90%" }} className="describe-product__text">
                              {thisProduct?.detailDescription &&
                                thisProduct?.detailDescription?.li &&
                                thisProduct?.detailDescription?.li.map((x) => {
                                  return (
                                    <>
                                      <b>
                                        {x.title} {"  "}
                                      </b>

                                      {x.title && regex.test(x.title) ? (
                                        <Link href={`/produktionszeiten`}>
                                          <a style={{ color: "blue" }}>Versand- und Lieferbedingungen</a>
                                        </Link>
                                      ) : (
                                        x.text
                                      )}
                                      <br />
                                      <br />
                                    </>
                                  )
                                })}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <div className="describe-product__text">{thisProduct?.description}</div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    )
  }
}

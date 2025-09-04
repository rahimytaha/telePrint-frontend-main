/** @format */

import React, { Component } from "react"
import { Drawer, Modal } from "rsuite"
import Link from "next/link"
import Logo from "../../../public/assets/svg/mainLogo"
import CloseIcon from "../../../public/assets/svg/close"
import Cookies from "universal-cookie"
const cookies = new Cookies()
import { WerbedrucksortenData, BurodrucksortenData, BuchdruckData, KlebebuchstabenData, FotodruckData, WerbetechnikData } from "../../../data"
import Router from "next/router"
export default class sidenav extends Component {
  state = { data: [], show: false, showLogOutModal: false }
  componentDidMount() {}

  handleLogOut = async () => {
    this.setState({ orderLength: 0 })
    localStorage.clear()
    localStorage.removeItem("personalData")
    localStorage.removeItem("token")
    cookies.remove("token")
    Router.push("/")
    this.props.close()
    this.setState({ showLogOutModal: false })
  }

  logOutModal = () => {
    const { showLogOutModal } = this.state
    return (
      <Modal show={showLogOutModal} onHide={() => this.setState({ showLogOutModal: false })}>
        <Modal.Header>
          <Modal.Title>
            <p className="modal-title">Ausloggen</p>
          </Modal.Title>
          <Modal.Body>
            <p className="modal-title">Sind Sie sich beim Ausstieg sicher?</p>
          </Modal.Body>
          <Modal.Footer>
            <div className="button-footer">
              <button className="outline-button button-style" onClick={() => this.setState({ logOutModal: false })}>
                schließen
              </button>
              <button className="primary-button button-style" onClick={this.handleLogOut}>
                Ausloggen
              </button>
            </div>
          </Modal.Footer>
        </Modal.Header>
      </Modal>
    )
  }
  render() {
    const cookies = new Cookies()
    const token = cookies.get("token")
    const { show, close, orderLength } = this.props
    return (
      <>
        <this.logOutModal />
        <Drawer size={"full"} placement={"top"} show={show} onHide={close} backdrop={true}>
          <Drawer.Header>
            <div className="flex-space-btw w-100">
              <Drawer.Title>
                <Link href="/">
                  <a onClick={close}>
                    <div className="header-left-items">
                      <div className="header-img">
                        <Logo />
                      </div>
                      <div className="header-title-info">
                        <div className="header-title">TelePrint</div>
                        <div className="header-title-details header-title-details-inMenu">Digitaldruck.</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </Drawer.Title>
              <div className="header-right-items header-right-items-inMenu header-right-items-closeMenu">
                {!token ? (
                  <div onClick={close} className="header-options">
                    <Link href="/login">Anmelden</Link>
                  </div>
                ) : null}

                {token ? (
                  <div onClick={close} className="header-options">
                    <Link href="/dashboard/order">Benutzerkonto</Link>
                  </div>
                ) : (
                  ""
                )}

                <div onClick={close} className="header-options">
                  <Link href="/contactUs">Kontakt</Link>
                </div>
                <div onClick={close} className="header-options">
                  <Link href="/">Home</Link>
                </div>
                <div onClick={close} className="menu-icon close-icon">
                  <span>
                    <CloseIcon
                      style={{
                        fontSize: "1em",
                        color: "black",
                        fontWeight: "bold"
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </Drawer.Header>

          <Drawer.Body>
            <div className="menu-page">
              <div className="menu-container">
                <div className="menu-details">
                  <div className="menu-details-up">
                    <div className="menu-details-container">
                      <div className="margin-top-20">
                        <div className="menu-item-title">Werbedrucksorten</div>
                        <div>
                          <ul className="menu-item-name">
                            {WerbedrucksortenData.map((x, i) => {
                              return (
                                <li key={Math.random()} onClick={close}>
                                  {" "}
                                  <Link href={`/produkte/${x.id}`} key={Math.random()}>
                                    <a className="">{x.nameList}</a>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                        <div className="margin-top-20">
                          <div className="menu-item-title">Fotodruck</div>
                          <div className="menu-item-name">
                            {FotodruckData.map((x, i) => {
                              return (
                                <li key={Math.random()} onClick={close}>
                                  {" "}
                                  <Link href={`/produkte/${x.id}`} key={Math.random()}>
                                    <a className="">{x.nameList}</a>
                                  </Link>
                                </li>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="margin-top-20">
                        <div className="menu-item-title">Bürodrucksorten</div>
                        <div>
                          <ul className="menu-item-name">
                            {BurodrucksortenData.map((x, i) => {
                              return (
                                <li key={Math.random()} onClick={close}>
                                  {" "}
                                  <Link href={`/produkte/${x.id}`} key={Math.random()}>
                                    <a className="">{x.nameList}</a>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                        <div className="margin-top-20">
                          <div className="menu-item-title">Buchdruck</div>
                          <ul className="menu-item-name">
                            {BuchdruckData.map((x, i) => {
                              return (
                                <li key={Math.random()} onClick={close}>
                                  <Link href={`/produkte/${x.id}`} key={Math.random()}>
                                    <a className="">{x.nameList}</a>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="margin-top-20">
                        <div className="menu-item-title">Etiketten/Klebefolien/Sticker</div>
                        <div>
                          <ul className="menu-item-name">
                            {KlebebuchstabenData.map((x, i) => {
                              return (
                                <li key={Math.random()} onClick={close}>
                                  <Link href={`/produkte/${x.id}`} key={Math.random()}>
                                    <a className="">{x.nameList}</a>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                        <div className="margin-top-20">
                          <div className="menu-item-title">Werbetechnik</div>
                          <ul className="menu-item-name">
                            {WerbetechnikData.map((x, i) => {
                              return (
                                <li key={Math.random()} onClick={close}>
                                  <Link href={`/produkte/${x.id}`} key={Math.random()}>
                                    <a className="">{x.nameList}</a>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-details-down"></div>
                </div>
                <div className="menu-sidebar">
                  <div className="menu-sidebar-container">
                    <div className="menu-sidebar-items">
                      <div onClick={close} className="menu-sidebar__item-text">
                        <Link href="/">Home</Link>
                      </div>
                    </div>

                    {token ? (
                      <div className="menu-sidebar-items">
                        <div onClick={close} className="menu-sidebar__item-text">
                          <Link href="/cart">Warenkorb</Link>
                        </div>
                        <div className="menu-sidebar-notifications">
                          <div className="numbers-of-sidebar-notifications">{orderLength}</div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {token ? (
                      <div className="menu-sidebar-items">
                        <div onClick={close} className="menu-sidebar__item-text">
                          <Link href="/dashboard/order">Benutzerkonto</Link>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="menu-sidebar-items">
                      <div onClick={close} className="menu-sidebar__item-text">
                        <Link href="/anfrage">Anfrage </Link>
                      </div>
                    </div>
                    <div className="menu-sidebar-items">
                      <div onClick={close} className="menu-sidebar__item-text">
                        <Link href="/contactUs">Kontakt</Link>
                      </div>
                    </div>
                    <div className="menu-sidebar-items">
                      <div className="menu-sidebar__item-text" onClick={close}>
                        <Link href="/blogs">Blog</Link>
                      </div>
                    </div>

                    {/* <div className="menu-sidebar-items">
                      <div className="menu-sidebar__item-text">
                        <a href="mailto:print@teleprint.at">Email</a>
                      </div>
                    </div>
                    <div className="menu-sidebar-items">
                      <div className="menu-sidebar__item-text">
                        <a href="tel:+4315243256">Telefon</a>
                      </div>
                    </div> */}
                    <div className="menu-sidebar-items">
                      <div className="menu-sidebar__item-text" onClick={close}>
                        <Link href="/weitereLeistungen">Weitere Leistungen</Link>
                      </div>
                    </div>
                    <div className="menu-sidebar-items">
                      <div className="menu-sidebar__item-text" onClick={close}>
                        <Link href="/selbstbedienung">Selbstbedienung</Link>
                      </div>
                    </div>

                    <div className="menu-sidebar-items">
                      <div onClick={close} className="menu-sidebar__item-text">
                        <Link href="/reklamation">Reklamation</Link>
                      </div>
                    </div>

                    <div className="menu-sidebar-items">
                      <div onClick={close} className="menu-sidebar__item-text">
                        <Link href="/aboutUs">Über uns </Link>
                      </div>
                    </div>
                    {!token ? (
                      <div className="menu-sidebar-items">
                        <Link prefetch={false} href="/login" passHref>
                          <div onClick={close} className="menu-sidebar__item-text">
                            Anmelden
                          </div>
                        </Link>
                      </div>
                    ) : (
                      <div className="menu-sidebar-items">
                        <div onClick={() => this.setState({ showLogOutModal: true })} className="menu-sidebar__item-text">
                          Ausloggen
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Drawer.Body>
        </Drawer>
      </>
    )
  }
}

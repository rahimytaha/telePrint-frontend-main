import React, { Component } from "react"
import Link from "next/link"

export default class index extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-container">
          <div className="footer-items">
            <ul>
              <li className="footer__color-pallate">
                <span className="footer__dark-color"></span>
                <span className="footer__medium-color"></span>
                <span className="footer__light-color"></span>
              </li>
              <div className="footer-info-container">
                <li className="footer-info">Westbahnstraße 9</li>
                <li className="footer-info"> 1070 Wien </li>
              </div>
              <div className="footer-info-container">
                <li className="footer-info">Mo – Fr</li>
                <li className="footer-info"> 9 bis 18 Uhr </li>
              </div>
              <div className="footer-info-container">
                <li className="footer-info">print@teleprint.at</li>
                <li className="footer-info"> +43  1 524 32 56 </li>
              </div>
              <div className="footer-info-container">
                <Link href={`/produktionszeiten`}>
                  <a className="LinkHover">
                    <li className="footer-info">Versand- und</li>
                    <li className="footer-info">Lieferbedingungen</li>
                  </a>
                </Link>
              </div>
              <div>
                <li className="footer-info">
                  <Link href="/datenschutzerklarung">
                    <a className="LinkHover">
                      <li className="footer-info">Datenschutz</li>
                    </a>
                  </Link>
                </li>
                <li className="footer-info footer-info-plus-margin">
                  <Link href="/impressum">
                    <a className="LinkHover">
                      <li className="footer-info"> Impressum</li>
                    </a>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

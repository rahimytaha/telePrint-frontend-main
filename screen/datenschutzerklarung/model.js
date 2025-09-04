/** @format */

import React, { Component } from "react"
import { Button, Modal } from "rsuite"

//api

export default class Datenschutzerklärung extends Component {
  state = {}

  render() {
    const { show, handleClose } = this.props
    return (
      <Modal size={"md"} show={show} onHide={handleClose}>
        <Modal.Body>
          <main>
            {" "}
            <div className="main-page">
              <div className="main-container">
                <main>
                  <div className="main1-impressum w-100 flex-j-c">
                    <div className="main1-impressum-dad w-90">
                      <div className="main1-impressum-txt1">Datenschutzerklärung</div>
                      <div className="main1-impressum-brdr"></div>
                      <div className="main1-impressum-txt2">
                        Die Mitarbeiter unserer Firma unterliegen den Geheimhalteverpflichtungen des Datenschutzgesetzes.
                      </div>
                      <div className="main1-impressum-txt2">
                        Der Schutz unserer Kundendaten ist uns ein wichtiges Anliegen, sie werden auf Grundlage der gesetzlichen Bestimmungen (DSGVO,
                        TKG 2003) verarbeitet.
                      </div>

                      <div className="main1-impressum-txt5">
                        <strong>Verwendung: </strong>
                      </div>
                      <div className="main1-impressum-txt5">
                        Die Daten werden zur Erfüllung von gesetzlichen Vorschriften und zur Abwicklung des Zahlungsverkehrs sowie zur
                        Vertragserfüllung bzw. zur Durchführung vorvertraglicher Maßnahmen verwendet.
                      </div>
                      <div className="main1-impressum-txt5">
                        Weitergabe der Daten an Dritte erfolgt nicht, ausgenommen sind natürlich die abwickelnden Bankinstitute bzw.
                        Zahlungsdienstleister zum Zweck von Abbuchungen, oder an Transportfirmen zur eventuelle Zustellung der Ware und natürlich auch
                        an unsere Steuerberatungskanzlei zur Erfüllung der steuerrechtlichen Verpflichtungen.
                      </div>

                      <div className="main1-impressum-txt5">
                        <strong>Datenspeicherung: </strong>
                      </div>
                      <div className="main1-impressum-txt5">
                        Wenn Sie per Formular auf der Website oder per E-Mail mit uns Kontakt aufnehmen, werden Ihre angegebenen Daten zwecks
                        Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht
                        ohne Ihre Einwilligung weiter.
                      </div>
                      <div className="main1-impressum-txt5">
                        Wir weisen darauf hin, dass zum Zweck des einfacheren Einkaufsvorganges und zur späteren Vertragsabwicklung vom
                        Webshop-Betreiber die IP- Daten des Anschlussinhabers gespeichert werden, ebenso wie Name, Anschrift, ATU- Nummer,
                        Telefonnummer und EMailadresse des Käufers.
                      </div>
                      <div className="main1-impressum-txt5">
                        Darüber hinaus werden zum Zweck der Vertragsabwicklung folgende Daten auch bei uns gespeichert: Auftragsbezogene Daten,
                        Druckdaten und Druckanforderungen, eventuelle Rückfragen und deren Antworten werden ebenso dokumentiert.
                      </div>

                      <div className="main1-impressum-txt5">
                        Wird der Einkaufsvorgang abgebrochen, werden die bei uns die bis dahin eingegebenen Daten nicht gespeichert.
                      </div>

                      <div className="main1-impressum-txt5">
                        Im Falle einer Auftragserteilung (Vertragsabschluss) werden sämtliche Daten aus dem Vertragsverhältnis bis zum Ablauf der
                        steuerrechtlichen Aufbewahrungsfrist (7 Jahre) gespeichert.
                      </div>

                      <div className="main1-impressum-txt5">
                        Die Daten: Name, Anschrift, der gekauften Waren und das Kaufdatum werden bis zum Ablauf der Produkthaftung (10 Jahre)
                        gespeichert. Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des § 96 Abs 3 TKG sowie des Art 6 Abs 1
                        lit a (Einwilligung) und/oder lit b (notwendig zur Vertragserfüllung) der DSGVO.
                      </div>

                      <div className="main1-impressum-txt5">
                        <strong>Cookies: </strong>
                      </div>
                      <div className="main1-impressum-txt5">Unsere Website verwendet keine so genannten Cookies.</div>
                      <div className="main1-impressum-txt5">
                        <strong>Web-Analyse:</strong>
                      </div>
                      <div className="main1-impressum-txt5">Unsere Website verwendet keinen Webanalysedienst</div>

                      <div className="main1-impressum-txt5">
                        <strong>Ihre Rechte:</strong>
                      </div>
                      <div className="main1-impressum-txt5">
                        Bezüglich Ihrer Daten stehen Ihnen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit,
                        Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre
                        datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde
                        beschweren. In Österreich ist dies die Datenschutzbehörde.
                      </div>
                      <div className="main1-impressum-txt5">
                        Sie haben das Recht auf Auskunft über alle Daten zu Ihrer Person, die von uns verarbeitet werden, sowie das Recht auf
                        Berichtigung oder Löschung oder Einschränkung der Verarbeitung.
                      </div>
                      <div className="main1-impressum-txt5">
                        Sie können verlangen, dass wir Ihnen, oder soweit dies technisch machbar ist, einem von Ihnen bestimmten Dritten - eine Kopie
                        Ihrer Daten, soweit Sie uns diese zur Verfügung gestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format
                        übermitteln.
                      </div>

                      <div style={{ border: "1px solid #777", padding: "3px" }}>
                        <div className="main1-impressum-txt5">
                          <strong>Beschwerderecht :</strong>
                        </div>
                        <div className="main1-impressum-txt5">
                          Beschwerden sind bei einer Aufsichtsbehörde einzureichen. Für Österreich ist dies die österreichische Datenschutzbehörde,
                          Wickenburggasse 8, 1080 Wien, Tel. +43 1 52 152-0, E-Mail: dsb@dsb.gv.at, Web: https//www.dsb.gv.at/
                          <br />
                          Nähere Informationen finden Sie auch auf: wko.at/datenschutz
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>{" "}
            </div>
          </main>
        </Modal.Body>

        <Modal.Footer>
          <div className="button-footer">
            <Button className="outline-button button-style" onClick={handleClose}>
              schließen
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    )
  }
}

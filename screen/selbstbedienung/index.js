import Image from "next/image"

const Selbstbedienung = () => {
  return (
    <div className="grid-page-content">
      <div className="image-container">
        <div className="image-show-content">
          <Image src="/assets/img/selbstbedienung/1.webp" alt="selbstbedienung" layout="fill" />
        </div>
        <div className="image-show-content">
          <Image src="/assets/img/selbstbedienung/2.webp" alt="selbstbedienung" layout="fill" />
        </div>
      </div>
      <div className="text-content">
        <h1 className="title-box">Selbstbedienung</h1>
        <p>
          Wir bieten zwei moderne Minolta-Kopierer für Ihre Kopien in Selbstbedienung. Gerne laden wir Ihre Kopierkarte mit einem beliebigen Betrag je
          nach Ihrem Bedarf auf.
        </p>
        <div className="pricing">
          <h4>Kopien in Selbstbedienung:</h4>
          <table>
            <tr>
              <th>Format</th>
              <th>Preis</th>
            </tr>
            <tr>
              <td>A4 SW</td>
              <td>€ 0,15</td>
            </tr>
            <tr>
              <td>A3 SW</td>
              <td>€ 0,30</td>
            </tr>
            <tr>
              <td>A4 Farbe</td>
              <td>€ 0,42</td>
            </tr>
            <tr>
              <td>A3 Farbe</td>
              <td>€ 0,84</td>
            </tr>
          </table>
          <p>Ein Karteneinsatz von € 3,- ist separat zu entrichten.</p>
        </div>
      </div>
    </div>
  )
}

export default Selbstbedienung

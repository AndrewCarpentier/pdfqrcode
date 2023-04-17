import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./components/PDFFile";

function App() {

  const event = {
    title : "Concert de musique",
    location : "Gare Saint Sauveur Lille, 17 Boulevard Jean-Baptiste Lebas, 59800 Lille, France",
    date: "Mardi 16 octobre 2018 de 09:00 à 17:00 (heure : France)",
    price: "Commande gratuite",
    infoCommand: "Commande N° 835038696. Commandé par andrew carpentier le 3 octobre 2018 17:21",
    infoName: "andrew carpentier",
    img: "https://icisete.fr/wp-content/uploads/2020/12/Concert-Sete-750x375.jpg"
  }

  return (
      <div>
        <PDFDownloadLink document={<PDFFile event={event}/>} fileName="PDFFILE">
          {({loading})=> (loading? <button>Loading document...</button> : <button>Download</button>)}
        </PDFDownloadLink>
      </div>
  );
}

export default App;

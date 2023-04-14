import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./components/PDFFile";
import Qrcode from "./components/QrCode";

function App() {

  return (
      <div>
        <PDFDownloadLink document={<PDFFile/>} fileName="PDFFILE">
          {({loading})=> (loading? <button>Loading document...</button> : <button>Download</button>)}
        </PDFDownloadLink>
        <Qrcode></Qrcode>
      </div>
  );
}

export default App;

import { QRCodeSVG  } from "qrcode.react";

const Qrcode = ()=>{
  const qrcode = (
    <QRCodeSVG 
      id="qrCode"
      value="andrew carpentier test EvenMaster qrcode"
      size={150}
      level={"L"}
    />
  );

  return (
    <>{qrcode}</>
  );
};


export default Qrcode;
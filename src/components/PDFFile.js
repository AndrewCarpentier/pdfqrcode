import { Page, Text, View, Image, Document, StyleSheet} from "@react-pdf/renderer";
import Qrcode from "qrcode";
import {useState} from 'react';


const styles = StyleSheet.create({
    body:{
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 50,
    },
    logo:{
        fontSize: 18,
        textAlign: "left",
        color: "#6a89cc",
    },
    image:{
        marginVertical: 15,
        marginHorizontal: 100,
    },
    container:{
        border: "2px solid #D5DBDB",
        height: "auto",
    },
    title:{
        fontSize: 20,
        fontWeight: 800,
        marginHorizontal: 15

    },
    location:{
        fontSize: 10,
        marginTop: 40,
        marginHorizontal: 15

    },
    date:{
        fontSize: 10,
        marginVertical: 20,
        marginHorizontal: 15

    },
    price:{
        fontSize: 10,
        marginHorizontal: 15

    },
    infoTitle:{
        fontSize: 7,
        color: "#7F8C8D",
        marginTop: 20,
        marginBottom: 5

    },
    info:{
        fontSize: 10,
        
    },
    infoContainer:{
        marginHorizontal: 15,
        width: "60%"
        
    },
    container2:{
        marginVertical: 15
    },
    container3:{
        display: "flex",
        flexDirection: "row"
    },
    nameContainer:{
        marginHorizontal: 15,
        width: "30%"
    },
    nameTitle:{
        fontSize: 7,
        color: "#7F8C8D",
        marginTop: 20,
        marginBottom: 5
    },
    name:{
        fontSize: 10,
    },
    qrcode:{
        width: 200,
    }
});


const PDFFile = ({event}) => {
    const [src, setSrc] = useState("");

    Qrcode.toDataURL(JSON.stringify(event)).then(setSrc);

    return(
        <Document>
            <Page size="A4" style={styles.body}>
                <Text style={styles.logo}>EventMaster</Text>
                <View style={styles.container}>
                    <View style={styles.container2}>
                        <Text style={styles.title}>{event.title}</Text>
                        <Image style={styles.image} src={event.img}/>
                        <Text style={styles.location}>{event.location}</Text>
                        <Text style={styles.date}>{event.date}</Text>
                        <Text style={styles.price}>{event.price}</Text>
                        <View style={styles.container3}>
                            <View style={styles.infoContainer}>
                                <Text style={styles.infoTitle}>Informations de commande</Text>
                                <Text style={styles.info}>{event.infoCommand}</Text>
                            </View>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTitle}>Nom</Text>
                                <Text style={styles.name}>{event.infoName}</Text>
                            </View>
                        <Image style={styles.qrcode} src={src} />
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
};

export default PDFFile;
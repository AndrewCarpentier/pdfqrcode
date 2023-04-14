import { Page, Text, View, Image, Document, StyleSheet} from "@react-pdf/renderer";
import concert from "./image/Concert.jpg";
import Qrcode from "./QrCode";


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
        width: "40%"
        
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
        width: "40%"
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
    image:{
        width: "80%",
        marginHorizontal: "10%",
        maxWidth: "400px",
        marginTop: 10
    },
    qrcode:{
        width: 100,
    }
});


const PDFFile = () => {
    return(
        <Document>
            <Page size="A4" style={styles.body}>
                <Text style={styles.logo}>EventMaster</Text>
                <View style={styles.container}>
                    <View style={styles.container2}>
                        <Text style={styles.title}>Concert de musique</Text>
                        <Image style={styles.image} src={concert}></Image>
                        <Text style={styles.location}>Gare Saint Sauveur Lille, 17 Boulevard Jean-Baptiste Lebas, 59800 Lille, France</Text>
                        <Text style={styles.date}>Mardi 16 octobre 2018 de 09:00 à 17:00 (heure : France)</Text>
                        <Text style={styles.price}>Commande gratuite</Text>
                        <View style={styles.container3}>
                            <View style={styles.infoContainer}>
                                <Text style={styles.infoTitle}>Informations de commande</Text>
                                <Text style={styles.info}>Commande N° 835038696. Commandé par andrew carpentier le 3 octobre 2018 17:21</Text>
                            </View>
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameTitle}>Nom</Text>
                                <Text style={styles.name}>andrew carpentier</Text>
                            </View>
                        <Image style={styles.qrcode} src={`data:image/png;base64,${Qrcode.path}`} ></Image>

                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
};

export default PDFFile;
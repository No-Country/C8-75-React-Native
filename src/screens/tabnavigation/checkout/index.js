import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { From, To, Transport } from "../../../components";
import { styles } from "./styles";
import { useWindowDimensions } from "react-native";

const text = [
  "Barrio Santa Bárbara, Las Torcazas, 1618, General Pacheco, Buenos Aires",
  "Avenida 9 de Julio, Buenos Aires, Argentina",
  "Línea 505 - Interno 34",
  "1h 30m",
  "Horario y fecha de partida",
  "Ahora",
  "Cantidad de tickets",
  "1",
  "$25,50",
];

const CheckoutScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modal2, setModal2] = useState(false);

  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width, height: height }]}>
      <Image
        source={require("../../../../assets/mapconfirm.png")}
        style={styles.image}
      />
      <View style={[styles.content, { width: width }]}>
        <From text={text} />
        <To text={text} />
        <Transport text={text} />
        <TouchableOpacity
          onPress={() => setIsVisible(!isVisible)}
          style={styles.button}
        >
          <Text style={styles.text3}>Comprar ahora</Text>
        </TouchableOpacity>
      </View>
      <Modal 
         transparent={true}
      animationType="slide" visible={isVisible}>
        <View style={styles.centeredView}>
          <Text style={styles.modalText}>Metodo de pago</Text>
          <View style={styles.card}>
            <Text style={styles.text}>Tarjeta</Text>
            <View style={styles.contentCard}>
              <View style={styles.contentIcon}>
                <Image source={require("../../../../assets/payment.png")} />
              </View>
              <View style={styles.contentText}>
                <Text style={styles.text2}>Visa 8032-2354-4565-XXXX</Text>
                <Text style={styles.text2}>Carlos Pérez</Text>
              </View>
            </View>
          </View>
          <View style={styles.presables}>
            <TouchableOpacity
              style={styles.buttonAceptar}
              onPress={() => setModal2(!modal2)}>
              <Text style={styles.textStyle}>Aceptar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonCancelar}
              onPress={() => setIsVisible(!isVisible)}
            >
              <Text style={styles.textCancelar}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal 
       transparent={true}
      animationType="slide" visible={modal2}>
        <View style={styles.centeredView1}>
          <Image source={require("../../../../assets/check.png")} />
          <View style={styles.card1}>
            <Text style={styles.textSuccess1}>¡Compra realizada!</Text>
            <Text style={styles.textSuccess2}>
              A continuación tendrás el ticket a{" "}
            </Text>
            <Text style={styles.textSuccess3}>
              disposición con le código QR.
            </Text>
            <Text style={styles.textSuccess4}>
              Transacción número 8726877238
            </Text>
            <Text style={styles.textSuccess5}>Muchas gracias!</Text>
          </View>
          <View style={styles.presables}>
            <TouchableOpacity
              style={styles.buttonAceptar2}
              onPress={() => navigation.navigate("Ticket")}   
            >
              <Text style={styles.textStyleTicket}>Ver Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CheckoutScreen;

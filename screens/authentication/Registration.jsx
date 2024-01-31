import { TextInput, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./signin.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  WidthSpacer,
  HeightSpacer,
  ReusableBtn,
} from "../../components";

import app from '../../utils/firebase'; // Importa la inicialización de Firebase
import { getFirestore, collection, setDoc, doc, getDoc, updateDoc,getDocs,query,where } from 'firebase/firestore';



// Accede a la base de datos Firestore
const db = getFirestore();

// Referencia a la colección 'user' dentro del documento 'GV0001' en 'GuiaViajero0001'
const userCollectionRef = collection(db, 'UserCollection');

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Required"),

  username: Yup.string()
    .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
    .required("Required"),
  email: Yup.string().email("Proporciona un correo electrónico válido").required("Required"),
});

const Registration = () => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false); // Estado para los términos y condiciones
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false); // Estado para la política de privacidad

  //Conteo de Usuarios 
  const userCounterRef = doc(db, 'StaticsCollection',  'statics');




  const createUser = async (username, email, password, type,name,phone) => {
    try {

      // Verificar si el correo electrónico ya está en uso
    const emailQuery = collection(db, 'UserCollection');
    const emailSnapshot = await getDocs(
      query(emailQuery, where('email', '==', email))
    );

    if (!emailSnapshot.empty) {
      alert('El correo electrónico ya está en uso. Por favor, utiliza otro correo electrónico.');
      return; // Salir de la función si el correo ya está registrado
    }

    // Verificar si el número de teléfono ya está en uso
    const phoneQuery = collection(db, 'UserCollection');
    const phoneSnapshot = await getDocs(
      query(phoneQuery, where('phone', '==', phone))
    );

    if (!phoneSnapshot.empty) {
      alert('El número de teléfono ya está en uso. Por favor, utiliza otro número de teléfono.');
      return; // Salir de la función si el teléfono ya está registrado
    }

      if (!acceptTerms || !acceptPrivacyPolicy) {
        alert('Debes aceptar los términos y condiciones y la política de privacidad.');
      }

      const userCounterSnapshot = await getDoc(userCounterRef);
      let userCount = userCounterSnapshot.data().userCount || 0; // Obtiene el contador actual de usuarios

      // Genera el ID del nuevo usuario con el contador actual
      const userID = `user${(userCount + 1).toString().padStart(4, '0')}`;

      const userCollectionRef = collection(db, 'UserCollection');
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString(); // Obtiene la fecha y hora en formato ISO8601

      // Datos del nuevo usuario
      const newUser = {
        IDUser: userID, // Puedes definir un nuevo ID si es necesario
        // Resto de los datos del nuevo usuario (email, password, etc.)
        name:name,
        username: username,
        email: email,
        password: password,
        typeA: type,
        date: formattedDate,
        phone:phone
        // Otros datos del usuario...
      };

      // Incrementa el contador de usuarios
      userCount++;

      // Actualiza el contador de usuarios en la base de datos
      await updateDoc(userCounterRef, { userCount: userCount });

      // Crear un nuevo documento con el ID especificado
      await setDoc(doc(userCollectionRef, userID), newUser);


    } catch (error) {
      console.error('Error al crear nuevo usuario:', error);
      // Manejar errores de creación de usuario aquí
    }
  };


  return (
    <View style={styles.container}>
      <Formik
       initialValues={{ email: "", password: "", username: "", name: "", phone: "" }} // Agrega los campos de nombre y teléfono a los valores iniciales
       validationSchema={validationSchema}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {({
          handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid,
          setFieldTouched,
        }) => (
          <View style={{ paddingTop: 30 }}>
          
          {/* Nombre */}
          <View style={styles.wrapper}>
              <Text style={styles.label}>Nombre</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.name ? COLORS.black : COLORS.black
                  )}
                >
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={20}
                    color={COLORS.gray}
                  />

                  <WidthSpacer width={10} />

                  <TextInput
                    placeholder="Ingresa tu nombre"
                    onFocus={() => {
                      setFieldTouched("nombre");
                    }}
                    onBlur={() => {
                      setFieldTouched("nombre", "");
                    }}
                    value={values.name}
                    onChangeText={handleChange("name")}
                    autoCapitalize="words"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.name && errors.name && (
                  <Text style={styles.errorMessage}>{errors.name}</Text>
                )}
              </View>
            </View>

            {/* Telefono */}

            <View style={styles.wrapper}>
              <Text style={styles.label}>Telefono</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.phone ? COLORS.black : COLORS.black
                  )}
                >
                  <MaterialCommunityIcons
                    name="phone"
                    size={20}
                    color={COLORS.gray}
                  />

                  <WidthSpacer width={10} />

                  <TextInput
                    placeholder="Ingresa tu telefono"
                    onFocus={() => {
                      setFieldTouched("telefono");
                    }}
                    onBlur={() => {
                      setFieldTouched("telefono", "");
                    }}
                    value={values.phone}
                    onChangeText={handleChange("phone")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.phone && errors.phone && (
                  <Text style={styles.errorMessage}>{errors.phone}</Text>
                )}
              </View>
            </View>




 

            <View style={styles.wrapper}>
              <Text style={styles.label}>Username</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.username ? COLORS.black : COLORS.black
                  )}
                >
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={20}
                    color={COLORS.gray}
                  />

                  <WidthSpacer width={10} />

                  <TextInput
                    placeholder="Ingresa tu username"
                    onFocus={() => {
                      setFieldTouched("username");
                    }}
                    onBlur={() => {
                      setFieldTouched("username", "");
                    }}
                    value={values.username}
                    onChangeText={handleChange("username")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.username && errors.username && (
                  <Text style={styles.errorMessage}>{errors.username}</Text>
                )}
              </View>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.label}>Email</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.email ? COLORS.black : COLORS.black
                  )}
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={COLORS.gray}
                  />

                  <WidthSpacer width={10} />

                  <TextInput
                    placeholder="Ingresa tu email"
                    onFocus={() => {
                      setFieldTouched("email");
                    }}
                    onBlur={() => {
                      setFieldTouched("email", "");
                    }}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
              </View>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.label}>Password</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.password ? COLORS.black : COLORS.black
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={20}
                    color={COLORS.gray}
                  />

                  <WidthSpacer width={10} />

                  <TextInput
                    secureTextEntry={obsecureText}
                    placeholder="Ingresa una password"
                    onFocus={() => {
                      setFieldTouched("password");
                    }}
                    onBlur={() => {
                      setFieldTouched("password", "");
                    }}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      setObsecureText(!obsecureText);
                    }}
                  >
                    <MaterialCommunityIcons
                      name={obsecureText ? "eye-outline" : "eye-off-outline"}
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>
            </View>

            <HeightSpacer height={'3%'} />



            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => setAcceptTerms(!acceptTerms)}
              >
                <MaterialCommunityIcons
                  name={acceptTerms ? 'checkbox-marked' : 'checkbox-blank-outline'}
                  size={24}
                  color={acceptTerms ? COLORS.green : COLORS.black}
                />
                {acceptTerms ? (
                  <MaterialCommunityIcons
                    name='circle'
                    size={12}
                    color={COLORS.green}
                    style={{ marginLeft: 8 }}
                  />
                ) : null}
                <Text style={styles.label}>Acepto los términos y condiciones</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => setAcceptPrivacyPolicy(!acceptPrivacyPolicy)}
              >
                <MaterialCommunityIcons
                  name={acceptPrivacyPolicy ? 'checkbox-marked' : 'checkbox-blank-outline'}
                  size={24}
                  color={acceptPrivacyPolicy ? COLORS.green : COLORS.black}
                />
                {acceptPrivacyPolicy ? (
                  <MaterialCommunityIcons
                    name='circle'
                    size={12}
                    color={COLORS.green}
                    style={{ marginLeft: 8 }}
                  />
                ) : null}
                <Text style={styles.label}>Acepto la política de privacidad</Text>
              </TouchableOpacity>
            </View>

            <ReusableBtn
              onPress={() => createUser(values.username, values.email, values.password, false,values.name,values.phone)}
              btnText={"Registro"}
              width={SIZES.width - 40}
              backgroundColor={COLORS.pink}
              borderColor={COLORS.pink}
              borderWidth={0}
              textColor={COLORS.white}
            />
            <HeightSpacer height={'5%'} />
            <Text style={styles.textContainer}>Lo que buscas, ¡aquí está!</Text>
            <HeightSpacer height={'5%'} />
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require("../../assets/images/logos/whiteLogo.png")}></Image>
            </View>

          </View>




        )}
      </Formik>
    </View>
  );
};

export default Registration;

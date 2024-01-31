import { TextInput, Text, View, TouchableOpacity, Image, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./signin.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS, SIZES } from "../../constants/theme";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { WidthSpacer, HeightSpacer, ReusableBtn } from "../../components";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../../utils/firebase'; // Importa la inicialización de Firebase

// Accede a la base de datos Firestore
const db = getFirestore();

// Referencia a la colección 'user' dentro del documento 'GV0001' en 'GuiaViajero0001'
const userCollectionRef = collection(db, 'UserCollection');


const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  email: Yup.string().email("Provide a valid email").required("Required"),
});

const Signin = () => {

  const [obsecureText, setObsecureText] = useState(false);
  const navigation = useNavigation();


  const goToResetPassword = () => {
    // Aquí iría la lógica para navegar a la pantalla de restablecimiento de contraseña
    // Por ahora, simplemente imprimimos un mensaje en la consola
    navigation.navigate('ResetPasswordScreen');
    // navigation.navigate('ResetPasswordScreen'); // Descomenta esta línea para usar la navegación real
  };

  // Función para el proceso de login
  const loginUser = async (email, password) => {
    try {
      // Obtener referencia a la colección de usuarios
      const usersCollectionRef = collection(db, 'UserCollection');

      // Obtener todos los documentos de la colección de usuarios
      const querySnapshot = await getDocs(usersCollectionRef);

      // Iterar a través de cada documento de usuario
      for (const doc of querySnapshot.docs) {
        const userData = doc.data();

        // Verificar las credenciales para cada usuario
        if ((userData.email === email || userData.username == email) && userData.password === password) {
          // Las credenciales son correctas, el usuario puede iniciar sesión
          Alert.alert('Inicio de sesión exitoso');
          navigation.navigate("WelcomeScreen");
          return { success: true, message: 'Inicio de sesión exitoso' };
        }
      }

      // Si no se encontró un usuario con las credenciales proporcionadas
      Alert.alert('Correo electrónico o contraseña incorrectos');
      return { success: false, message: 'Correo electrónico o contraseña incorrectos' };

    } catch (error) {
      console.error('Error en el proceso de login:', error);
      return { success: false, message: 'Error en el proceso de login' };
    }
  };





  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
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

            <View style={styles.wrapper}>
              <Text style={styles.label}>Email</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.email ? COLORS.blue : COLORS.lightGrey
                  )}
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={COLORS.gray}
                  />

                  <WidthSpacer width={10} />

                  <TextInput
                    placeholder='Ingresa tu email o username'
                    onFocus={() => { setFieldTouched('email') }}
                    onBlur={() => { setFieldTouched('email', "") }}
                    value={values.email}
                    onChangeText={handleChange('email')}
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
                    touched.password ? COLORS.lightBlue : COLORS.lightGrey
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
                    placeholder='Ingresa tu contraseña'
                    onFocus={() => { setFieldTouched('password') }}
                    onBlur={() => { setFieldTouched('password', "") }}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />

                  <TouchableOpacity onPress={() => {
                    setObsecureText(!obsecureText)
                  }}>
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
              <TouchableOpacity onPress={goToResetPassword}>
                <Text style={styles.textContainer}>¿Olvidaste tu contraseña?</Text>
              </TouchableOpacity>
            </View>

            <HeightSpacer height={'5%'} />

            <ReusableBtn
              onPress={() => loginUser(values.email, values.password)}
              btnText={"Enviar"}
              width={SIZES.width - 40}
              backgroundColor={COLORS.pink}
              borderColor={COLORS.blue}
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

export default Signin;

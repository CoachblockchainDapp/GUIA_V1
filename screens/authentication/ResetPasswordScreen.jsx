import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { getAuth, sendPasswordResetEmail, updatePassword } from 'firebase/auth';
import { WidthSpacer, HeightSpacer, ReusableBtn } from "../../components"; // Asumiendo que estos componentes están correctamente definidos
import { COLORS } from '../../constants/theme';
import styles from "./signin.style";

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const auth = getAuth();

  const handlePasswordReset = async () => {
    try {
      // Verificar si el correo existe en la base de datos
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage('Se ha enviado un correo electrónico para restablecer la contraseña.');
    } catch (error) {
      setError('No se pudo enviar el correo electrónico. Verifica tu dirección de correo.');
      console.error('Error al restablecer la contraseña:', error);
    }
  };

  const handleChangePassword = async () => {
    try {
      if (newPassword !== confirmNewPassword) {
        setError('Las contraseñas no coinciden.');
        return;
      }

      // Actualizar la contraseña en Firebase Auth
      const user = auth.currentUser;
      if (user) {
        await updatePassword(user, newPassword);
        setSuccessMessage('Contraseña actualizada correctamente.');
      } else {
        setError('Usuario no encontrado.');
      }
    } catch (error) {
      setError('No se pudo actualizar la contraseña.');
      console.error('Error al cambiar la contraseña:', error);
    }
  };

  return (
    <View style={styles_.container}>
      <Text style={styles_.title}>Recuperar Contraseña</Text>
      <TextInput
        style={styles_.input}
        placeholder="Correo electrónico"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />



      <ReusableBtn
        onPress={() => navigation.navigate('SignIn')}
        btnText="Enviar correo de recuperación"
        width={'80%'}
        backgroundColor={COLORS.pink}
        textColor={'white'}
      />
      <HeightSpacer height={20} />

      <TextInput
        style={styles_.input}
        placeholder="Nueva contraseña"
        onChangeText={(text) => setNewPassword(text)}
        value={newPassword}
        secureTextEntry
      />
      <HeightSpacer height={20} />
      <TextInput
        style={styles_.input}
        placeholder="Confirmar nueva contraseña"
        onChangeText={(text) => setConfirmNewPassword(text)}
        value={confirmNewPassword}
        secureTextEntry
      />


      <ReusableBtn
        onPress={() => navigation.navigate('SignIn')}
        btnText="Actualizar contraseña"
        width={'80%'}
        backgroundColor={COLORS.yellow}
        textColor={'white'}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
      {successMessage && <Text style={styles.successText}>{successMessage}</Text>}

      <ReusableBtn
        onPress={() => navigation.navigate('SignIn')}
        btnText="Regresar a SignIn"
        width={'80%'}
        backgroundColor={COLORS.pink}
        textColor={'white'}
      />
      <HeightSpacer height={40} />
    
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../assets/images/logos/whiteLogo.png")}></Image>
      </View>

    </View>
  );
};

const styles_ = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.green,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.white
  },

  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  successText: {
    color: 'green',
    marginTop: 10,
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default ResetPasswordScreen;



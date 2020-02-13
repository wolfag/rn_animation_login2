import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import logoImg from './asset/logo.png';

const {width, height} = Dimensions.get('screen');
const heightImg = height * 0.7 * 0.4;

export default class SplashComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            delay={150}
            source={logoImg}
            style={styles.logo}
          />
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.title}>Stay connect with everyone!</Text>
          <Text style={styles.text}>Signin with account</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('SigninScreen');
              }}>
              <LinearGradient
                colors={['#5db8fc', '#39cff2']}
                style={styles.startedContainer}>
                <Text style={styles.started}>Get Started</Text>
                <MaterialIcons name="navigate-next" color="white" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05375a',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: heightImg,
    height: heightImg,
  },
  title: {
    color: '#05375a',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text: {
    color: 'grey',
    margin: 5,
  },
  btnContainer: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  startedContainer: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  started: {
    color: 'white',
    fontWeight: 'bold',
  },
});

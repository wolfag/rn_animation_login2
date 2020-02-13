import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import logoImg from './asset/logo.png';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');
const heightImg = height * 0.7 * 0.4;

export default class SignupComponent extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    secureTextEntry: true,
    secureTextEntryConfirm: true,
    emailIsValid: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Welcome Wolfag</Text>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Text style={styles.textFooter}>E-mail</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              value={this.state.email}
              onChangeText={text => {
                this.setState({email: text});
                if (text.length) {
                  this.setState({emailIsValid: true});
                } else {
                  this.setState({emailIsValid: false});
                }
              }}
            />
            {this.state.emailIsValid ? (
              <Animatable.View animation="bounceIn">
                <FontAwesome name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.textFooter, {marginTop: 35}]}>Password</Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              value={this.state.password}
              secureTextEntry={this.state.secureTextEntry}
              onChangeText={text => {
                this.setState({password: text});
              }}
            />
            <FontAwesome
              name={this.state.secureTextEntry ? 'eye-slash' : 'eye'}
              color="grey"
              size={20}
              onPress={() => {
                this.setState({
                  secureTextEntry: !this.state.secureTextEntry,
                });
              }}
            />
          </View>

          <Text style={[styles.textFooter, {marginTop: 35}]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Password"
              style={styles.textInput}
              value={this.state.confirmPassword}
              secureTextEntry={this.state.secureTextEntryConfirm}
              onChangeText={text => {
                this.setState({confirmPassword: text});
              }}
            />
            <FontAwesome
              name={this.state.secureTextEntryConfirm ? 'eye-slash' : 'eye'}
              color="grey"
              size={20}
              onPress={() => {
                this.setState({
                  secureTextEntryConfirm: !this.state.secureTextEntryConfirm,
                });
              }}
            />
          </View>
          <View style={styles.textPrivateContainer}>
            <Text style={[styles.textPrivate]}>
              By signing up you agree to our and
            </Text>
            <Text style={[styles.textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms of Service
            </Text>
            <Text style={styles.textPrivate}> and</Text>
            <Text
              style={[
                styles.textPrivate,
                {
                  fontWeight: 'bold',
                },
              ]}>
              {' '}
              Privacy Policy
            </Text>
          </View>

          <View style={styles.btnContainer}>
            <LinearGradient
              colors={['#5db8fe', '#39cff2']}
              style={styles.signinContainer}>
              <Text style={[styles.textBtn, {color: 'white'}]}>Signup</Text>
            </LinearGradient>
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
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textFooter: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  forgot: {
    color: '#009bd1',
    marginTop: 15,
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  signinContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textBtn: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivateContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  textPrivate: {
    color: 'grey',
  },
});

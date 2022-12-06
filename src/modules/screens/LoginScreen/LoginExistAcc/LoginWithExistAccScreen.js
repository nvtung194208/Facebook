import { useState } from "react"
import { Image, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableHighlight, TouchableOpacity, TouchableOpacityComponent, View } from "react-native"

export default LoginWithExistAccScreen = () => {

  //Fetch exist user
  const existUser = null

  const [isKeyBoardShow, setIsKeyBoardShow] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isPressLoginBtn, setIsPressLoginBtn] = useState(false)
  
  const [password, setPassword] = useState('')
  Keyboard.addListener('keyboardDidShow', () => {
    setIsKeyBoardShow(true)
  })

  Keyboard.addListener('keyboardDidHide', () => {
    setIsKeyBoardShow(false)
  })


  return (
    <SafeAreaView
      style={ styles.body }
    >
      <View
        style={ styles.container }
      >
        <View
          style={[
            styles.imgWrap,
            {
              marginTop: isKeyBoardShow ? 160 : 330
            }
          ]}
        >
          <Image
            source={require('../../../../assets/images/FB-icon.png')}
            style={styles.image}
          />
        </View>
        <View>
          <Image />
          <Text
            style={styles.userName}
          >{existUser ? existUser.name : 'Chu Mạnh Tiến'}</Text>
          
        </View>
        <View
          style={styles.textInputWrap}
        >
          <TextInput
            placeholder="Mật khẩu"
            secureTextEntry={!showPassword}
            value={password ? password : ''}
            style={styles.textInput}
            onChangeText={(newPassword) => {
                setPassword(newPassword)
              }
            }
          />

          {password && (
            <TouchableOpacity
              style={styles.iconShowPasswordWrap}

              onPress={() => {
                setShowPassword(!showPassword)
              }}
            >
              <Text
                style={styles.iconShowPassword}
              >
                {showPassword ? "ẨN" : "HIỂN THỊ"}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableHighlight
          style={isPressLoginBtn ? styles.loginBtnWrapOnPress : styles.loginBtnWrap}
          disabled={!password}
          underlayColor='#ffffff'
          onPress={() => {
            
          }}
          onShowUnderlay={() => {
            setIsPressLoginBtn(true)
          }}
          onHideUnderlay={() => {
            setIsPressLoginBtn(false)
          }}
        >
          <Text
            style={[
              isPressLoginBtn ? styles.titleLoginOnPress : styles.titleLogin,
              !password && styles.titleLoginDisabled
            ]}  
            title="đăng nhập"
          >ĐĂNG NHẬP
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.forgetPasswordWrap}
          underlayColor='#e4e4e4'
          onPress={() => {
              
          }}
        >
          <Text
            style={styles.forgetPassword}
          >Quên mật khẩu?</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#000'
  },

  container: {
    flex: 1,
    width: '85%',
    alignItems: 'center'
  },

  imgWrap: {
    width: 80,
    height: 80,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 70 / 2
  },

  userName: {
    color: '#000',
    marginTop: 12
  },

  textInputWrap: {
    width: '100%',
    marginTop: 25,
    flexDirection: 'row'
  },

  textInput: {
    borderWidth: 0.8,
    borderColor: '#d4d4d7',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 18,
    flex: 1
  },

  iconShowPasswordWrap: {
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  iconShowPassword: {
    color: '#000',
    fontWeight: '700',
    fontSize: 12,
  },

  loginBtnWrap: {
    width: '100%',
    marginTop: 18,
    borderRadius: 4
  },

  loginBtnWrapOnPress: {
    width: '99%',
    marginTop: 18,
    borderRadius: 4,
  },

  forgetPasswordWrap: {
    marginTop: 35,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 7
  },

  forgetPassword: {
    color: '#1267c9',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center'
  },

  titleLogin: {
    textAlign: 'center',
    fontSize: 14,
    backgroundColor: '#1a73db',
    color: '#ffffff',
    borderRadius: 5,
    paddingVertical: 9,
    paddingHorizontal: 2,
    fontWeight: '700',  
  },

  titleLoginOnPress: {
    textAlign: 'center',
    fontSize: 13.8,
    backgroundColor: '#1a73db',
    color: '#ffffff',
    borderRadius: 5,
    paddingVertical: 9.2,
    paddingHorizontal: 2,
    fontWeight: '700',
  },

  titleLoginDisabled: {
    color: '#ced4f0',
    opacity: 0.7
  }
})
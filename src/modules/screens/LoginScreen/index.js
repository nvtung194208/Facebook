import { useScrollToTop } from '@react-navigation/native';
import ScreenNames from 'general/constants/ScreenNames';
import { useEffect } from 'react';
import { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image, 
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableHighlight,
    Modal,
    Pressable
    
} from 'react-native';

import styles from './styles';

const ModalPopup = ({ visibile, modalTitle, modalContent, setVisible }) => {

    const toggleModal = () => {
        if (visibile) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }
    
    useEffect(() => {
        toggleModal()
    }, [visibile])
    return (
        <Modal transparent visible={visibile}>
            <View style={styles.modalBackground}>
                <View style={[styles.modalContainer]}>
                    <View style={styles.modalTitleWrap}>
                        <Text style={styles.modalTitle}>{ modalTitle ? modalTitle : "Modal Title Default"}</Text>
                    </View>
                    <View style={styles.modalContentWrap}>
                        <Text style={styles.modalContent}>{ modalContent ? modalContent : "Modal Content Default slkgjsldfgjs;ldgjlds;fgjfdklgjfdgj"}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.modalExitWrap}
                        onPress={() => {
                            setVisible(false)
                        }}
                    >
                        <Text style={styles.modalExit}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default LoginScreen = ({navigation}) => {
    const [underPhone, setUnderPhone] = useState(false) 
    const [underPassword, setUnderPassword] = useState(false)
    const [pressInPhone, setPressInPhone] = useState(false)
    const [pressInPassword, setPressInPassword] = useState(false)
    const [isKeyBoardShow, setIsKeyBoardShow] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [isLoginBtnPressed, setIsLoginBtnPressed] = useState(false)
    const [isCreateAccPressed, setIsCreateAccPressed] = useState(false)

    const [modalTitle, setModalTitle] = useState("modal title default")
    const [modalContent, setModalContent] = useState("modal content default")
    const [visible, setVisible] = useState()

    Keyboard.addListener('keyboardDidShow', () => {
        setIsKeyBoardShow(true)
    })

    Keyboard.addListener('keyboardDidHide', () => {
        setIsKeyBoardShow(false)
    })


    const login = async (phoneNumber, password) => {
        try {
            const response = await fetch(`http://192.168.1.40:5000/it4788/auth/login`, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phoneNumber,
                    password
                })
            })

            const data = await response.json()
            if (data) {
                console.log(data);

                if (data.code === "1000") {
                    const token = await data.data.token;
                    navigation.navigate(ScreenNames.homeScreen, {token: token})
                    console.log("Đăng nhập thành công, token:  ", token)
                } else if (data.code === "9995" || data.code === "1004") {
                    setModalTitle("Sai thông tin đăng nhập")
                    setModalContent("Tên người dùng hoặc mật khẩu không hợp lệ")
                    setVisible(true)
                } else if (data.code === "1002") {
                    setModalTitle("Thiếu thông tin")
                    setModalContent("Thiếu thông tin tên người dùng hoặc mật khẩu")
                    setVisible(true)
                } 
            } else {
                setModalTitle("Đăng nhập không thành công")
                setModalContent("Rất tiếc, không thể đăng nhập. Vui lòng kiểm tra kết nối Internet.")
                setVisible(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
    
        <SafeAreaView
            behavior={'padding'} 
            style={{
                flex: 1
            }}
        >
            <ModalPopup visibile={visible} setVisible={setVisible} modalTitle={modalTitle} modalContent={modalContent}>
                <View styles={{alignItems: 'center'}}>
                    
                </View>
                
            </ModalPopup>
            <View>
                <View>
                    <Image
                        source={require('../../../assets/images/login.png')}
                        style={ styles.image }
                    />
                </View> 
                <Text style={ styles.languagues }>
                    English - Vietnamese
                </Text>
                <View
                    style={[
                        {
                            marginTop: isKeyBoardShow ? 10 : 47,
                        },
                        styles.inputTextWrap,
                        pressInPhone ? styles.grayBackground : ''
                    ]}
                >
                    <TextInput placeholder='Số điện thoại'
                        style={styles.inputText}

                        value={phoneNumber}
                        onChangeText={(newPhone) => {
                            setPhoneNumber(newPhone)
                        }}

                        // keyboardType='phone-pad'
                        onFocus={() => {
                            setUnderPhone(true)
                            setUnderPassword(false)
                        }}
                        onPressIn={() => {
                            setPressInPhone(true)
                        }}
                        onPressOut={() => {
                            setPressInPhone(false)
                        }}
                    />
                    <View style={styles.under_border_small}></View>
                    <View
                        style={[
                            styles.under_border,
                            underPhone ? '' : styles.hide
                        ]}>        
                    </View>
                </View>
                <View
                    style={[
                        {
                            marginTop: 6,
                        },
                        styles.inputTextWrap,
                        pressInPassword ? styles.grayBackground : ''
                    ]}
                >
                    <TextInput
                        placeholder='Mật khẩu'
                        style={[
                            styles.inputText,
                        ]}
                        value={password}
                        onChangeText={(newPassword) => {
                            setPassword(newPassword)
                        }}

                        onFocus={() => {
                            setUnderPhone(false)
                            setUnderPassword(true)
                        }}
                        secureTextEntry={!showPassword}
                        onPressIn={() => {
                            setPressInPassword(true)
                        }}
                        onPressOut={() => {
                            setPressInPassword(false)
                        }}
                    />
                    <TouchableOpacity
                        style={styles.iconShowPasswordWrap}
                        onPress={() => { 
                            setShowPassword(!showPassword)
                        }}>
                        <Text style={styles.iconShowPassword}>
                            {showPassword ? 'Ẩn' : 'Hiện'}</Text>
                    </TouchableOpacity>
                    <View style={styles.under_border_small}></View>
                    <View style={[
                        styles.under_border,
                        underPassword ? '' : styles.hide
                    ]}>
                    </View>
                </View>
                <TouchableHighlight
                    style={ isLoginBtnPressed ? styles.titleTextLoginWrapUnderlay : styles.titleTextLoginWrap}
                    underlayColor='#999999'
                    activeOpacity={0.9}
                    onPress={() => {
                        console.log("Login: ", phoneNumber, password)
                        login(phoneNumber, password)
                    }}
                    onShowUnderlay={() => {
                        setIsLoginBtnPressed(true)
                    }}
                    onHideUnderlay={() => {
                        setIsLoginBtnPressed(false)
                    }}
                >
                    <Text
                        style={[
                            styles.titleText,
                            isLoginBtnPressed ? styles.titleTextLoginShowUnderlay : styles.titleTextLogin
                        ]}
                    >Đăng nhập</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={ styles.titleTextForgetPasswordWrap }
                    underlayColor='#e4e4e4'
                    onPress={() => {
                        
                    }}
                >
                    <Text
                        style={[
                            styles.titleText,
                            styles.titleTextForgetPassword
                        ]}
                    >Quên mật khẩu?</Text>
                </TouchableHighlight>

                <View
                    style={{
                        marginHorizontal: 40,
                        marginTop: isKeyBoardShow ? 10 : 44
                    }}
                >
                    <View></View>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 13,
                            borderRadius: 5,
                            paddingVertical: 5,
                        }}
                    >HOẶC</Text>
                    <View></View>
                </View>

                <TouchableHighlight
                    style={{
                        marginHorizontal: isCreateAccPressed ? 62 : 60,
                        marginTop: isKeyBoardShow ? 7 : 38
                    }}
                    underlayColor='#bdbdbd'
                    activeOpacity={0.9}
                    onPress={() => {
                        
                    }}
                    onShowUnderlay={() => {
                        setIsCreateAccPressed(true)
                    }}
                    onHideUnderlay={() => {
                        setIsCreateAccPressed(false)
                    }}
                >
                    <Text
                        style={[
                            styles.titleText,
                            isCreateAccPressed ? styles.titleCreateAccIsPressed : styles.titleCreateAcc
                        ]}
                    >Tạo tài khoản Facebook mới</Text>
                </TouchableHighlight>
                {/* <Text>phone: {phoneNumber}</Text>
                <Text>password: {password}</Text> */}
            </View> 
        </SafeAreaView>

    )
}
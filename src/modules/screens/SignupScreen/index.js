import React, { Component, useEffect, useState, useRef } from "react";
import { View, Text, TextInput, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DatePicker from "react-native-date-picker";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-native-phone-number-input";
import ScreenNames from "general/constants/ScreenNames";
import styles from "./styles";


export default function SignupScreen({ navigation }){
	const [lastName, setLastName] = useState('');
	const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState(new Date());
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [checkPhone, setCheckPhone] = useState(true);
    const phoneInput = useRef(null);

    const [field, setField] = useState(0);

    const {control, handleSubmit, formState: {errors} } = useForm()
    const onSubmitName = (data) => {
        setField(field+1);
    };
    const onSubmitEmail = (data) => {
        setField(field+1);
    };

    const onSubmitPhone = () => {
        const checkValid = phoneInput.current?.isValidNumber(phone);
        checkValid && setField(field + 1);
        setCheckPhone(checkValid ? checkValid : false);
    };

    const onSubmitPassword = (data) => {
        setField(field+1);
    };

    const handleRegister = async () => {
        try {
            const response = await fetch(
              'http://192.168.8.121:5000/it4788/auth/signup',{
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name: lastName + firstName,
                  birthday: date,
                  phoneNumber: phone,
                  email: email,
                  password: password,
                })
              }
            );
            const json = await response.json();
            // console.log(json);
            return json.movies;
          } catch (error) {
            console.error(error);
          }
    }
    
    return (
        <View style={styles.wrapper}>
            {field == 0 && 
            <View style={styles.formGroup}>
                <View style={styles.formNavigate}>
                    <Icon 
                    name="arrow-left" 
                    style={styles.icon}
                    />
                    <Text style={styles.formNavigateLabel}>T???o t??i kho???n</Text>
                </View>
                <View>
                    <Image 
                    style={styles.imageSignUp}
                    source={{
                        uri: 'https://cdn.tgdd.vn/Files/2016/05/10/826826/qw_1280x720-800-resize.jpg',
                    }}/>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Tham gia Facebook</Text>
                    <Text style={styles.formNote}>Ch??ng t??i s??? gi??p b???n t???o t??i kho???n m???i sau v??i b?????c d??? d??ng.</Text>
                        
                    <View style={styles.buttonView}>
                    <Button
                    onPress={() => setField(field+1)}
                    title="Ti???p"/>
                    </View>
                </View>
            </View>
            }
            {/* Name */}
            {field == 1 && 
            <View style={styles.formGroup}>
                <View style={styles.formNavigate}>
                    <Icon 
                    name="arrow-left" 
                    style={styles.icon}
                    onPress={() => setField(field-1)}
                    />
                    <Text style={styles.formNavigateLabel}>T??n</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>T??n c???a b???n l?? g???</Text>
                    {errors.firstName && !errors.lastName &&
                        <Text style={styles.errorMessage}>Vui l??ng nh???p t??n c???a b???n.</Text>                        
                    }
                    {!errors.firstName && errors.lastName &&
                        <Text style={styles.errorMessage}>Vui l??ng nh???p t??n c???a b???n.</Text>                        
                    }
                    {errors.firstName && errors.lastName &&
                        <Text style={styles.errorMessage}>Vui l??ng nh???p h??? v?? t??n c???a b???n.</Text>                        
                    }
                    {!errors.firstName && !errors.lastName &&
                        <Text style={styles.formNote}>Nh???p t??n b???n s??? d???ng trong ?????i th???c</Text>                       
                    }
                    
                    <View style={styles.inputGroup}>
                        <Controller
                            control={control}
                            rules={{
                            required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                onBlur={onBlur}
                                placeholder="H???"
                                placeholderTextColor="#8a8b8d"
                                onChangeText={
                                    (lastName) => {
                                        onChange(lastName);
                                        setLastName(lastName)
                                    }
                                }
                                value={value}
                            />
                            )}
                            name="lastName"
                        />
                        <Controller
                            control={control}
                            rules={{
                            required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                placeholder="T??n"
                                placeholderTextColor="#8a8b8d" 
                                onBlur={onBlur}
                                onChangeText={
                                    (firstName) => {
                                        onChange(firstName);
                                        setLastName(firstName)
                                    }
                                }
                                value={value}
                            />
                            )}
                            name="firstName"
                        />
                    </View>
                    <View style={styles.buttonView}>
                    <Button
                    onPress={handleSubmit(onSubmitName)}
                    title="Ti???p"
                    />
                    </View>
                </View>
            </View>
            }
            {/* Birthday */}
            {field == 2 && 
            <View style={styles.formGroup}>
                <View style={styles.formNavigate}>
                    <Icon 
                    name="arrow-left" 
                    style={styles.icon}
                    onPress={() => setField(field-1)}
                    />
                    <Text style={styles.formNavigateLabel}>Ng??y sinh</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Ng??y sinh c???a b???n l?? khi n??o?</Text>
                    <Text style={styles.formNote}>Ch???n ng??y sinh c???a b???n. B???n lu??n c?? th??? ?????t 
                    th??ng tin n??y ??? ch??? ????? ri??ng t?? v??o l??c kh??c.
                    </Text>
                    <View style={styles.inputGroup}>
                        <DatePicker 
                        date={date} 
                        onDateChange={setDate}
                        mode="date"
                        fadeToColor="none"
                        theme="light"
                        />
                    </View>
                    <View style={styles.buttonView}>
                    <Button
                    onPress={() => setField(field+1)}
                    title="Ti???p"/>
                    </View>
                </View>
            </View>
            }
            {/* Phone */}
            {field == 3 && 
            <View style={styles.formGroup}>
                <View style={styles.formNavigate}>
                    <Icon 
                    name="arrow-left" 
                    style={styles.icon}
                    onPress={() => setField(field-1)}
                    />
                    <Text style={styles.formNavigateLabel}>S??? di ?????ng</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Nh???p s??? di ?????ng c???a b???n</Text>
                    {!checkPhone &&
                    <Text style={styles.errorMessage}>
                        Vui l??ng nh???p 1 s??? ??i???n tho???i h???p l???
                    </Text>
                    }

                    <View style={styles.inputGroup}>
                        <PhoneInput
                            ref={phoneInput}
                            style={styles.formInput}
                            defaultValue={phone}
                            defaultCode="VN"
                            onChangeText={setPhone}
                            withDarkTheme
                            containerStyle={styles.formInput}
                        />
                    </View>
                    <View style={styles.buttonView}>
                    <Button
                    onPress={onSubmitPhone}
                    title="Ti???p"/>
                    </View>
                </View>
            </View>
            }
            {/* Email */}
            {field == 4 && 
            <View style={styles.formGroup}>
                <View style={styles.formNavigate}>
                    <Icon 
                    name="arrow-left" 
                    style={styles.icon}
                    onPress={() => setField(field-1)}
                    />  
                    <Text style={styles.formNavigateLabel}>?????a ch??? email</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Th??m email c???a b???n</Text>
                    {errors.email && 
                        <Text style={styles.errorMessage}>Vui l??ng nh???p email h???p l???.</Text>                     
                    }
                    {!errors.email && 
                        <Text style={styles.formNote}>
                            Th??m email gi??p b???n gi??? t??i kho???n c???a m??nh an to??n, 
                            t??m ki???m b???n b?? v?? h??n th??? n???a
                        </Text>                     
                    }
                    
                    <View style={styles.inputGroup}>
                        <Controller
                            control={control}
                            rules={{
                            required: true,
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                onBlur={onBlur}
                                placeholder="Email"
                                placeholderTextColor="#8a8b8d"
                                onChangeText={
                                    (email) => {
                                        onChange(email);
                                        setEmail(email)
                                    }
                                }
                                value={value}
                            />
                            )}
                            name="email"
                        />
                    </View>
                    <View style={styles.buttonView}>
                    <Button
                    onPress={handleSubmit(onSubmitEmail)}
                    title="Ti???p"/>
                    </View>
                </View>
            </View>
            }
        {/* M???t kh???u */}
            {field == 5 && 
            <View style={styles.formGroup}>
                <View style={styles.formNavigate}>
                    <Icon 
                    name="arrow-left" 
                    style={styles.icon}
                    onPress={() => setField(field-1)}
                    />
                    <Text style={styles.formNavigateLabel}>M???t kh???u</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Ch???n m???t kh???u</Text>
                    {errors.password && 
                        <Text style={styles.errorMessage}>
                            M???t kh???u c???a b???n ph???i c?? t???i thi???u 6 ch??? c??i, s??? v?? bi???u t?????ng (nh?? ! v?? %%).
                        </Text>                     
                    }
                    <View style={styles.inputGroup}>
                        <Controller
                            control={control}
                            rules={{
                            required: true,
                            minLength: 6,
                            pattern: /[a-z]*[0-9]*[^a-zA-Z0-9]/
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.formInput}
                                onBlur={onBlur}
                                placeholder="M???t kh???u"
                                placeholderTextColor="#8a8b8d"
                                onChangeText={
                                    (password) => {
                                        onChange(password);
                                        setLastName(password)
                                    }
                                }
                                value={value}
                                
                            />
                            )}
                            name="password"
                        />
                    </View>
                    <View style={styles.buttonView}>
                    <Button
                    onPress={handleSubmit(onSubmitPassword)}
                    title="Ti???p"/>
                    </View>
                </View>
            </View>
            }
            {field == 6 && 
            <View style={styles.formGroup}>
                <View style={styles.formNavigate}>
                    <Icon 
                    name="arrow-left" 
                    style={styles.icon}
                    onPress={() => setField(field-1)}
                    />
                    <Text style={styles.formNavigateLabel}>??i???u kho???n & Quy???n ri??ng t??</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Ho??n t???t ????ng k??</Text>
                    <Text style={styles.formNote}>B???ng c??ch nh???n v??o ????ng k??, b???n ?????ng ?? v???i ... </Text>
                    <View style={styles.buttonView}>
                    <Button
                    onPress={() => {
                        handleRegister();
                        navigation.navigate(ScreenNames.mainTab);
                    }}
                    title="????ng k??"/>
                    </View>
                </View>
            </View>
            }
            
            
        </View>
    );

    
}

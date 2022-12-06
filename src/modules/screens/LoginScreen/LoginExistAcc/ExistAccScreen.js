import ScreenNames from "general/constants/ScreenNames";
import { useState } from "react";
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Icon from 'react-native-vector-icons/Entypo';

export default ExistAccScreen = ({navigation}) => {
  const [isPlusPress, setIsPlusPress] = useState(false)
  const [isSearchPress, setIsSearchPress] = useState(false)
  const [isCreateNewPress, setIsCreateNewPress] = useState(false)
  const [isShowExtendedList, setIsShowExtendedList] = useState(false)

  console.log(navigation)

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>

        <View
          style={styles.imgIconWrap}
        >
          <Image
            source={require('../../../../assets/images/FB-icon.png')}
            style={styles.imageIcon}
          />
        </View>
        {/* Exist Acc */}
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? '#ececec'
                : 'white'
              },
              {
                paddingVertical: 10
              }
          ]}
          
          onPress={() => {
            navigation.navigate(ScreenNames.loginWithExistAccScreen)
          }}
        >
          <View
            style={styles.userExistWrap}
          >
            <View
              style={styles.userImgWrap}
            >
              <Image
                source={require('../../../../assets/images/default_image.jpg')}
                style={styles.userImg}
              />
            </View>
            <Text
              style={{
                paddingHorizontal: 10,
                color: 'black',
                fontWeight: '700',
                fontSize: 15,
                flex: 1
              }}
            >Chu Mạnh Tiến</Text>
            <TouchableHighlight
              onPress={() => {
                setIsShowExtendedList(!isShowExtendedList)
              }}
              underlayColor='#e6f0ff'
              style={{
                padding: 4
              }}
            >
              <Icon
                size={15}
                color='black'
                name="dots-three-vertical"
              />
              
            </TouchableHighlight>
            
            {/* Icons */}
          </View>
        </Pressable>
        
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? '#ececec'
                : 'white'
            },
            styles.plusSearchWrap
          ]}
          onPressIn={() => {
            setIsPlusPress(true)
          }}
          onPressOut={() => {
            setIsPlusPress(false)
          }}
          onPress={() => {

          }}
        >
          <View
            style={isPlusPress ? styles.plusIconWrapPress : styles.plusIconWrap}
          >
            <Icon
              color={'#176ef0'}
              name="plus"
              size={isPlusPress ? 22.5 : 21}
            >

            </Icon>
          </View>
          <Text
            style={styles.plusSearchText}
          >
            Đăng nhập bằng tài khoản khác
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? '#ececec'
                : 'white'
            },
            styles.plusSearchWrap
          ]}
          onPressIn={() => {
            setIsSearchPress(true)
          }}
          onPressOut={() => {
            setIsSearchPress(false)
          }}
          onPress={() => {
            
          }}
        >
          <Text
            style={isSearchPress ? styles.searchIconWrapPress : styles.searchIconWrap}
          >
            <Icon
              color={'#176ef0'}
              name="magnifying-glass"
              size={isSearchPress ? 19 : 18}
            >
            </Icon>
          </Text>
          <Text
            style={styles.plusSearchText}
          >
            Tìm tài khoản
          </Text>
        </Pressable>
      
        <TouchableHighlight
          style={isCreateNewPress ? styles.createNewAccWrapPress : styles.createNewAccWrap}
          onPress={() => {

          }}
          underlayColor='#FFFFFF'
          onPressIn={() => {
            setIsCreateNewPress(true)
          }}
          onPressOut={() => {
            setIsCreateNewPress(false)
          }}
        >
          <Text
            style={isCreateNewPress ? styles.createNewAccPress : styles.createNewAcc}
          >
            TẠO TÀI KHOẢN FACEBOOK MỚI
          </Text>
        </TouchableHighlight>
      </View>
      
      <TouchableWithoutFeedback
        style={[
          styles.container,
          {
            position: 'absolute',
            top: 0,
            left: 0, 
            right: 0,
            bottom: 0,
            backgroundColor: 'gray'
          }
        ]
        }
        onPress ={() => {
          setIsShowExtendedList(false)
        }}
    >
      {isShowExtendedList ?
        <View
          style={styles.extendedListWrap}
        >
          <TouchableHighlight
            underlayColor={'#e8e9ee'}
              onPress={() => {
              
            }}
          >
            <Text
              style={styles.extendedElementText}
            >Xóa lịch sử tin nhắn</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'#e8e9ee'}
            onPress={() => {

            }}
          >
            <Text
              style={styles.extendedElementText}
            >Gỡ tài khoản khỏi thiết bị</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={'#e8e9ee'}
            onPress={() => {
              
            }}
          >
            <Text
              style={styles.extendedElementText}
            >Tắt thông báo đẩy</Text>
          </TouchableHighlight>
          
        </View> : (<></>)
      }
      </TouchableWithoutFeedback>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  container: {
    width: '100%',
    flex: 1
  },
  imgIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 265,
    marginBottom: 23
  },
  imageIcon: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2
  },
  userExistWrap: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 35
  },
  userImgWrap: {
    width: 60,
    height: 60,
  },
  userImg: {
    width: '100%',
    height: '100%',
    borderRadius: 100 / 2,
  },
  userName: {
    paddingHorizontal: 10,
    color: 'black',
    fontWeight: '700',
    fontSize: 15,
    flex: 1
  },

  plusIconWrap: {
    padding: 3.5,
    backgroundColor: '#e6f0ff',
    borderRadius: 5,
    marginRight: 13
  },

  plusIconWrapPress: {
    padding: 2.8,
    backgroundColor: '#e6f0ff',
    borderRadius: 5,
    marginRight:12.8
  },

  plusSearchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 35,
    paddingVertical: 8
  },

  searchIconWrap: {
    padding: 3.5,
    backgroundColor: '#e6f0ff',
    borderRadius: 5,
    marginRight: 13
  },

  searchIconWrapPress: {
    padding: 2.8,
    backgroundColor: '#e6f0ff',
    borderRadius: 5,
    marginRight: 12.8
  },

  plusSearchText: {
    color: '#176ef0',
    fontWeight: '700'
  },

  createNewAccWrap: {
    marginHorizontal: 35,
    position: 'absolute',
    bottom: 32,
    right: 0,
    left: 0
  },

  createNewAccWrapPress: {
    marginHorizontal: 36,
    position: 'absolute',
    bottom: 32,
    right: 0,
    left: 0
  },

  createNewAcc: {
    textAlign: 'center',
    fontWeight: '700',
    paddingVertical: 6,
    color: '#0952ba',
    fontSize: 13.5,
    backgroundColor: '#e6f0ff',
    borderRadius: 5
  },

  createNewAccPress: {
    textAlign: 'center',
    fontWeight: '700',
    paddingVertical: 6.3,
    color: '#0952ba',
    fontSize: 13.36,
    backgroundColor: '#ececec',
    borderRadius: 5
  },

  extendedListWrap: {
    position: 'absolute',
    justifyContent: 'flex-end',
    right: 0,
    top: 420,
    width: 230,
    zIndex: 100,
    backgroundColor: 'white',
    elevation: 20,
    shadowColor: 'BLACK',

    shadowOffset: {
      width: -2,
      height: 4
    },
    shadowRadius: 3,
    shadowOpacity: 0.9,
  },

  extendedElementText: {
    fontSize: 15,
    color: '#000000',
    textAlign: 'left',
    paddingLeft: 18,
    paddingVertical: 12.5
  }
})

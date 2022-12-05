import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function FriendChoiceItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.left_part}>
        <Image style={[styles.avt, { marginLeft: 20 }]} source={props.avt} />
      </View>
      <View style={styles.right_part}>
        <View style={styles.name_container}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.first_button}>
            <Text style={styles.button_text}>Chấp nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.second_button}>
            <Text style={[styles.button_text, { color: 'black' }]}>Xoá</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  left_part: {
    width: '30%',
    height: 100,
    // borderWidth: 1,
    justifyContent: 'center',
  },
  avt: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  right_part: {
    height: 100,
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    // borderWidth: 1,
  },
  name: {
    fontFamily: 'FACEBOLF',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  name_container: {
    flex: 2,
    justifyContent: 'center',
  },
  button_container: {
    display: 'flex',
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  first_button: {
    width: '45%',
    backgroundColor: '#1778F2',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  second_button: {
    width: '45%',
    backgroundColor: '#d4d2d2',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  button_text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
})
import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { FriendDataTest } from 'assets/FriendDataTest'
import FriendChoiceItem from 'modules/components/FriendChoiceItem'
export default function SuggestedFriendView({ navigation }) {
  return (
    <ScrollView>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 20,
          marginVertical: 10,
        }}
      >
        Những người bạn có thể biết
      </Text>
      {FriendDataTest.map((item) => (
        <FriendChoiceItem
          first_button="Thêm bạn bè"
          second_button="Gỡ"
          key={item.id}
          avt={item.avtUrl}
          name={item.name}
        />
      ))}
    </ScrollView>
  )
}
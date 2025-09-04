import React from 'react';
import { TouchableOpacity, View , Text} from 'react-native';

import { AntDesign } from "@expo/vector-icons";
import { styles } from './styles';

export function BuyButton() {
  return (
     <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AntDesign
          name="shoppingcart"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.buttonText}> Buy This</Text>
      </TouchableOpacity>
    </View>
  );
}
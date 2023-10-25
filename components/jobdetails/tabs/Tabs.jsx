import React from 'react';
import styles from './tabs.style';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SIZES } from '../../../constants';

const TabButton = ({name, activeTab, onHandleSearchType})=>{
  <TouchableOpacity style={styles.btn(name, activeTab)} onPress={onHandleSearchType}>
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
}

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={tabs}
        renderItems={({item})=>(
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={()=>setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator
        keyExtractor={item=> item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        />
    </View>
  )
}

export default Tabs
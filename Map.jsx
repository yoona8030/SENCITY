import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet from '@gorhom/bottom-sheet';

const MapScreen = () => {
  const [searchText, setSearchText] = useState('');
  const sheetRef = useRef(null);
  const snapPoints = ['25%', '50%']; // 슬라이더 높이 조절 가능

  return (
    <View style={{flex: 1}}>
      {/* 상단 검색 바 */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="주소 및 야생동물 검색"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* 전체 화면 지도 */}
      <MapView style={{flex: 1}} />

      {/* 하단 슬라이더 (장소/정보 선택 가능) */}
      <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}>
        <View style={styles.sheetContent}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>
            장소 / 정보 선택 영역
          </Text>
          {/* 원하는 내용 여기에 넣기 */}
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    zIndex: 10, // 지도 위에 표시되도록
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  sheetContent: {
    flex: 1,
    padding: 16,
  },
});

export default MapScreen;

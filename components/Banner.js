import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper/src';

let { width } = Dimensions.get('window');

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    setBannerData([
      'https://i0.wp.com/startupbizglobal.com/wp-content/uploads/Maize-Farming-Business-Plan-1.jpg?fit=720%2C400&ssl=1',
      'https://www.agrifarming.in/wp-content/uploads/2015/04/Maize-Farming.jpg',
      'https://www.minimex.co.rw/resources/images/products/Sifted_All_packs-mobile.jpg',
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
        <Swiper
          style={{ height: width / 2 }}
          showButtons={false}
          autoplay={true}
          autoplayTimeout={5}
        >
          {bannerData.map((item) => (
            <Image
              style={styles.imageBanner}
              key={item}
              source={{ uri: item }}
              resizeMode='contain'
            />
          ))}
        </Swiper>
        <View style={{ height: 20 }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  swiper: {
    width: width,
    alignItems: 'center',
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
export default Banner;

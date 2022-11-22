import React from "react";
import { Image, StyleSheet, FlatList, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
import colors from "../assets/colors/colors";

//

const Slide = ({ item }) => {
  return (
    <View>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );
};

const Carousel = ({ images }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  //

  const Footer = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* Render indicator */}
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: colors.primary,
                width: 25,
                height: 5,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.carouselWrapper}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={images}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </View>
  );
};
export default Carousel;

//

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    width,
  },

  indicator: {
    height: 5,
    width: 10,
    backgroundColor: colors.white,
    marginHorizontal: 3,
    borderRadius: 2,
    marginTop: -20,
  },
});

import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

const { width } = Dimensions.get("window");
import colors from "../assets/colors/colors";
import FullscreenModal from "../common/FullscreenModal";
import { GLOBALTYPES } from "../redux/actions/globalTypes";

//

const Slide = ({ item }) => {
  const dispatch = useDispatch();
  //
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        dispatch({ type: GLOBALTYPES.FULL_IMAGE, payload: item.url })
      }
    >
      <Image source={{ uri: item.url }} style={styles.image} />
    </TouchableWithoutFeedback>
  );
};

const Carousel = ({ images }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const { full_image } = useSelector((state) => state.property);

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

      {full_image !== null && <FullscreenModal full_image={full_image} />}
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

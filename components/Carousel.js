import React from "react";
import { Image, StyleSheet, FlatList, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
import colors from "../assets/colors/colors";

const slides = [
  {
    id: "1",
    image: require("../assets/images/one.png"),
    title: "Quality Food",
    subtitle: "Our food taste is second to none, you will surely enjoy it",
  },
  {
    id: "2",
    image: require("../assets/images/two.png"),
    title: "Swift Delivery",
    subtitle:
      "Receive your order in less than an hour or pick specific delivery time",
  },
  {
    id: "3",
    image: require("../assets/images/three.png"),
    title: "Tracking Order",
    subtitle: "Real time tracking will keep you posted about order progress",
  },
  {
    id: "4",
    image: require("../assets/images/one.png"),
    title: "Quality Food",
    subtitle: "Our food taste is second to none, you will surely enjoy it",
  },
  {
    id: "5",
    image: require("../assets/images/two.png"),
    title: "Swift Delivery",
    subtitle:
      "Receive your order in less than an hour or pick specific delivery time",
  },
  {
    id: "6",
    image: require("../assets/images/three.png"),
    title: "Tracking Order",
    subtitle: "Real time tracking will keep you posted about order progress",
  },
];

const Slide = ({ item }) => {
  return (
    <View>
      <Image source={item?.image} style={styles.image} />
    </View>
  );
};

const Carousel = () => {
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
        {slides.map((_, index) => (
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
        data={slides}
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

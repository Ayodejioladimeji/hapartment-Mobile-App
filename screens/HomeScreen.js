import {
  Button,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
// import {  } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";
import MyStatusBar from "../common/MyStatusBar";
import AroundYou from "../components/AroundYou";
import HomepageHeader from "../components/HomepageHeader";
import LagosListings from "../components/LagosListings";
import NewListings from "../components/NewListings";
import SearchComponent from "../components/SearchComponent";

//

const HomeScreen = () => {
  return (
    <View style={styles.homeScreenWrapper}>
      <MyStatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <HomepageHeader />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <SearchComponent />
        <AroundYou />
        <NewListings />
        <LagosListings />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenWrapper: {
    backgroundColor: colors.white,
  },
});

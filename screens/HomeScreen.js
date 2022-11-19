import { Button, View, SafeAreaView, ScrollView } from "react-native";
// import {  } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";
import StatusBar from "../common/MyStatusBar";
import AroundYou from "../components/AroundYou";
import HomepageHeader from "../components/HomepageHeader";
import LagosListings from "../components/LagosListings";
import NewListings from "../components/NewListings";
import SearchComponent from "../components/SearchComponent";

//

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <HomepageHeader />
        <SearchComponent />
        <AroundYou />
        <NewListings />
        <LagosListings />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

import { Button, View, SafeAreaView } from "react-native";
// import {  } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";
import StatusBar from "../common/MyStatusBar";
import AroundYou from "../components/AroundYou";
import HomepageHeader from "../components/HomepageHeader";
import SearchComponent from "../components/SearchComponent";

//

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <HomepageHeader />
      <SearchComponent />
      <AroundYou />
    </SafeAreaView>
  );
};

export default HomeScreen;

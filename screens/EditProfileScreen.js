import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../assets/colors/colors";
import GoBack from "../common/GoBack";

//

const EditProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <GoBack navigation={navigation} title="Edit Profile" />

      <View style={styles.profileWrapper}>
        <View style={styles.profileBox}>
          <Image
            source={require("../assets/images/profile.jpeg")}
            style={styles.profileImage}
          />
          <Text style={styles.nameText}>Ayodeji Oladimeji</Text>
          <Text style={styles.usernameText}>@Layobright</Text>
        </View>
      </View>

      <View style={styles.editProfileBox}>
        <Text style={styles.inputText}>FirstName</Text>
        <TextInput style={styles.formInput} />
      </View>
      <View style={styles.editProfileBox}>
        <Text style={styles.inputText}>LastName</Text>
        <TextInput style={styles.formInput} />
      </View>
      <View style={styles.editProfileBox}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput style={styles.formInput} />
      </View>
      <View style={styles.editProfileBox}>
        <Text style={styles.inputText}>Username</Text>
        <TextInput style={styles.formInput} />
      </View>

      <TouchableOpacity style={styles.profileButton}>
        <Text style={styles.profileButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  profileWrapper: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },

  profileBox: {
    width: "50%",
  },
  profileImage: {
    height: 100,
    width: 100,
    marginBottom: 10,
    borderRadius: 50,
    alignSelf: "center",
    borderWidth: 4,
    borderColor: colors.primary,
  },
  nameText: {
    // fontFamily: "//NunitoSans-Black",
    fontSize: 17,
    textAlign: "center",
  },
  usernameText: {
    // fontFamily: "//NunitoSans-Bold",
    textAlign: "center",
    fontSize: 15,
  },
  editProfileBox: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  inputText: {
    marginBottom: 5,
    fontSize: 13,
    // fontFamily: "//NunitoSans-Bold",
  },

  formInput: {
    borderWidth: 0.4,
    height: 50,
    padding: 10,
    borderRadius: 5,
    borderColor: colors.textLighter,
  },
  profileButton: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.primary,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  profileButtonText: {
    color: colors.white,
    fontWeight: "700",
  },
});

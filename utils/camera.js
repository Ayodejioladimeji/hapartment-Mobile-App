import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const chooseImageOne = async (setImageOne, setLoadingOne) => {
  setLoadingOne(true);

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    // selectionLimit: 7,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.canceled) {
    Alert.alert("You cancelled image uploads");
    setLoadingOne(false);
    return;
  }

  // const file = result.assets;
  // const err = checkImage(file);

  // if (err) {
  //   Alert.alert(err);
  //   setLoading(false);
  //   return;
  // }

  if (!result.canceled) {
    setImageOne(result.assets[0].uri);
    setLoadingOne(false);
  }
};

export const chooseImageTwo = async (setImageTwo, setLoadingTwo) => {
  setLoadingTwo(true);

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    // selectionLimit: 7,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.canceled) {
    Alert.alert("You cancelled image uploads");
    setLoadingTwo(false);
    return;
  }

  // const file = result.assets;
  // const err = checkImage(file);

  // if (err) {
  //   Alert.alert(err);
  //   setLoading(false);
  //   return;
  // }

  if (!result.canceled) {
    setImageTwo(result.assets[0].uri);
    setLoadingTwo(false);
  }
};

export const chooseImageThree = async (setImageThree, setLoadingThree) => {
  setLoadingThree(true);

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    // selectionLimit: 7,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.canceled) {
    Alert.alert("You cancelled image uploads");
    setLoadingThree(false);
    return;
  }

  // const file = result.assets;
  // const err = checkImage(file);

  // if (err) {
  //   Alert.alert(err);
  //   setLoading(false);
  //   return;
  // }

  if (!result.canceled) {
    setImageThree(result.assets[0].uri);
    setLoadingThree(false);
  }
};

export const chooseImageFour = async (setImageFour, setLoadingFour) => {
  setLoadingFour(true);

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    // selectionLimit: 7,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.canceled) {
    Alert.alert("You cancelled image uploads");
    setLoadingFour(false);
    return;
  }

  // const file = result.assets;
  // const err = checkImage(file);

  // if (err) {
  //   Alert.alert(err);
  //   setLoading(false);
  //   return;
  // }

  if (!result.canceled) {
    setImageFour(result.assets[0].uri);
    setLoadingFour(false);
  }
};

export const chooseImageFive = async (setImageFive, setLoadingFive) => {
  setLoadingFive(true);

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    // selectionLimit: 7,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.canceled) {
    Alert.alert("You cancelled image uploads");
    setLoadingFive(false);
    return;
  }

  // const file = result.assets;
  // const err = checkImage(file);

  // if (err) {
  //   Alert.alert(err);
  //   setLoading(false);
  //   return;
  // }

  if (!result.canceled) {
    setImageFive(result.assets[0].uri);
    setLoadingFive(false);
  }
};

export const chooseImageSix = async (setImageSix, setLoadingSix) => {
  setLoadingSix(true);

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    // selectionLimit: 7,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.canceled) {
    Alert.alert("You cancelled image uploads");
    setLoadingSix(false);
    return;
  }

  // const file = result.assets;
  // const err = checkImage(file);

  // if (err) {
  //   Alert.alert(err);
  //   setLoading(false);
  //   return;
  // }

  if (!result.canceled) {
    setImageSix(result.assets[0].uri);
    setLoadingSix(false);
  }
};

export const chooseImageSeven = async (setImageSeven, setLoadingSeven) => {
  setLoadingSeven(true);

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    // selectionLimit: 7,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.canceled) {
    Alert.alert("You cancelled image uploads");
    setLoadingSeven(false);
    return;
  }

  // const file = result.assets;
  // const err = checkImage(file);

  // if (err) {
  //   Alert.alert(err);
  //   setLoading(false);
  //   return;
  // }

  if (!result.canceled) {
    setImageSeven(result.assets[0].uri);
    setLoadingSeven(false);
  }
};

//

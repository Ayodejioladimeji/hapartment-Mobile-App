export const checkImage = (file) => {
  let err = "";

  if (!file) return (err = "File does not exists");

  if (file.type !== "image") {
    err = "Image format is incorrect";
  }

  if (file.fileSize > 1024 * 1024) {
    err = "File too large, choose file less than 1MB";
  }

  return err;
};

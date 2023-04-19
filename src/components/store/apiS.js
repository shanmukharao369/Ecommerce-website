import axios from "axios";

export const getCartList = async (newEmailId) => {
  const { data } = await axios.get(
    `https://user-auth-ecom-default-rtdb.firebaseio.com/cartItem/${newEmailId}.json`

  );
  const finalData = [];
  const objKeys = Object.keys(data === null ? {} : data);
  objKeys.forEach((keys) => {
    const objElement = data[keys];
    objElement.id = keys;
    finalData.push(objElement);
  });
  return finalData;
};
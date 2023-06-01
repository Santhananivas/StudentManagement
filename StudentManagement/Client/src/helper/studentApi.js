import axios from "axios";
export const GetStudentsList = async () => {
  try {
    var response = await axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.data;
      });
      return response
  } catch (err) {
    console.log(err);
  }
};

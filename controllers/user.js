import axios from "axios";

export const login = async (req, res) => {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/api/auth/login",
      data: {
        email: req.body.email,
        password: req.body.password,
      },
    });

    if (response.status === 200) {
      let access_token = response.data.access_token;
      res.status(200).send({
        auth: true,
        access_token: access_token,
      });
      return true;
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid email or password " });
  }
};

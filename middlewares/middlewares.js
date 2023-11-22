import jwt from "jsonwebtoken";

const loginMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;


  if (!authHeader) {
    return res.status(401).json({ message: "Not authorized, token not found" });
  }
  const token = authHeader.split(" ")[1];
  let decoded;
  try {
    decoded = jwt.verify(token, "Mathew0407");
    next();
  } catch (error) {
    res.status(500).json({ error: "Please Login to Continue" });
  }
};

export default loginMiddleware;

import User from "../models/auth/userModal.js";

export const handleLogout = async (req, res) => {
  // on cliet, also delete accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401); // unauthorized
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) {
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "None",
      // secure: true,
    });
    res.status(204).json({ message: "Successfully logged out" }); // no content
  }

  try {
    foundUser.refreshToken = undefined;
    const result = await foundUser.save();
    res.status(204).json({ message: "Successfully logged out" }); // no content
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

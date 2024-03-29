export const allowedOrigins = [
  "http://localhost:3000",
  "https://azhar-libraryapp.vercel.app",
  "https://library.azharzaman.com",
  "https://library-kamran.vercel.app"
];

export const corOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin Not Allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
};

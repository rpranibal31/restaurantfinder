import handler from "serve-handler";

export default async function (req, res) {
  const auth = req.headers.authorization || "";
  if (!auth.startsWith("Basic ")) {
    res.setHeader("WWW-Authenticate", 'Basic realm="Protected"');
    res.statusCode = 401;
    return res.end("Auth required");
  }
  const [user, pass] = Buffer
    .from(auth.split(" ")[1], "base64")
    .toString()
    .split(":");

  if (
    user !== process.env.BASIC_AUTH_USER ||
    pass !== process.env.BASIC_AUTH_PASSWORD
  ) {
    res.setHeader("WWW-Authenticate", 'Basic realm="Protected"');
    res.statusCode = 401;
    return res.end("Auth required");
  }

  // Si la auth pasa, sirve todo lo que haya en dist/
  return handler(req, res, { public: "dist" });
}

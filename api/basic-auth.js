// api/basic-auth.js
import handler from 'serve-handler';

export default async function (req, res) {
  const auth = req.headers.authorization || '';

  // 1) Solicita credenciales si no hay Basic
  if (!auth.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Protected"');
    res.statusCode = 401;
    return res.end('Auth required');
  }

  // 2) Decodifica usuario:contraseña
  const [user, pass] = Buffer
    .from(auth.split(' ')[1], 'base64')
    .toString()
    .split(':');

  // 3) Comprueba contra las vars de entorno
  if (
    user !== process.env.BASIC_AUTH_USER ||
    pass !== process.env.BASIC_AUTH_PASSWORD
  ) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Protected"');
    res.statusCode = 401;
    return res.end('Auth required');
  }

  // 4) Si pasan, sirve la carpeta de producción "dist"
  return handler(req, res, { public: 'dist' });
}

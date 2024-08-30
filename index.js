const jwt = (await import("jsonwebtoken")).default;
const env = (await import("$/server/env.js")).default;

export default {
    generate: (obj) => jwt.sign(obj, env.auth.jwt.secret, env.auth?.jwt?.options || undefined),
    verify: (token) => {
        return jwt.verify(token, env.auth.jwt.secret);
    },
};

export const config = (provider: string) => ({
  client: {
    id: client[provider].id,
    secret: client[provider].secret,
  },
  auth: {
    tokenHost: auth[provider].tokenHost,
    tokenPath: auth[provider].tokenPath,
    authorizePath: auth[provider].authorizePath,
  },
});

const auth: {
  [key: string]: {
    tokenHost: string;
    tokenPath: string;
    authorizePath: string;
  };
} = {
  github: {
    tokenHost: "https://github.com",
    tokenPath: "/login/oauth/access_token",
    authorizePath: "/login/oauth/authorize",
  },
};

const client: {
  [key: string]: {
    id: string;
    secret: string;
  };
} = {
  github: {
    id: process.env.OAUTH_GITHUB_CLIENT_ID || "",
    secret: process.env.OAUTH_GITHUB_CLIENT_SECRET || "",
  },
};

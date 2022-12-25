interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "asdjaodijwqdnsadoijwqadksadoaiwdsakdnjops",
        user: {
          name: "Daniel",
          email: "dn.danielbernardino@gmail.com",
        },
      });
    }, 1000);
  });
}

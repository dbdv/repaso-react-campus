export const getToken = async (user) => {
  return await fetch("http://localhost:3001/auth", {
    method: "POST",
    body: JSON.stringify({
      usuario: user.name,
      password: user.password,
    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((data) => {
      switch (data.status) {
        case 404:
          alert(
            "Los datos ingresados no coinciden con un usuario activo. Vuelva a Ingresarlos"
          );
          return null;
        case 200:
          return data.json();
      }
    })
    .then((parsed) => {
      localStorage.setItem("token", JSON.stringify(parsed.data.token));
      return parsed.data.token;
    })
    .catch((e) => {});
};

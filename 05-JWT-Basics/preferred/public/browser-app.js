const formDOM = document.querySelector(".form");
const usernameInputDOM = document.querySelector(".username-input");
const passwordInputDOM = document.querySelector(".password-input");
const resultDOM = document.querySelector(".result");
const btnDOM = document.querySelector("#data");
const tokenDOM = document.querySelector(".token");

formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();
  tokenDOM.textContent = "";
  const username = usernameInputDOM.value;
  const password = passwordInputDOM.value;

  try {
    const { data } = await axios.post("/api/v1/logon", { username, password });
    usernameInputDOM.value = "";
    passwordInputDOM.value = "";

    localStorage.setItem("token", data.token);
    resultDOM.innerHTML = "";
    btnDOM.click();
  } catch (error) {
    localStorage.removeItem("token");
    resultDOM.innerHTML = "";
    tokenDOM.textContent = "Please provide email and password";
  }
});

btnDOM.addEventListener("click", async () => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.get("/api/v1/hello", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resultDOM.innerHTML = `<h5>${data.msg}</h5>`;

    data.secret;
  } catch (error) {
    localStorage.removeItem("token");
    // resultDOM.innerHTML = `<p>${error.response.data.msg}</p>`;
  }
});

const checkToken = () => {
  const token = localStorage.getItem("token");
};
checkToken();

export const login = (dispatch) => (uid, token, expirationDate) => {
  dispatch({ type: "LOGIN" });
  setUserId(dispatch, uid);
  setToken(dispatch, token);
  const tokenExpirationDate =
    expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
  setTokenExpDate(dispatch, tokenExpirationDate);
  localStorage.setItem(
    "userData",
    JSON.stringify({
      userId: uid,
      token: token,
      expiration: tokenExpirationDate.toISOString(), // to store all important date data
    })
  );
};

export const logout = (dispatch) => () => {
  dispatch({ type: "LOGOUT" });
  setUserId(dispatch, null);
  setToken(dispatch, null);
  setTokenExpDate(dispatch, null);
  localStorage.removeItem("userData");
};

export const setUserId = (dispatch, uid) => {
  dispatch({ type: "SET_USER_ID", payload: uid });
};

export const setToken = (dispatch, token) => {
  dispatch({ type: "SET_TOKEN", payload: token });
};

export const setTokenExpDate = (dispatch, TEXDATE) => {
  dispatch({ type: "SET_TOKEN_EXP_DATE", payload: TEXDATE });
};

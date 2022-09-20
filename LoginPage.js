import React from "react";

function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <center>
          <h1>Sign in with Email</h1> <br/>
        </center>
        <input
          type="text"
          placeholder="Email"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br /> 
        <p className="errorMsg">{emailError}</p>
        <input 
          type="password"
          placeholder="Password"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign in</button>
            </>
          ) : (
            <>
              <button onClick={handleLogin}>SUBMIT</button>
              <p>Forgot Password?</p>
            </>
            
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;

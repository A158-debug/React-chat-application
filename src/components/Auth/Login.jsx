import React from "react";

const Login = () => {
  const handleSubmit=()=>{

  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Debug Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
          {/* {err && <span>Something went wrong</span>} */}
        </form>
        {/* <p>You don't have an account? <Link to="/register">Register</Link></p> */}
      </div>
    </div>
  );
};

export default Login;
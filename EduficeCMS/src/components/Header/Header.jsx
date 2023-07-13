import React from "react";

const Header = () => {
  return (
    <header className="top-header">
      <h4>Try for free for your business!</h4>
      <div className="flex gap-10 top-header-button">
        <section>
          <a href="/login ">
            <span>Login</span>
          </a>
        </section>
        <section>
          <a href="/signup">
            <span>Create Account</span>
          </a>
        </section>
      </div>
    </header>
  );
};

export default Header;

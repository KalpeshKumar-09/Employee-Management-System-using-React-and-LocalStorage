// import { useState } from "react";

const Header = () => {
  // const [username, setUserName] = useState("");

  // if (!data) {
  //   setUserName("Admin");
  // } else {
  //   setUserName(data.name);
  // }

  // console.log(data);

  const logout = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex items-end justify-between text-white">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">username</span>
      </h1>
      <button
        onClick={logout}
        className="bg-red-600 text-lg font-normal text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;

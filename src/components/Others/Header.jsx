const Header = (props) => {
  const logout = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
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

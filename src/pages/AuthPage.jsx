import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./../firebase/config";

const AuthPage = ({ setIsAuth }) => {
  const handleClick = () => {
    signInWithPopup(auth, provider)
      // başarıyla giriş yaparsa çalışır
      .then((data) => {
        console.log(data.user);

        // * kullanıcının yetkisini true'ya çek
        // * böylelikle kulanıcı giriş yaptığında App.jsx deki isAuth değeri true'ya çekilecek
        setIsAuth(true);

        // kullanıcı giriş bilgisini local'de sakla
        localStorage.setItem("token", data.user.refreshToken);
      });
  };

  return (
    <div className="container">
      <div className="auth">
        <h1>
          <img src="/f-logo.png" />
          <span>Firebase Chat Room</span>
        </h1>
        <p className="auth-p">- Sign In to Continue -</p>
        <button onClick={handleClick}>
          <img src="/g-logo.png" />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;

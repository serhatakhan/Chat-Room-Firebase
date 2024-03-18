import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  // * kullanıcının kimliği doğrulandıysa sohbet sayfasının doğrulanmadıysa giriş sayfasının gösterileceği state'i tut. kimlik doğrulandı mı doğrulanmadı mı state'i.
  // * localStorage.getItem("token") -> lokalde token isminde bir değer var mı bak.
  // böyle bir değer varsa o kullanıcı daha önce oturum açmıştır. yani yetkisi vardır
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  // * kullanıcının bir sohbet odası seçip seçmediğinin state'ini tut
  const [room, setRoom] = useState(null);


  // YETKİSİ YOKSA > GİRİŞ SAYFASI
  /* doğrulamayı AuthPage'de yaptığımız için setIsAuth'u göndermemiz gerek */
  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }

  // YETKİSİ VARSA > ODA SEÇME SAYFASI
  return (
    <div className="container">
      {/* kullanıcı bir oda seçmediyse <RoomPage /> bas, oda seçtiyse <ChatPage /> */}
      {!room ? (
        // kullanıcı bir oda seçmediyse <RoomPage> --> oda seçme sayfası(null iken burası görünecek yani)
        <RoomPage setRoom={setRoom} setIsAuth={setIsAuth} />
      ) : (
        // kullanıcı bir oda seçtiyse <ChatPage> --> sohbet sayfası
        <ChatPage room={room} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;

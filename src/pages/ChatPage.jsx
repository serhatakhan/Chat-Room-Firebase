// mevcut giriş yapan kullanıcıya ait bilgileri edinmek istiyorsak auth'un içindeki currentUser'ı kullanacağız
import { auth, db } from "../firebase/config";
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy
} from "firebase/firestore";
import Message from "../components/Message";


const ChatPage = ({ room, setRoom }) => {
  // mesajları ekrana basmak için state oluştur
  const [messages, setMessages] = useState([]);


  const sendMessage = async (e) => {
    e.preventDefault();

    // koleksiyonun referansını alma (hangi koleksiyona eklenecek?)
    const messagesCol = collection(db, "messages");

    // koleksiyona yeni döküman ekle (ne eklenecek?)
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });

    // formu sıfırla
    e.target.reset();
  };


  // mevcut odada gönderilen mesajları anlık olarak al
  useEffect(() => {
    // koleksiyonun referansını al
    const messagesCol = collection(db, "messages");

    // sorgu ayarlarını oluştur, (yani buradaki filtreye uygun olsun)
    const q = query(messagesCol, where("room", "==", room), orderBy("createdAt", "asc"))


    // mesajlar koleksiyonundaki verileri al (getDocs işimize yaramadı -> bir kere veriler alınıyor. bize bu projede gerçek zamanlı güncellene verileri alan bir yol lazım. onSnapshot!)
    // * onSnapshot -> anlık olarak bir koleksiyondaki değişimleri izler
    // * koleksiyon her değiştiğinde, (yeni belge eklenmes,, silinmesi, değiştirilmesi, içindeki bir şeyin değiştirilmesi vs.)
    // verdiğimiz fonksiyon ile koleksiyondaki bütün dökümanlara erişebiliyoruz.
    onSnapshot(q, (snapshot) => {
      // verilerin geçici olarak tutulacağı boş dizi oluştur
      const tempMsg = [];

      // dökümanları dön, verilere eriş, her bir datayı oluşturduğumuz diziye at (doc.data() -> buradaki data() fonk. tüm verilere erişmemizi sağlıyor. bu sayede 10 katman içeri girerek yazmak zorunda kalmadık)
      snapshot.docs.forEach((doc) => {
        tempMsg.push(doc.data());
      });

      // mesajları state'e aktar
      setMessages(tempMsg);
    });
  }, []);


  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>room: {room}</p>
        <button onClick={() => setRoom(null)}>Another Room</button>
      </header>

      <main>
        {messages.map((data, i)=> ( <Message key={i} data={data} /> ))}
      </main>

      <form onSubmit={sendMessage}>
        <input type="text" required placeholder="your message..." />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ChatPage;

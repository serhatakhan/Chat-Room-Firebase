const RoomPage = ( {setRoom, setIsAuth} ) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // inputtaki değeri al
    const room = e.target[0].value

    // kullanıcının seçtiği odayı state'e aktar
    setRoom(room.toLowerCase())
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Room</h1>

      <p>Which room will you enter?</p>

      <input type="text" placeholder="ex: weekend" required />

      <button type="submit">Enter the room</button>
      <button onClick={()=> {
        // app.jsx deki 18.satırdaki if bloğunu devreye soktuk yani
        setIsAuth(false)
        // çıkış yapsakta sayfa yenilenince hala sohbet odasında kalıyorduk. lokalden de silmek gerek.
        localStorage.removeItem("token")
      }} type="button">Log Out</button>
    </form>
  );
};

export default RoomPage;

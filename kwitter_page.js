var firebaseConfig = {
    apiKey: "AIzaSyBW6wtGykY2zq0nF7-NbiL23BdsglLnYlY",
    authDomain: "lets-chat-web-app-dffd6.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-dffd6-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-dffd6",
    storageBucket: "lets-chat-web-app-dffd6.appspot.com",
    messagingSenderId: "946176270517",
    appId: "1:946176270517:web:31625ea8f505e71d08defc",
    measurementId: "G-Y5C1N07M57"
  }
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name")
    function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
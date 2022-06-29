import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import './chat.css';

const Chat = () => {
  const url = "http://localhost:5000";
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));
  const [text, setText] = useState("");

  const [messageList, setMessageList] = useState([
    { text : 'Kal kon sa exam hai?', sent: true },
    { text : 'Kal hi pata krenge!!', sent: false },
    { text : 'ok Bye BYe!!', sent: true },
    { text : 'ok Good Night!!', sent: false },
    { text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quod harum adipisci dolore perferendis deserunt, cum modi placeat! Blanditiis dignissimos reprehenderit suscipit expedita, mollitia fugiat est numquam possimus deleniti quas! Reprehenderit aspernatur distinctio ducimus magni. Maiores quidem consequuntur id, nesciunt fuga non temporibus dolores provident! Eligendi adipisci quod natus qui?', sent: false },
    { text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quod harum adipisci dolore perferendis deserunt, cum modi placeat! Blanditiis dignissimos reprehenderit suscipit expedita, mollitia fugiat est numquam possimus deleniti quas! Reprehenderit aspernatur distinctio ducimus magni. Maiores quidem consequuntur id, nesciunt fuga non temporibus dolores provident! Eligendi adipisci quod natus qui?', sent: true },
    { text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quod harum adipisci dolore perferendis deserunt, cum modi placeat! Blanditiis dignissimos reprehenderit suscipit expedita, mollitia fugiat est numquam possimus deleniti quas! Reprehenderit aspernatur distinctio ducimus magni. Maiores quidem consequuntur id, nesciunt fuga non temporibus dolores provident! Eligendi adipisci quod natus qui?', sent: false },
    { text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quod harum adipisci dolore perferendis deserunt, cum modi placeat! Blanditiis dignissimos reprehenderit suscipit expedita, mollitia fugiat est numquam possimus deleniti quas! Reprehenderit aspernatur distinctio ducimus magni. Maiores quidem consequuntur id, nesciunt fuga non temporibus dolores provident! Eligendi adipisci quod natus qui?', sent: true },
    { text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quod harum adipisci dolore perferendis deserunt, cum modi placeat! Blanditiis dignissimos reprehenderit suscipit expedita, mollitia fugiat est numquam possimus deleniti quas! Reprehenderit aspernatur distinctio ducimus magni. Maiores quidem consequuntur id, nesciunt fuga non temporibus dolores provident! Eligendi adipisci quod natus qui?', sent: false },
    { text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quod harum adipisci dolore perferendis deserunt, cum modi placeat! Blanditiis dignissimos reprehenderit suscipit expedita, mollitia fugiat est numquam possimus deleniti quas! Reprehenderit aspernatur distinctio ducimus magni. Maiores quidem consequuntur id, nesciunt fuga non temporibus dolores provident! Eligendi adipisci quod natus qui?', sent: true },
  ]);

  useEffect(() => {
    socket.connect();
  }, []);

  const sendMessage = () => {
    socket.emit("sendmsg", text);
  };

  const displayMessages = () => {
    return messageList.map( ({ text, sent }) => (
      <div className="msg-body">
        <p className={"msg-text "+( sent ? 'msg-sent' : 'msg-rec' )}>
          {text}
        </p>
        
      </div>
    ) )
  }

  return (
    <div className="h-100 bg-light">
      <div className="container pt-5">
        <h2>Socket.io Chatting Example</h2>
        <div className="card">
          <div className="card-body">
            <div className="chat-area">
              {displayMessages()}
            </div>
          </div>
          <div className="card-footer">
            <input
              className="form-control"
              onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-primary" onClick={sendMessage}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
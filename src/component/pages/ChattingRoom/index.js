import React , {useState} from "react";
import {
  SendBirdProvider,
  withSendBird,
  Channel,
  ChannelList,
  OpenChannel,
  sendBirdSelectors,
} from "sendbird-uikit";
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import SendBird from "sendbird";
import {useLocation} from "react-router-dom"
import {
  BaseLayout,
  HeaderLayout,
  BackIcon,
  HeaderLabel,
  ContentLayout,
  MyChat,
  YourChat,
  FooterLayout,
  Input,
  SendIcon,
} from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Chat from "./Chat/Index.js"
import {ViewContext} from "./Chat/ViewContext"
const appId = "261DB632-487D-4E3C-922F-6D453A33B82D";
const userId = localStorage.getItem("username");
const channelUrl = "mapoout_kyle";
// const Welcome = ({ currentUser }) => (
//   <div>
//       {`Hello, ${currentUser || 'unknown user'}`}
//   </div>
// );

// const WelcomeWithSendBird = withSendBird(Welcome, (state) => {
//   const sdk = sendBirdSelectors.getSdk(state);
//   const nickname = sdk.currentUser ;
//   return ({ nickname });
// });
// const MyComponent = props => (
//   <button onClick={() => props
//       .connect(userId)
//       .then(user => {console.log("connect")})
//       .catch(error =>{console.log("error")})
//   } />
// );

// const CustomComponent2 = withSendBird(MyComponent,
//   state => ({ // Mapping context state to props
//       connect: sendBirdSelectors.getConnect(state)
//   })
// );
// const CustomComponent = ({ createChannel, sdk, leaveChannel, getConnect }) => {
//   const [channelUrl, setChannelUrl] = useState("");
//   return (
//     <>
//       <button
//         onClick={() => {
//           let params = new sdk.GroupChannelParams();
//           params.isPublic = false;
//           params.isEphemeral = false;
//           params.isDistinct = false;
//           params.addUserIds(["kyle"]);
//           params.name = userId;
//           createChannel(params)
//             .then((c) => {
//               setChannelUrl("mapoout_kyle");
//             })
//             .catch((c) => console.warn(c));
//         }}
//       >
//         {" "}
//         Create channel
//       </button>
//       <button
//         onClick={() => {
//           leaveChannel(channelUrl)
//             .then((c) => {
//               setChannelUrl("");
//             })
//             .catch((c) => console.warn(c));
//         }}
//       >
//         {" "}
//         Leave channel
//       </button>
//       <button
//         onClick={() => {
//           getConnect("mapoout")
//             .then((c) => {
//               console.log("get connect")
//             })
//             .catch((c) => console.warn(c));
//         }}
//       >
//         {" "}
//         Leave channel
//       </button>
//       <br />
//       {`Created channel is: ${channelUrl}`}
//     </>
//   );
// };

// const CustomComponentWithSendBird = withSendBird(CustomComponent, (state) => {
//   const createChannel = sendBirdSelectors.getCreateChannel(state);
//   const leaveChannel = sendBirdSelectors.getLeaveChannel(state);
//   const getConnect = sendBirdSelectors.getConnect(state);
//   const sdk = sendBirdSelectors.getSdk(state);
//   return { createChannel, sdk, leaveChannel, getConnect };
// });
// const MyCustomChatMessage = ({ message, onDeleteMessage, onUpdateMessage }) => (
//   <div>
//       {message.message}
//       <button onClick={() => {
//           const callback = () => { console.warn('message deleted'); }
//           onDeleteMessage(message, callback);
//           }}
//           > Delete
//       </button>
//       <button onClick={() => {
//           const updatedMessage = Math.random().toString();
//           const callback = () => { console.warn('message updated'); }
//           onUpdateMessage(message.messageId, updatedMessage, callback);
//           }}
//           > Update
//       </button>
//   </div>
// );
// const CustomChatHeader = ({ channel, user }) => (
//   <div style={{ border: '1px solid red' }}>- {channel.name} / {user.nickname}</div>
// );
// const ChannelCRUDSelectors = () => (
//   <SendBirdProvider appId={appId} userId={userId} nickname={userId} user>
//     <CustomComponentWithSendBird />
//     <div style={{ width: "320px", height: "500px" }}>
//       <ChannelList />
//     </div>
//     <WelcomeWithSendBird/>
//     <Channel channelUrl="mapoout_kyle" renderChatItem
//       ={MyCustomChatMessage} />
//   </SendBirdProvider>
// );
function ChattingRoom(props) {
  const [config, setconfig] = useState({});
  const [view, toggleview] = useState(true);
  
  // const sdk = sendBirdSelectors.getSdk();
  // let params = new sdk.GroupChannelParams();
  //         params.isPublic = false;
  //         params.isEphemeral = false;
  //         params.isDistinct = false;
  //         params.addUserIds(["kyle"]);
  //         params.name = userId;
  //         createChannel(params)
  //           .then((c) => {
  //             setChannelUrl("mapoout_kyle");
  //           })
  //           .catch((c) => console.warn(c));
  const location = useLocation();
  console.log(location)
  localStorage.setItem("providerId", location.state.provider.id);
  return (
    <BaseLayout>
    <ViewContext.Provider value={{view, toggleview}}>
      {/* <ChannelCRUDSelectors />
      <MyComponent/> */}
      <Chat userId={userId} nickname={userId} providerId = {location.state.provider.id} />

    </ViewContext.Provider>
    </BaseLayout>
  );
}

export default ChattingRoom;

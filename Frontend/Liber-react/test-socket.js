import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected to socket.io server");
});

socket.on("new_review", (review) => {
  console.log("RECEIVED new_review event:", review);
  process.exit(0);
});

console.log("Waiting for new_review event...");

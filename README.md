# 💬 Convo (Real-Time Messaging Infrastructure)

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue) ![Status](https://img.shields.io/badge/status-Active_Development-orange)

**Convo** is a scalable, low-latency messaging architecture designed to handle concurrent WebSocket connections for real-time communication.

Unlike standard chat applications, this project focuses on **backend reliability**, **message persistence strategies**, and **secure room management**.

---

## 🏗 Architecture & Stack

This system is built with a decoupled frontend/backend architecture to ensure scalability.

- **Frontend:** React.js (Context API for state management), TailwindCSS
- **Backend:** Node.js (Express), Socket.io
- **Database:** MongoDB (Message persistence), Redis (Ephemeral session caching - *Planned*)
- **Authentication:** JWT (JSON Web Tokens) with refresh rotation

---

## ⚡ Key Features

- **Real-Time Event Stream:** Bidirectional communication using WebSockets (Socket.io).
- **Room/Channel Management:** Dynamic creation of private and public chat namespaces.
- **Optimistic UI:** Immediate message rendering on the frontend before server confirmation to reduce perceived latency.
- **Connection Recovery:** Automated reconnection logic for dropped network states.

---

#All colabrators are welcome

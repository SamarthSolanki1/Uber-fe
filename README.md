# 🚗 Uber-Ride Hailing App

A real-time ride-hailing web application that allows users to book rides and captains (drivers) to accept or reject ride requests instantly. Built using the **MERN Stack (MongoDB, Express.js, React, Node.js)** with **Socket.IO**, **JWT-based authentication**, and **Google Maps API** for live tracking and routing.

---
## Demo 
 https://github.com/user-attachments/assets/a7dc0735-9670-4cfe-ba36-36248de06492

## 🔥 Features

- 🔄 **Real-Time Ride Matching**
  - Users can request rides.
  - Captains can accept or reject ride requests dynamically.
  - Powered by **Socket.IO** for instant communication.

- 🗺️ **Live Location Tracking**
  - Integrated **Google Maps API** for:
    - Real-time user and captain location updates.
    - Route visualization.
    - Directions and ETA calculation.

- 💰 **Smart Fare Estimation**
  - Fare calculation based on:
    - Real-time distance between pickup and destination.
    - Dynamic demand-based pricing.

- 🔐 **Authentication & Security**
  - Role-based JWT Authentication:
    - Separate login for Users and Captains.
    - Protected routes for ride management.

- 🧭 **Captain Dashboard**
  - View incoming ride requests.
  - Accept/reject rides.
  - Navigate to the pickup and drop-off points.

- 📱 **User Interface**
  - Request ride with pickup and drop-off points on the map.
  - View ride status in real-time.

---

## 🛠️ Tech Stack

| Technology     | Purpose                          |
|----------------|----------------------------------|
| **React**      | Frontend UI                      |
| **Node.js**    | Backend runtime environment      |
| **Express.js** | REST API and backend framework   |
| **MongoDB**    | NoSQL Database                   |
| **Socket.IO**  | Real-time ride status updates    |
| **JWT**        | Secure authentication mechanism  |
| **Google Maps API** | Maps, location tracking, routing |

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)
- Google Maps API key

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/uber-ride-hailing.git
   cd uber-ride-hailing

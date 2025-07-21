# 🥗 Annapoori – Food Donation Platform

![Banner](https://github.com/user-attachments/assets/3900965d-d086-470e-8ef3-8b7eda45065d)

Annapoori is a full-featured web application that connects food donors with communities in need. It facilitates food and monetary donations, tracks donation requests, filters expired food, and builds transparency to inspire more contributions.

---

## 🚀 Features

### 🧍 For Donors
- 📦 **Donate Food:** Upload details including type, quantity, expiry date, and image.
- 💰 **Donate Money:** Secure payment via Stripe.

### 🎯 For Requesters
- 📝 **Request Food:** Via form, SMS, or call (details shown via secure pop-up).
- 🔎 **View Available Donations:** Sorted and filtered by expiry.
- ❗ **Highlight Expiring Food:** Auto-mark food expiring in 3 days or expired.

---

## 🧰 Tech Stack

| Tech             | Description                        |
|------------------|------------------------------------|
| ⚛️ React         | Frontend framework                 |
| 🎨 Tailwind CSS  | Styling and responsive design      |
| 🔐 Firebase      | Auth and Firestore DB              |
| 💸 Stripe        | Payment processing                 |
| 🎥 Framer Motion | Animations                         |
| 🚀 Vercel        | Frontend deployment                |

---

## 📂 Folder Structure

```

annapoori/
├── public/
│   └── assets/           # Images and icons
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Page views (Home, Contact, etc.)
│   ├── firebase.js       # Firebase config
│   ├── App.jsx           # App routes
│   └── index.css         # Global styling
├── .env                  # Environment variables
├── package.json
└── README.md

````

---

## 🛠️ Setup Instructions

### 🔃 Clone the Repository

```bash
git clone https://github.com/ishivaniyadav/annapoori.git
cd annapoori
````

### 📦 Install Dependencies

```bash
npm install
```

### 🔑 Add Your Environment Variables

Create a `.env` file in the root directory and add your Firebase & Stripe keys:

```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

### 🚀 Run Locally

```bash
npm run dev
```

Your app should now be running at [http://localhost:5173](http://localhost:5173)

---

## 📸 Screenshots

### 💻 Events View

![Events Screenshot](https://github.com/user-attachments/assets/7df807d3-30d8-41e0-b2e7-b38c3f40c53d)

### 💻 Dashboard View

![Dashboard Screenshot](https://github.com/user-attachments/assets/6b83c37f-a902-4874-8d5d-6c844dcd295e)
![Dashboard Screenshot](https://github.com/user-attachments/assets/15cc8267-95c5-461a-9c11-1741b57e71a2)

### 💳 Stripe Payment

![Stripe Payment Screenshot](https://github.com/user-attachments/assets/19eccfa6-9bde-4cbf-b9be-6b1269758cbe)

---

## 🤝 Contributing

We welcome all contributions to improve Annapoori!

```bash
# Fork the repo
# Create your feature branch (git checkout -b feature-name)
# Commit your changes (git commit -m 'Add new feature')
# Push to the branch (git push origin feature-name)
# Open a pull request 🎉
```

---

## 📬 Contact

Have questions? Reach out via email `ishivaniyadav7@gmail.com`

---

## 📜 License

Licensed under the [MIT License](LICENSE).

---

## 🌟 Acknowledgements

* Firebase for backend infrastructure
* Stripe for secure payment gateway
* Open-source contributors for support
* All donors and volunteers 

---

> *"The best way to find yourself is to lose yourself in the service of others." – Mahatma Gandhi*






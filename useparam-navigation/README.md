## 📌 useParams – Notes

### 1️⃣ What is `useParams`?

`useParams` is a React Router hook used to **read dynamic changes from the URL**.

* It returns an **object**
* The object contains **key–value pairs**

  * **Key** → defined in the route
  * **Value** → comes from the URL

---

### 2️⃣ Why do we use `useParams`?

Using the key–value pair returned by `useParams`, we can:

* Dynamically render components
* Fetch data based on URL values
* Show the currently selected item

---

### 3️⃣ Common use cases of `useParams`

`useParams` is commonly used in:

* Blog posts (e.g. `/blog/react-hooks`)
* eCommerce products (e.g. `/product/123`)
* User pages (Login / Profile / Logout)

---

### 4️⃣ Syntax

```javascript
import { useParams } from "react-router-dom";

const { type } = useParams();
```

---

### 5️⃣ Important note ⚠️

* `useParams` **does not change the URL**
* It only **reads data from the URL**
* `Link` or `NavLink` is responsible for changing the URL

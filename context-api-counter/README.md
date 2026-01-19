# Notes

## Final correct mental model 🧠✨

### 1️⃣ ContextData
- Creates a Context
- Defines a fallback value
- Does NOT hold real state

### 2️⃣ App.js
- Holds the actual state & logic
- Wraps components with Provider
- Decides what data/functions are shared

### 3️⃣ Other components
- Use `useContext`
- Read or trigger logic
- Don’t manage state

```js
ContextData
   |
   v
App (state + logic)
   |
Provider (value = shared stuff)
   |
   v
Counter / Any Component (consumer)

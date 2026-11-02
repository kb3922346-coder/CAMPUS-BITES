/* ===================================================================
   CAMPUS BITES - SCRIPT
   Desktop & Responsive Canteen Web App with Admin Menu Manager
   =================================================================== */

// Default Food Menu Dataset
const defaultFoods = [
  {
    id: 1,
    name: "California Chicken Roll",
    desc: "Grilled spiced chicken, crisp bell peppers, house special garlic mayo",
    price: 85,
    category: "Rolls",
    tag: "🔥 Hot",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&auto=format&fit=crop&q=80",
    emoji: "🌯"
  },
  {
    id: 2,
    name: "Paneer Tikka Roll",
    desc: "Charcoal-smoked paneer cubes wrapped in layered paratha with mint chutney",
    price: 75,
    category: "Rolls",
    tag: "★ Chef's Pick",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    emoji: "🌯"
  },
  {
    id: 3,
    name: "Classic Cheese Burger",
    desc: "Crispy vegetable patty, aged cheddar slice, crunchy lettuce & secret relish",
    price: 45,
    category: "Snacks",
    tag: "★ Bestseller",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
    emoji: "🍔"
  },
  {
    id: 4,
    name: "Artisan Grilled Sandwich",
    desc: "Triple-decker golden toasted bread filled with cheese, tomatoes & herb butter",
    price: 40,
    category: "Snacks",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80",
    emoji: "🥪"
  },
  {
    id: 5,
    name: "Masala Butter Maggi",
    desc: "Aromatic spicy noodles tossed with sweet corn, green peas & dollop of butter",
    price: 35,
    category: "Snacks",
    tag: "⚡ Quick Bite",
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&auto=format&fit=crop&q=80",
    emoji: "🍜"
  },
  {
    id: 6,
    name: "Punjabi Samosa Platter (2 pcs)",
    desc: "Handcrafted golden crust pastry packed with cumin-spiced potatoes & tamarind dip",
    price: 25,
    category: "Snacks",
    tag: "Classic",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80",
    emoji: "🥟"
  },
  {
    id: 7,
    name: "Teriyaki Rice Bowl",
    desc: "Steamed fragrant rice served with wok-tossed peppers, corn & teriyaki glaze",
    price: 90,
    category: "Meals",
    tag: "Full Meal",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
    emoji: "🍱"
  },
  {
    id: 8,
    name: "Deluxe Veggie Thali",
    desc: "Rich dal makhani, paneer butter masala, jeera rice, salad & 2 butter rotis",
    price: 95,
    category: "Meals",
    tag: "★ Bestseller",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop&q=80",
    emoji: "🍱"
  },
  {
    id: 9,
    name: "Signature Cold Coffee",
    desc: "Double shot espresso blended with chilled vanilla cream & cocoa dust",
    price: 45,
    category: "Drinks",
    tag: "Chilled",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80",
    emoji: "🥤"
  },
  {
    id: 10,
    name: "Fresh Mint Lime Soda",
    desc: "Sparkling sweet & salty club soda infused with freshly pressed lime & mint",
    price: 30,
    category: "Drinks",
    tag: "Refreshing",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
    emoji: "🍋"
  },
  {
    id: 11,
    name: "Dark Chocolate Fudge Pastry",
    desc: "Rich moist chocolate cake layered with silky Belgian dark chocolate ganache",
    price: 55,
    category: "Desserts",
    tag: "Sweet Treat",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80",
    emoji: "🍰"
  },
  {
    id: 12,
    name: "Artisan Vanilla Sundae",
    desc: "Double scoop Madagascar vanilla ice cream topped with roasted almond slivers",
    price: 40,
    category: "Desserts",
    tag: "Cool Down",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80",
    emoji: "🍨"
  },
  {
    id: 13,
    name: "Mexican Burrito Bowl",
    desc: "Zesty black beans, cilantro-lime rice, sweet corn, guacamole & pico de gallo",
    price: 95,
    category: "Meals",
    tag: "Chef's Special",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&auto=format&fit=crop&q=80",
    emoji: "🥗"
  },
  {
    id: 14,
    name: "Chipotle Paneer Quesadilla",
    desc: "Griddled golden tortilla loaded with melted cheese, peppers & smoky chipotle",
    price: 80,
    category: "Rolls",
    tag: "🔥 Hot",
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600&auto=format&fit=crop&q=80",
    emoji: "🌮"
  },
  {
    id: 15,
    name: "Crispy Panko Onion Rings",
    desc: "Crispy beer-battered jumbo onion rings dusted with peri-peri paprika seasoning",
    price: 40,
    category: "Snacks",
    tag: "Crispy",
    image: "https://images.unsplash.com/photo-1639024471287-032f66016736?w=600&auto=format&fit=crop&q=80",
    emoji: "🧅"
  },
  {
    id: 16,
    name: "Iced Caramel Macchiato",
    desc: "Slow-steeped espresso layered with salted caramel drizzle & oat milk froth",
    price: 50,
    category: "Drinks",
    tag: "★ Bestseller",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=80",
    emoji: "☕"
  }
];

// LocalStorage helpers
function getStoredJSON(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (err) {
    return fallback;
  }
}

function setStoredJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn("Storage write error", err);
  }
}

// State
let foods = getStoredJSON("campusCustomFoods", defaultFoods);
let cart = getStoredJSON("campusCart", []);
let orders = getStoredJSON("campusOrders", []);
let nextToken = Number(localStorage.getItem("campusNextToken") || "101");
let activeCategory = "All";
let searchQuery = "";
let isAdminMode = false;

// DOM Elements
const foodGrid = document.getElementById("foodGrid");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const toast = document.getElementById("toast");
const searchInput = document.getElementById("searchInput");
const searchClearBtn = document.getElementById("searchClearBtn");
const itemCountDisplay = document.getElementById("itemCountDisplay");
const tokenModal = document.getElementById("tokenModal");

// Admin Elements
const adminToggleBtn = document.getElementById("adminToggleBtn");
const adminToolbar = document.getElementById("adminToolbar");
const adminItemModal = document.getElementById("adminItemModal");
const adminItemForm = document.getElementById("adminItemForm");
const adminModalTitle = document.getElementById("adminModalTitle");
const editItemId = document.getElementById("editItemId");
const itemFormName = document.getElementById("itemFormName");
const itemFormPrice = document.getElementById("itemFormPrice");
const itemFormCategory = document.getElementById("itemFormCategory");
const itemFormTag = document.getElementById("itemFormTag");
const itemFormImage = document.getElementById("itemFormImage");
const itemFormDesc = document.getElementById("itemFormDesc");
const itemFormStock = document.getElementById("itemFormStock");
const formImagePreview = document.getElementById("formImagePreview");
const previewPlaceholder = document.getElementById("previewPlaceholder");

function money(val) {
  return "₹" + val;
}

// Toast
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

// Render Foods with Admin Controls and Stock Status
function renderFoods() {
  let list = foods;
  if (activeCategory !== "All") {
    list = list.filter(f => f.category === activeCategory);
  }
  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(f => f.name.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q) || f.category.toLowerCase().includes(q));
  }

  // Update item count badge
  if (itemCountDisplay) {
    itemCountDisplay.textContent = `Showing ${list.length} ${list.length === 1 ? 'item' : 'items'}`;
  }

  if (list.length === 0) {
    foodGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        No delicious canteen items match "<b>${searchQuery}</b>". Try another search or filter!
      </div>
    `;
    return;
  }

  foodGrid.innerHTML = list.map(f => {
    const isSoldOut = Boolean(f.isSoldOut);
    return `
    <article class="food-card ${isAdminMode ? 'admin-mode' : ''} ${isSoldOut ? 'is-sold-out' : ''}" data-id="${f.id}">
      <span class="food-badge">${f.tag || 'Canteen Special'}</span>
      ${isSoldOut ? '<span class="sold-out-badge">Sold Out</span>' : ''}
      <div class="food-image-wrap">
        <img src="${f.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600'}" alt="${f.name}" class="food-photo" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600'">
      </div>
      <h3 class="food-title">${f.name}</h3>
      <p class="food-desc">${f.desc}</p>
      <div class="food-bottom-row">
        <span class="food-price">${money(f.price)}</span>
        ${isSoldOut ? `
          <button class="add-round-btn btn-sold-out-disabled" disabled aria-label="${f.name} is sold out">
            Sold Out
          </button>
        ` : `
          <button class="add-round-btn" aria-label="Add ${f.name} to cart" onclick="addToCart(${f.id})">
            <span>+</span> Add
          </button>
        `}
      </div>
      ${isAdminMode ? `
        <div class="card-admin-bar">
          <button class="btn-card-action edit" onclick="openEditItemModal(${f.id})" title="Edit dish details">✏️ Edit</button>
          <button class="btn-card-action delete" onclick="deleteDish(${f.id})" title="Delete dish">🗑️ Delete</button>
          <button class="btn-card-action stock-toggle ${isSoldOut ? 'sold-out' : 'in-stock'}" onclick="toggleDishStock(${f.id})" title="Toggle availability">
            ${isSoldOut ? '🔴 Mark Available' : '🟢 In Stock'}
          </button>
        </div>
      ` : ''}
    </article>
  `;
  }).join("");
}

// Cart Logic
function addToCart(id) {
  const existing = cart.find(x => x.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }
  setStoredJSON("campusCart", cart);
  renderCart();
  const f = foods.find(x => x.id === id);
  showToast(`Added ${f ? f.name : "item"} to cart!`);
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(x => x.id !== id);
  }
  setStoredJSON("campusCart", cart);
  renderCart();
}

function cartTotal() {
  return cart.reduce((sum, item) => {
    const f = foods.find(x => x.id === item.id);
    return sum + (f ? f.price * item.qty : 0);
  }, 0);
}

function renderCart() {
  const count = cart.reduce((sum, x) => sum + x.qty, 0);
  const totalStr = money(cartTotal());

  // Update desktop & mobile badge counts
  const countEl = document.getElementById("cartCount");
  if (countEl) countEl.textContent = count;
  const mobileCountEl = document.getElementById("mobileCartCount");
  if (mobileCountEl) mobileCountEl.textContent = count;

  // Update total prices
  const navTotalEl = document.getElementById("navCartTotal");
  if (navTotalEl) navTotalEl.textContent = totalStr;
  const drawerTotalEl = document.getElementById("cartTotal");
  if (drawerTotalEl) drawerTotalEl.textContent = totalStr;

  const container = document.getElementById("cartItems");
  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-state">Your cart is empty. Add something tasty from the menu!</div>';
    return;
  }

  container.innerHTML = cart.map(item => {
    const f = foods.find(x => x.id === item.id);
    if (!f) return "";
    return `
      <div class="cart-item-row">
        <img src="${f.image}" alt="${f.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100'">
        <div class="cart-item-details">
          <b>${f.name}</b>
          <small>${money(f.price)} each</small>
        </div>
        <div class="cart-qty-ctrl">
          <button aria-label="Decrease quantity" onclick="changeQty(${f.id}, -1)">−</button>
          <b>${item.qty}</b>
          <button aria-label="Increase quantity" onclick="changeQty(${f.id}, 1)">+</button>
        </div>
      </div>
    `;
  }).join("");
}

// Drawer
function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
}

// Orders
function renderOrders() {
  const area = document.getElementById("orderHistory");
  if (orders.length === 0) {
    area.innerHTML = '<div class="empty-state">No orders yet. Place an order from the menu to track live tokens!</div>';
    return;
  }

  area.innerHTML = orders.slice().reverse().map(o => `
    <div class="history-card">
      <div class="history-token-badge">#${o.token}</div>
      <div class="history-content">
        <b>${o.items.map(i => `${i.name} ×${i.qty}`).join(", ")}</b>
        <small>${o.date} · Total: ${money(o.total)} · Pickup: Counter 2</small>
      </div>
      <span class="order-status-badge ${o.status.toLowerCase()}">${o.status}</span>
    </div>
  `).join("");
}

function placeOrder() {
  if (cart.length === 0) {
    showToast("Please add items to your cart first!");
    return;
  }

  const orderItems = cart.map(x => {
    const f = foods.find(food => food.id === x.id);
    return {
      name: f ? f.name : "Item",
      price: f ? f.price : 0,
      qty: x.qty
    };
  });

  const order = {
    token: nextToken++,
    items: orderItems,
    total: cartTotal(),
    date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: "Preparing"
  };

  orders.push(order);
  setStoredJSON("campusOrders", orders);
  localStorage.setItem("campusNextToken", String(nextToken));

  cart = [];
  setStoredJSON("campusCart", cart);
  renderCart();
  renderOrders();
  closeCart();

  document.getElementById("tokenNumber").textContent = "#" + order.token;
  document.getElementById("tokenTime").textContent = "Estimated pickup: " + (5 + (order.token % 3) * 3) + " minutes";
  tokenModal.classList.add("show");

  // Simulated live status progression: moves from Preparing to Ready after 12s
  setTimeout(() => {
    const ord = orders.find(x => x.token === order.token);
    if (ord) {
      ord.status = "Ready";
      setStoredJSON("campusOrders", orders);
      renderOrders();
      showToast(`Token #${order.token} is now READY for pickup at Counter 2!`);
    }
  }, 12000);
}

// Category filter click
document.getElementById("categories").addEventListener("click", e => {
  const btn = e.target.closest(".cat-pill");
  if (!btn) return;
  activeCategory = btn.dataset.category;
  document.querySelectorAll(".cat-pill").forEach(p => p.classList.toggle("active", p === btn));
  renderFoods();
});

// Category helper for footer links
window.filterByCat = function(categoryName) {
  activeCategory = categoryName;
  document.querySelectorAll(".cat-pill").forEach(p => p.classList.toggle("active", p.dataset.category === categoryName));
  renderFoods();
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
};

// Search handling
searchInput.addEventListener("input", e => {
  searchQuery = e.target.value;
  searchClearBtn.style.display = searchQuery ? "inline-block" : "none";
  renderFoods();
});

searchClearBtn.addEventListener("click", () => {
  searchQuery = "";
  searchInput.value = "";
  searchClearBtn.style.display = "none";
  renderFoods();
  searchInput.focus();
});

// Cart triggers
document.getElementById("cartOpen").addEventListener("click", openCart);
const mobileCartOpen = document.getElementById("mobileCartOpen");
if (mobileCartOpen) mobileCartOpen.addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
document.getElementById("checkoutBtn").addEventListener("click", placeOrder);

document.getElementById("modalClose").addEventListener("click", () => {
  tokenModal.classList.remove("show");
});

document.getElementById("doneBtn").addEventListener("click", () => {
  tokenModal.classList.remove("show");
  document.getElementById("ordersSection").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("clearHistory").addEventListener("click", () => {
  if (orders.length === 0) {
    showToast("No orders to clear.");
    return;
  }
  if (confirm("Clear all recent order tokens?")) {
    orders = [];
    localStorage.removeItem("campusOrders");
    renderOrders();
    showToast("Order history cleared.");
  }
});

// Interactive buttons
document.getElementById("rewardsBtn").addEventListener("click", () => {
  showToast("Campus Rewards: You have 150 points! Redeem at checkout.");
});

document.getElementById("locationPicker").addEventListener("click", () => {
  showToast("Pickup Counter 2 · Express Kitchen Active & Preparing");
});

document.getElementById("profileBtn").addEventListener("click", () => {
  showToast("Logged in as: Student · Campus Member #824");
});

// ===================================================================
// ADMIN MENU MANAGER FUNCTIONS
// ===================================================================

function toggleAdminMode() {
  isAdminMode = !isAdminMode;
  if (adminToggleBtn) adminToggleBtn.classList.toggle("active", isAdminMode);
  if (adminToolbar) adminToolbar.style.display = isAdminMode ? "flex" : "none";
  renderFoods();
  showToast(isAdminMode ? "🛠️ Canteen Admin Mode Activated! You can now add, edit, or remove dishes." : "Exited Admin Mode.");
}

function updateImagePreview(url) {
  if (url && url.trim().startsWith("http")) {
    formImagePreview.src = url.trim();
    formImagePreview.style.display = "block";
    previewPlaceholder.style.display = "none";
  } else {
    formImagePreview.src = "";
    formImagePreview.style.display = "none";
    previewPlaceholder.style.display = "block";
  }
}

if (itemFormImage) {
  itemFormImage.addEventListener("input", e => updateImagePreview(e.target.value));
}

document.querySelectorAll(".preset-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const url = btn.dataset.url;
    itemFormImage.value = url;
    updateImagePreview(url);
  });
});

function openAddItemModal() {
  editItemId.value = "";
  adminModalTitle.textContent = "Add New Dish to Menu";
  adminItemForm.reset();
  itemFormStock.checked = true;
  updateImagePreview("");
  adminItemModal.classList.add("show");
  itemFormName.focus();
}

window.openEditItemModal = function(id) {
  const item = foods.find(f => f.id === id);
  if (!item) return;
  editItemId.value = item.id;
  adminModalTitle.textContent = `Edit Dish: ${item.name}`;
  itemFormName.value = item.name;
  itemFormPrice.value = item.price;
  itemFormCategory.value = item.category;
  itemFormTag.value = item.tag || "";
  itemFormImage.value = item.image || "";
  itemFormDesc.value = item.desc;
  itemFormStock.checked = !item.isSoldOut;
  updateImagePreview(item.image);
  adminItemModal.classList.add("show");
};

function closeAdminModal() {
  adminItemModal.classList.remove("show");
}

function saveDish(e) {
  e.preventDefault();
  const idVal = editItemId.value;
  const name = itemFormName.value.trim();
  const price = Number(itemFormPrice.value);
  const category = itemFormCategory.value;
  const tag = itemFormTag.value.trim() || "Canteen Fresh";
  const image = itemFormImage.value.trim() || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600";
  const desc = itemFormDesc.value.trim();
  const isSoldOut = !itemFormStock.checked;

  if (!name || isNaN(price) || price <= 0) {
    showToast("Please provide a valid dish name and price.");
    return;
  }

  if (idVal) {
    // Edit existing item
    const targetId = Number(idVal);
    const item = foods.find(f => f.id === targetId);
    if (item) {
      item.name = name;
      item.price = price;
      item.category = category;
      item.tag = tag;
      item.image = image;
      item.desc = desc;
      item.isSoldOut = isSoldOut;
      showToast(`Updated "${name}" successfully!`);
    }
  } else {
    // Add new item
    const newDish = {
      id: Date.now(),
      name,
      price,
      category,
      tag,
      image,
      desc,
      emoji: category === "Rolls" ? "🌯" : category === "Drinks" ? "🥤" : category === "Desserts" ? "🍰" : category === "Meals" ? "🍱" : "🍟",
      isSoldOut
    };
    foods.unshift(newDish);
    showToast(`Added "${name}" to the canteen menu!`);
  }

  setStoredJSON("campusCustomFoods", foods);
  closeAdminModal();
  renderFoods();
  renderCart();
}

window.deleteDish = function(id) {
  const item = foods.find(f => f.id === id);
  if (!item) return;
  if (confirm(`Are you sure you want to delete "${item.name}" from the menu?`)) {
    foods = foods.filter(f => f.id !== id);
    // Also remove from active cart if present
    cart = cart.filter(c => c.id !== id);
    setStoredJSON("campusCustomFoods", foods);
    setStoredJSON("campusCart", cart);
    renderFoods();
    renderCart();
    showToast(`"${item.name}" has been deleted.`);
  }
};

window.toggleDishStock = function(id) {
  const item = foods.find(f => f.id === id);
  if (!item) return;
  item.isSoldOut = !item.isSoldOut;
  setStoredJSON("campusCustomFoods", foods);
  renderFoods();
  showToast(`"${item.name}" marked as ${item.isSoldOut ? 'Sold Out 🔴' : 'In Stock 🟢'}.`);
};

function resetMenuDefaults() {
  if (confirm("Reset the entire canteen menu back to factory default items? All custom dishes and price changes will be restored.")) {
    foods = JSON.parse(JSON.stringify(defaultFoods));
    localStorage.removeItem("campusCustomFoods");
    renderFoods();
    renderCart();
    showToast("Menu successfully restored to defaults.");
  }
}

// Admin Event Listeners
if (adminToggleBtn) adminToggleBtn.addEventListener("click", toggleAdminMode);
const adminAddDishBtn = document.getElementById("adminAddDishBtn");
if (adminAddDishBtn) adminAddDishBtn.addEventListener("click", openAddItemModal);
const adminResetMenuBtn = document.getElementById("adminResetMenuBtn");
if (adminResetMenuBtn) adminResetMenuBtn.addEventListener("click", resetMenuDefaults);
const adminExitBtn = document.getElementById("adminExitBtn");
if (adminExitBtn) adminExitBtn.addEventListener("click", toggleAdminMode);
const adminModalClose = document.getElementById("adminModalClose");
if (adminModalClose) adminModalClose.addEventListener("click", closeAdminModal);
const adminCancelBtn = document.getElementById("adminCancelBtn");
if (adminCancelBtn) adminCancelBtn.addEventListener("click", closeAdminModal);
if (adminItemForm) adminItemForm.addEventListener("submit", saveDish);

// Escape key to close modals
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeCart();
    tokenModal.classList.remove("show");
    closeAdminModal();
  }
});

// Mobile dock nav handling
document.querySelectorAll(".dock-btn").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".dock-btn").forEach(x => x.classList.remove("active"));
    item.classList.add("active");
    const target = item.dataset.nav;
    if (target === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (target === "menu") {
      document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    } else if (target === "orders") {
      document.getElementById("ordersSection").scrollIntoView({ behavior: "smooth" });
    } else if (target === "profile") {
      showToast("Signed in as Student (Campus Member)");
    }
  });
});

// Initial Render
renderFoods();
renderCart();
renderOrders();

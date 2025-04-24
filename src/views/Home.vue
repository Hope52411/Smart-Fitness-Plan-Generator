<template>
  <div class="app-container">
    <!-- ✅ 背景只显示一次，不包住所有内容 -->
    <div id="bgimg2"></div>

    <!-- ✅ 页面内容区 -->
    <div class="main-content">
      <!-- Top Navigation Bar -->
      <header class="navbar">
        <nav>
          <ul>
            <li><router-link to="/home" active-class="active">Home</router-link></li>
            <li><router-link to="/home/fitness-planner" active-class="active">Fitness Planner</router-link></li>
            <li><router-link to="/home/tools" active-class="active">Tools</router-link></li>
            <li><router-link to="/home/friends" active-class="active">Friends</router-link></li>
            <li><router-link to="/home/community" active-class="active">Community</router-link></li>
            <li><router-link to="/home/contact" active-class="active">Contact Me</router-link></li>
            <li>
              <button class="logout-button" @click="logout">Log Out</button>
            </li>
          </ul>
        </nav>
      </header>

      <!-- ✅ 子页面会在这里展示 -->
      <router-view />
    </div>
  </div>
</template>


<script>
export default {
  name: 'Home',
  data() {
    return {
      selectedPart: null
    };
  },
  methods: {
    logout() {
      // ✅ 清除 localStorage 中的登录状态信息
      localStorage.clear();

      // ✅ （可选）如果你用了 cookie-based session，也可以通知后端退出
      fetch('/api/logout', {
        method: 'POST',
        credentials: 'include', // 保持 cookie
      })
        .then(response => {
          if (response.ok) {
            console.log("✅ Successfully logged out");
          } else {
            console.error("❌ Failed to log out from the server");
          }
        })
        .catch(error => {
          console.error("❌ Logout error:", error);
        });

      // ✅ 通知父组件 + 重定向回首页（登录页）
      this.$emit("user-logged-out");
      this.$router.push("/");
    },
  }
};
</script>

<style scoped>
.main-content {
  position: relative;
  z-index: 1;
}

body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

#bgimg2 {
  background: url('~@/assets/bgimg3.png') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}


.navbar {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 15px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.navbar nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar nav ul li {
  margin-right: 20px;
}

.navbar nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;
}

.navbar nav ul li a.active {
  font-weight: bold;
  border-bottom: 2px solid #fff;
}

.navbar nav ul li a:hover {
  color: #ffe4b5;
}

.logout-button {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;

  position: absolute;
  top: 33px;
  right: 10px;
}


.logout-button:hover {
  background: #ff4757;
}

@media (max-width: 768px) {
  .navbar nav ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 10px 15px; 
    justify-items: center;
    padding: 10px 0;
  }

  .navbar nav ul li {
    margin: 0; 
  }

  .navbar nav ul li a {
    font-size: 15px;
    padding: 5px 10px;
    white-space: nowrap;
  }

  .logout-button {
    grid-column: span 3; 
    margin-top: 10px;
    width: 80%;
    justify-self: center;
  }
}


</style>

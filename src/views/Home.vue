<template>
  <div class="app-container">
    <div id="bgimg2"></div>
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
              <button v-if="showInstallButton" class="install-button" @click="installApp">
                📥 Install App
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      selectedPart: null,
      deferredPrompt: null,       // Save install prompt event
      showInstallButton: false,   // Control install button visibility
    };
  },
  created() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallButton = true; // Show install button when available
    });
  },
  methods: {
    logout() {
      localStorage.clear();

      fetch('/api/logout', {
        method: 'POST',
        credentials: 'include',
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

      this.$emit("user-logged-out");
      this.$router.push("/");
    },
    installApp() {
      if (this.deferredPrompt) {
        this.deferredPrompt.prompt();
        this.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          this.deferredPrompt = null;
          this.showInstallButton = false;
        });
      }
    }
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
  padding: 8px 20px;
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
  position: relative; /* Make logout and install button relative */
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

/* Logout Button Style */
.logout-button {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  margin-right: 10px;
}

.logout-button:hover {
  background: #ff4757;
}

/* Install Button Style */
.install-button {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.install-button:hover {
  background: #369c72;
}

/* Mobile view adjustments */
@media (max-width: 768px) {
  .navbar {
    height: 80px;
    padding: 2px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navbar nav ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px 10px;
    justify-items: center;
    padding: 5px 0;
  }

  .navbar nav ul li a {
    font-size: 14px;
    padding: 4px 8px;
    white-space: nowrap;
  }

  .logout-button, .install-button {
    top: 5px;
    right: 10px;
    padding: 4px 10px;
    font-size: 12px;
  }
}
</style>

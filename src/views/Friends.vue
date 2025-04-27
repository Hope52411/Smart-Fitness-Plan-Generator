<template>
  <div class="page-wrapper">
    <div class="community-scroll slide-in">
    <!-- 添加好友区域 -->
    <div class="friends-container">
      <h2>👥 Add New Friends</h2>

      <div class="search-section">
        <input v-model="searchQuery" placeholder="Enter username to search" />
        <button @click="searchUsers">Search</button>
      </div>

      <div v-if="searchResults.length" class="results">
        <h3>Search Results:</h3>
        <ul>
          <li v-for="user in searchResults" :key="user.id">
            <span><strong>{{ user.loginName }}</strong> - {{ user.email }}</span>
            <button @click="addFriend(user)">➕ Add</button>
          </li>
        </ul>
      </div>

      <div v-if="message" :class="['feedback', message.includes('❌') ? 'error' : '']">
        {{ message }}
      </div>
    </div>

    <!-- 好友列表区域 -->
    <div v-if="friendList.length" class="friends-section">
      <h3>🡫 Your Friends:</h3>
      <ul>
        <li v-for="friend in friendList" :key="friend.id">
          {{ friend.username }}
          <button @click="goToChat(friend.id, friend.username)">💬 Chat</button>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>


<script>
import ChatPopup from "@/views/ChatPopup.vue";
import axios from "axios";

export default {
  name: "Friends",
  components: { ChatPopup },
  data() {
    return {
      searchQuery: "",
      searchResults: [],
      message: "",
      friendList: []
    };
  },
  mounted() {
    this.fetchFriends();
  },
  methods: {
    goToChat(friendId, friendName) {
      this.$root.$emit("open-chat", friendId, friendName);

    },
    async fetchFriends() {
      try {
        const currentUser = localStorage.getItem("loginName");
        const response = await axios.get("https://api.hope52411.tech/api/friends/list", {
          params: { userName: currentUser },
        });
        this.friendList = response.data || [];
      } catch (err) {
        console.error("❌ Failed to fetch friends:", err);
        this.message = "❌ Failed to load friend list.";
      }
    },
    async searchUsers() {
      if (!this.searchQuery.trim()) return;
      try {
        const response = await axios.get(
          `https://api.hope52411.tech/sys-user/search?name=${encodeURIComponent(this.searchQuery)}`
        );
        this.searchResults = response.data;
        this.message = this.searchResults.length ? "" : "❌ The user was not found";
      } catch (err) {
        console.error("Search error:", err);
        this.message = "❌ Query failed, please try again later";
      }
    },
    async addFriend(user) {
      const currentUser = localStorage.getItem("loginName");
      if (user.loginName === currentUser) {
        this.message = "⚠️ You cannot add yourself as a friend.";
        return;
      }
      try {
        const res = await axios.post("https://api.hope52411.tech/api/friends/add", {
          userName: currentUser,
          friendId: user.id,
        });
        this.message = res.data || "✅ Friend added successfully!";
        this.fetchFriends();
        setTimeout(() => (this.message = ""), 3000);
      } catch (err) {
        console.error("Add friend failed:", err);
        this.message = err.response?.data ? `❌ ${err.response.data}` : "❌ Failed to add friend.";
      }
    },
  },
};
</script>

<style scoped>
.page-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
}


.friends-container,
.friends-section {
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
  text-align: center;
  transition: all 0.3s ease;
  max-height: 350px;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
}

.friends-container h2,
.friends-section h3 {
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
}

.search-section {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 25px;
}

.search-section input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  max-width: 300px;
}

.search-section button {
  background-color: #667eea;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.search-section button:hover {
  background-color: #5563c1;
}

.results h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.results ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 100%;
}

.results li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f6fc;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.results li button {
  background-color: #667eea;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.results li button:hover {
  background-color: #4b55c4;
}

.feedback {
  margin-top: 20px;
  font-weight: 600;
  color: #c0392b;
  font-size: 16px;
}

.friends-section h3 {
  font-size: 22px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
}

.friends-section ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 100%;
}

.friends-section li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f6fc;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.friends-section button {
  background-color: #23c99e;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.friends-section button:hover {
  background-color: #1ba886;
}

.community-scroll {
  width: 80%;
  max-width: 800px;
  height: calc(100vh - 60px);
  overflow-y: auto;
  padding-bottom: 30px;
}

.community-scroll::-webkit-scrollbar {
  width: 8px;
}
.community-scroll::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}
.community-scroll::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.slide-in {
  animation: slideInUp 0.6s ease-out both;
}

@media (max-width: 768px) {
  .search-section {
    flex-direction: column;
  }

  .search-section input,
  .search-section button {
    width: 100%;
  }

  .results li,
  .friends-section li {
    flex-direction: column;
    gap: 10px;
  }
}

@media (max-width: 768px) {
  .friends-container,
  .friends-section {
    padding: 20px 15px;
    max-height: none;          
    width: 100%;
    box-sizing: border-box;
  }

  .search-section {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  .search-section input,
  .search-section button {
    width: 100%;
    font-size: 15px;
  }

  .results li,
  .friends-section li {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 10px;
  }

  .results li button,
  .friends-section button {
    align-self: flex-end;
    font-size: 13px;
    padding: 6px 10px;
  }

  .feedback {
    font-size: 14px;
    margin-top: 15px;
  }
  
  .friends-container h2,
  .friends-section h3 {
    font-size: 20px;
    margin-bottom: 15px;
  }
}

</style>
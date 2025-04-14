<template>
    <div id="bgimg">
      <body id="poster">
        <el-form class="login-container" label-position="left" label-width="0px">
          <h3 class="login_title">Reset Password</h3>
          <el-form-item>
            <el-input
              type="password"
              v-model="newPassword"
              autocomplete="off"
              placeholder="Enter new password"
              prefix-icon="el-icon-lock"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              v-model="confirmPassword"
              autocomplete="off"
              placeholder="Confirm new password"
              prefix-icon="el-icon-lock"
            ></el-input>
          </el-form-item>
          <el-form-item style="width: 100%;">
            <el-button
              type="primary"
              style="width: 100%; background: #505458; border: none"
              @click="resetPassword"
              >Reset Password</el-button
            >
          </el-form-item>
          <el-button type="text" @click="backToLogin">Back to Login</el-button>
          <p v-if="message" class="info-message">{{ message }}</p>
        </el-form>
      </body>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        newPassword: "",
        confirmPassword: "",
        token: "", // 初始化 token 为空
        message: "",
      };
    },
    mounted() {
      // 从 URL 获取 token 参数
      const token = new URLSearchParams(window.location.hash.split('?')[1]).get('token');
      this.token = token;
      console.log("✅ Extracted token:", this.token); 
    },
    methods: {
      async resetPassword() {
        if (this.newPassword !== this.confirmPassword) {
          this.message = "Passwords do not match!";
          return;
        }
  
        console.log("🔹 Sending reset request with token:", this.token); 
  
        try {
          const response = await axios.post("http://localhost:3231/auth/reset-password", {
            token: this.token,
            newPassword: this.newPassword,
          });
          this.message = "Password reset successful! You can now log in.";
        } catch (error) {
          console.error("❌ Reset Password Error:", error.response);
          this.message = error.response?.data || "Failed to reset password. Please try again.";
        }
      },
      backToLogin() {
        this.$router.push({ path: "/" });
      },
    },
  };
  </script>
  
  <style>
  #poster {
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body {
    margin: 0px;
    padding: 0px;
  }
  .info-message {
    text-align: center;
    color: #606266;
    margin-top: 10px;
  }
  </style>
  
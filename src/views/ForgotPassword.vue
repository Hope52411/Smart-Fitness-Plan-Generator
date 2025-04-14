<template>
    <div id="bgimg">
      <body id="poster">
        <el-form class="login-container" label-position="left" label-width="0px">
          <h3 class="login_title">Forgot Password</h3>
          <el-form-item>
            <el-input
              type="email"
              v-model="email"
              autocomplete="off"
              placeholder="Enter your registered email"
              prefix-icon="el-icon-message"
            ></el-input>
          </el-form-item>
          <el-form-item style="width: 100%;">
            <el-button
              type="primary"
              style="width: 100%; background: #505458; border: none"
              @click="sendResetEmail"
            >Send Reset Link</el-button>
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
        email: "",
        message: "",
      };
    },
    methods: {
      async sendResetEmail() {
        try {
          const response = await axios.post("http://localhost:3231/auth/forgot-password", { email: this.email });
          this.message = "If this email is registered, you will receive a reset link.";
        } catch (error) {
          this.message = "Error sending reset email. Please try again.";
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
  
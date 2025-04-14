<template>
  <div id="bgimg">
      <el-form class="login-container" label-position="left" label-width="0px">
        <h3 class="login_title">Login</h3>
        <el-form-item>
          <el-input
            type="text"
            v-model="loginForm.loginName"
            autocomplete="off"
            placeholder="Username"
          >
            <template #prefix>
              <i class="el-icon-user"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
            placeholder="Password"
          >
            <template #prefix>
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="loginForm.identity" placeholder="Please select identity">
            <el-option label="Ordinary user" value="User"></el-option>
            <el-option label="Administrator" value="Admin"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="width: 100%;">
          <el-button class="login-btn" type="primary" @click="Login">Login</el-button>
        </el-form-item>
        <div class="login-footer">
          <el-button type="text" @click="toRegister">Click me to register</el-button>
          <el-button type="text" @click="toForgotPassword">Forgot Password?</el-button>
        </div>
      </el-form>
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        loginName: "",
        password: "",
        identity: "",
      },
    };
  },
  methods: {
    Login() {
    this.axios.post("http://localhost:3231/sys-user/login", this.loginForm)
      .then((resp) => {
        let data = resp.data;
        if (data.success) {
          // ✅ 存储登录用户信息
          sessionStorage.setItem("userRole", this.loginForm.loginName === "Admin" ? "Admin" : "User");
          sessionStorage.setItem("isAuthenticated", "true");
          sessionStorage.setItem("loginName", this.loginForm.loginName); // 🔹 存储当前用户名
          
          console.log("✅ 登录成功，当前用户:", this.loginForm.loginName);

          this.$message({
            message: `Welcome to home page, ${this.loginForm.loginName}!`,
            type: "success",
          });

          // ✅ 根据用户跳转到不同页面
          this.$router.push({ path: this.loginForm.loginName === "Admin" ? "/admin" : "/home" });

        } else {
          this.$message({
            message: data.message || "Login failed, please try again.",
            type: "error",
          });
        }
      })
      .catch((error) => {
        console.error("❌ 登录请求错误:", error);
        this.$message({
          message: "Server error, please try again later.",
          type: "error",
        });
      });
  },
    toRegister() {
      this.$router.push({ path: "/Register" });
    },
    toForgotPassword() {
      this.$router.push({ path: "/ForgotPassword" });
    },
  },
};
</script>

<style>
/* 背景设置 */
#bgimg {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("~@/assets/bgimg.png") no-repeat center center/cover;
}

.login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  
/* 标题样式 */
.login_title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
}

/* 登录按钮 */
.login-btn {
  width: 100%;
  background: linear-gradient(45deg, #505458, #6b6f73);
  border: none;
  font-size: 16px;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.3s;
}

.login-btn:hover {
  background: linear-gradient(45deg, #6b6f73, #505458);
  transform: scale(1.05);
}

/* 底部按钮 */
.login-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

/* 输入框样式 */
.el-input__inner {
  border-radius: 8px;
  height: 40px;
  font-size: 14px;
}

/* 下拉选择框 */
.el-select {
  width: 100%;
}

.el-select-dropdown {
  border-radius: 8px;
}
</style>

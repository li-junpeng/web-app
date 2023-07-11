<!--
 * 登录页
 *
 * @author Junpeng.Li
 * @date 2023-06-12 16:14
-->
<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="login-box">
      <div class="system-introduce-box"></div>
      <div class="login-form-box">
        <div class="title">
          <span class="login-span">登录</span>
          <span>没有账号？<a>点此注册</a></span>
        </div>
        <div class="input-wrapper" style="margin-top: 100px">
          <input type="text" required/>
          <span>邮箱</span>
        </div>
        <div class="input-wrapper">
          <input type="password" required/>
          <span>密码</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  background-image: url("./background-image.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-box {
    width: 60%;
    height: 70%;
    display: flex;
    align-items: center;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 80px 0 rgba(0, 0, 0, .3);

    .system-introduce-box {
      flex: 2;
      height: 100%;
      background-color: #1b2d43;
      position: relative;
    }

    .login-form-box {
      flex: 1;
      height: 100%;
      background-color: white;

      .title {
        margin: 30px 30px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        font-size: 14px;
        user-select: none;

        .login-span {
          font-size: 2em;
          font-weight: bold;
          letter-spacing: 30px;
        }

        a {
          color: #1b83ff;
          cursor: pointer;
        }
      }

      .input-wrapper {
        margin: 50px 30px;
        position: relative;
        font-size: 14px;

        input {
          width: 100%;
          outline: none;
          padding: 5px 0;
          border: none;
          border-bottom: 1px solid #c9c9c9;

          &:valid ~ span,
          &:focus ~ span {
            top: -18px;
            color: #303133;
            font-size: 14px;
          }
        }

        span {
          position: absolute;
          left: 0;
          top: 0;
          color: #C0C4CC;
          font-size: 16px;
          transition: all .5s;
        }
      }
    }
  }
}
</style>

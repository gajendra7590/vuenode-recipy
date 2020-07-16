<template>
  <div class="login-box">
  <div class="login-logo">
    <a href="javascript:void(0);"><b>Recipe</b> Admin Login</a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form action="" method="post">
        <div class="input-group mb-3">
          <input type="email" 
                 name="email"                
                 class="form-control" 
                 placeholder="Your email..">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" 
                 name="password"
                 class="form-control" 
                 placeholder="Your password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input 
                  name="remember"
                  type="checkbox" 
                  id="remember"
                  >
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="javascript:void(0);" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="javascript:void(0);" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div>
      <!-- /.social-auth-links -->

      <p class="mb-1">
        <router-link to="/forgot-password">I forgot my password,reset here</router-link>
      </p> 
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
</template>

<script>
export default {
  name: 'Login' 
}
</script> 
<style scoped> 
</style>

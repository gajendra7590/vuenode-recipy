<template>
    <div class="login-page">
      <div class="login-box">
          <div class="login-logo">
            <a href="javascript:void(0);"><b>Recipe</b> New Password</a>
          </div>
          <!-- /.login-logo -->
          <div class="card">
            <div class="card-body login-card-body">
              <p class="login-box-msg">Set Your New Unique Password</p> 
              <form action="recover-password.html" method="post">
                <div class="input-group mb-3">
                  <input type="password" 
                         name="new_password"
                         class="form-control" 
                         placeholder="********">
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary btn-block">Save New Password</button>
                  </div>
                  <!-- /.col -->
                </div>
              </form> 
              <p class="mt-3 mb-1">
                <router-link to="/forgot-password">Resend password reset email</router-link>
              </p> 
              <p class="mt-3 mb-1">
                <router-link to="/login">Already User Login</router-link>
              </p> 
            </div>
            <!-- /.login-card-body -->
          </div>
        </div>
    </div>
</template> 
<script>
    export default {
       name: 'SetNewPassword' 
    }
</script> 
<style scoped> 
</style>

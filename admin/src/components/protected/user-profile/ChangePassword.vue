<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Change Password</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/dashboard">Home</router-link></li>
              <li class="breadcrumb-item active">Change Password</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- left column -->
          <div class="col-md-12">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Change Password</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form">
                <div class="card-body">
                  <div class="form-group">
                    <label>Current Password</label>
                    <input type="text" 
                           class="form-control"  
                           placeholder="Enter current password...">
                  </div>
                  <div class="form-group">
                    <label>New Password</label>
                    <input type="password" 
                           class="form-control"  
                           placeholder="Enter new password...">
                  </div> 
                  <div class="form-group">
                    <label>Confirm New Password</label>
                    <input type="password" 
                           class="form-control"  
                           placeholder="Enter confirm new password...">
                  </div>
                </div>
                <!-- /.card-body --> 
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Update Password</button>
                </div>
              </form>
            </div>
            <!-- /.card --> 
          </div>
          <!--/.col (left) --> 
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
export default {
  name: 'ChangePassword' 
}
</script> 
<style scoped> 
</style>

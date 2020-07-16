<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Update Profile</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/dashboard">Home</router-link></li>
              <li class="breadcrumb-item active">Update Profile</li>
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
                <h3 class="card-title">Update Profile</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form"> 
                <div class="card-body">  
                    <div class="row">
                        <div class="col-sm-6"> 
                            <div class="form-group">
                                <label>First Name</label>
                                <input 
                                    type="text" 
                                    name="first_name"
                                    class="form-control"  
                                    placeholder="Enter first name...">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Last Name</label>
                                <input 
                                    type="text" 
                                    name="last_name"
                                    class="form-control"  
                                    placeholder="Enter last name...">
                            </div>
                        </div>
                    </div>  
                     <div class="row">
                        <div class="col-sm-12"> 
                            <div class="form-group">
                                <label>Display Name</label>
                                <input 
                                    type="text" 
                                    name="display_name"
                                    class="form-control"  
                                    placeholder="Enter display name">
                            </div>
                        </div>
                     </div>

                    <div class="row">
                        <div class="col-sm-6"> 
                            <div class="form-group">
                                <label>Email Address</label>
                                <input 
                                    type="text" 
                                    name="email"
                                    class="form-control"  
                                    placeholder="Enter email address">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input 
                                    type="text" 
                                    name="phone"
                                    class="form-control"  
                                    placeholder="Enter phone..">
                            </div>
                        </div>
                    </div>   

                    <div class="row">
                        <div class="col-sm-6"> 
                            <div class="form-group">
                                <label>Address Line 1</label>
                                <input 
                                    type="text" 
                                    name="address_line_one"
                                    class="form-control"  
                                    placeholder="Enter address line 1...">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label>Address Line 2</label>
                                <input 
                                    type="text" 
                                    name="address_line_two"
                                    class="form-control"  
                                    placeholder="Enter address line 2...">
                            </div>
                        </div>
                    </div>  

                    <div class="row">
                        <div class="col-sm-3"> 
                            <div class="form-group">
                                <label>City</label>
                                <input 
                                    type="text" 
                                    name="city"
                                    class="form-control"  
                                    placeholder="Enter city">
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label>State</label>
                                <input 
                                    type="text" 
                                    name="state"
                                    class="form-control"  
                                    placeholder="Enter state">
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label>Country</label>
                                <input 
                                    type="text" 
                                    name="country"
                                    class="form-control"  
                                    placeholder="Enter country">
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label>Zip Code</label>
                                <input 
                                    type="text" 
                                    name="zip"
                                    class="form-control"  
                                    placeholder="Enter zip code">
                            </div>
                        </div>
                    </div>  


                  <div class="form-group">
                    <label for="exampleInputFile">File input</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="exampleInputFile">
                        <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text" id="">Upload</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
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
  name: 'UpdateProfile' 
}
</script> 
<style scoped> 
</style>

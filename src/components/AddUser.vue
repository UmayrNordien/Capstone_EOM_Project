<template>
    <div>
      <!--Create new Product-->
      <button type="button" class="btn btn-primary mt-4 mb-4" data-bs-toggle="modal" data-bs-target="#userModal1">
        Create New User
      </button>
      <!--Modal-->
      <section id="modal" class="admin-bg">
        <div class="modal fade" id="userModal1" tabindex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title mx-auto me-3" id="userModalLabel">New User</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3 mx-auto row gap-2">
                  <div class="col-sm-12 col-md-6">
                    <input type="text" class="form-control input" v-model="firstName" id="firstName" placeholder="First Name">
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <input type="text" class="form-control input" v-model="lastName" id="lastName" placeholder="Last Name">
                  </div>
                </div>
                <div class="mb-3 mx-auto row gap-2">
                  <div class="col-sm-12 col-md-6">
                    <select class="form-select input" v-model="gender" id="gender" placeholder="Gender">
                      <option selected disabled>Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <input type="number" class="form-control input" v-model="phoneNumber" id="phoneNumber" placeholder="Phone Number">
                  </div>
                </div>
                <div class="mb-3 mx-auto row gap-2">
                  <div class="col-sm-12 col-md-6">
                    <input type="email" class="form-control input" v-model="email" id="email" placeholder="Email">
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <input type="password" class="form-control input" v-model="userPass" id="userPass" placeholder="Password">
                  </div>
                </div>
                <div class="mb-3 mx-auto row gap-2">
                  <div class="col-sm-12 col-md-6">
                    <input type="text" class="form-control input" v-model="userRole" id="userRole" placeholder="Role">
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <input type="url" class="form-control input" v-model="userImage" id="userImage" placeholder="Profile Image URL">
                  </div>
                                </div>

                            <div class="mb-1 w-75 mx-auto row gap-2">
                                <div class="col-sm-10">
                                    <input type="date" class="form-control input" v-model="joinDate" id="" placeholder="Join Date">
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn w-25" id="add-btn">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AddUser',
    data() {
        return {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            userPass: '',
            gender: '',
            userRole: '',
            userImage: '',
            joinDate: '',
        }
    },
    computed: {
        user() {
            return this.$store.dispatch("register", {
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber,
                email: this.email,
                userPass: this.userPass,
                gender: this.gender,
                userRole: this.userRole,
                joinDate: this.joinDate
            })
        }
    }
}
</script>

<style scoped>
.Modal {
    margin-left: 3.5vh;
    margin-bottom: 50px;
    display: flex-start;
}
.form-control {
    background-color: transparent;
}
.input {
  border-radius: 5px;
  border: 1px solid whitesmoke;
  background-color: whitesmoke;
  outline: none;
  padding: 0.7em;
  transition: .4s ease-in-out;
}
.input:hover {
  box-shadow: 6px 6px 0px #969696,
             -3px -3px 10px #ffffff;
}
.input:focus {
  background: #ffffff;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
}
.btn {
    display: inline-block;
    background: #FD0363;
    width: 10%;
    margin-bottom: 20px;
    color: #fff;
    padding: 1.2rem 1.3rem;
    border-radius: 1rem;
    margin-right: 1rem;
    box-shadow: 4px 4px 25px rgba(51, 51, 51, 0.192);
    transition: background 0.5s ease-out;
    border: none;
}
#add-btn{
    font-size: 9px;
    align-items: center;
}
.btn:hover {
    box-shadow: 6px 6px 0px #969696,
        -3px -3px 10px #ffffff;
    transform: translateX(-0.5em) translateY(-0.5em);
}
.btn:active {
    transition: .2s;
    transform: translateX(0em) translateY(0em);
    box-shadow: none;
}
th {
    font-weight: 100;
}
@media screen and (max-width: 369px) {
    .table-respn {
        font-size: 9px
    }
}
@media screen and (max-width: 675px) {
  .btn {
      font-size: 9px
  }
  tr,th{
    font-size: 9px;
  }
}
@media screen and (max-width: 400px) {
  .btn {
      font-size: 7px;
      padding: 10px;
  }
  tr,th{
    font-size: 7px;
  }
}
input,
textarea {
    background-color: transparent !important;
}
</style>
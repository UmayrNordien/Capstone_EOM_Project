<template>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#updateUserModal">
  <i class="bi bi-pencil"></i>
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="updateUserModal" tabindex="-1" aria-labelledby="updateUserModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="updateUserModal">Update User</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="register">            
            <div class="form-row">
                <input type="text" v-model="payload.firstName" placeholder="First Name" class="form-control my-3"
                  required>
            </div>
            <div class="form-row">
                <input type="text" v-model="payload.lastName" placeholder="Last Name" class="form-control my-3"
                  required>
            </div>
            <div class="form-row">
                <input type="text" v-model="payload.gender" placeholder="Gender" class="form-control my-3" required>
            </div>
            <div class="form-row">
                <input type="email" v-model="payload.emailAddress" placeholder="Email Address" class="form-control my-3"
                  required>
            </div>
            <div class="form-row">
                <input type="password" v-model="payload.userPassword" placeholder="******" class="form-control"
                  required>
            </div>
            <div class="form-row">
                <input type="text" v-model="payload.userProfile" placeholder="IMG URL" class="form-control my-3"
                  required>
            </div>
            <div class="form-row">
                <input type="date" v-model="payload.joinDate" class="form-control my-3" required>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-outline-dark">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
    data() {
      return {
        payload : {
        firstName: '',
        lastName: '',
        gender: '',
        emailAddress: '',
        userPass: '',
        userRole: '',
        userProfile: 'https://i.postimg.cc/W1zN5mG0/placeholderprofile.webp',
        joinDate: ''
        }
      }
    },
    computed: {
      message() {
        return this.$store.state.message
      }
    },
    methods: {
      updateUser() {
        console.log('Debug', this.payload);
        this.$store.dispatch('updateUser', this.payload)
      }
    }
}
</script>

<style>
    
</style>
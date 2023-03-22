<template>
    <div>
        <!-- <div class="modal fade" :id="'example' + `${user.prodID}`" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <input v-model="user.name" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="User name">
                        </div>
                        <div class="mb-3">
                            <input v-model="user.description" class="form-control" id="exampleFormControlTextarea1"
                                rows="3" placeholder="Description">
                        </div>
                        <div class="mb-3">
                            <input v-model="user.category" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Category">
                        </div>
                        <div class="mb-3">
                            <input v-model="user.price" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Price">
                        </div>
                        <div class="mb-3">user
                            <input v-model="user.quantity" class="form-control" id="exampleFormControlTextarea1"
                                rows="3" placeholder="Quantity">
                        </div>
                        <div class="mb-3">
                            <input v-model="user.imgURL" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Image">
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">X</button>
                        <button type="button" @click="editUser(user)" class="btn btn-primary">Save
                            changes</button>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
// export default {
//     components: {},
//     data() {
//         return {
//             user_id: "",
//             firstName: "",
//             lastName: "",
//             gender: "",
//             cellphoneNumber: "",
//             emailAdd: "",
//             userPass: "",
//             userRole: "",
//             joinDate: "",
//         }
//     },
//     methods: {
//         newUser: function () {
//             return this.$store.dispatch("newUser", {
//                 user_id: this.user_id,
//                 firstName: this.firstName,
//                 lastName: this.lastName,
//                 gender: this.gender,
//                 cellphoneNumber: this.cellphoneNumber,
//                 emailAdd: this.emailAdd,
//                 userPass: this.userPass,
//                 userRole: this.userRole,
//                 joinDate: this.joinDate,

//             })
//         },
//         editUser: function (user) {
//             return this.$store.dispatch("editUser", {
//                 user_id: user.user_id,
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 gender: user.gender,
//                 cellphoneNumber: user.cellphoneNumber,
//                 emailAdd: user.emailAdd,
//                 userPass: user.userPass,
//                 userRole: user.userRole,
//                 joinDate: user.joinDate,
//             })
//         },
//         deleteUser: function (user) {
//             return this.$store.dispatch("deleteUser", {
//                 user_id: user.user_id,
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 gender: user.gender,
//                 cellphoneNumber: user.cellphoneNumber,
//                 emailAdd: user.emailAdd,
//                 userPass: user.userPass,
//                 userRole: user.userRole,
//                 joinDate: user.joinDate,
//             })
//         },
//     },
//     computed: {
//         users() {
//             return this.$store.state.users;
//         },
//         user() {
//             return this.$store.state.user;
//         }
//     },
//     created() {
//         this.$store.dispatch("getUsers")
//     }
// }
</script>

<style>
    
</style>
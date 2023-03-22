<template>
    <div>
        <!-- <div class="modal fade" :id="'example' + `${product.id}` + '-' + `${index}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <input v-model="product.name" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Product name">
                        </div>
                        <div class="mb-3">
                            <input v-model="product.description" class="form-control" id="exampleFormControlTextarea1"
                                rows="3" placeholder="Description">
                        </div>
                        <div class="mb-3">
                            <input v-model="product.category" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Category">
                        </div>
                        <div class="mb-3">
                            <input v-model="product.price" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Price">
                        </div>
                        <div class="mb-3">
                            <input v-model="product.quantity" class="form-control" id="exampleFormControlTextarea1"
                                rows="3" placeholder="Quantity">
                        </div>
                        <div class="mb-3">
                            <input v-model="product.imgURL" class="form-control" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Image">
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">X</button>
                        <button type="button" @click="editProduct(product)" class="btn btn-primary">Save
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
//             id: "",
//             name: "",
//             description: "",
//             category: "",
//             price: "",
//             quantity: "",
//             imgURL: "",
//         }
//     },
//     methods: {
//         newProduct: function () {
//             return this.$store.dispatch("newProduct", {
//                 name: this.name,
//                 description: this.description,
//                 category: this.category,
//                 price: this.price,
//                 quantity: this.quantity,
//                 imgURL: this.imgURL,

//             })
//         },
//         editProduct: function (product) {
//             return this.$store.dispatch("editProduct", {
//                 id: product.prodID,
//                 prodName: product.name,
//                 prodDescription: product.description,
//                 category: product.category,
//                 price: product.price,
//                 prodQuantity: product.quantity,
//                 imgURL: product.imgURL,
//             })
//         },
//         deleteProduct: function (product) {
//             return this.$store.dispatch("deleteProduct", {
//                 id: product.prodID,
//                 prodName: product.name,
//                 prodDescription: product.description,
//                 category: product.category,
//                 price: product.price,
//                 prodQuantity: product.quantity,
//                 imgURL: product.imgURL,
//             })
//         },
//     },
//     computed: {
//         products() {
//             return this.$store.state.products;
//         },
//         product() {
//             return this.$store.state.product;
//         }
//     },
//     created() {
//         this.$store.dispatch("getProducts")
//     }
// }
</script>


<style>
    
</style>
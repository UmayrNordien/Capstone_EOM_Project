<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal"
        :data-bs-target="'#updateProductModal' + `${product.id}`">
        <i class="bi bi-pencil"></i>
    </button>

    <!-- Modal -->
    <div class="modal fade" :id="'updateProductModal' + `${product.id}`" tabindex="-1" aria-labelledby="updateProductModel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="updateProductModel">Update Product</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="updateProduct()">
                        <div class="form-row">
                            <input class="form-control my-3" v-model="product.id" type="text" placeholder="Product ID">
                        </div>
                        <div class="form-row">
                            <input class="form-control my-3" v-model="product.name" type="text" placeholder="Product Name">
                        </div>
                        <div class="form-row">
                            <input class="form-control my-3" v-model="product.description" type="text"
                                placeholder="Description">
                        </div>
                        <div class="form-row">
                            <input class="form-control my-3" v-model="product.price" type="number" placeholder="Price">
                        </div>
                        <div class="form-row">
                            <input class="form-control my-3" v-model="product.category" type="text" placeholder="Category">
                        </div>
                        <div class="form-row">
                            <input class="form-control my-3" v-model="product.quantity" type="number"
                                placeholder="Quantity">
                        </div>
                        <div class="form-row">
                            <input class="form-control my-3" v-model="product.imgURL" type="text" placeholder="IMG URL">
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-outline-dark">Update Product</button>
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
            product: {
                productID: this.id,
                name: this.name,
                category: this.category,
                price: this.price,
                quantity: this.quantity,
                imgURL: this.imgURLproduct
            },
            computed: {
                message() {
                    return this.$store.state.message;
                }
            },
            mounted() {
                this.$store.dispatch('updateProduct', this.$route.params.id)
            },
            methods: {
                updateProduct: function (product) {
                    return this.$store.dispatch('updateProduct', {
                        id: product.id,
                        name: product.name,
                        category: product.category,
                        price: product.price,
                        quantity: product.quantity,
                        imgURL: product.imgURL
                    })
                }
            }
        }
    }
}
</script>


<style scoped>

</style>
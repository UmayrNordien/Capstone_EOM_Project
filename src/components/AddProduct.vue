<template>
    <div>
      <!--Create new Product-->
      <button type="button" class="btn btn-primary mt-4 mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        Create New Product
      </button>
      <!--Table-->
      <div class="table-responsive">
        <table class="table text-black">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody class="tbody" id="tbody">
          </tbody>
        </table>
      </div>
      <!--Modal-->
      <section id="modal" class="admin-bg">
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title mx-auto me-3" id="exampleModalLabel2">New Product</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <input type="text" class="form-control input" v-model="name" id="name" placeholder="Name">
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control input" v-model="description" id="description" placeholder="Description">
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control input" v-model="price" id="price" placeholder="Price">
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control input" v-model="quantity" id="quantity" placeholder="Quantity">
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control input" v-model="imageUrl" id="image-url" placeholder="Image URL">
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
    name: 'AddProduct',
    data() {
      return {
        name: '',
        description: '',
        price: '',
        quantity: '',
        imageUrl: '',
      }
    },
    computed: {
      product() {
        return {
          name: this.name,
          description: this.description,
          price: this.price,
          quantity: this.quantity,
          imageUrl: this.imageUrl,
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .btn {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  
  .form-control {
    background-color: #BAD7E9;
    border: none;
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
  }
.input:focus {
background: #ffffff;
box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
}
.btn {
  display: inline-block;
  background: #CC095D;
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
  align-items: center !important;
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

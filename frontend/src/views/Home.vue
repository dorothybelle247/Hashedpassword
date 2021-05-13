<template>
  <div class="home">


   <div class="list-group">
 
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">booz for ouuze</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>

<router-link :to="{name: 'Signup'}">
    <button type="button" class="btn btn-outline-dark">
      signup
    </button>
</router-link>
    <small class="text-muted">Donec id elit non mi porta.</small>

    
  </a>
</div>


  </div>
</template>

<script>


export default {
  name: "Home",
  
};
</script>

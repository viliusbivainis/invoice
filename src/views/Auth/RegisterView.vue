<template>
    <div class="card">
      <form @submit.prevent="() => {}" novalidate>
        <div>
          <h1 class="text-2xl font-bold mb-4 text-center">Register</h1>

          <div class="flex flex-column gap-2 mt-4">
            <label for="username">Username</label>
            <InputText id="username" v-model="username" autocomplete="name" required/>
          </div>

          <div class="flex flex-column gap-2 mt-4">
            <label for="email">Email</label>
            <InputText id="email" v-model="email" autocomplete="email" required/>
          </div>

          <div class="flex flex-column gap-2 mt-4">
            <label for="password">Password</label>
            <Password class="w-full" intputId="password" v-model="password" autocomplete="new-password" required toggleMask />
          </div>

          <div class="flex flex-column gap-2 mt-4">
            <label for="password_confirm">Repeat password</label>
            <Password class="w-full" intputId="password_confirm" v-model="passwordConfirm" :feedback="false" autocomplete="new-password" required toggleMask />
          </div>
    
          <div class="mt-6">
            <Button :loading="loading" type="submit" class="w-full" label="Register" aria-label="Register" size="large" />
          </div>
        </div>
      </form>
    </div>
  </template>

  <script>
    import InputText from 'primevue/inputtext';
    import Password from 'primevue/password';
    import Button from 'primevue/button';
    
    export default {
      data() {
        return {
          username: null,
          password: null,
          loading:false,
        }
      },
      components: {
        InputText,
        Password,
        Button
      },
    };
  </script>
  <style>
  .card{
    max-width:480px;
    margin:0 auto;
    padding: 2rem 4rem;
    background:#fff;
  }
  .p-password-input{
    width:100%;
  }
  </style>
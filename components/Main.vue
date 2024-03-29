<template>
  <v-container class="fill-height">
    <div style="max-width: 900px" class="mx-auto">
      <!-- Headline -->
      <v-row justify="center" class="mt-8">
        <v-col cols="11" md="8">
          <div class="text-center">
            <h1 class="text-h3 font-weight-bold gradient-heading">The Donation Store for Your Gameserver </h1>
            <div class="mx-15 text-md-h6 text-subtitle-1 font-weight-light mt-4 mb-n1">Built for Every Gameserver: Empower Your Community
              with a
              Shop
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-8 mb-8">
        <v-card rounded="xl" class="pa-1 darken-3" color="#1976D2">
          <v-btn rounded="xl" size="large" flat color="primary" target="_blank"
                 href="https://app.vyhub.net?register=true" class="btn-grow">
            Get Started
          </v-btn>
        </v-card>
      </v-row>

      <v-row justify="center">
        <v-col>
          <div class="pa-2 rounded-lg grow" style="background-color: #13222e; min-height: 300px" >
            <a href="https://demo.vyhub.net" title="Demo">
              <v-img
                  class="rounded main-image mx-auto" alt="Screenshot of Demo Shop"
                  src="https://cdn.vyhub.net/serverstore.io/banner.png"
              >
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                        color="grey-lighten-4"
                        indeterminate
                    />
                  </div>
                </template>
              </v-img>
            </a>
          </div>
        </v-col>
      </v-row>


      <div class="py-4"/>


      <!-- Features -->
      <v-row justify="center">
        <v-col cols="6">
          <div class="text-center">
            <div class="text-h3 mb-1">🤩</div>
            <h2 class="text-h3 font-weight-bold">Features That Make Selling Easy</h2>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="grow" v-for="feature in features">
          <v-card
              height="100%"
              color="surface-variant"
              rounded="lg"
              variant="text"
          >
            <div class="d-flex align-center pa-3">
              <v-icon class="v-card-item__prepend pr-0 mr-0">
                {{ feature.icon }}
              </v-icon>
              <div>
                <div class="mb-0 pb-0 v-card-title">
                  {{ feature.title }}
                </div>
                <div class="mt-0 pt-0 v-card-text text-disabled">
                  {{ feature.subtitle }}
                </div>
              </div>
            </div>
            <v-overlay
                opacity=".12"
                scrim="primary"
                contained
                model-value
                persistent
            />
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-4 mb-8">
        <v-card rounded="xl" class="pa-1 darken-3" color="#1976D2">
          <v-btn rounded="xl" size="large" flat color="primary" target="_blank" class="btn-grow"
                 href="https://vyhub.net/features/">
            All Features
          </v-btn>
        </v-card>
      </v-row>

      <!-- Games -->
      <v-row justify="center" class="mt-8">
        <v-col cols="6">
          <div class="text-center">
            <div class="text-h3 mb-1 text-white">🎮</div>
            <h2 class="text-h3 font-weight-bold">Games We Support</h2>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="6" sm="4" lg="3" v-for="game in games">
          <v-card rounded="lg" class="game-card ma-1 pa-2 d-flex flex-column justify-center"
                  style="height: 175px;"
                  color="surface-variant" variant="text">
            <v-img height="150px" :src="game.img" :alt="game.title"
                   :max-height="game.max_height ? game.max_height : ''"/>
            <v-overlay
                opacity=".06"
                scrim="primary"
                contained
                model-value
                persistent
            />
          </v-card>
        </v-col>
      </v-row>

      <!-- Get Started Now -->
      <v-row justify="center" class="mt-8">
        <v-col cols="6">
          <div class="text-center">
            <div class="text-h3 mb-1">🚀</div>
            <h2 class="text-h3 font-weight-bold">Get Started Now</h2>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-4 mb-15">
        <v-card rounded="xl" class="pa-1 darken-3" color="#1976D2">
          <v-btn rounded="xl" size="large" flat color="primary" target="_blank" class="btn-grow"
                 href="https://app.vyhub.net?register=true">
            Get Started
          </v-btn>
        </v-card>
      </v-row>


    </div>
  </v-container>
</template>

<script setup>

const features = [
  {
    title: 'Rewards',
    subtitle: 'The plugin works by executing a command when a player buys a product.',
    icon: 'mdi-gift-outline',
  },
  {
    title: 'Discounts',
    subtitle: 'You can give player discounts on products.',
    icon: 'mdi-percent-outline',
  },
  {
    title: 'Buy for a Friend',
    subtitle: 'Players can buy products for their friends.',
    icon: 'mdi-account-multiple-outline',
  },
  {
    title: 'Over 20 Payment Methods',
    subtitle: 'You can accept Paypal, Stripe and Paysafecard payments. The money goes directly to your account.',
    icon: 'mdi-currency-usd',
  }
]

const games = [
  {
    title: 'Minecraft',
    img: 'https://cdn.vyhub.net/serverstore.io/minecraft.png',
  },
  {
    title: 'Garry\'s Mod',
    img: 'https://cdn.vyhub.net/serverstore.io/gmod.png',
    max_height: '100'
  },
  {
    title: 'Rust',
    img: 'https://cdn.vyhub.net/serverstore.io/rust.png',
  },
  {
    title: '7 Days to Die',
    img: 'https://cdn.vyhub.net/serverstore.io/7d2d.webp',
    max_height: '130'
  },
  {
    title: 'FiveM',
    img: 'https://cdn.vyhub.net/serverstore.io/fivem.png',
    max_height: '100'
  },
  {
    title: 'ARK Survival Ascended',
    img: 'https://cdn.vyhub.net/serverstore.io/asa.webp',
    max_height: '100'
  },
]

</script>

<style>
.grow {
  transition: all 0.2s ease-in-out;
}

.grow:hover {
  transform: scale(1.02);
}

.btn-grow {
  transition: all 0.2s ease-in-out;
}

.btn-grow:hover {
  transform: scale(1.1);
}

.game-card {
  transition: all 0.2s ease-in-out;
}

.game-card:hover {
  box-shadow: 0px 0px 15px rgba(33, 150, 243, .5);
}

.gradient-heading {
  background: -webkit-linear-gradient(rgb(187, 222, 251), rgba(33, 150, 243, 0.5));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.main-image {
  filter: brightness(75%);
  transition: all 0.2s ease-in-out;
}

.main-image:hover {
  filter: brightness(100%);
}
</style>

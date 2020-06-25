<template>
  <q-layout view="lHr lpR ffr">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Page One" />
        <q-route-tab to="/home" label="Page Two" />
        <q-route-tab to="/about" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
<div v-if="isDrizzleInitialized" id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <div class="section">
      <h2>Show the Accounts</h2>
      <drizzle-account units="Ether" :precision="2" />
    </div>

    <div class="section">
      <h2>Tutorial Token</h2>
      <TutorialToken />
    </div>

    <div class="section">
      <h2>Simple Storage</h2>
      <SimpleStorage />
    </div>

    <div class="section">
      <h2>Complex Storage</h2>
      <ComplexStorage />
    </div>
  </div>

  <div v-else>Loading...</div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
           <div class="section">
      <h2>Show the Accounts</h2>
      <drizzle-account units="Ether" :precision="2" />
    </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import TutorialToken from '@/contracts/TutorialToken'
import SimpleStorage from '@/contracts/SimpleStorage'
import ComplexStorage from '@/contracts/ComplexStorage'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    ComplexStorage,
    TutorialToken,
    SimpleStorage
  },
  
  computed: mapGetters('drizzle', ['isDrizzleInitialized']),
  
  data () {
    return {
      left: false
    }
  }
}
</script>
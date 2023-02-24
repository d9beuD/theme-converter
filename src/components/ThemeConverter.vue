<script setup lang="ts">
import { readApplePlistFromXMLString } from '@/utils/converter'
import { watch, ref } from 'vue'

const input = ref('')
const output = ref('')

watch(input, async (newInput) => {
  output.value = (await readApplePlistFromXMLString(newInput)).documentElement.innerHTML
})
</script>

<template>
  <div class="row mt-5">
    <div class="col">
      <textarea class="form-control" v-model="input" rows="20"></textarea>
    </div>
    <div class="col">
      <textarea class="form-control" v-model="output" rows="20" readonly></textarea>
    </div>
  </div>
</template>

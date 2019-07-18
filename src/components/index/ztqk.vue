<template>
  <div class="row row-s row-s-bg">
    <h2 class="title">总体情况</h2>
    <div class="gs-row">
      <ul class="row-1">
        <li>
            <p class='hright'>检测总批次<span class='org'>(批)</span></p>
            <div class="result">
              <span class="org">{{ jgtgdn.jczpc | Thounsands }}</span>
            </div>
        </li>
        <li>
            <p class='hright'>检测总批次<span class='org'>(批)</span></p>
            <div class="result">
              <span class="org">{{ jgtgdn.jczpc | Thounsands }}</span>
            </div>
        </li>
        <li>
            <p class='hright'>检测总批次<span class='org'>(批)</span></p>
            <div class="result">
              <span class="org">{{ jgtgdn.jczpc | Thounsands }}</span>
            </div>
        </li>
      </ul>
      <ul class="row-1">
        <li>
            <p class='hright'>检测总批次<span class='org'>(批)</span></p>
            <div class="result">
              <span class="org">{{ jgtgdn.jczpc | Thounsands }}</span>
            </div>
        </li>
        <li>
            <p class='hright'>检测总批次<span class='org'>(批)</span></p>
            <div class="result">
              <span class="org">{{ jgtgdn.jczpc | Thounsands }}</span>
            </div>
        </li>
        <li>
            <p class='hright'>检测总批次<span class='org'>(批)</span></p>
            <div class="result">
              <span class="org">{{ jgtgdn.jczpc | Thounsands }}</span>
            </div>
        </li>
      </ul>
      
    </div>
  </div>
</template>

<script>

export default {
  props:['areacode','areaname'],
  data() {
    return {
      jgtgdn: {
        jczpc: 130392,
        syssl:1353,
        jcypzl: 219032,
        ffbzsl: 93225,
        jczxc: 1382572,
        jcxmsl:325889
      }
    };
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
    @import '@/styles/qjx/ztqk.scss';
</style>

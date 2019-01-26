<template>
  <div>
    <ul class="tabs-header">
      <li
        class="tab-header"
        v-for="(tab, index) in tabList"
        v-bind="tab.dataAttrs"
        :key="index"
        :class="{'active': isActive(index), 'disabled': tab.disabled}"
        @click="select(index)"
      >
      
      <h2>{{ tab.title }}</h2>
      
      </li>
    </ul>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [],
      activeTabIndex: 0
    };
  },

  mounted() {
    this.select(0);
    this.activeTabIndex = this.getInitialActiveTab();

    this.$root.$on("select-tab", index => this.select(index));
  },

  methods: {
    isActive(index) {
      return this.activeTabIndex === index;
    },

    select(index) {
      const tab = this.tabList[index];
      if (!tab.isDisabled) {
        this.activeTabIndex = index;
      }

      this.$emit("changed", tab);
    },

    getInitialActiveTab() {
      const index = this.tabList.findIndex(tab => tab.active);
      return index === -1 ? 0 : index;
    }
  }
};
</script>


<style lang="less" scoped>

  @import (reference) "../../styles/components/tabs/_index.less";

  .tabs-header{
    #TabsHeader();
  }

</style>

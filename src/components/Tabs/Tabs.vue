<template>
  <div>
    <ul class="tabs-header">
      <li class="tab-header"
        v-for="(tab, index) in tabList"
        v-bind="tab.dataAttrs"
        :key="index"
        :class="{'active': isActive(index), 'disabled': tab.disabled}"
        @click="select(index)">
        {{ tab.title }}
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
@import (reference) "../../styles/main.less";

.tabs-header {
  width: 100%;
  background-color: @color-white;
  border-radius: 10em;

  box-sizing: border-box;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.tab-header {
  &.active {
    background-color: @color-black;
    color: white;
  }

  background-color: @color-white;
  padding: 0.35em;

  border-radius: 10em;

  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
}
</style>

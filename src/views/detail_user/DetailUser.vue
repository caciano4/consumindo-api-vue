<template>
  <div id="detail-user">
    <single-user-header />
    <card-single-user />
  </div>
</template>

<script>
import SingleUserHeader from "../../components/header/SingleUserHeader.vue";
import CardSingleUser from "../../components/card-user/CardSingleUser.vue";

export default {
  name: "DetailUser",
  components: {
    SingleUserHeader,
    CardSingleUser,
  },
};
</script>

<style>
@import "../../styles/global.css";

@keyframes form-animation-open {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 290px;
    opacity: 0.3;
  }
}

@keyframes form-animation-close {
  from {
    height: 290px;
    opacity: 0.3;
  }
  to {
    height: 0;
    opacity: 0;
  }
}
</style>

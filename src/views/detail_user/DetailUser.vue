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
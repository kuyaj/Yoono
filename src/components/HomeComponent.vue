<template>
  <div id="HomeComponent">
    <NavigatorComponent /> <AddComponent /> <DisplayComponent />
  </div>
</template>

<script>
import NavigatorComponent from "./NavigatorComponent";
import AddComponent from "./AddComponent";
import DisplayComponent from "./DisplayComponent";

export default {
  name: "HomeComponent",
  components: {
    NavigatorComponent,
    AddComponent,
    DisplayComponent
  }
};
</script>

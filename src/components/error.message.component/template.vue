<template lang="pug">
  .error-message(:class="shown ? 'error-message-shown' : ''")
    svg(version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve")
      circle(style="fill:#FFFFFF;" cx="25" cy="25" r="25")
      polyline(style="fill:none;stroke:#ec3b2f;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,34 25,25 34,16")
      polyline(style="fill:none;stroke:#ec3b2f;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,16 25,25 34,34")

    .message
      p {{ $t(titleLocalizationKey) }}
      span {{description}}

    .errors-count
      span {{countOfErrors}}
</template>
<style lang="scss" src="./style.scss" scoped></style>
(

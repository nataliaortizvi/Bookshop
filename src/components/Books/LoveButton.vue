<template>
  <button class="like-button" :class="{ liked: !noLike }" @click="likeClick">
      <div class="like-wrapper">
        <div class="ripple"></div>
        <svg class="heart" :class="{ liked: !noLike }">
          <path
            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
          ></path>
        </svg>
      </div>
    </button>
</template>

<script>
export default {
    methods: {
    likeClick() {
      this.noLike = !this.noLike;
    },
  },

  props: {
    notLike: Boolean,
  },

  data() {
    return {
      noLike: this.notLike,
    };
  },

}
</script>

<style lang="scss" scoped>
    @import "src/assets/main.scss";

    *,
  *:before,
  *:after {
    position: relative;
    box-sizing: border-box;
  }

  .like-button {
    position: absolute;
    z-index: 20;
    right: -10px;
    top: -10px;
    font-size: 6vmin;
    border: none;
    border-radius: 50%;
    background-color: $background;
    box-shadow: 0 0.3em 0.6em rgba($blackDark, 0.3);
    cursor: pointer;
  }

  .like-wrapper {
    display: grid;
    align-items: center;
    justify-content: center;

    > * {
      margin: auto;
      grid-area: 1 / 1;
    }
  }

  .heart {
    width: 0.5em;
    height: 0.5em;

    > path {
      stroke: $pink;
      stroke-width: 2;
      fill: transparent;
      transition: fill 0.5s cubic-bezier(0.7, 0, 0.3, 1);
    }
  }
  .liked > path {
    fill: $pink;
  }
  .ripple {
    height: 1em;
    width: 1em;
    border-radius: 50%;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0.4em solid $pink;
      border-radius: inherit;
      transform: scale(0);
    }
  }

  .liked .ripple {
    &:before {
      animation: ripple-out 0.5s cubic-bezier(0.7, 0, 0.3, 1);
      @keyframes ripple-out {
        from {
          transform: scale(0);
        }
        to {
          transform: scale(5);
        }
      }
    }
  }

</style>
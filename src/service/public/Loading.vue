<template>
  <div class="loading" v-if="LoadingShow">
    <div class="loading-content">
      <div class="la-ball-spin-clockwise la-2x">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p class="toast">
        <span>拼</span>
        <span>命</span>
        <span>加</span>
        <span>载</span>
        <span>中</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        LoadingShow: false
      }
    }
  }
</script>

<style lang="less" scoped>
  .loading {
    width: 1030px;
    height: 720px;
    // margin: 2.5em auto;
    // position: absolute;
    z-index: 99999;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -395px;
    margin-top: -360px;
    //  padding-left: 240px;

    .loading-content {
      background: #fff;
      // opacity: .8;

      width: 100%;
      height: 100%;
      text-align: center;
      .toast {
        text-align: center;
        padding-top: 430px;
        padding-left: 20px;
        color: #666;
        span {
          display: inline-block;
          animation-duration: 1s;
          animation-name: slow-wave;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
        span:nth-child(1) {
          animation-delay: -5.76s;
        }
        span:nth-child(2) {
          animation-delay: -5.52s;
        }
        span:nth-child(3) {
          animation-delay: -5.28s;
        }
        span:nth-child(4) {
          animation-delay: -5.04s;
        }
        span:nth-child(5) {
          animation-delay: -4.8s;
        }
        span:nth-child(6) {
          animation-delay: -4.32s;
        }
        span:nth-child(7) {
          animation-delay: -4.08s;
        }
        span:nth-child(8) {
          animation-delay: -3.84s;
        }
      }
    }
  }

  @keyframes slow-wave {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  .la-ball-spin-clockwise,
  .la-ball-spin-clockwise > div {
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .la-ball-spin-clockwise {
    display: block;
    font-size: 0;
    color: #fff;
  }

  .la-ball-spin-clockwise > div {
    display: inline-block;
    float: none;
    background-color: currentColor;
    border: 0 solid currentColor;
  }

  .la-ball-spin-clockwise {
    width: 32px;
    height: 32px;
  }

  .la-ball-spin-clockwise > div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-top: -4px;
    margin-left: -4px;
    border-radius: 100%;
    -webkit-animation: ball-spin-clockwise 1s infinite ease-in-out;
    -moz-animation: ball-spin-clockwise 1s infinite ease-in-out;
    -o-animation: ball-spin-clockwise 1s infinite ease-in-out;
    animation: ball-spin-clockwise 1s infinite ease-in-out;
  }

  .la-ball-spin-clockwise > div:nth-child(1) {
    top: 5%;
    left: 50%;
    -webkit-animation-delay: -0.875s;
    -moz-animation-delay: -0.875s;
    -o-animation-delay: -0.875s;
    animation-delay: -0.875s;
  }

  .la-ball-spin-clockwise > div:nth-child(2) {
    top: 18.1801948466%;
    left: 81.8198051534%;
    -webkit-animation-delay: -0.75s;
    -moz-animation-delay: -0.75s;
    -o-animation-delay: -0.75s;
    animation-delay: -0.75s;
  }

  .la-ball-spin-clockwise > div:nth-child(3) {
    top: 50%;
    left: 95%;
    -webkit-animation-delay: -0.625s;
    -moz-animation-delay: -0.625s;
    -o-animation-delay: -0.625s;
    animation-delay: -0.625s;
  }

  .la-ball-spin-clockwise > div:nth-child(4) {
    top: 81.8198051534%;
    left: 81.8198051534%;
    -webkit-animation-delay: -0.5s;
    -moz-animation-delay: -0.5s;
    -o-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }

  .la-ball-spin-clockwise > div:nth-child(5) {
    top: 94.9999999966%;
    left: 50.0000000005%;
    -webkit-animation-delay: -0.375s;
    -moz-animation-delay: -0.375s;
    -o-animation-delay: -0.375s;
    animation-delay: -0.375s;
  }

  .la-ball-spin-clockwise > div:nth-child(6) {
    top: 81.8198046966%;
    left: 18.1801949248%;
    -webkit-animation-delay: -0.25s;
    -moz-animation-delay: -0.25s;
    -o-animation-delay: -0.25s;
    animation-delay: -0.25s;
  }

  .la-ball-spin-clockwise > div:nth-child(7) {
    top: 49.9999750815%;
    left: 5.0000051215%;
    -webkit-animation-delay: -0.125s;
    -moz-animation-delay: -0.125s;
    -o-animation-delay: -0.125s;
    animation-delay: -0.125s;
  }

  .la-ball-spin-clockwise > div:nth-child(8) {
    top: 18.179464974%;
    left: 18.1803700518%;
    -webkit-animation-delay: 0s;
    -moz-animation-delay: 0s;
    -o-animation-delay: 0s;
    animation-delay: 0s;
  }

  .la-ball-spin-clockwise.la-sm {
    width: 16px;
    height: 16px;
  }

  .la-ball-spin-clockwise.la-sm > div {
    width: 4px;
    height: 4px;
    margin-top: -2px;
    margin-left: -2px;
  }

  .la-ball-spin-clockwise.la-2x {
    width: 64px;
    height: 64px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -32px;
    margin-top: -32px;
  }

  .la-ball-spin-clockwise.la-2x > div {
    width: 16px;
    height: 16px;
    margin-top: -8px;
    margin-left: -8px;
    background: #fd15034d;
  }

  .la-ball-spin-clockwise.la-3x {
    width: 96px;
    height: 96px;
  }

  .la-ball-spin-clockwise.la-3x > div {
    width: 24px;
    height: 24px;
    margin-top: -12px;
    margin-left: -12px;
  }

  /*
   * Animation
   */
  @-webkit-keyframes ball-spin-clockwise {
    0%,
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }

  @-moz-keyframes ball-spin-clockwise {
    0%,
    100% {
      opacity: 1;
      -moz-transform: scale(1);
      transform: scale(1);
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 0;
      -moz-transform: scale(0);
      transform: scale(0);
    }
  }

  @-o-keyframes ball-spin-clockwise {
    0%,
    100% {
      opacity: 1;
      -o-transform: scale(1);
      transform: scale(1);
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 0;
      -o-transform: scale(0);
      transform: scale(0);
    }
  }

  @keyframes ball-spin-clockwise {
    0%,
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 0;
      -webkit-transform: scale(0);
      -moz-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
    }
  }
</style>

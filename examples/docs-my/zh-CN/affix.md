## Affix 图钉

使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。

### 基础用法

:::demo 简单使用，当元素不可见时，直接固定在最顶端。

```html
<el-affix :target="target">
  <el-button>Fixed at the top</el-button>
</el-affix>

<script>
  export default {
    computed: {
      target() {
        return document.querySelector('.page-component__scroll > .el-scrollbar__wrap')
      }
    }
  }
</script>
```
:::

### 偏移

:::demo 当滚动到一定距离时再固定。

```html
<el-affix :target="target" :offset-top="100">
  <el-button class="demo-affix">Fixed at the top 100px from the top</el-button>
</el-affix>

<script>
  export default {
    computed: {
      target() {
        return document.querySelector('.page-component__scroll > .el-scrollbar__wrap')
      }
    }
  }
</script>
```
:::

### 固定在底部

:::demo 在屏幕下方固定。注意，`offset-top`和`offset-bottom`只可以设置一个，如果都设置，会使用offset-top。

```html
<el-affix :target="target" :offset-bottom="20">
  <el-button class="demo-affix">Fix at the bottom 20px</el-button>
</el-affix>

<script>
  export default {
    computed: {
      target() {
        return document.querySelector('.page-component__scroll > .el-scrollbar__wrap')
      }
    }
  }
</script>
```
:::

### 固定状态改变时的回调

:::demo 当固定状态发生改变时，会触发事件。

```html
<el-affix :target="target" :offset-top="150" @on-change="change">
  <el-button class="demo-affix">Fix the position at the top of 150px at the top</el-button>
</el-affix>

<script>
  export default {
    computed: {
      target() {
        return document.querySelector('.page-component__scroll > .el-scrollbar__wrap')
      }
    },
    methods: {
      change (status) {
        console.log(`Status: ${status}`);
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| target | 绑定滚动的元素 | dom | — | — |
| offset-top | 距离窗口顶部达到指定偏移量后触发 | number | — | 0 |
| offset-bottom | 距离窗口底部达到指定偏移量后触发 | number | — | — |
| use-capture | addEventListener 原生的useCapture选项 | boolean | — | false |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 在固定状态发生改变时触发 | true \| false |

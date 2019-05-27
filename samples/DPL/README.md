# 说明
这是一个演示使用DPL构建自定义界面的demo

## 如何运行demo
#### 1. 在DBP技能开发平台创建一个技能 如: 技能名称：DPL例子， 调用名称：测试
#### 2. 给新建技能创建demo中需要的意图，demo中一共有6个意图, 具体配置可以如下：
| 意图中文名        | 意图标识名    |常用表达|
| :--------:       | :-----:   | :----: |
| 图片文本      |     dpl_demo1      |  图片文本  |
| 长文本      |     dpl_demo2     |  长文本  |
| 短文本      |     dpl_demo3      |  短文本  |
| 右图详情      |     dpl_demo4      |  右图  |
| 左图详情      |     dpl_demo5      |  左图详情  |
| 横向列表      |     dpl_demo6      |  横向列表  |

#### 3. 运行demo: npm install &&  node index.js
#### 4. 将demo服务地址配置到技能WebService下的部署地址处
#### 5. 在小度在家或者小度在家1S上绑定自己的开发者账户，进行如下操作：
     1.打开技能调试模式 2.打开测试 3. query：图片文本／长文本／短文本／右图／左图详情／横向列表

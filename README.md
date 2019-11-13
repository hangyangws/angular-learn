# Angular 学习

## DEMO URL

https://stackblitz.com/edit/angular-puhhtg?file=src%2Fapp%2Fproduct-list%2Fproduct-list.component.html

## 结构型指令

> 任何带有 * 的指令都是结构型指令

- *ngFor
- *ngIf
  *ngif="value; eles ng-template-name"

## 插值表达式

`{{}}`

把属性值渲染为文本

## 属性绑定语法

`[]`

允许在模版表达式中使用属性值

## 事件绑定语法

`()`

把事件名称绑定在圆括号

## @Input

@Input 装饰器指出其属性值是从组件的父组件中传入的，类似于 React 的 props

## @Output

@Outut 装饰器，修饰属性为输出属性

**这个点很困惑，设计模式很奇怪**


## ActivatedRoute

ActivatedRoute 专门用于由 Angular 路由器加载的每个路由组件。它包含关于该路由，路由参数以及与该路由关联的其它数据的信息。

## 过滤器

currency：格式化数字为货币格式

## 注意

private 属性要放在 constructor 参数里面

---

# REAMDE DOC

## useage

- build：in src folder：`ng build --prod`
- local server：`ng serve --open`

## online url

https://stackblitz.com/edit/angular-puhhtg

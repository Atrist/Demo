// 手写  promise
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function myPromise() {
  // 保存初始状态
  let self = this;
  // 初始化状态
  this.state = PENDING;
  // 用于保存 resolve 或者 rejected 传入的值
}

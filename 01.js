let a = [
    { time: 1 },
    { time: 5 },
    { time: 8 },
    { time: 11 },
    { time: 16 },
    { time: 17 },
    { time: 29 },
    { time: 34 },
    { time: 39 },
  ],
  time_line = [3, 7, 12, 19, 31, 40];

let p1 = 0,
  p2 = 0;

let result = [];
while (p1 < time_line.length) {
  let pre = Math.abs(time_line[p1] - a[p2].time);
  let next;
  a[p2 + 1]
    ? (next = Math.abs(time_line[p1] - a[p2 + 1].time))
    : (next = Number.MAX_VALUE);
  if (pre < next) {
    result.push({ line: time_line[p1], time: a[p2].time });
    p1++;
  }
  p2++;
}

console.log(result);

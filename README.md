# worker_js

- worker_threadsを使用したマルチスレッドプログラミング
- CPU高負荷のときに、CPU使用率を分散する

### demo
- シングルスレッドで処理した時
```
$ node main_single.js 
task#1: 2033.962ms
task#2: 640.179ms
task#3: 638.706ms
total: 3323.092ms
```

- マルチスレッドで処理した時
```
$ node main_multiThread.js 
worker3: 2053.728ms
worker1: 2056.498ms
worker2: 2059.567ms
total: 2107.441ms
```

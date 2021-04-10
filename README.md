```
$ yarn
```

```
$ yarn build
yarn run v1.22.5
$ webpack
assets by status 757 bytes [cached] 1 asset
./src/index.js 39 bytes [built] [code generated] [1 error]

ERROR in ./src/index.js
Module build failed (from ./node_modules/thread-loader/dist/cjs.js):
Thread Loader (Worker 0)
this.getOptions is not a function
    at PoolWorker.fromErrorObj (/home/qnighy/workdir/thread-loader-issue-106/node_modules/thread-loader/dist/WorkerPool.js:344:12)
    at /home/qnighy/workdir/thread-loader-issue-106/node_modules/thread-loader/dist/WorkerPool.js:217:29
    at mapSeries (/home/qnighy/workdir/thread-loader-issue-106/node_modules/neo-async/async.js:3625:14)
    at PoolWorker.onWorkerMessage (/home/qnighy/workdir/thread-loader-issue-106/node_modules/thread-loader/dist/WorkerPool.js:171:34)
    at Object.loader (/home/qnighy/workdir/thread-loader-issue-106/node_modules/source-map-loader/dist/index.js:21:24)

webpack 5.31.2 compiled with 1 error in 232 ms
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

# unasm.ts web

## building

1. clone the monorepo
```bash
git clone --recurse-submodules -j8 git@github.com:unasmlang/monorepo.git
```
2. cd into the web dir
```bash
cd ts/web
```
3. setup [libunasm](https://github.com/unasmlang/libunasm-ts)
```bash
pnpm update-lang
```
4. build
```bash
pnpm build
```
5. done - output files are in dist/

#!/usr/bin/env node
import {globby} from 'globby'
import compiler from './css-compiler.mjs'
import {dirname, join} from 'path'

import fsExtra from 'fs-extra'
const {mkdirp, readFile, writeFile} = fsExtra


const inDir = 'src'
const outDir = 'css'
const bundleNames = {
  'index.scss': 'outpost--css'
}

const files = await globby([`${inDir}/**/index.scss`])
await mkdirp(outDir)
const inPattern = new RegExp(`^${inDir}/`)
const tasks = files.map(async from => {
  const path = from.replace(inPattern, '')
  const name = bundleNames[path] || dirname(path).replace(/\//g, '-')

  const to = join(outDir, `${name}.css`)

  const result = await compiler(await readFile(from, 'utf8'), {from, to})

  await Promise.all([
    writeFile(to, result.css, 'utf8'),
  ])
})

await Promise.all(tasks)

/*
 * index.test.js
 */
 
// Standard packages
const path = require('path')

// Main packages
const { utils } = require('@microbs.io/core')

describe('microbs app standards', () => {

  test('package.json exists', () => {
    const json = utils.loadJson(path.join(process.cwd(), 'package.json'))
    expect(json).toBeTruthy()
  })

  test('package.json declares a valid "name"', () => {
    const json = utils.loadJson(path.join(process.cwd(), 'package.json'))
    expect(json.name).toMatch(/^\@microbs\.io\/app\-[a-z0-9\-]+$/)
  })

  test('package.json declares "license"', () => {
    const json = utils.loadJson(path.join(process.cwd(), 'package.json'))
    expect(json.license).toBeTruthy()
  })

  test('package.json declares "version"', () => {
    const json = utils.loadJson(path.join(process.cwd(), 'package.json'))
    expect(json.version).toBeTruthy()
  })

  test('package.json aligns "name" and "repository.url"', () => {
    const json = utils.loadJson(path.join(process.cwd(), 'package.json'))
    const name = json.name.split('@microbs.io/')[1]
    expect(json.repository.url).toBe(`https://github.com/microbs-io/microbs-${name}.git`)
  })
  
  test('package.json declares "microbs" in "keywords"', () => {
    const json = utils.loadJson(path.join(process.cwd(), 'package.json'))
    expect(json.keywords.includes('microbs')).toBe(true)
  })
  
  test('package.json declares "app" in "keywords"', () => {
    const json = utils.loadJson(path.join(process.cwd(), 'package.json'))
    expect(json.keywords.includes('app')).toBe(true)
  })

  test('package-lock.json exists', () => {
    const json = utils.loadJson(path.join(process.cwd(), 'package-lock.json'))
    expect(json).toBeTruthy()
  })

  test('package.json and package-lock.json have same version', () => {
    const pkg = utils.loadJson(path.join(process.cwd(), 'package.json'))
    const pkgLock = utils.loadJson(path.join(process.cwd(), 'package-lock.json'))
    expect(pkg.version).toBe(pkgLock.version)
  })
})

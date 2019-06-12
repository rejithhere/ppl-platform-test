const chai = require('chai')
const expect = chai.expect
const code = require('../../components/version.js')

describe('version-unit', () => {
  it("should return {'version': 1.0.0}", () => {
    const actual = JSON.stringify(code.version())
    expect(actual).to.equal(JSON.stringify({ 'version': 1.0 }))
  })
})

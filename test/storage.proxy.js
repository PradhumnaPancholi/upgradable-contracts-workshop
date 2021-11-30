const {expect} = require('chai')

let Storage
let storage
describe('Storage proxy', function() {
    beforeEach(async function(){
        Storage = await ethers.getContractFactory('Storage')
        storage = await upgrades.deployProxy(Storage, [100], { initializer: 'setValue'});
    })
    it('Retrieve the value initialized by proxy', async function() {
        expect((await storage.getValue()).toString()).to.equal('100')
    })
})
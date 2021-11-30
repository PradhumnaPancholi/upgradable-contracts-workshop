async function main() {
    const Storage = await ethers.getContractFactory('Storage')
    console.log('Hold on... deploying proxy, storage implementation, and proxy admin')
    const storageProxy = await upgrades.deployProxy(Storage, [100], {initializer: 'setValue'})
    console.log('StorageProxy deployed on:', storageProxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error('Error:', error)
        process.exit(1)
    })
async function main() {
    const StorageV2 = await ethers.getContractFactory('StorageV2')
    const storagev2 = await upgrades.upgradeProxy('0x7273Ea8792f2a3f5372A107dDC7fdc1967d1fEdb', StorageV2)
    console.log('Storage v2 deployed on:', storagev2.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error('Error:', error)
        process.exit(1)
    })
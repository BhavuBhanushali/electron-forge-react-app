const { startStoreScp } = require("dicom-dimse-native");
const path = require('path')

const scpOptions = {
    source: {
        aet: "MY_AET",
        ip: "172.20.10.3",
        port: 5678,
    },
    peers: [
        {
            aet: "TARGET_AET",
            ip: "127.0.0.1",
            port: 9999,
        },
    ],
    storagePath: path.join(__dirname+ "/"),
    writeFile: true,
    netTransferPrefer: "1.2.840.10008.1.2.4.80", // preferred network transfer syntax (accepted ts - additional to default ts)
    netTransferPropose: "1.2.840.10008.1.2.4.80", // proposed network transfer syntax (for outgoing associations - additional to default ts)
    writeTransfer: "", // write transfer syntax (storage only, recompress on the fly), keep empty (or leave out) to store ts as original
    permissive: false, // if true any AET can perform FIND,GET and STORE
    verbose: true,
    storeOnly: true, // do not provide FindSCP and MoveSCP (requires db) only StoreSCP
};

const output = startStoreScp(scpOptions, (result) => {
    console.log(JSON.parse(result));
    return JSON.parse(result)
})
module.exports = output
import { useState, useEffect } from "react"
import { web3 } from '../lib/web3';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import ENS, { getEnsAddress } from '@ensdomains/ensjs'

const ens = new ENS({
    provider:  web3.currentProvider,
    ensAddress: getEnsAddress('1')
})

const EnsName = function ({ address }) {
  // TODO!
  // check for ENS domain
  // get image if it has one
    const [name, setName] = useState()

    useEffect(async function () {
        const n = await ens.getName(address)
        if (n.name) {
            setName(n.name)
        }
    }, [address])


  let formattedAddress = address.substr(0, 8) + '...' + address.substr(-4)

    let icon = (
        <Jazzicon diameter={32} seed={jsNumberForAddress(address)} />
    )

  return (
    <div className="eth-name">
      <div className="icon">
          {icon}
      </div>

      <div className="name">
        <span className="primary">
          {name ? name : formattedAddress}
        </span>
        <span className="secondary">
          {name ? formattedAddress : ''}
        </span>
      </div>
     
    </div>
  )
}

export default EnsName
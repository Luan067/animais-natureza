export default function initFetchBtc() {
  const btcValue = document.querySelector(".btc-valor");

  // async function fetchBTC() {
  //   const btcResponse = await fetch('https://blockchain.info/ticker')
  //   const btcJSON = await btcResponse.json()
  //   btcValue.innerText = (50 / btcJSON.BRL.last).toFixed(6)
  // }
  // fetchBTC()

  fetch("https://blockchain.info/ticker")
    .then((r) => r.json())
    .then((btc) => (btcValue.innerText = (150 / btc.BRL.last).toFixed(5)))
    .catch((erro) => {
      console.log(Error(erro));
    });
}

function contentAnimation(){
  var t1 = gsap.timeline();
  t1.to(".d", {duration: 1, transformOrigin: "bottom", rotate: "5deg", easing: "sine.inOut", repeat: -1, yoyo: true}, "-=1")
  t1.to(".i", {duration: 1, transformOrigin: "bottom", rotate: "5deg", easing: "sine.inOut", repeat: -1, yoyo: true}, "-=.9")
  t1.to(".c", {duration: 1,  transformOrigin: "bottom", rotate: "5deg", easing: "sine.inOut", repeat: -1, yoyo: true}, "-=.8")
  t1.to(".k", {duration: 1, transformOrigin: "bottom", rotate: "5deg", easing: "sine.inOut", repeat: -1, yoyo: true}, "-=.7")
  t1.to(".ii", {duration: 1,  transformOrigin: "bottom", rotate: "5deg", easing: "sine.inOut", repeat: -1, yoyo: true}, "-=.6")
  t1.to(".s", {duration: 1, transformOrigin: "bottom", rotate: "5deg", easing: "sine.inOut", repeat: -1, yoyo: true}, "-=.5")
  t1.to(".h", {duration: 1,  transformOrigin: "bottom", rotate: "5deg", easing: "sine.inOut", repeat: -1, yoyo: true}, "-=.4")
  // t1.to(".d", {duration: 1, y: -10, easing: "sine.inOut", repeat: -1, yoyo: true}, "-=1")
  // t1.to(".i", {duration: 1, y: -10, easing: "sine.inOut", repeat: -1, yoyo: true}, "-=.9")
  // t1.to(".c", {duration: 1, y: -10, easing: "sine.inOut", repeat: -1, yoyo: true}, "-=.8")
  // t1.to(".k", {duration: 1, y: -10, easing: "sine.inOut", repeat: -1, yoyo: true}, "-=.7")
  // t1.to(".ii", {duration: 1, y: -10, easing: "sine.inOut", repeat: -1, yoyo: true}, "-=.6")
  // t1.to(".s", {duration: 1, y: -10, easing: "sine.inOut", repeat: -1, yoyo: true}, "-=.5")
  // t1.to(".h", {duration: 1, y: -10, easing: "sine.inOut", repeat: -1, yoyo: true}, "-=.4")
}

addEventListener("load", () =>{
  contentAnimation();
});
document.querySelector('.connect-btn').addEventListener('click', event => {
    let account;
    ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
      account = accounts[0];
      console.log(account);

      ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']}).then(result => {
        console.log(result);
        let wei = parseInt(result,16);
        let balance = wei / (10**18);
        console.log(balance + " ETH");
      });
    });
  });
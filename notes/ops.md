# ops

## webite

We host the website on [cloudflare pages](https://dash.cloudflare.com/a3ed50a4963182c8c57eb1802e6b6321/pages/view/map) (in Kai's account).

We've got the github cloudflare app configured to trigger the `yarn build` command on the `main` branch inside the `website` folder (this is all configured in the cloudflare pages dashboard).

The domain encproject.com is registered with ghandi (in Kai's account).

The DNS is setup to use cloudflare's nameservers and we've configured the pages project to auto-configure the DNS records to point at the cloudflare pages IP.

We've added a [redirect rule](https://dash.cloudflare.com/a3ed50a4963182c8c57eb1802e6b6321/encproject.com/rules/redirect-rules/8430f3513dc34c1a804e078dacb7fcbc) that means any traffic to the base domain will end up at www.encproject.com
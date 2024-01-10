# Sphinx Integration Guide

Follow these instructions to deploy with Sphinx on several testnets. It should take you 5 minutes to finish.

Before we begin, a couple notes:
* We don't currently support Scroll, but we'd happily support it if you want.
* The diff of this integration is [here](https://github.com/sam-goldman/flood-contracts/pull/1/files).

The main difference is that your deployment is now sent from a Gnosis Safe that you own. We've removed the logic that broadcasts your deployment from a funded EOA because it's not necessary with Sphinx. If you have any questions, check out our [GitHub page](https://github.com/sphinx-labs/sphinx). We're also happy to answer any questions.

## Deployment Instructions

1. Clone this fork of your repo:
```
git clone git@github.com:sam-goldman/flood-contracts.git
```

2. 
```
cd flood-contracts
```

3. Update Foundry, then install packages:
```
yarn install && yarn sphinx install
```

4. Sign up for Sphinx using this [invite link](https://www.sphinx.dev/signup?code=clkskjgxa0005cbzjmvgfnlrw).

5. In Sphinx's website, go to "Options" -> "API Credentials". You'll need these credentials in the next couple of steps.

6. Open `script/BetterScript.s.sol`. The `setUp` function contains your config options. Update the following fields:\
    a. In `sphinxConfig.orgId`, add the Organization ID from Sphinx's website. This is a public field, so you don't need to keep it secret.\
    b. In `sphinxConfig.owners`, add the addresses of the account(s) that will own your project. (Specifically, they'll own the Gnosis Safe that executes your deployment).

7. Create a `.env` file. Then, copy and paste the variables below, filling in their values. (The
   `SPHINX_API_KEY` is in the Sphinx UI under "Options" -> "API Credentials").
```
ZONE_ADMIN_ADDRESS=
SPHINX_API_KEY=
INFURA_API_KEY=
ALCHEMY_API_KEY=
```

8. You're done with the configuration steps! Run `forge build` to make sure your scripts compile.

9. Next, propose `Zone.s.sol` on the networks in `sphinxConfig.testnets`:
```
FOUNDRY_PROFILE=deploy npx sphinx propose script/Zone.s.sol --networks testnets
```

10. When the proposal is finished, go to the [Sphinx UI](https://sphinx.dev) to approve the deployment. After you approve it, you can monitor the deployment's status in the UI while it's executed.

11. (Optional) If you'd also like to propose `FloodPlain.s.sol`, run the same `propose` command in step 9 targeting the new script.
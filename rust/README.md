# solana-trader-proto rust crate
## Publishing
### Setup

We use the `bx-circle-ci` credentials for managing our [crates.io](crates.io) account. To login to [crates.io](crates.io), logout of your github account and log back in to github with the `bx-circle-ci` credentials from `1Password`. You can then navigate to [crates.io](crates.io) and select `login with Github`.

The [crates.io](crates.io) site is where we manage API tokens for publishing our rust crates. You can navigate to the `bx-circle-ci` credentials page in `1Password` to get the latest [crates.io](crates.io) token.

### Steps

1. Start with a clean pull of the repo you would like to publish.
    1. solana-trader-proto
    2. solana-trader-client-rust
2. Run `cargo publish --dry-run` to see if you will have any issues publishing.
    1. If you get an error mentioning files have not been checked into git and suggesting to use `--allow-dirty`, be sure to track down the folder/files that are causing the error and resolve before proceeding.
3. If `cargo publish --dry-run` is successful, run `cargo publish --token <api token>`.
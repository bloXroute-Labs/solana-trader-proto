# Solana-Trader-Python-Proto package

# fixing compilation issues in latest proto generated files

    fix the 3rd arguments in methods below
    
    async def post_cancel_by_client_order_id(
        self,
        *,
        post_cancel_by_client_order_id_request: "PostCancelByClientOrderIdRequest",

    async def get_order_by_id(
        self,
        *,
        get_order_by_id_request: "GetOrderByIdRequest",

    async def post_settle_pn_ls(
        self,
        *,
        post_settle_pn_ls_request: "PostSettlePnLsRequest",

    async def post_settle_pnl(
        self,
        *,
        post_settle_pnl_request: "PostSettlePnlRequest",

# publishing solana-trader-python-proto package
    python3 -m pip install --user --upgrade twine

    upgrade the version in pyproject.toml
    cd python
    rm -rf dist/ && python3 -m build

    you can install package locally before uploading it to the pypi
    pip install dist/bxsolana-trader-proto-0.0.24.tar.gz

    python3 -m twine upload --repository pypi dist/*


#issues
    if you encounter any issues related to the above python3 commands reffer to this page for steps to setup your local machine 
    [https://packaging.python.org/en/latest/tutorials/packaging-projects/](https://packaging.python.org/en/latest/tutorials/packaging-projects/)
# Solana Trader Protobuf

Protobuf definitions for bloXroute's Trader API service.

# publishing solana-trader-python-proto package
    upgrade the version in pyproject.toml
    cd python
    rm -rf dist/
    python3 -m build
    python3 -m twine upload --repository pypi dist/*
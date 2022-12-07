
# Solana-Trader-Python-Proto package

# publishing solana-trader-python-proto package
    python3 -m pip install --user --upgrade twine

    upgrade the version in pyproject.toml
    cd python
    rm -rf dist/
    python3 -m build
    python3 -m twine upload --repository pypi dist/*


# Solana-Trader-Python-Proto package

# publishing solana-trader-python-proto package
    python3 -m pip install --user --upgrade twine

    upgrade the version in pyproject.toml
    cd python
    rm -rf dist/
    python3 -m build

    you can install package locally before uploading it to the pypi
    pip install dist/bxsolana-trader-proto-0.0.10.tar.gz

    python3 -m twine upload --repository pypi dist/*


#issues
    if you encounter any issues related to the above python3 commands reffer to this page for steps to setup your local machine 
    [https://packaging.python.org/en/latest/tutorials/packaging-projects/](https://packaging.python.org/en/latest/tutorials/packaging-projects/)